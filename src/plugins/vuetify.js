import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#005cd8',
                secondary: '#93c90e',
                accent: '#eaaa00',
                error: '#ef426f',
            },
        },
    }
});
