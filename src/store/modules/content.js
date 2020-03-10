import api from '../../api/youtube';
import { router } from '../../main';

const state = {
  trending: [],
  gaming: [],
  music: [],
  recommended: []
};

const getters = {
  trendingVideos: state => state.trending,
  gamingVideos: state => state.gaming,
  musicVideos: state => state.music,
  recommendedVideos: state => state.recommended
};

const actions = {
  async fetchContent({ commit }) {
    const response = await api.fetchTrendingVideos();
    commit('setTrending', response.data.items);
  },
  async fetchGaming({ commit }) {
    const categoryId = 20;
    const response = await api.fetchCategoryVideos(categoryId);
    commit('setGaming', response.data.items);
  },
  async fetchMusic({ commit }) {
    const categoryId = 10;
    const maxResults = 4;
    const response = await api.fetchCategoryVideos(categoryId, maxResults);
    commit('setMusic', response.data.items);
  },
  async fetchRecommended({ commit }, id = 10) {
    const response = await api.fetchCategoryVideos(id);
    commit('setRecommended', response.data.items);
  },
  selectContent({ commit }, video) {
    commit('setSelectedVideo', video, { root: true });
    router.push('/play');
    commit('setKind', video.kind, { root: true });
  }
};

const mutations = {
  setTrending: (state, videos) => {
    state.trending = videos;
  },
  setGaming: (state, videos) => {
    state.gaming = videos;
  },
  setMusic: (state, videos) => {
    state.music = videos;
  },
  setRecommended: (state, videos) => {
    state.recommended = videos;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
