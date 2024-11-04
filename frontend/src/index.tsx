import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import { CreateModalContextProvider } from 'src/components/side-menu/create-modal/create-modal.context';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CreateModalContextProvider>
      <App />
    </CreateModalContextProvider>
  </StrictMode>,
);
