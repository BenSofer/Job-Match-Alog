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
      jobOccupation: "",
      jobExperience: "",
      jobWorkValue: "",
      jobAwesomeness: "",
      jobFileUpload: "",
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
        hr_email: this.hrEmail,
        job_occupation: this.jobOccupation,
        job_experience: this.jobExperience,
        job_work_value: this.jobWorkValue,
        job_awesomeness: this.jobAwesomeness,
        job_file_upload: this.jobFileUpload       
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

var SeekerRegistrationPage = {
  template: "#seeker-registration-page",
  data: function() {
    return {
      // grabbing from HTML file
      seekerName: "",
      seekerOccupation: "",
      seekerExperience: "",
      seekerAwesomeness: "",
      seekerFileUpload: "",
      seekerWorkValue: "",
      seekerPhone:"",
      seekerEmail: "",
      seekerZip: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        // controller ---  grabbing from above   
        seeker_name: this.seekerName,
        seeker_occupation: this.seekerOccupation,
        seeker_experience: this.seekerExperience,
        seeker_awesomeness: this.seekerAwesomeness,
        seeker_file_upload: this.seekerFileUpload,
        seeker_work_value: this.seekerWorkValue,
        seeker_phone: this.seekerPhone,
        seeker_email: this.seekerEmail,
        seeker_zip: this.seekerZip 
      };
      axios
        .post("/v1/job_seekers", params)
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
    { path: "/businesses/new", component: BusinessRegistrationPage },
    { path: "/job-seekers/new", component: SeekerRegistrationPage }
  ],

  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});