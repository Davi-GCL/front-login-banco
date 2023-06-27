import axios from "axios";

const api = axios.create({
    baseURL: `https://localhost:7044/`
});

export default api;