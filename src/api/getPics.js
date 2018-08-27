import axios from "axios";

const getPics = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/photos")
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

export default getPics;
