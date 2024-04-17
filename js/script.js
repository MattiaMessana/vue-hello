const {createApp} = Vue;

createApp({
    data () {
        return {
            saluto: "ciao mondo",
            image: "my-img.jpg",
            title: "foto di una campagna"
        };
    },
    methods: {

    },

}).mount("#app");