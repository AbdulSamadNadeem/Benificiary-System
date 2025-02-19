import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectRoutes = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (!token) {
      navigate("/saylani/signin");
    }
  }, [token, navigate]);

  return token ? <>{children}</> : null; 
};

export default ProtectRoutes;
