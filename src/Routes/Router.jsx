import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import MyNewsLayout from "../Layout/MyNewsLayout";
import News from "../Pages/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Register from "../Pages/Login/Register";
import Login from "../Pages/Login/Login";
import PrivateRouts from "./PrivateRouts";
import Terms from "../Pages/Shared/Terms/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "terms",
        element: <Terms></Terms>,
      },
    ],
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <MyNewsLayout></MyNewsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRouts>
            <News></News>
          </PrivateRouts>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default router;
