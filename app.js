new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: {
    data_film: "",
  },
  created() {
    this.selectFilm();
  },
  methods: {
    selectFilm: function () {
      axios
        .get("http://api.tvmaze.com/search/shows?q=girls")
        .then((response) => (this.data_film = response.data))
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
