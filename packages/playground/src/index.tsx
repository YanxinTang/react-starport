import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './pages/Index';
import MyComponentDetail from './pages/MyComonentDetail';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Index />,
        },
        {
          path: '/:idx',
          element: <MyComponentDetail />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  }
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

  // <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Add transiton style after the first painting to avoid flash
requestAnimationFrame(() => {
  // document.documentElement.classList.add("transition-all");
});
