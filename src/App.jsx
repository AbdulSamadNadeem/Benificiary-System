import React from "react";
import { AppRoutes } from "./Constants/Routes/Routes";
import { Route, Routes } from "react-router";
import { Toaster } from 'react-hot-toast';
const App = () => {
  const RenderRoutes = (routes) => {
    return routes.map((route, index) => (
      <Route key={index} path={route.path} element={route.element}>
        {route.children && RenderRoutes(route.children)} 
      </Route>
    ));
  };
  return (
    <div>
      <>
      <Toaster/>
     <Routes>{RenderRoutes(AppRoutes)}</Routes>;
      </>
    </div>
  );
};
export default App;
