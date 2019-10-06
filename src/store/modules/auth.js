import api from '../../api/imgur';

const state = {
    token: null
};

const getters = {
    isLoggedIn: (state) => {
        return !!state.token;
    }
};

const actions = {
    login: () => {
        api.login();
    },
    finalizeLogin: ({ commit }) => {

    },
    logout: ({ commit }) => {
        commit('setToken', null);
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state: state,
    getter: getters,
    actions: actions,
    mutations: mutations
};