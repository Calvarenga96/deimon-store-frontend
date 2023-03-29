import axios from "axios";

const enviroment = process.env.NEXT_PUBLIC_ENV;

const baseURL =
    enviroment === "local"
        ? "http://localhost:8000/api/v1"
        : "https://deimon.com.py/api/v1";

const axiosClient = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        Accept: "application/json",
    },
});

const beforeRequestHandler = async (request) => {
    const url =
        enviroment === "local"
            ? "http://localhost:8000"
            : "https://deimon.com.py";

    if (request.url === "/login") {
        await axios.get(`${url}/sanctum/csrf-cookie`, {
            withCredentials: true,
        });
    }

    return request;
};

const errorRequestHandler = (error) => {
    return Promise.reject(error);
};

axiosClient.interceptors.request.use(beforeRequestHandler, errorRequestHandler);

export default axiosClient;
