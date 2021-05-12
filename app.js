const random = {
    data() {
        return {
            firstName: null,
            lastName: null,
            age: null,
            picture: null,
            email: null,
            gender:null,
        }
    }, 
    props: {

    }, 
    methods: {
        async generateUser() {
            const res =  await fetch('https://randomuser.me/api/')

            const {results} = await res.json();

            this.firstName = results[0].name.first;
            this.lastName = results[0].name.last;
            this.age = results[0].dob.age;
            this.picture = results[0].picture.large;
            this.email = results[0].email;
            this.gender = results[0].gender;


        },
    }, mounted() {
        this.generateUser();
    }
}

Vue.createApp(random).mount("#app");

