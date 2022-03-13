const app = Vue.createApp({
  data() {
    return {
      firstName: null,
      lastName: null,
    };
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    firstNameCount() {
      return this.firstName ? 15 - this.firstName.length : 0;
    },
    lastNameCount() {
      return this.lastName ? 15 - this.lastName.length : 0;
    },
    firstNameErrorValidation() {
      return this.firstNameCount <= 0 &&
        this.firstName &&
        this.firstName.length >= 15
        ? true
        : false;
    },
    lastNameErrorValidation() {
        return this.lastNameCount === 0 &&
          this.lastName &&
          this.lastName.length === 15
          ? true
          : false;
      },
  },
});

app.mount("#app");
