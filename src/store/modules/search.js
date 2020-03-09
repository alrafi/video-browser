import api from '../../api/youtube';
import { router } from '../../main';

const state = {
  searchResult: []
};

const getters = {
  getSearchResult: state => state.searchResult
};

const actions = {
  async fetchVideos({ commit }, searchTerm) {
    const response = await api.fetchVideosBySearch(searchTerm);
    // console.log(response.data.items);
    commit('setSearchResult', response.data.items);

    router.push('/search');
  }

  // search(searchTerm) {
  //   api.fetchVideosBySearch(searchTerm);
  // }
};

const mutations = {
  setSearchResult: (state, videos) => {
    state.searchResult = videos;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
