const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotos = searchedValue => {
    const urlParams = new URLSearchParams({
        key: '45491471-a9703abbe87dc4841cd0b555c',
        q: searchedValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    })

    return fetch(`${BASE_URL}/?${urlParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};