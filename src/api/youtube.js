import axios from 'axios';

const ROOT_URL = 'https://www.googleapis.com/youtube/v3';
// 'https://www.googleapis.com/youtube/v3/videos'

export default {
  fetchVideosBySearch: searchTerm => {
    return axios.get(`${ROOT_URL}/search`, {
      params: {
        key: process.env.VUE_APP_API_KEY,
        part: 'snippet',
        q: searchTerm
      }
    });
  },
  fetchTrendingVideos: () => {
    return axios.get(`${ROOT_URL}/videos`, {
      params: {
        key: process.env.VUE_APP_API_KEY,
        part: 'snippet, statistics',
        chart: 'mostPopular',
        regionCode: 'ID',
        maxResults: 4
      }
    });
  },
  fetchCategoryVideos: (id, max = 5) => {
    return axios.get(`${ROOT_URL}/videos`, {
      params: {
        key: process.env.VUE_APP_API_KEY,
        part: 'snippet, statistics',
        chart: 'mostPopular',
        regionCode: 'ID',
        videoCategoryId: id,
        maxResults: max
      }
    });
  }
};
