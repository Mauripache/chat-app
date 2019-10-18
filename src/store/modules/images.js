import api from '../../api/imgur';
import { router } from '../../main';

const state = {
    images: [],
    uploading: false
};

const getters = {
    allImages: state => {return state.images},
    isUploading: state => {return state.uploading}
};

const actions = {
    async fetchImages ({ commit, rootState }) {
        const token = rootState.auth.token;
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data);
    },
    async uploadImages({ commit, rootState }, images) {
        const token = rootState.auth.token;   
        
        commit("setUploading", true);
        await api.uploadImages(images, token);
        commit("setUploading", false);
        router.push('/');
    },
    async deleteImages({ commit, rootState }, images) {
        const token = rootState.auth.token;   
        
        await api.deleteImages(images, token);
        router.go('/');
    },
    setUploading({commit}, uploading) {
        commit("setUploading", uploading);
    }
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    },
    setUploading: (state, uploading) => {
        state.uploading = uploading;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}