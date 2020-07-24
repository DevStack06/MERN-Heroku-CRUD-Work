import axios from "axios";
//https://immense-dawn-31229.herokuapp.com
const instance = axios.create({
  baseURL: "https://dev-stack-balram.herokuapp.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export default instance;
