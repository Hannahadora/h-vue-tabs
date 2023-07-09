import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Tab from './components/Tab.vue'
import Wrapper from './components/Wrapper.vue'

const app = createApp(App);

app.component('Tab', Tab);
app.component('Wrapper', Wrapper);

app.mount('#app');