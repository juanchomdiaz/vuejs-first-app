const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@email.com",
      picture: "https://randomuser.me/api/portraits/women/10.jpg",
      gender: "female",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.picture = results[0].picture.medium;
      this.gender = results[0].gender;
    },
  },
});

app.mount("#app");
