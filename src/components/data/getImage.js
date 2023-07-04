import axios from 'axios';

const API_KEY = '35947614-59445043f240dd573a474c2aa';

export const fetchImages = async (query, page) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );

    return response.data.hits;
  } catch (error) {
    console.log(error);

    throw new Error('Failed to fetch images');
  }
};
