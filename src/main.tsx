import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import { ProductList } from './pages/productList.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <ProductList />,
    },
   
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
       <RouterProvider router={router} />
    </React.StrictMode>,
);
