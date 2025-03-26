import axios from "axios";

const BASE_URL = "https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com";

export const api = axios.create({
  baseURL: BASE_URL,
});
