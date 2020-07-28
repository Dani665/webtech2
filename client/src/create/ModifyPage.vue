<template>
    <div>
    <navbarcomponent></navbarcomponent>

        <form @submit.prevent="handleSubmit"  style="border-radius: 20px;background-color: rgb(8 213 194 / 5%);box-shadow: 0px 0px 30px 3px rgb(8 213 194 / 77%);padding: 20px;padding-top: 20px;height: auto;margin-top: 2vh;margin-right: 20vw;margin-left: 20vw;">
          <h2>Modify</h2>    
                    <hr />
      
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" v-model="Employee.name" name="name"  class="form-control"  />
                <div v-show="submitted && !name" class="invalid-feedback">Name is required</div>
            </div>
            <div class="form-group">
                <label htmlFor="designation">Designation</label>
                <input type="text" v-model="Employee.designation" name="designation" class="form-control"  />
                <div v-show="submitted && !designation" class="invalid-feedback">Designation is required</div>
            </div>
            <div class="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" v-model="Employee.email" name="email" class="form-control"  />
                <div v-show="submitted && !email" class="invalid-feedback">Email is required</div>
            </div>
            <div class="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="text" @input = "valtozik" v-model="Employee.phone" name="phone" class="form-control"  />
                <div v-show="submitted && !phone" class="invalid-feedback">Phone is required</div>
                <div class="mt-2 bg-danger">{{error}}</div>

            </div>
            <div class="form-group">
                <label htmlFor="age">Age</label>
                <input type="number" v-model="Employee.age" name="age" class="form-control" />
                <div v-show="submitted && !age" class="invalid-feedback">Age is required</div>
            </div>
            <div class="form-group">
                <button class="btn btn-success btn-block">Modify</button>
                <p style="padding-top:5px"/> 
                <router-link to="/list" class="btn btn-outline-dark btn-block">Cancel</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import navbarcomponent from '../navBar/navbarcomponent'
import axios from 'axios'

export default {
            components: {navbarcomponent},
    data () {
        return {
            Employee: {},
            name: '',
            designation: '',
            email: '',
            phone: '',
            age: '',
            submitted: false
        }
    },
    

     created(){
         let apiURL = `http://localhost:3000/api/employee/show/${this.$route.params.id}`;
        axios.get(apiURL)
        .then((Response)=> {
            console.log(Response.data.response)
            this.Employee = Response.data.response;
            //alert(this.Employee);
        }).catch((error)=> {
            console.log(error); 
        })
    }, 
     methods: {
        handleSubmit () {
            console.log(this.Employee);
            this.submitted = true;
                
    console.log();
    let apiURL = `http://localhost:3000/api/employee/update/${this.$route.params.id}`;
        axios.put(apiURL, this.Employee)
        .then(()=> {
            console.log("lol");
        })
        .then(success => {
            alert('Sikeres');
            location.href = "/#/list"
        });
        
},
        valtozik(e){
            e.preventDefault();
            this.Employee.phone = e.target.value.replace(/[^\d]/g, '')
            this.error = "Only numbers allowed"
            this.$forceUpdate();
        }


            }  
};
</script>