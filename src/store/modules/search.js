import api from '../../api/youtube';
import { router } from '../../main';

const state = {
  searchResult: [],
  selectedVideo: null
};

const getters = {
  videosResult: state => state.searchResult,
  getSelectedVideo: state => state.selectedVideo
};

const actions = {
  async fetchVideos({ commit }, searchTerm) {
    const response = await api.fetchVideosBySearch(searchTerm);
    commit('setSearchResult', response.data.items);
    router.push('/search');
  },
  selectVideo({ commit }, video) {
    commit('setSelectedVideo', video);
    router.push('/play');
  }
};

const mutations = {
  setSearchResult: (state, videos) => {
    state.searchResult = videos;
    console.log(state.searchResult);
  },
  setSelectedVideo: (state, video) => {
    state.selectedVideo = video;
    console.log(state.selectedVideo);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
