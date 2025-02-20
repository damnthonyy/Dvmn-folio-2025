import { RouterProvider } from 'react-router-dom';
import "./assets/styles/main.scss";
import Router from "./router/Router";

export const App: React.FC = () => {
  return <RouterProvider router={Router} />
};
