import api from '../../api/youtube';

const state = {
  trending: []
};

const getters = {
  trendingVideos: state => state.trending
};

const actions = {
  async fetchContent({ commit }) {
    const response = await api.fetchTrendingVideos();
    commit('setTrending', response.data.items);
  }
};

const mutations = {
  setTrending: (state, videos) => {
    state.trending = videos;
    console.log(state.trending);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
