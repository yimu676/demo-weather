var app = new Vue({
  el: "#app",
  data: {
    city: '',
    weatherList: []
  },
  methods: {
    searchWeather: function (city) {
      console.log(city)
      console.log(this.city)
      axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' + this.city)
        .then((req) =>{ 
         
          this.weatherList = req.data.data.forecast})
    },
    changeCity: function (city) {
      this.city = city;
      this.searchWeather();
    }
  }
})