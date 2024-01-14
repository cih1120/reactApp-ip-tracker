import axios from "axios";

export const API_URLS = {
  IPGeolocation: "https://geo.ipify.org/api/v2/country?"
}
const TIMEOUT = 65000;

export const apiInstance = axios.create({
  timeout: TIMEOUT,
  responseType: 'json',
});