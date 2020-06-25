import axios from "axios";

const baseURL = process.env.REACT_APP_BASEURL || "http://localhost:3000/api";

export default axios.create({
  baseURL: baseURL,
});
