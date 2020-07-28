<template>

    <div>
     <navbarcomponent></navbarcomponent>
     
        <marquee scrollamount="5" behavior="alternate" style="border-radius: 20px;background-color: rgb(8 213 194 / 5%);box-shadow: 0px 0px 30px 3px rgb(8 213 194 / 77%);height: auto;margin-top: 15vh;margin-right: 10vw;margin-left: 10vw; font-size: 50px">
Hi {{account.user.name}}!</marquee>
       
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import navbarcomponent from '../navBar/navbarcomponent'

export default {
        components: {navbarcomponent},
    computed: {
        ...mapState({
            account: state => state.account,
            users: state => state.users.all
        })
    },
    created () {
        this.getAllUsers();
    },
    methods: {
        ...mapActions('users', {
            getAllUsers: 'getAll',
            deleteUser: 'delete'
        })
    }
};
</script>