type ApiClientOptions = {
  baseUrl: string; // APIのベースURL
  headers?: Record<string, string>; // 共通ヘッダー
};

class ApiClient {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor({ baseUrl, headers = {} }: ApiClientOptions) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  async request<T>(url: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(`${this.baseUrl}${url}`, {
      ...options,
      headers: {
        ...this.headers,
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'API request failed');
    }

    return response.json();
  }

  get<T>(url: string, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(url, { method: 'GET', headers });
  }

  post<T>(url: string, body?: unknown, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    });
  }

  put<T>(url: string, body?: unknown, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    });
  }

  delete<T>(url: string, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(url, { method: 'DELETE', headers });
  }
}

// APIクライアントのインスタンス作成
export const apiClient = new ApiClient({
  baseUrl: 'https://api.example.com',
});
