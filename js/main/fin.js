const app = Vue.createApp({
    data() {
       return {
           devs: devs,
           selected: -1,
           dark: false,
           query: ''
       }
    },
    computed: {
        dev() {
            return this.selected >= 0 ? this.searchedDevs[this.selected] : null;
        },
        searchedDevs() {
            const term = this.query.toLowerCase().trim();
            return this.devs.filter(dev =>
                   dev.username.toLowerCase().includes(term)
                || dev.middleName.toLowerCase().includes(term)
                || (`${dev.firstName.toLowerCase()} ${dev.lastName.toLowerCase()}`).includes(term)
                || (`${dev.lastName.toLowerCase()}, ${dev.firstName.toLowerCase()}`).includes(term)
            );
        }
    },
    methods: {
        toggleTheme() {
            if(this.dark) {
                localStorage.theme = 'dark';
                document.body.classList.add('dark-mode');
                document.body.classList.remove('light-mode');
            }
            else {
                localStorage.theme = 'light';
                document.body.classList.add('light-mode');
                document.body.classList.remove('dark-mode');
            }
        }
    },
    created() {
        const theme = localStorage.getItem('theme');
        if (theme)
            this.dark = theme === 'dark';
        else {
            if (window.matchMedia)
                this.dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        this.toggleTheme();
    }
});

app.mount('#app');
