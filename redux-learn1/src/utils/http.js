import axios from "axios";

const BASE_HOST = "http://127.0.0.1:3000";
axios.defaults.baseURL = BASE_HOST;

export default function http() {
  return axios;
}
