import Tab from './components/Tab.vue'

function plugin(app) {
    app.component('Tab', Tab);
}

export default {
    install: plugin,
    version: '__VERSION__',
    Tab,
};

