import axios from "axios";
const token = "d495777b-b67e-4198-8881-fa5207b13136";
const instance = axios.create({
  headers: {
    serviceKey: token,
  },
  httpsAgent: {
    rejectUnauthorized: false,
  },
  baseURL: "http://center.koamise.com",
});

export default instance;
