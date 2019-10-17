import axios from "axios";

export default axios.create({
  baseURL: "http://172.0.1.160:8080/Startec/web/app_dev.php/api",
  responseType: "json",
  
});