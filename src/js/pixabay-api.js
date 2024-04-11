import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const axios = require('axios');
const apiKey = '43346019-e2cdab7ada109c45f6a1c5d2a';

axios.get(`https://pixabay.com/api/?key=${apiKey}&q=природа&per_page=5`)
  .then(function (response) {
    // обробка отриманих даних
    const images = response.data.hits;
    console.log(images);
  })
  .catch(function (error) {
    // обробка помилки
    console.error(error);
  });
