

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
  template: "#business-hr-registration-page",
  data: function() {
    return {
      // grabbing from HTML file
      name: "",
      address: "",
      zip: "",
      website: "",
      hrTitle: "",
      hrName: "",
      hrPhone1:"",
      hrPhone2:"",
      hrEmail: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        // controller ---  grabbing from above   
        name: this.name,
        address: this.address,
        zip: this.zip,
        website: this.website,
        hr_title: this.hrTitle,
        hr_name: this.hrName,
        hr_phone1: this.hrPhone1,
        hr_phone2: this.hrPhone2,
        hr_email: this.hrEmail
      };
      axios
        .post("/v1/businesses", params)
        .then(function(response) {
          router.push("/");
        })
        .catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );
    }
  }
};
var router = new VueRouter({
  routes: [
  { path: "/", component: HomePage },
  { path: "/businesses/new", component: BusinessRegistrationPage }
  ],

  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
