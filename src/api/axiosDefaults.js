import axios from "axios";

// These are default values for axios requests
axios.defaults.baseURL = "https://ci-full-stack-walkthrough-9fcaa4b5b32d.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

//These are for Axios Interceptors to refresh access token and posts
export const axiosReq = axios.create();
export const axiosRes = axios.create();