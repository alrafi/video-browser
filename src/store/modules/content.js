import api from '../../api/youtube';
import { router } from '../../main';

const state = {
  trending: [],
  gaming: [],
  music: [],
  recommended: []
  // selectedContent: null
};

const getters = {
  trendingVideos: state => state.trending,
  gamingVideos: state => state.gaming,
  musicVideos: state => state.music,
  recommendedVideos: state => state.recommended
  // getSelectedContent: state => state.selectedContent
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
  async fetchRecommended({ commit }, id = 22) {
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
    console.log(state.trending);
  },
  setGaming: (state, videos) => {
    state.gaming = videos;
    console.log(state.gaming);
  },
  setMusic: (state, videos) => {
    state.music = videos;
    console.log(state.music);
  },
  setRecommended: (state, videos) => {
    state.recommended = videos;
    console.log(state.recommended);
  }
  // setSelectedContent: (state, video) => {
  //   state.selectedContent = video;
  // }
};

export default {
  state,
  getters,
  actions,
  mutations
};
