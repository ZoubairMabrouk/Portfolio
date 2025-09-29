import axios from "axios";

const Api = axios.create({baseURL:"https://portfolio-backend-sand-two.vercel.app/api"});

export default Api;