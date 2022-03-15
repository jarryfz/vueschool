import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import { Vant } from './vant';

import './style/index.less';

let app = createApp(App);

Vant(app)

app.use(router);
app.use(store);
app.mount('#app');
