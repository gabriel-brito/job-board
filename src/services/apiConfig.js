import axios from "axios";

const BASE_URL = `https://hacker-news.firebaseio.com/v0`;

const service = axios.create({
  baseURL: BASE_URL,
});

export default service;
