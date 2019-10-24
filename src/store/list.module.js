import { UsersService } from "../common/api.service";
import { FETCH_USERS } from "./actions.type";
import {
  FETCH_START,
  FETCH_END
} from "./mutations.type";

const state = {
  users: [],
  isLoading: true,
  usersCount: 0
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
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
