import axios from "axios";

axios.defaults.baseURL = "https://ci-full-stack-walkthrough-9fcaa4b5b32d.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;