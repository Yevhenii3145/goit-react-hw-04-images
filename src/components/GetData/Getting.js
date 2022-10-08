import axios from 'axios';
const URL = 'https://pixabay.com/api';
const LIMIT = 12;
const KEY = '30152242-5ef7953aea2f4497fbdf26179';

const instance = axios.create({
  baseURL: URL,
  params: {
    per_page: LIMIT,
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export const searchPosts = async (q, page = 1) => {
  const { data } = await instance.get('/', {
    params: {
      page,
      q,
    },
  });
  return data;
};
