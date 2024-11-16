import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { apiClient } from 'src/util/api-client';

export const useApiClient = {
  useGet: <T>(
    key: string, // React Queryのキー
    url: string, // APIエンドポイント
    options?: UseQueryOptions<T>, // オプション
  ) => {
    return useQuery<T>({
      queryKey: [key],
      queryFn: () => apiClient.get<T>(url),
      retry: 3, // 失敗時に再試行する回数
      staleTime: 1000 * 60 * 5, // データが古くなるまでの時間
      ...options,
    });
  },

  usePost: <T, U>(url: string, options?: UseMutationOptions<T, unknown, U, unknown>) => {
    return useMutation<T, unknown, U, unknown>({
      mutationFn: (data: U) => apiClient.post<T>(url, data),
      ...options,
    });
  },

  usePut: <T, U>(url: string, options?: UseMutationOptions<T, unknown, U>) => {
    return useMutation<T, unknown, U, unknown>({
      mutationFn: (data: U) => apiClient.put<T>(url, data),
      ...options,
    });
  },

  useDelete: <T>(url: string, options?: UseMutationOptions<T, unknown, void>) => {
    return useMutation<T, unknown, void, unknown>({
      mutationFn: () => apiClient.delete<T>(url),
      ...options,
    });
  },
};
