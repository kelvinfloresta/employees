import Axios from "axios-observable";

const baseURL = "http://dummy.restapiexample.com/api";

export const httpRequest = Axios.create({ baseURL });
