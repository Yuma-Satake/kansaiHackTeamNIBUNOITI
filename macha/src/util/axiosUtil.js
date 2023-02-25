import { Axios } from "axios";

export const axios = new Axios({
  baseURL: "http://localhost:5001",
  headers: {
    "Content-Type": "application/json"
  },
  responseType: "json",
  transformResponse: [
    function transformResponse(data) {
      return JSON.parse(data);
    }
  ]
});

export const GmailAxios = new Axios({
  baseURL: "https://gmail.googleapis.com",
  responseType: "json",
  transformResponse: [
    function transformResponse(data, headers) {
      return JSON.parse(data);
    }
  ]
});
