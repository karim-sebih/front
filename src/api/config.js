import axios from "axios";

const instance = axios.create({
  baseURL: "https://prefertile-intergradational-elane.ngrok-free.dev/",
  timeout: 10000,
  headers: {
    'ngrok-skip-browser-warning': 'true'
  },
});
instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");

    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.log("une erreur est survenue:", error);
    return Promise.reject(new Error(error));
  },
);

export default instance;
