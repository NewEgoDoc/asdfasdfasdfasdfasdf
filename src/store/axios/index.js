import axios from "axios";

export const instance = axios.create({
  herader: {
    serviceKey: "d495777b-b67e-4198-8881-fa5207b13136",
  },
  httpAgent: {
    rejectUnauthorized: false,
  },
  baseURL: "http://center.koamise.com",
});
