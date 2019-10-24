import { UsersService } from "../common/api.service";
import { FETCH_USERS, DELETE_USER, CREATE_OR_UPDATE_USER, FETCH_SPECIFIC_USER } from "./actions.type";
import {
  FETCH_START,
  FETCH_ERROR,
  FETCH_END,
  DELETE_END,
  SET_SPECIFIC_USER
} from "./mutations.type";

const state = {
  users: [],
  isLoading: true,
  usersCount: 0,
  error: "",
  selectedUser: {}
};

const getters = {
  usersCount(state) {
    return state.usersCount;
  },
  users(state) {
    return state.users;
  },
  isLoading(state) {
    return state.isLoading;
  },
  error(state) {
    return state.error;
  },
  selectedUser(state) {
    return state.selectedUser
  }
};

const actions = {
  [FETCH_USERS]({ commit }) {
    commit(FETCH_START);
    return UsersService.get()
      .then(({ data }) => {
        setTimeout(() => {
          commit(FETCH_END, { users: data || [], usersCount: (data && data.length) || 0 });
        }, 1000)
      })
      .catch(error => {
        commit(FETCH_ERROR, error.message)
        throw new Error(error);
      });
  },
  [DELETE_USER]({ commit, dispatch }, id) {
    commit(FETCH_START);
    return UsersService.destroy(id)
      .then(() => {
        commit(DELETE_END)
        dispatch(FETCH_USERS)
      })
      .catch(error => {
        commit(FETCH_ERROR, error.message)
        throw new Error(error);
      });
  },
  [CREATE_OR_UPDATE_USER]({ commit }, { id, body }){
    commit(FETCH_START)
    if(id){
      return UsersService.update(id, body)
        .then(() => {})
        .catch(error => {
          commit(FETCH_ERROR, error.message)
          throw new Error(error);
        });
    }else {
      return UsersService.create(body)
        .then(() => {})
        .catch(error => {
          commit(FETCH_ERROR, error.message)
          throw new Error(error);
        });
    }
  },
  [FETCH_SPECIFIC_USER]({ commit }, id){
    commit(FETCH_START)
    return UsersService.getSpecificUser(id)
      .then(({ data }) => {
        commit(SET_SPECIFIC_USER, data)
      })
      .catch(error => {
        commit(FETCH_ERROR, error.message)
        throw new Error(error);
      });
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [FETCH_END](state, { users, usersCount  }) {
    state.users = users;
    state.usersCount = usersCount;
    state.isLoading = false;
  },
  [SET_SPECIFIC_USER](state, data) {
    state.selectedUser = data || {}
  },
  [FETCH_ERROR](state, message) {
    state.isLoading = false;
    state.error = message
  },
  [FETCH_SPECIFIC_USER](state, user){
    state.selectedUser = user
    state.isLoading = false;
    state.error = ""
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
