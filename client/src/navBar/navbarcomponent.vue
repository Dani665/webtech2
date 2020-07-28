<template>
<div>
  <b-navbar toggleable="lg" type="light" style="background-color: rgb(8 213 194 / 90%); border-radius: 0 0 15px 15px">
    <b-navbar-brand href="/">EmployeeDB</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      
         <b-nav-form>
         <router-link to="/create"> <b-button size="md" class="mx-1 my-sm-0" type="submit" variant="outline-dark"  >Create</b-button></router-link>
        </b-nav-form>
        
        <b-nav-form>
         <router-link to="/list"> <b-button size="md" class="mx-1 my-sm-0" type="submit" variant="outline-dark">List</b-button> </router-link>
        </b-nav-form>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

         <b-nav-form>
         <router-link to="/login"> <b-button size="md" class="my-1 my-sm-0" type="submit">Log out</b-button> </router-link>
        </b-nav-form>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
   export default {name: 'navbarcomponent'}
</script>


<style scoped>

</style>