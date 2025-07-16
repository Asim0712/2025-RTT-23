import axios from "axios";

export const productapiClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers :{
        Accept: "application/json",
        // In a real app, this token would come from an environment variable!
    Authorization: "token YOUR_PERSONAL_ACCESS_TOKEN",
    }
});
// Add a request interceptor to our instance
productsApiClient.interceptors.request.use(config => {
  // This function runs before any request is sent using client
  console.log(`Sending request to: ${config.baseURL}${config.url}`);
  // You must always return the config object, otherwise the request will fail
  return config;
}, error => {
  // Handle request error
  return Promise.reject(error);
});
