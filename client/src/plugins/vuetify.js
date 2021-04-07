import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#005cd8',     // blue
                secondary: '#93c90e',   // green
                accent: '#994878',      // purple
                error: '#ef426f',       // pinkish
                info: '#eaaa00',        // yellow
                success: "#48a23f",     // green
                warning: "#e63b11",     // orange
                vert_linky: '#cce821',
                white: '#ffffff',
                black: '#575757',
                aqua: '#0032a9',
                sky: '#00a3e0',
                brown: '#a39382',
                blue_grey: '#688197',
                grey: '#98a4ae'
            },
        },
    }
});
