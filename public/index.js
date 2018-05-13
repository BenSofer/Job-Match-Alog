/* global Vue, VueRouter, axios */

var JobEditPage = {
  template: "#job-edit-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      job: {occupation: "", experience: "", work_value: "",awesomeness: "", file_upload: ""}
    };
  },
  created: function() {
    axios.get("/v1/jobs/" + this.$route.params.id).then(function(response) {
      this.job = response.data;
    }.bind(this));
  },
  methods: {
    updateJob: function() {
      console.log('updating the job...');
      // take in the parameters, make an object out of them
      var params = {
        occupation: this.job.occupation,
        experience: this.job.experience,
        work_value: this.job.work_value,
        awesomeness: this.job.awesomeness,
        file_upload: this.job.file_upload
      };
      // make an axios request
      axios.patch("v1/jobs/" + this.$route.params.id, params).then(function(response) {
        router.push("/");
      });
    }
  },
  computed: {}
};


var AboutPage = {
  template: "#about-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  created: function() {
    // created runs when the component is created
    // console.log('outside this');

  },
  methods: {},
  computed: {}
};

var DashboardPage = {
  template: "#dashboard-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      businesses:[],
      jobs:[],
      matches:[],
      job_seekers: [],
      errors: []
    };
  },
    created: function() {
    axios.get("/v1/hr_reps/dashboard").then(function(response) {
      this.matches = response.data;
      console.log(this.matches)
    }.bind(this));
    // axios.get("/v1/hr_reps/dashboard").then(function(response) {
    //   this.businesses = response.data;
    // }.bind(this));
  },
  methods: {},
  computed: {}
};

var JobsPage = {
  template: "#jobs-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      jobs: [],
      businesses: [],
      errors: []
    };
  },
    created: function() {
    axios.get("/v1/jobs").then(function(response) {
      this.jobs = response.data;
    }.bind(this));
    axios.get("/v1/businesses?b=busi3").then(function(response) {
      this.businesses = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};

var JobSeekerSignupPage = {
  template: "#job-seeker-signup-page",
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
        .post("/v1/job_seekers", params)
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

var HrRepSignupPage = {
  template: "#hr-rep-signup-page",
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
        .post("/v1/hr_reps", params)
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

// I would like to combine the two log in pages

var HrRepLoginPage = {
  template: "#hr-rep-login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        auth: { email: this.email, password: this.password }
      };
      axios
        .post("/hr_rep_token", params)
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

var JobSeekerLoginPage = {
  template: "#job-seeker-login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        auth: { email: this.email, password: this.password }
      };
      axios
        .post("/job_seeker_token", params)
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
 
var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      job_seekers: [],
      jobs: [],
      errors: []
    };
  },
    created: function() {
    axios.get("/v1/job_seekers?q=seekers3").then(function(response) {
      this.job_seekers = response.data;
    }.bind(this));
    axios.get("/v1/jobs?z=jobs8").then(function(response) {
      this.jobs = response.data;
    }.bind(this));
  },

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
          console.log(response.data);
          for (var i = 0; i < response.data.length; i++) {
            // I AM UPTO HERE 
          }
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
            this.errors = error.response.data.errors;
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

var router = new VueRouter({
  routes: [
    { path: "/", component: HomePage },
    // { path: "/signup", component: SignupPage },
    // { path: "/login", component: LoginPage },
    { path: "/about", component: AboutPage },
    { path: "/jobs", component: JobsPage },
    { path: "/hr_rep_login", component: HrRepLoginPage },
    { path: "/job_seeker_login", component: JobSeekerLoginPage },
    { path: "/logout", component: LogoutPage },
    { path: "/businesses/new", component: BusinessRegistrationPage },
    { path: "/job_seekers/new", component: SeekerRegistrationPage },
    { path: "/hr-rep-signup", component: HrRepSignupPage },
    { path: "/job-seeker-signup", component: JobSeekerSignupPage },
    {path: "/jobs/:id/edit", component: JobEditPage},
    {path: "/hr_reps/dashboard", component: DashboardPage}
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