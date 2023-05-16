<template>


  <h3> avez vous déjà un compte ?</h3>

  <div class="mt-5 mb-4">
      <h4> connectez vous !</h4>
  </div>

  <form class="bg-light">

      <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Adresse Email</label>
          <input type="email" class="form-control" v-model="email" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" style="box-shadow : none;">
      
      </div>
      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Mot De Passe</label>
          <input type="password" v-model="password" name="password" class="form-control" id="exampleInputPassword1" required style="box-shadow : none;"> 
      </div>

      <button @click="login()" type="submit" class="btn border-0 btn-primary connexion">
      <div v-if="loading" class="spinner-border spinner-border-sm"> </div>
      <span v-if="loading" class="px-1"> Connecxion en cours</span>
      <span v-else> Se Connecter</span>

      

  </button>

     
          
  </form>


  <div class="mt-5 bg-light">
    <router-link to="/adminPage">  <button class="btn bg-primary"> Admin</button></router-link>
  </div>

  <!--<div class="display-board">
      <h4>Users Created</h4>
      <div class="number">
      {{numberOfUsers}}
      </div>
      <div class="btn">
          <button @click='getAllUsers()' type="button" class="btn btn-warning">Get all Users</button>
      </div>
  </div>
  -->

  
</template>

<script>
//import VueLoadingButton from 'vue-loading-button';
//import { mapMutations } from "vuex";
export default {
  components:{
      //VueLoadingButton
  },
  name: 'DisplayBoard',
  /*props: ['numberOfUsers'],
  methods: {
      getAllUsers() {
          this.$emit('getAllUsers')
      }
  }*/
  data() {
      return{
          email:'',
          password: ''
      }
  },
  methods:{
      
      login() {
        this.loader();
          const payload= {
              email: this.email,
              password :this.password
          }

      
      this.$emit('login', payload);
     
      //this.clearForm();
      
      },
      clearForm(){
          this.email= "";
          this.password= "";
      },
      loader(){this.loading = !false
        setTimeout(() => {
          this.loading = true
        }, 2
        ) }
  }
}
</script>

<style>
    .form-control:focus{
        border: 1px solid #029900 !important;
    }
    .connexion{
        background-color:  #029900 !important ;
        color: white !important;
    }
</style>

