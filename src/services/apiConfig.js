import axios from "axios";

import { BASE_URL } from "utils/constants";

const service = axios.create({
  baseURL: BASE_URL,
});

export default service;
