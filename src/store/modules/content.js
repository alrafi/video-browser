import api from '../../api/youtube';
import { router } from '../../main';

const state = {
  trending: [],
  gaming: []
  // selectedContent: null
};

const getters = {
  trendingVideos: state => state.trending,
  gamingVideos: state => state.gaming
  // getSelectedContent: state => state.selectedContent
};

const actions = {
  async fetchContent({ commit }) {
    const response = await api.fetchTrendingVideos();
    commit('setTrending', response.data.items);
  },
  async fetchGaming({ commit }) {
    const response = await api.fetchGamingVideos();
    commit('setGaming', response.data.items);
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
