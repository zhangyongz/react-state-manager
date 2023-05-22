import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextView from './views/ContextView';
import ReduxView from './views/ReduxView';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './reduxStore';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/context",
    element: <ContextView />,
  },
  {
    path: "/redux",
    element: <ReduxView />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
