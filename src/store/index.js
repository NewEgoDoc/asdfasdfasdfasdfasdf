import { createStore } from "vuex";

import api from "./api";

export default createStore({
  state: {
    itemList: [],
  },
  actions: {
    testCall({ commit }, payload) {
      console.log("actions", payload);
      return api
        .testAPICall()
        .then((data) => commit("apiList", data))
        .catch((err) => {
          console.error(err, "api Call fail");
        });
    },
  },
  mutations: {
    apiList(state, data) {
      console.log("==>", data);
      state.itemList = data;
    },
  },
});
