import axios from "axios";

const url: string = import.meta.env.VITE_APP_URL;
const key: string = import.meta.env.VITE_APP_API_KEY;

const axiosInstance = axios.create({
  baseURL: url,
  params: {
    api_key: key,
  },
});

export default axiosInstance;
