/* global Vue, VueRouter, axios */

var SignupPage = {
  template: "#signup-page",
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/v1/users", params)
        .then(function(response) {
          router.push("/login");
        })
        .catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );
    }
  }
};

var SeekerLoginPage = {
  template: "#seeker-login-page",
  data: function() {
    return {
      seekerEmail: "",
      seekerPassword: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        auth: { seeker_email: this.seekerEmail, seeker_password: this.seekerPassword }
      };
      axios
        .post("/user_token", params)
        .then(function(response) {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          router.push("/");
        })
        .catch(
          function(error) {
            this.errors = ["Invalid email or password."];
            this.email = "";
            this.password = "";
          }.bind(this)
        );
    }
  }
};

var LogoutPage = {
  template: "<h1>Logout</h1>",
  created: function() {
    axios.defaults.headers.common["Authorization"] = undefined;
    localStorage.removeItem("jwt");
    router.push("/");
  }
};

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
      hrEmail: "",
      hrPassword: "",
      hrPasswordConfirmation: "",
      hrPhone1:"",
      hrPhone2:"",
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
        bus_name: this.name,
        address: this.address,
        zip: this.zip,
        website: this.website,
        hr_title: this.hrTitle,
        hr_name: this.hrName,
        hr_email: this.hrEmail,
        hr_password: this.hrPassword,
        hr_password_confirmation: this.hrPasswordConfirmation,
        hr_phone1: this.hrPhone1,
        hr_phone2: this.hrPhone2,
        
        job_occupation: this.jobOccupation,
        job_experience: this.jobExperience,
        job_work_value: this.jobWorkValue,
        job_awesomeness: this.jobAwesomeness,
        job_file_upload: this.jobFileUpload       
      };
      axios
      // axios
      //   .post("/user_token", params)
      //   .then(function(response) {
      //     axios.defaults.headers.common["Authorization"] =
      //       "Bearer " + response.data.jwt;
      //     localStorage.setItem("jwt", response.data.jwt);
      //     router.push("/");
      //   })
      //   .catch(
      //     function(error) {
      //       this.errors = ["Invalid email or password."];
      //       this.email = "";
      //       this.password = "";
      //     }.bind(this)
      //   );
        .post("/v1/businesses", params)
        .then(function(response) {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          router.push("/");
          console.log(response.data)
          for (var i=0; i < response.data.length; i++) {
            // I AM UPTO HERE 
          }
          router.push("/");
        })
        .catch(
          function(error) {
            // this.errors = ["Invalid email or password."];
            this.hrEmail = "";
            this.hrPassword = "";
            this.errors = error.response.data.errors;
            console.log(this.errors)
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
      seekerEmail: "",
      seekerPassword: "",
      seekerPasswordConfirmation: "",
      seekerOccupation: "",
      seekerExperience: "",
      seekerAwesomeness: "",
      seekerFileUpload: "",
      seekerWorkValue: "",
      seekerPhone:"",
      seekerZip: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        // controller ---  grabbing from above   
        seeker_name: this.seekerName,
        seeker_email: this.seekerEmail,
        seeker_password: this.seekerPassword,
        seeker_password_confirmation: this.seekerPasswordConfirmation,
        seeker_occupation: this.seekerOccupation,
        seeker_experience: this.seekerExperience,
        seeker_awesomeness: this.seekerAwesomeness,
        seeker_file_upload: this.seekerFileUpload,
        seeker_work_value: this.seekerWorkValue,
        seeker_phone: this.seekerPhone,
        seeker_zip: this.seekerZip 
      };
      axios
        .post("/v1/job_seekers", params)
        .then(function(response) {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          router.push("/");
        })
        .catch(
          function(error) {
            this.errors = ["Invalid email or password."];
            this.seekerEmail = "";
            this.seekerPassword = "";
            // this.errors = error.response.data.errors;
          }.bind(this)
        );
    }
  }
};

var router = new VueRouter({
  routes: [
    { path: "/", component: HomePage },
    { path: "/signup", component: SignupPage },
    { path: "/seeker-login", component: SeekerLoginPage },
    { path: "/logout", component: LogoutPage },
    { path: "/businesses/new", component: BusinessRegistrationPage },
    { path: "/job-seekers/new", component: SeekerRegistrationPage }
  ],

  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router,
  created: function() {
    var jwt = localStorage.getItem("jwt");
    if (jwt) {
      axios.defaults.headers.common["Authorization"] = jwt;
    }
  }
});