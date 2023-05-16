<template>
  <div class="container my_container2 mt-5">
    <div class="row">



      <div class="col-6 bg-light shadow-lg p-3 mb-5 bg-body rounded">
        <CreateUser @createUser="userCreate($event)" />
      </div>
      <div class="col-1">
        <!-- <DisplayBoard :numberOfUsers="numberOfUsers" @getAllUsers="getAllUsers()" />  -->
      </div>


      <div class="col-5 bg-light shadow-lg p-3 mb-5 bg-body rounded">
        <!-- <Users v-if="users.length > 0" :users="users" />  -->
        <DisplayBoard @login="userConnect($event)" />

      </div>
    </div>
    <CToaster placement="top-end">
      <CToast v-for="(toast) in toasts " :key="toast.id">
        <CToastHeader closeButton>
          <span class="me-auto fw-bold">{{toast.title}}</span>

        </CToastHeader>
        <CToastBody>
          {{ toast.content }}
        </CToastBody>
      </CToast>
    </CToaster>

    <CToaster placement="top-end">
      <div>
        <CToast v-for="(toast2) in toasts2 " :key="toast2.id">
          <CToastHeader closeButton>
            <span class="me-auto fw-bold bg-danger">{{toast2.title}}</span>

          </CToastHeader>
          <CToastBody>
            {{ toast2.content }}
          </CToastBody>
        </CToast>
      </div>
    </CToaster>
  </div>

</template>

<script>
//const axios = require('axios');
// import { getAllUsers } from '../services/UserService.js'
//import { mapMutations } from "vuex";
//import CreateUser from './CreateUser.vue'
import CreateUser from './CreateUser.vue';
import { CToaster, CToast, CToastHeader, CToastBody } from '@coreui/vue';
import DisplayBoard from './DisplayBoard.vue'
// import Users from './UsersPage.vue'
import { login, createUser } from '../services/UserService.js'
//import store from "@/store";
export default {
  name: 'dashBoardPage',
  components: {
    CToaster, CToast, CToastHeader, CToastBody,
    CreateUser,
    DisplayBoard,
    //Users
  },
  data() {
    return {
      users: [],
      toasts: [],
      //numberOfUsers: 0
    }
  },
  methods: {
    //...mapMutations(["setUser,setToken"]),
    // getAllUsers() {
    //    getAllUsers().then(response => {
    //     console.log("LES DONNÉES SONT  EXPLOITABLE !!!!!!!!!!!!!!!!!!!!!!!!!");
    //      console.log(response);
    //      console.log(" FIN DES DONÉES LES DONNÉES SONT  EXPLOITABLE !!!!!!!!!!!!!!!!!!!!!!!!!");
    //      this.users = response
    //      this.numberOfUsers = this.users.length
    //    })
    //  },
    userCreate(data) {
      console.log('data:::', data)
      createUser(data).then(response => {

        console.log("1111111111111111111111111111111111111111111111111111111");
        console.log(response);
        console.log("22222222222222222222222222222222222222222222222222222222");


        /*const userId = response.userConnected.userId;
        console.log("userId::::");
        console.log(userId);
        console.log("token :::::");
        const token = response.token;
        console.log(token);

        this.$store.commit('setUser', userId);
        this.$store.commit('setToken', token);
        this.$router.push('/home');*/

        this.getAllUsers();
      });
    },
    createToast() {
      this.toasts.push({
        title: 'CONNEXION',
        content: 'vous etes connecté !'
      })
    },
    createToast2() {
      this.toasts.push({
        title: 'CONNEXION',
        content: 'echec ! '
      })
    },
    
    userConnect(data) {

      login(data)
        .then(
          
          response => {
            this.createToast();
          console.log("1111111111111111111111111111111111111111111111111111111");

          //this.$store.commit('setUresponse.data.token.userId);
          ///console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB");
          //console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
          //console.log(this.$store.state.user_Id);

          // console.log(response.userId);
          console.log(response.userConnected.userId);
          console.log(response.userConnected.firstName);
          console.log("22222222222222222222222222222222222222222222222222222222");
          const userId = response.userConnected.userId;
          const userName = response.userConnected.firstName
          this.$store.commit('setUserName', userName);
          console.log("userId::::");
          console.log(userId);
          console.log("token :::::");
          const token = response.token;
          console.log(token);

          this.$store.commit('setUser', userId);
          this.$store.commit('setToken', token);
          console.log("3333333333333333333333333333333333333333333333333333333333");
          //console.log(axios.defaults.headers.common['Authorization'] );
          this.$router.push('/home');
          this.createToast();
        })
        .catch(error => {
          this.createToast2();
          console.log(error);
        });
    }
  }
}
  // mounted permet de d'appeler une fonction automatiquement de chargment de la page
  //  mounted() {
  //    this.getAllUsers();
  //  }

</script>