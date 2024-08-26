import iziToast from "izitoast";
import { fetchPhotos } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";
import { lightbox } from "./js/render-functions";

const searchFormEl = document.querySelector('.js-search-form');
const galleryList = document.querySelector('.js-gallery');
const loader = document.querySelector('.js-loader');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const formReset = () => searchFormEl.reset();
const loaderShow = () => {
  loader.classList.remove('is-hidden');
}

let currentPage = 1;
let searchedValue = '';
let cardHeight = 0;

const onSearchFormSubmit = async event => {
  event.preventDefault();
  console.log(searchedValue);
  searchedValue = searchFormEl.elements.user_query.value;
  if (searchedValue === "") {
      iziToast.warning({
      message: 'Please, enter your request in the field!',
      position: 'topRight',
    })
    return;
  }
  loaderShow();
  

  currentPage = 1;
  
  const responce = await fetchPhotos(searchedValue, currentPage);

  try {
    if (responce.data.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      galleryList.innerHTML = '';
      formReset();

      return;
    }
    
    galleryList.innerHTML = '';
    const galleryCreateMarkup = responce.data.hits.map(imgDetails => createMarkup(imgDetails)).join('');

    galleryList.insertAdjacentHTML("beforeend", galleryCreateMarkup);
    formReset();
    lightbox.refresh();

    const galleryCardEl = galleryList.querySelector('li');

    cardHeight = galleryCardEl.getBoundingClientRect().height;

    loadMoreBtnEl.classList.remove('is-hidden');
    if (Math.ceil(responce.data.totalHits / 15) === currentPage) {
      iziToast.info({
        message: 'It`s all images for your request!',
        position: 'topRight',
      })
      loadMoreBtnEl.classList.add('is-hidden');
    }

  } catch (err) {
    console.log(err);
    iziToast.error({
      message: 'Sorry, something get wrong. Try again later!',
      position: 'topRight',
    });
  }
  loader.classList.add('is-hidden');

};

const onLoadMoreBtnClick = async event => {
  const responce = await fetchPhotos(searchedValue, currentPage);
  try {
    currentPage++;

    const galleryCreateMarkup = responce.data.hits.map(imgDetails => createMarkup(imgDetails)).join('');

    galleryList.insertAdjacentHTML("beforeend", galleryCreateMarkup);
    lightbox.refresh();

    scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
    if (Math.ceil(responce.data.totalHits / 15) === currentPage) {
      iziToast.info({
        message: 'It`s all images for your request!',
        position: 'topRight',
      })
      loadMoreBtnEl.classList.add('is-hidden');
    }
  } catch (err) {
    console.log(err);
    iziToast.error({
      message: 'Sorry, something get wrong. Try again later!',
      position: 'topRight',
    });
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);