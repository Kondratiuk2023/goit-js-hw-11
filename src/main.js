import { searchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// import 'css-loader/dist/css-loader.css';

const book = new SimpleLightbox('.list_gallery a');

const form = document.querySelector('.main_form');
const myGallery = document.querySelector('.list_gallery');

form.addEventListener("submit", handlerForm);

function handlerForm(event) {
    event.preventDefault();
    myGallery.innerHTML = '';
    const loader = document.querySelector('.loader');
    loader.classList.add('loading');
    
    let searchWord = event.currentTarget.elements.inputElement.value;
    
    event.currentTarget.elements.inputElement.value = "";  
    
    searchImages(searchWord)
    .then(data => {

            if (data.total == 0) {
                iziToast.show({
                    title: 'Ops.',
                    titleColor: 'white',
                    message:
                        'Sorry, there are no images matching your search query. Please try again!',
                    messageColor: 'white',
                    color: 'red',
                    position: 'topCenter',
                    timeout: '5000',
                });
                return 0;
            } else {
                myGallery.insertAdjacentHTML('beforeend', renderGallery(data));
                book.refresh();
                event.target.reset();
            }
        })
        .catch(error => {
            iziToast.show({
                title: 'Ops.',
                titleColor: 'white',
                message: error,
                messageColor: 'white',
                color: 'red',
                position: 'topCenter',
                timeout: '5000',
            });
        })
        .finally(() => { 
            loader.classList.remove('loading')
                });
}
