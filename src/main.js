import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import ButtonDefault from '@/components/FormControls/ButtonDefault.vue';

const application = createApp(App).use(store).use(router);

application.component('ButtonDefault', ButtonDefault);

application.mount('#app');