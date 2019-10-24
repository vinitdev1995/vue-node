import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import {API_URL} from "../utilities/CONST"

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = API_URL;

export const UsersService = {
  get() {
    return Vue.axios.get("items")
  },
  create(body) {
    return Vue.axios.post("items/add", body);
  },
  update(id, body) {
    return Vue.axios.put(`items/update/${id}`, body);
  },
  destroy(id) {
    return Vue.axios.get(`items/delete/${id}`);
  },
  getSpecificUser(id) {
    return Vue.axios.get(`items/edit/${id}`)
  }
};
