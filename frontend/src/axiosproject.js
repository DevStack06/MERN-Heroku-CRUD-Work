import axios from "axios";
//https://immense-dawn-31229.herokuapp.com
const instance = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export default instance;
