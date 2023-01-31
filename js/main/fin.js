const app = Vue.createApp({
    data() {
       return {
           devs: devs,
           selected: -1,
           dark: false
       }
    },
    computed: {
        dev() {
            return this.selected >= 0 ? this.devs[this.selected] : null;
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
