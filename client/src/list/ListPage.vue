<template>
    <div id="app" class="text-center">
        <navbarcomponent></navbarcomponent>
         <p style="padding-top:5px"/> 
        <table class="table table-striped table-borders"
        style="border-radius: 20px;background-color: rgb(8 213 194 / 5%);box-shadow: 0px 0px 30px 3px rgb(8 213 194 / 77%);height: auto;">
            <thead>
                <tr>
                     <th>Name</th>
                     <th>Designation</th>
                     <th>Email</th>
                     <th>Phone</th>
                     <th>Age</th>
                     <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="Employee_alias in Employee.data" :key="Employee_alias._id"  >
                     <th>{{ Employee_alias.name}} </th>
                     <th>{{ Employee_alias.designation}}</th>
                     <th>{{ Employee_alias.email}}</th>
                     <th>{{ Employee_alias.phone}}</th>
                     <th>{{ Employee_alias.age}}</th>
                     <th> 
                            <router-link :to="{path: '/modify/' + Employee_alias._id}"  class="btn btn-secondary" style=" margin: 2px">  Modify </router-link>
                            <button @click.prevent="my_delete(Employee_alias._id)" class="btn btn-danger" style=" margin: 5px">  Delete</button>  </th>
                </tr> 
            </tbody>
            </table>
    </div>
</template>


<script>
import { mapState, mapActions } from 'vuex';
import navbarcomponent from '../navBar/navbarcomponent';
/*eslint-disable*/
import axios from 'axios';

export default {




            components: {navbarcomponent},
    data () {
        return {
            Employee: [],
        
        }
    },

    mounted(){
        axios.get('http://localhost:3000/api/employee/showall')
        .then((Response)=> {
            //alert('Sikeres');
            console.log(Response.data)
            this.Employee = Response.data;
        }).catch((error)=> {
            console.log(error); 
        })
    }, 
    computed: {
        ...mapState('account', ['status'])
    },
     methods: {

    my_delete(event)
    {
       axios.delete('http://localhost:3000/api/employee/delete/'+event)
       location.reload();
    },
        ...mapActions('account', ['create']),
    }

};
</script>