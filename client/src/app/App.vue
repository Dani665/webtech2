<!-- <template>
    <div class="jumbotron">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template> -->

<template>
    <div >
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import navbarcomponent from '../navBar/navbarcomponent'
import axios from 'axios'

export default {

    name: 'app',
    components: {navbarcomponent},
    computed: {
        ...mapState({
            alert: state => state.alert
        })
    },
    methods: {
        ...mapActions({
            clearAlert: 'alert/clear' 
        })
    },
    watch: {
        $route (to, from){
            // clear alert on location change
            this.clearAlert();
        }
    } 
};
</script>