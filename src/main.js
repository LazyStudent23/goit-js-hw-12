import iziToast from "izitoast";
import { fetchPhotos } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";
import { lightbox } from "./js/render-functions";

const searchFormEl = document.querySelector('.js-search-form');
const galleryList = document.querySelector('.js-gallery');
const formReset = () => searchFormEl.reset();
const loader = document.querySelector('.js-loader');
const loaderShow = () => {
    loader.classList.remove('is-hidden');
}
const onSearchFormSubmit = event => {
    event.preventDefault();
    loaderShow();
  const searchedValue = searchFormEl.elements.user_query.value;
  fetchPhotos(searchedValue)
      .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        galleryList.innerHTML = '';
          formReset();

        return;
          }
          galleryList.innerHTML = '';
      const galleryCreateMarkup = data.hits.map(imgDetails => createMarkup(imgDetails)).join('');

          galleryList.insertAdjacentHTML("beforeend", galleryCreateMarkup);
          formReset();
          lightbox.refresh();
    })
    .catch(err => {
      console.log(err);
      iziToast.error({
        message: 'Sorry, something get wrong. Try again later!',
        position: 'topRight',
      });
    })
      .finally(() => {
          loader.classList.add('is-hidden');
    })
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);