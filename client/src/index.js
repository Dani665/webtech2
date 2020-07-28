import Vue from 'vue';
import VeeValidate from 'vee-validate';

import { store } from './_store';
import { router } from './_helpers';
import App from './app/App';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VeeValidate);

// setup fake backend
//import { configureFakeBackend } from './_helpers';
//configureFakeBackend();

Vue.component('navbar-component', {
    template: '<nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">   <a class="navbar-brand" href="#">ACME INTL</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> </nav>',
  })


new Vue({
    el: '#app',
    router,
   store,
    render: h => h(App)
});