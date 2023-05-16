<template>

    <div>
        <div>



            <div>

                <errorAlert />
            </div>
            <div>


            </div>
            <div class="container container2">
            

                <div class="row shadow-sm p-3 mb-5 bg-light rounded " v-for="user in allUsers" :key="user._id">
                    <div class="col-1">
                        <i class="bi bi-person-fill  profil"></i>
                        <!-- <div id="app">
                            <div :style="{ backgroundColor: randomColor }" class="np-color-preview">

                               

                               
                            </div>
                        </div> -->
                    </div>
                    <div class="col-2 mt-3">
                        <span class="firstname"> {{user.firstName}} </span>
                    </div>
                    <div class="col-1 mt-3">
                        <span class="lastname"> {{user.lastName}} </span>
                    </div>
                    <div class="col-1 mt-3">
                        <span class="contact"> {{user.contact}} </span>
                    </div>
                    <div class="col-3 mt-3">
                        <span class="email"> {{user.email}} </span>
                    </div>
                    <div class="col-1 mt-3">

                        <router-link :to=" `/allbuys/${user._id}`"> <i class="bi bi-cart my_icons"></i> </router-link>


                    </div>
                    <!--<div class="col-1 mt-3">
                        <span class="supprimer">
                            <router-link :to="`/userMessages/${user._id}/${user.firstName}`">
                                <i class="bi bi-chat-left-text my_icons"></i>
                            </router-link>
                        </span>
                    </div> -->

                    <div class="col-1 mt-3" bg-light>

                        
                    </div>
                    <div class="col-1 mt-3">
                      
                    </div>

                </div>


            </div>
            <footerPage2 />
        </div>
    </div>
    <div>

    </div>
</template>
<script>
import moment from 'moment'
/*import { CModal } from '@coreui/vue'
import { CModalTitle } from '@coreui/vue';
import { CModalHeader } from '@coreui/vue';
import { CModalBody } from '@coreui/vue';
import { CModalFooter } from '@coreui/vue';
import { CButton } from '@coreui/vue'*/
import { getAll_Users, deleteOneUser, getAllBuy } from '../services/UserService.js';
//import headerPage2 from '@/components/headerPage2.vue';
import footerPage2 from '@/components/footerPage2.vue';

export default {
    components: {
       /* CModal,
        CButton,
        CModalFooter,
        CModalBody,
        CModalHeader,
        CModalTitle,*/
        //headerPage2,
        footerPage2,

    },
    name: 'allUserPage',
    data() {
        return {
            
            users: [],
            drugs: [],
            symptomes: false,
            inside: true,
            hasError: false,
            randomColor: "#ff0000",
            allUsers: [],
            visibleLiveDemo: false,
            myDate: ''
        }
    },


    methods: {
        deleteOneUser(item) {
            console.log("fonction appellée avec")
            deleteOneUser(item)
            this.getAll_Users();
        },

        getAll_Users() {
            this.allUsers = []
            getAll_Users().then(response => {
                //console.log("voici la liste des commentaires !!!!!!!!!!!!!!!!!!!!!!!!!");
                // console.log(response);
                //console.log(" voici la fin de la liste des commentaires  !!!!!!!!!!!!!!!!!!!!!!!!!");
                this.allUsers = response;
                //console.log(" voici la fin de la liste des commentaires  !!!!!!!!!!!!!!!!!!!!!!!!!");
                //console.log(this.comments);
                // this.numberOfComments = this.comments.length;

            });

        },
        getRandomColor() {
            this.randomColor = this.generateRandomHexColor();
        },
        generateRandomHexColor() {
            const randomColor =
                "#" + Math.floor(Math.random() * 16777215).toString(16);
            if (randomColor.length !== 7) {
                return this.generateRandomHexColor();
            } else {
                return randomColor;
            }
        },
        setDate(value) {
            if (value) {
                return moment(String(value)).format('MM/DD/YYYY hh:mm')
            }
        },

        search_Drugs() {
            this.symptomes = false;
            this.inside = true;
            //let drugName =[];
            //let drugs = [];
            let m = 0;
            let i = 0;
            let input = this.searchkey;
            input = input.toLowerCase();
            let value = false;
            //console.log("voici le résultat!!!!:::::");
            // console.log(input);
            //let x = document.getElementsByClassName('animals');
            console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm")
            console.log(this.$store.state.usersEmail);
            for (var thing of this.$store.state.usersEmail) {
                m++;
                console.log(" voici le thing ::::::::::::::");
                console.log(thing);
                /*drugName = thing 
                for(var item of drugName){
                  if(thing== item){
                    drugs = thing;
                  }
                }*/
                if (thing.toLowerCase().includes(input)) {

                    console.log("voici le thing sélectionné:::::::::::");
                    console.log(thing);


                    if (this.drugs.length == 0) {
                        i++;
                        this.drugs.push(thing);
                        console.log(" voici le contenu de drug :::::::::");
                        console.log(this.drugs);
                    } else if (this.drugs.length > 0) {

                        for (var drug of this.drugs)
                            if (drug != thing) {
                                value = true
                                console.log("voici le contenu de drug:::::::::::!!!!");
                                console.log(this.drugs);
                            }
                        if (value == true) {
                            this.drugs.push(thing);
                        }


                    }

                    console.log("voici le contenu de drug après tous les ajouts!!!:::::::::::");
                    console.log(i);
                    console.log(m);
                    console.log(this.$store.state.All_drugs);
                    // console.log(drug);


                    //drugName = thing ;
                    //this.users = input;f
                    /* for( var user of this.users )
                     if(thing != user){
                     this.users.push(thing);
                     }*/
                } else if (thing.vertues.toLowerCase().includes(input)) {
                    this.symptomes = true;

                    console.log("voici le vertues sélectionné:::::::::::");
                    console.log(thing.vertues);


                    if (this.drugs.length == 0) {
                        i++;
                        this.drugs.push(thing);
                        console.log(" voici le contenu de drug :::::::::");
                        console.log(this.drugs);
                    } else if (this.drugs.length > 0) {

                        for (var drug2 of this.drugs)
                            if (drug2.vertues != thing.vetues) {
                                value = true
                                console.log("voici le contenu de drug:::::::::::!!!!");
                                console.log(this.drugs);
                            }
                        if (value == true) {
                            this.drugs.push(thing);
                        }


                    }

                    console.log("voici le contenu de drug après tous les ajouts!!!:::::::::::");
                    console.log(i);
                    console.log(m);
                    console.log(this.$store.state.All_drugs);
                    // console.log(drug);


                    //drugName = thing ;
                    //this.users = input;f
                    /* for( var user of this.users )
                     if(thing != user){
                     this.users.push(thing);
                     }*/
                }


            }
            console.log("voici le contenu de drug:::::::::::!!!!");
            console.log(this.drugs);
            this.users = this.drugs;


            console.log("voici le contenu de users:::::::::::!!!!");
            console.log(this.users)





            this.drugs = [];
            //this.users.push(drugName);
            //console.log(drugName);
            // for (i = 0; i < x.length; i++) { 
            //     if (!x[i].innerHTML.toLowerCase().includes(input)) {
            //         x[i].style.display="none";
            //     }
            //     else {
            //         x[i].style.display="list-item";                 
            //     }
            // }
            if (!input) {
                this.users = [];
            }
            if (this.users.length == 0) {
                if (!input) {
                    this.inside = true;
                } else {
                    this.inside = false;
                }

            }
            console.log("voici la liste des médicaments:::::::::::::");
            console.log(this.$store.state.All_drugs.thing);
            this.getFocus();
        }

    },
    mounted() {


        this.$store.state.usersEmail = [];
        getAll_Users().then(responses => {
            //console.log("voici la liste des commentaires !!!!!!!!!!!!!!!!!!!!!!!!!");
            // console.log(response);
            //console.log(" voici la fin de la liste des commentaires  !!!!!!!!!!!!!!!!!!!!!!!!!");
            this.allUsers = responses;
            for (var response of responses) {
                this.$store.commit('setusersEmail', response.email);
            }
            console.log("//////////////////////////////////////////////");
            console.log(this.$store.state.usersEmail)
            //console.log(" voici la fin de la liste des commentaires  !!!!!!!!!!!!!!!!!!!!!!!!!");
            //console.log(this.comments);
            // this.numberOfComments = this.comments.length;

        });
        getAllBuy().then(response => {
            console.log(" voici les différents achats ::::::!!")
            console.log(response);
            for (var item of response) {
                item.createdAt = this.setDate(item.createdAt)
                console.log(item.createdAt);
                //this.myDate = item.createdAt
            }
            // console.log(this.myDate)
            // this.myDate.toISOString().split('T')[0]
            //this.myDate = this.setDate(this.myDate)
            //console.log(this.myDate);
        })

    }
}
</script>


<style>
.mini_chario2 {
    width: 20px;
    height: 20px;
}

.container2 {
    margin-top: 20px !important;
}

 .titre{
    height: 100px !important;
}

.profil {
    font-size: 50px !important;
}
.header-dropdown{
    text-align: left;
}
li{
    list-style-type: none;
}
</style>