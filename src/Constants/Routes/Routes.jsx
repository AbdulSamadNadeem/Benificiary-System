import React, { Children } from "react";
import Home from "../../Pages/App/Home";
import Signup from "../../Pages/Auth/Signup";
import Reception from "../../Pages/App/Reception";
import Registration from "../../Pages/App/Registration";
import Coupon from "../../Pages/App/Coupon";
import Dashboard from "../../Pages/App/Dashboard";
import Sidebar from "../../Components/Sidebar/Sidebar";
import AllStats from "../../Pages/Admin/AllStats";
import Health from "../../Pages/Admin/Analytics/Health";
import Education from "../../Pages/Admin/Analytics/Education";
import Food from "../../Pages/Admin/Analytics/Food";
import Logout from "../../Pages/Auth/Logout";
import Signin from "../../Pages/Auth/Signin";
import Adminlogin from "../../Pages/Auth/Adminlogin";
import ProtectRoutes from "../../Components/ProtectRoutes/ProtectRoutes";

export const AppRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/saylani/signup",
    element: <Signup />,
  },
  {
    path: "/saylani/signin",
    element: <Signin />,
  },
  {
    path: "/saylani/adminlogin",
    element: <Adminlogin />,
  },
  {
    path: "/saylani/reception",
    element: <ProtectRoutes><Reception /></ProtectRoutes>,
  },
  {
    path: "/saylani/forms",
    element: (
      <ProtectRoutes>
        <Registration />
      </ProtectRoutes>
    ),
  },
  {
    path: "/saylani/coupon",
    element: (
      <ProtectRoutes>
        <Coupon />
      </ProtectRoutes>
    ),
  },
  {
    path: "/saylani/dashboard",
    element: (
      <ProtectRoutes>
        <Sidebar />
      </ProtectRoutes>
    ),
    children: [
      {
        path: "",
        element: (
          <ProtectRoutes>
            <Dashboard />
          </ProtectRoutes>
        ),
      },
      {
        path: "health",
        element: (
          <ProtectRoutes>
            <Health />
          </ProtectRoutes>
        ),
      },
      {
        path: "education",
        element: (
          <ProtectRoutes>
            <Education />
          </ProtectRoutes>
        ),
      },
      {
        path: "food",
        element: (
          <ProtectRoutes>
            <Food />
          </ProtectRoutes>
        ),
      },
      {
        path: "stats",
        element: (
          <ProtectRoutes>
            <AllStats />
          </ProtectRoutes>
        ),
      },
      {
        path: "logout",
        element: (
          <ProtectRoutes>
            <Logout />
          </ProtectRoutes>
        ),
      },
    ],
  },
];
