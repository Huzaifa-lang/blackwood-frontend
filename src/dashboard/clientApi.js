import axios from "axios";
import { auth } from "../dashboard/Firebase";

const apiClient = axios.create({
  baseURL: "http://localhost:5000", // Change to your backend URL
});

// Add Firebase token to every request
apiClient.interceptors.request.use(async (config) => {
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
