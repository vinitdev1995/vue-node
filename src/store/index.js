import Vue from "vue"
import Vuex from "vuex"

import list from "./list.module"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    list,
  }
});
