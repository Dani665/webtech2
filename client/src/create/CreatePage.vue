<template>
    <div>
    <navbarcomponent></navbarcomponent>

        <form @submit.prevent="handleSubmit" class="text-center" style="border-radius: 20px;background-color: rgb(8 213 194 / 5%);box-shadow: 0px 0px 30px 3px rgb(8 213 194 / 77%);padding: 20px;padding-top: 20px;height: auto;margin-top: 2vh;margin-right: 20vw;margin-left: 20vw;">
          <h2>Create</h2>
          <hr />
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" v-model="name" name="name" class="form-control" :class="{ 'is-invalid': submitted && !name }" />
                <div v-show="submitted && !name" class="invalid-feedback">Name is required</div>
            </div>
            <div class="form-group">
                <label htmlFor="designation">Designation</label>
                <input type="text" v-model="designation" name="designation" class="form-control" :class="{ 'is-invalid': submitted && !designation}" />
                <div v-show="submitted && !designation" class="invalid-feedback">Designation is required</div>
            </div>
            <div class="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" v-model="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && !email }" />
                <div v-show="submitted && !email" class="invalid-feedback">Email is required</div>
            </div>
            <div class="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="text" v-model="phone" name="phone" class="form-control" :class="{ 'is-invalid': submitted && !phone }" />
                <div v-show="submitted && !phone" class="invalid-feedback">Phone is required</div>
            </div>
            <div class="form-group">
                <label htmlFor="age">Age</label>
                <input type="number" v-model="age" name="age" class="form-control" :class="{ 'is-invalid': submitted && !age }" />
                <div v-show="submitted && !age" class="invalid-feedback">Age is required</div>
            </div>
            <div class="form-group">
                <button class="btn btn-success btn-block">Create</button>
                <p style="padding-top:5px"/> 
                <router-link to="/" class="btn btn-outline-dark btn-block">Cancel</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import navbarcomponent from '../navBar/navbarcomponent'

export default {
            components: {navbarcomponent},
    data () {
        return {
            name: '',
            designation: '',
            email: '',
            phone: '',
            age: '',
            submitted: false
        }
    },
    computed: {
        ...mapState('account', ['status'])
    },


     methods: {
        ...mapActions('account', ['create']),
        handleSubmit (e) {
            alert('asd');
            this.submitted = true;
            const { name, designation, email, phone, age } = this;
            {
                
                {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, designation, email, phone, age })
    };
    console.log(requestOptions);
    return fetch(`http://localhost:3000/api/employee/store`, requestOptions)
        .then(()=> {
            console.log(requestOptions);
        })
        .then(success => {
            alert('Sikeres');
        });
}

            }
        }
    }

};
</script>