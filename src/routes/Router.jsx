import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";


import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "../components/PrivateRoute";
import ForgotPassword from "../components/ForgotPassword";
import NotFound from "../NotFound";
import Home from "../components/Home";
import AddVisa from "../components/AddVisa";
import AllVisaPage from "../components/AllVisaPage";
import VisaDetails from "../components/VisaDetails";
import VisaApplication from "../components/VisaApplication";
import AddedVisas from "../components/MyAddedVisas";

const Router=createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('https://visa-navigator-server-eta.vercel.app/add-visa')
            },
            {
                path:"/add-visa",
                element:<AddVisa></AddVisa>
            },
            {
                path:"/all-visas",
                element:<AllVisaPage></AllVisaPage>,
                loader:()=>fetch('https://visa-navigator-server-eta.vercel.app/add-visa')
            },
            {
                path: "/visa-details/:id",
                element: (
                  <PrivateRoute>
                    <VisaDetails />
                  </PrivateRoute>
                ),
                loader: ({ params }) =>
                  fetch(`https://visa-navigator-server-eta.vercel.app/add-visa/${params.id}`),
              },
              {
                path:'/visa-application',
                element:<PrivateRoute>
                    <VisaApplication></VisaApplication>
                </PrivateRoute>
              },
              {
                path: "/my-added-visas",
                element: <PrivateRoute><AddedVisas /></PrivateRoute>,
              },
           
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register> 
            },
            {
                path:"/forgot-password",
                element:<ForgotPassword></ForgotPassword>
            }
        ]
    }
    ,
    {
        path:"*",
        element:<NotFound></NotFound>

    }
   
]);
export default Router;
