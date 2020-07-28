<template>
    <div>
        
      <form @submit.prevent="handleSubmit" class="text-center" style="border-radius: 20px;background-color: rgb(8 213 194 / 5%);box-shadow: 0px 0px 30px 3px rgb(8 213 194 / 77%);padding: 20px;padding-top: 50px;height: auto;margin-top: 15vh;margin-right: 20vw;margin-left: 20vw;">
           
           <h2>Register</h2>
                     <hr />

            <div class="form-group">

                <input type="text" v-model="user.name" v-validate="'required'" name="name" placeholder="Name" class="form-control" style="text-align:center; margin-top: 30px" :class="{ 'is-invalid': submitted && errors.has('name') }" />
                <div v-if="submitted && errors.has('name')" class="invalid-feedback">{{ errors.first('name') }}</div>
            </div>
            <div class="form-group">

                <input type="text" v-model="user.email" v-validate="'required'" name="email" placeholder="Email" class="form-control" style="text-align:center; margin-top: 30px" :class="{ 'is-invalid': submitted && errors.has('email') }" />
                <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
            </div>
            <div class="form-group">

                <input type="text" @input = "valtozik" v-model="user.phone" v-validate="'required'" name="phone" placeholder="Phone" class="form-control" style="text-align:center; margin-top: 30px" :class="{ 'is-invalid': submitted && errors.has('phone') }" />
                <div v-if="submitted && errors.has('phone')" class="invalid-feedback">{{ errors.first('phone') }}</div>
                <div class="mt-2 bg-danger">{{error}}</div>
            </div>
            <div class="form-group">

                <input type="password" v-model="user.password" v-validate="{ required: true, min: 6 }" name="password" placeholder="Password" class="form-control" style="text-align:center; margin-top: 30px" :class="{ 'is-invalid': submitted && errors.has('password') }" />
                <div v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
            </div>
            <div class="form-group" style="padding-top:30px">
                <button class="btn btn-success btn-block" :disabled="status.registering">Register</button>
                <img v-show="status.registering" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                 <p style="padding-top:5px"/> 
                <router-link to="/login" class="btn btn-outline-dark btn-block">Cancel</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            user: {
                name: '',
                email: '',
                phone: '',
                password: ''
            },
            submitted: false,
            error: ''
        }
    },
    computed: {
        ...mapState('account', ['status'])
    },
    methods: {
        ...mapActions('account', ['register']),
        handleSubmit(e) {
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.register(this.user)
                }
            });
        },

        valtozik(e){
            e.preventDefault();
            this.user.phone = e.target.value.replace(/[^\d]/g, '')
            this.error = "Only numbers allowed"
            this.$forceUpdate();
        }
    }
};
</script>