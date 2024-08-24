import SimpleLightbox from 'simplelightbox';
export const createMarkup = imgInfo => {
  return `
  <li class="gallery-card">
    <a class="gallery_link" href ="${imgInfo.largeImageURL}">
    <img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" title="${imgInfo.tags}"/>
    <ul class ="image-details">
    <p>Likes<span>${imgInfo.likes}</span></p>
    <p>Views<span>${imgInfo.views}</span></p>
    <p>Commets<span>${imgInfo.comments}</span></p>
    <p>Downloads<span>${imgInfo.downloads}</span></p>
    </ul>
    </a>
  </li>
  `;
};

export const lightbox = new SimpleLightbox('.js-gallery a', {
   animationSpeed: 250
          });