import axios from "axios";
const instance = axios.create({
  baseURL: "https://15e17699.ngrok.io/api"
});

export default instance;
