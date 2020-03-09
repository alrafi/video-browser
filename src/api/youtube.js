import axios from 'axios';

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export default {
  fetchVideosBySearch: searchTerm => {
    return axios.get(`${ROOT_URL}`, {
      params: {
        key: process.env.VUE_APP_API_KEY,
        part: 'snippet',
        q: searchTerm
      }
    });
  }
};
