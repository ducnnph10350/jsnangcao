// noi cau hinh base cho axios
import axios from "axios";
//khoi tao cau hinh axios cho toan bo project
export const  apiAxios = axios.create({
    baseURL: 'https://629345a1089f87a57abd33d9.mockapi.io'
});
export const api2 = axios.create({
    baseURL: 'https://629b1188656cea05fc32f314.mockapi.io'
});