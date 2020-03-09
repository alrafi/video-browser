import api from '../../api/youtube';
import { router } from '../../main';

const state = {
  trending: [],
  selectedContent: null
};

const getters = {
  trendingVideos: state => state.trending,
  getSelectedContent: state => state.selectedContent
};

const actions = {
  async fetchContent({ commit }) {
    const response = await api.fetchTrendingVideos();
    commit('setTrending', response.data.items);
  },
  selectContent({ commit }, video) {
    commit('setSelectedVideo', video);
    router.push('/play');
    commit('setKind', video.kind, { root: true });
  }
};

const mutations = {
  setTrending: (state, videos) => {
    state.trending = videos;
    console.log(state.trending);
  },
  setSelectedContent: (state, video) => {
    state.selectedContent = video;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
