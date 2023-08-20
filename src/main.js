import { createApp } from 'vue'
import App from './App.vue'
import router from './index'
//implemented router

//.use(router) uses the VueRouter instance created earlier
//and attaches it to the Vue application.
//the '.use()' method is a Vue.js method that allows you to install
//Vue plugins. In this case, you're installing the Vue Router plugin to enable
//routing capabilities in your Vue application.
createApp(App).use(router).mount('#app')
