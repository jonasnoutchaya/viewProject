<template>

    <div class="container">
        <div class="row">
            <div class="col-3">

            </div>
            <div class="col-6">



                <h3> avez vous déjà un compte ?</h3>

                <div class="mt-5 mb-4">
                    <h4> connectez vous !</h4>
                </div>

                <form class="bg-light">

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Adresse Email</label>
                        <input type="email" class="form-control" v-model="email" name="email" id="exampleInputEmail1"
                            aria-describedby="emailHelp" style="box-shadow : none;">
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Mot De Passe</label>
                        <input type="password" v-model="password" name="password" class="form-control"
                            id="exampleInputPassword1" required style="box-shadow : none;">
                    </div>

                    <button @click="userConnect()" type="submit" class="btn border-0 btn-primary connexion">
                        <div v-if="loading" class="spinner-border spinner-border-sm"> </div>
                        <span v-if="loading" class="px-1"> Connecxion en cours</span>
                        <span v-else> Se Connecter</span>



                    </button>



                </form>


                <div class="mt-5 bg-light">
                    <router-link to="/"> <button class="btn bg-primary"> Retour</button></router-link>
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

            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>
  
<script>
import { login } from '../services/UserService.js'
//import VueLoadingButton from 'vue-loading-button';
//import { mapMutations } from "vuex";
export default {
    components: {
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
        return {
            email: '',
            password: ''
        }
    },
    methods: {







        clearForm() {
            this.email = "";
            this.password = "";
        },
      /*  loader() {
            this.loading = !false
            setTimeout(() => {
                this.loading = true
            }, 2
            )
        }*/

        userConnect(data) {
            data = {
                email: this.email,
                password: this.password
            },
                login(data)
                    .then(response => {
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
                        this.$store.commit('setAdmin');
                        console.log("3333333333333333333333333333333333333333333333333333333333");
                        //console.log(axios.defaults.headers.common['Authorization'] );
                        this.$router.push('/allUsersPage');
                    })
                    .catch(error => {
                        console.log(error);
                    });
        }
    }

}
</script>
  
<style>
.form-control:focus {
    border: 1px solid #029900 !important;
}

.connexion {
    background-color: #029900 !important;
    color: white !important;
}
</style>
  
  