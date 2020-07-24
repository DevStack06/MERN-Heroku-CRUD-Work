import axios from "axios";

const instance = axios.create({
  baseURL: "https://immense-dawn-31229.herokuapp.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export default instance;
