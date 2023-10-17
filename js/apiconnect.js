const app = Vue.createApp({
    data() {
        return {
            error: false,
            url: "https://my-json-server.typicode.com/eli31a/fakehouse/results",
            datos: [],
        };
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.datos = data;
                });
        }
    },
    created() {
        this.fetchData(this.url)
    }
}).mount('#app');