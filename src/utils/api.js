import axios from "axios";

const API = axios.create({
  baseURL: "https://robohash.org",
});

export default API;
