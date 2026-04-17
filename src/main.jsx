import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Navbar from "./component/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Footer from "./component/Footer/Footer.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import TimeLine from "./Pages/Timeline/TimeLine.jsx";



const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/Timeline",
        element: <TimeLine></TimeLine>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
