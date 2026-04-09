import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Checkout from "../pages/Checkout/Checkout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "login",
            element:<Login></Login>  
        },
         {
            path: "signup",
            element: < Signup></Signup>
        },
         {
    path: "/checkout/:id",
    element: <Checkout />,
    loader: async ({ params }) => {
      if (!params.id) {
        throw new Error("Invalid Service ID");
      }
      return fetch(`http://localhost:5000/services/${params.id}`);
    }
  }
    ]
  },
]);
export  default router;