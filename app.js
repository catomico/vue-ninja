let app = new Vue({
  el: '#app',
  data: {
    intro: 'Hello There!',
    name: 'General Kenobi',
    pic: imgUrl('https://i2.sndcdn.com/avatars-Orvd7eN1YbCylbnx-eqXaEg-t500x500.jpg')
  },
  methods: { 
    greet: function(time) {
      return 'Good' + ' ' + time + '!' + ' ' + this.name;
    } 
  }
});