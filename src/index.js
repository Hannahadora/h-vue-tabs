import Tab from './components/Tab.vue'
import router from './router';

function plugin(app) {
    app.component('Tab', Tab);
    app.use(router)
}

export default {
    install: plugin,
    version: '__VERSION__',
    Tab,
};

