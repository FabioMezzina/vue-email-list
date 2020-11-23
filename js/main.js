const app = new Vue({
  el: '#app',
  data: {
    emails: [],
  }, // <- End Data
  created() {
    this.generateEmail();
  }, // <- End Created
  methods: {
    /**
     * Generate 10 random email addresses
     */
    generateEmail() {
      this.emails = [];
      for(let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then(element => {
            this.emails.push(element.data.response);
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }, // <- End Methods
});