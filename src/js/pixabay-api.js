import axios from "axios";
axios.defaults.baseURL = 'https://pixabay.com';

export const fetchPhotos = async (searchedValue, page) => {
  const axiosOptions = {
    params: {
        key: '45491471-a9703abbe87dc4841cd0b555c',
        q: searchedValue,
        image_type: 'photo',
        orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
      }
    }
  return await axios.get('/api/',axiosOptions);
};