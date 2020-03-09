import api from '../../api/youtube';
import { router } from '../../main';

const state = {
  searchResult: [],
  selectedVideo: null,
  kind: null
};

const getters = {
  videosResult: state => state.searchResult,
  getSelectedVideo: state => state.selectedVideo,
  isRecommended: state => !!state.searchResult,
  kindRequest: state => state.kind
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
    commit('setKind', video.kind);
  }
};

const mutations = {
  setSearchResult: (state, videos) => {
    state.searchResult = videos;
  },
  setSelectedVideo: (state, video) => {
    state.selectedVideo = video;
  },
  setKind: (state, kind) => {
    state.kind = kind;
    console.log(state.kind);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
