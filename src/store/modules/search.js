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
  },
  setSelectedVideo: (state, video) => {
    state.selectedVideo = video;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
