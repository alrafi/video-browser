import api from '../../api/youtube';
import { router } from '../../main';

const state = {
  searchResult: []
};

const getters = {
  videosResult: state => state.searchResult
};

const actions = {
  async fetchVideos({ commit }, searchTerm) {
    const response = await api.fetchVideosBySearch(searchTerm);
    commit('setSearchResult', response.data.items);
    router.push('/search');
  }
};

const mutations = {
  setSearchResult: (state, videos) => {
    state.searchResult = videos;
    console.log(state.searchResult);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
