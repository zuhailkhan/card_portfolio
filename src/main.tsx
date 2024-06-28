import ReactDOM from 'react-dom/client';
import '@/styles/main.scss';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import React from 'react';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
