import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import ContextView from "./views/ContextView";
import ReduxView from "./views/ReduxView/index";
// import ReduxView from "./views/ReduxView/index2";
import MobxView from "./views/MobxView";
import RecoilView from "./views/RecoilView";
import ZustandView from "./views/ZustandView";

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
  {
    path: "/mobx",
    element: <MobxView />,
  },
  {
    path: "/recoil",
    element: <RecoilView />,
  },
  {
    path: "/zustand",
    element: <ZustandView />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
  // </React.StrictMode>
);
