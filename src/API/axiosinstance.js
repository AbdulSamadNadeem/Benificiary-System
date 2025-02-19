import axios from "axios";

const ApiInstance = axios.create({
    baseURL: "https://benificary-system-backend.vercel.app/saylani",
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 10000,
  });
  ApiInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token')  
      if(token){
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  ApiInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      if (err.response) {
        console.log("unauthorized");
      }
      return Promise.reject(err);
    }
  );
  export default ApiInstance;
