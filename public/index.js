

/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!"

    };
  },
  created: function() {},
  methods: {},
  computed: {}
};


var BusinessRegistrationPage = {
  template: "#business-registration-page",
  data: function() {
    return {
      name: "",
      address: "",
      zip: "",
      website: "",
      

    }
  }
}


var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
