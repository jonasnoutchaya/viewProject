<template>

    <div>
        <div>



            <div>

                <errorAlert />
            </div>
            <div>


            </div>
            <div class="container container2">


                <div class="row shadow-sm p-3 mb-5 bg-light rounded commande " v-for="commande in commandes"
                    :key="commande._id">
                    <div class="col-1">
                        <i class="bi bi-person-fill   profil2"></i>
                        <!-- <div id="app">
                          <div :style="{ backgroundColor: randomColor }" class="np-color-preview">

                             

                             
                          </div>
                      </div> -->
                    </div>
                    <div class="col-1  ">
                        <span class="firstname "> {{ commande.nom }} </span>
                    </div>
                    <div class="col-1 ">


                        {{ commande.prenom }}



                    </div>
                    <div class="col-1 ">
                        <span class="lastname"> {{ commande.contact }} </span>
                    </div>
                    <div class="col-3 ">


                        {{ commande.date }}



                    </div>
                    <div class="col-1 ">
                        <span class="contact"> {{ commande.ville }} </span>
                    </div>
                    <div class="col-1 ">


                        {{ commande.quartier }}



                    </div>


                    <div class="col-2 " bg-light>
                        <span class="text-info"> {{ commande.idList.length }} </span> commandes

                    </div>
                    <div class="col-1 ">
                        <div class="col-2">


                            <CButton class="modifier mb-5 btn bg-info fw-bold myclass"
                                @click="showModal2(commande.idList, commande.group_id)">
                                <span class="pb-5 p_detail"> details </span>

                            </CButton>
                            <CModal backdrop="static" :visible="visibleStaticBackdropDemo"
                                @close="() => { visibleStaticBackdropDemo = false }">
                                <CModalHeader class="modal_header">

                                    <CModalTitle class="modal_header">
                                        Commande
                                    </CModalTitle>


                                </CModalHeader>
                                <CModalBody>
                                    <div class="container ">











                                        <div class="row  mb-5   " v-for="item in drug_info" :key="item._id">



                                            <div class="col-2">
                                                <img :src="(`${item.imageUrl}`)" class="card-img-top my_image2"
                                                    alt="image1" />
                                            </div>
                                            <div class="col-2">
                                                <span class="firstname"> {{ item.titre }} </span>
                                            </div>
                                            <div class="col-2"> </div>
                                            <div class="col-4">
                                                <span class="lastname"> {{ item.prix }} fcfa </span>
                                            </div>

                                        </div>
                                        <div class="bg-light mb-2 shadow-sm p-3 mb-5 bg-white rounded">
                                            <div class="row" v-for="detail of details" :key="detail._id">
                                                <div class="col-1"></div>
                                                <div class="col-3">{{ detail.title }}</div>
                                                <div class="col-1"></div>
                                                <div class="col-3"> {{ detail.number }} unitée(s) </div>
                                                <div class="col-4"></div>
                                            </div>
                                        </div>
                                        <div class="row  panier">
                                            <div class="row panier2 ">
                                                <div class=" panier3 mt-4">
                                                    <span class="titre">
                                                        Total du panier </span>
                                                </div>
                                            </div>
                                            <div class="row panier2 ">
                                                <div class=" panier3  mt-4 ">
                                                    Total produits : <span class="total"> {{ this.total_produit
                                                    }}</span>
                                                </div>
                                            </div>
                                            <div class="row panier2 ">


                                                <div class=" panier3  mt-4 ">
                                                  
                                                </div>
                                                <!--   <div class=" panier3  mt-4 ">
                                                    Identifiant de l'achat: <span class="total"> {{ this.groupId }} </span>
                                                </div> -->
                                            </div>
                                        </div>






                                    </div>
                                    <div class="container mt-3">


                                        <fieldset class="form-group bg-light">
                                            <div class="row bg-light">
                                                <legend class="col-form-label col-5 pt-0"> Statut de la commande
                                                </legend>
                                                <div class=" col-1"></div>
                                                <div class="col-5" v-if="this.statut_command == false">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="gridRadios"
                                                            id="gridRadios1" value="option1" checked>
                                                        <label class="form-check-label" for="gridRadios1">
                                                            En cours:
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input @click="(set_status)" class="form-check-input"
                                                            type="radio" name="gridRadios" id="gridRadios2"
                                                            value="option2">
                                                        <label class="form-check-label" for="gridRadios2">
                                                            Livrée
                                                        </label>
                                                    </div>

                                                </div>
                                                <div class="col-5" v-if="this.statut_command == true">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="gridRadios"
                                                            id="gridRadios1" value="option1">
                                                        <label class="form-check-label" for="gridRadios1">
                                                            En cours:
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input @click="(set_status)" class="form-check-input"
                                                            type="radio" name="gridRadios" id="gridRadios2"
                                                            value="option2" checked>
                                                        <label class="form-check-label" for="gridRadios2">
                                                            Livrée
                                                        </label>
                                                    </div>

                                                </div>
                                            </div>
                                        </fieldset>

                                    </div>
                                    <CToaster placement="top-end">
                                        <CToast v-for="(toast) in toasts " :key="toast.id">
                                            <CToastHeader closeButton>
                                                <span class="me-auto fw-bold">{{ toast.title }}</span>

                                            </CToastHeader>
                                            <CToastBody>
                                                {{ toast.content }}
                                            </CToastBody>
                                        </CToast>
                                    </CToaster>

                                    <CToaster placement="top-end">
                                        <CToast v-for="(toast) in toasts2 " :key="toast.id">
                                            <CToastHeader closeButton>
                                                <span class="me-auto fw-bold">{{ toast.title }}</span>

                                            </CToastHeader>
                                            <CToastBody class="bg-info">
                                                {{ toast.content }}
                                            </CToastBody>
                                        </CToast>
                                    </CToaster>
                                    <div class="container mt-5 ">


                                        <div class="row">
                                            <div class="col-2">

                                            </div>
                                            <div class="col-2">
                                                <CButton class="ml-5 mt-4" color="secondary"
                                                    @click="() => { visibleStaticBackdropDemo = false }">
                                                    Retour
                                                </CButton>
                                            </div>
                                            <div class="col-2">

                                            </div>
                                            <div class="col-2">
                                                <button type="button" @click='CreateLivraison(group_id)'
                                                    class="btn border-0 btn-primary mt-4 mr-5 envoyer2">
                                                    Modifier </button>
                                            </div>
                                            <div class="col-2"></div>
                                        </div>
                                    </div>



                                </CModalBody>

                            </CModal>

                        </div>
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
import { CToaster, CToast, CToastHeader, CToastBody } from '@coreui/vue';
import { CModal } from '@coreui/vue'
import { CModalTitle } from '@coreui/vue';
import { CModalHeader } from '@coreui/vue';
import { CModalBody } from '@coreui/vue';
//import { CModalFooter } from '@coreui/vue';
import { CButton } from '@coreui/vue';
import moment from 'moment';
/*import { CModal } from '@coreui/vue'
import { CModalTitle } from '@coreui/vue';
import { CModalHeader } from '@coreui/vue';
import { CModalBody } from '@coreui/vue';
import { CModalFooter } from '@coreui/vue';
import { CButton } from '@coreui/vue'*/
import { deleteOneCommande, getAll_Users, getOneCommande, getOneThing, deleteOneUser, getAllBuy, getAllCommande, CreateLivraison, getAllgroupedCommande, modifyCommande } from '../services/UserService.js';
//import headerPage2 from '@/components/headerPage2.vue';
import footerPage2 from '@/components/footerPage2.vue';
//import { prependToMemberExpression } from '@babel/types';

export default {
    components: {
        CModal,
        CButton,
        CToaster, CToast, CToastHeader, CToastBody,
        //  CModalFooter,
        CModalBody,
        CModalHeader,
        CModalTitle,
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
            user_commande: {
                idList: [],
                nom: '',
                prenom: '',
                contact: '',
                group_id: ''

            },
            group_ID: [],
            details: [],
            commandes: [],
            users: [],
            drugs: [],
            symptomes: false,
            inside: true,
            hasError: false,
            randomColor: "#ff0000",
            allUsers: [],
            visibleLiveDemo: false,
            toasts: [],
            myDate: '',
            val1: false,
            val2: false,
            visibleStaticBackdropDemo: false,
            drug_info: [],
            purchases: [],
            total_prix: '',
            total_produit: '',
            statut: '',
            toasts2: [],
            responses: [],
            goupId: '',
            statut_command: false,
            statut2: false,
            t: 0,



        }
    },


    methods: {
        deleteOneUser(item) {
            console.log("fonction appellée avec")
            deleteOneUser(item)
            this.getAll_Users();
        },
        set_status() {
            this.statut = true;
            this.statut2 = true;
            this.statut_command = true

        },
        createToast() {
            if (this.t != 0) {
                this.toasts.push({
                    title: 'RÉussit',
                    content: 'livraison effectuée'

                })
                this.t = 0;
            }
        },
        createToast3() {
            if (this.t != 0) {


                this.toasts2.push({
                    title: 'Echec !!',
                    content: ' Accune modification !'
                })
                this.t = 0;

            }
        },
        CreateLivraison(new_item) {
            this.t = 0;
            //  console.log("LLLLLLLIIIVVVVVVRRRRRRAAAAAIIII");
            console.log(new_item);
            if (this.statut2) {

                for (var item of this.responses) {
                    if (item.group_id == this.groupId) {

                        CreateLivraison(item).then(response => {
                            //console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRR22222222222222");

                            console.log(response);
                        })
                    }
                }
              //  this.t = 1;
                this.createToast();

                this.modifyCommande()

                this.statut2 = false;


                // this.deleteOneCommande();

            }
            else {
               // this.t = 1;
                this.createToast3();
                this.t = 0;

            }
        },
        modifyCommande() {
            for (var detail of this.details) {
                const item = detail._id
                const payload = {

                    livrer: this.statut





                };
                modifyCommande(item, payload).then(response => {
                    console.log(response);

                })
                    .catch(error => { console.log(error) })
            }


        },

        showModal2(item, group_id) {
            this.total_produit = item.length;
            this.t = 0;
            //  console.log(item)
            //  console.log(group_id);
            this.details = [];
            this.groupId = group_id;
            for (var detail of this.responses) {
                if (detail.group_id == group_id) {
                    this.statut = detail.livrer;
                    this.statut_command = detail.livrer
                    this.details.push(detail);
                }
            }
            //  console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIII");
            //console.log(this.statut)
            //console.log("DDDDDDDEEEEETAAAAAIIILLLLLSS")
            //console.log(this.details)
            //  this.statut = false;
            // console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIII")
            //   console.log(item)
            //   console.log(group_id)
            //this.getOneThing(item)
            for (var one_id of item) {


                this.getOneCommande(one_id, group_id)
                this.getOneThing(one_id);
            }
            this.visibleStaticBackdropDemo = true;
            this.set_totaux();
            getAllgroupedCommande(group_id).then(responses => {

                console.log("R22R2R2R2R2R2R22R2R2R2R2R2R")
                console.log(responses)
                this.total_prix = responses.prix_total;
               

                


            })

        },
        getOneCommande(item, group_id) {
            getOneCommande(item, group_id).then(response => {
                // console.log("EEEEEEEEEEEEEEEEE")
                this.purchases.push(response)
                //  console.log(response)
            })
                .catch(error => {
                    console.log(error)
                })
        },

        deleteOneCommande() {
            var new_commande = this.groupId
            for (var commande of this.responses) {
                if (commande.group_id == new_commande)
                    deleteOneCommande(new_commande).then(response => {
                        //  console.log("SSSSSSSSSSSSSSSSSSS")
                        console.log(response)
                    })
                        .catch(error => {
                            console.log(error)
                        })
            }
        },

        getOneThing(item) {
            this.drug_info = [];
            getOneThing(item).then(response => {
                // console.log("RRRRRRRRRRRR")
                //  console.log(response);
                this.drug_info.push(response)
            })
                .catch(error => {
                    console.log(error)
                });
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
            // let m = 0;
            //let i = 0;
            let input = this.searchkey;
            input = input.toLowerCase();
            let value = false;
            //console.log("voici le résultat!!!!:::::");
            // console.log(input);
            //let x = document.getElementsByClassName('animals');
            //  console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm")
            //  console.log(this.$store.state.usersEmail);
            for (var thing of this.$store.state.usersEmail) {

                // console.log(" voici le thing ::::::::::::::");
                //  console.log(thing);
                /*drugName = thing 
                for(var item of drugName){
                  if(thing== item){
                    drugs = thing;
                  }
                }*/
                if (thing.toLowerCase().includes(input)) {

                    //  console.log("voici le thing sélectionné:::::::::::");
                    //  console.log(thing);


                    if (this.drugs.length == 0) {
                        //  i++;
                        this.drugs.push(thing);
                        // console.log(" voici le contenu de drug :::::::::");
                        //    console.log(this.drugs);
                    } else if (this.drugs.length > 0) {

                        for (var drug of this.drugs)
                            if (drug != thing) {
                                value = true
                                //  console.log("voici le contenu de drug:::::::::::!!!!");
                                //  console.log(this.drugs);
                            }
                        if (value == true) {
                            this.drugs.push(thing);
                        }


                    }

                    //  console.log("voici le contenu de drug après tous les ajouts!!!:::::::::::");
                    // console.log(i);
                    //  console.log(m);
                    //  console.log(this.$store.state.All_drugs);
                    // console.log(drug);


                    //drugName = thing ;
                    //this.users = input;f
                    /* for( var user of this.users )
                     if(thing != user){
                     this.users.push(thing);
                     }*/
                } else if (thing.vertues.toLowerCase().includes(input)) {
                    this.symptomes = true;

                    // console.log("voici le vertues sélectionné:::::::::::");
                    //console.log(thing.vertues);


                    if (this.drugs.length == 0) {

                        this.drugs.push(thing);
                        // console.log(" voici le contenu de drug :::::::::");
                        // console.log(this.drugs);
                    } else if (this.drugs.length > 0) {

                        for (var drug2 of this.drugs)
                            if (drug2.vertues != thing.vetues) {
                                value = true
                                //console.log("voici le contenu de drug:::::::::::!!!!");
                                // console.log(this.drugs);
                            }
                        if (value == true) {
                            this.drugs.push(thing);
                        }


                    }

                    //console.log("voici le contenu de drug après tous les ajouts!!!:::::::::::");
                    //console.log(i);
                    //console.log(m);
                    //console.log(this.$store.state.All_drugs);
                    // console.log(drug);


                    //drugName = thing ;
                    //this.users = input;f
                    /* for( var user of this.users )
                     if(thing != user){
                     this.users.push(thing);
                     }*/
                }


            }
            //console.log("voici le contenu de drug:::::::::::!!!!");
            //console.log(this.drugs);
            this.users = this.drugs;


            //console.log("voici le contenu de users:::::::::::!!!!");
            //console.log(this.users)





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
            // console.log("voici la liste des médicaments:::::::::::::");
            //console.log(this.$store.state.All_drugs.thing);
            this.getFocus();
        }

    },
    mounted() {
        this.responses = [];

        // this.statut = false;
        this.commandes = [];

        this.$store.state.usersEmail = [];
        getAllCommande().then(response => {

            console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR")
            console.log(response);
            for (var item of response) {
                this.responses.push(item);
                this.val1 = false;
                //  this.val2 = false;
                if (this.group_ID.length == 0) {
                    this.group_ID.push(item.group_id)
                }
                else {
                    if (this.group_ID.length > 0) {
                        for (var new_item of this.group_ID) {
                            if (new_item == item.group_id) {
                                this.val1 = true;
                            }
                        }
                        if (this.val1 == false) {
                            this.group_ID.push(item.group_id);
                        }
                    }

                }




            }
            for (var item3 of this.group_ID) {
                getAllgroupedCommande(item3).then(responses => {

                    console.log("R22R2R2R2R2R2R22R2R2R2R2R2R")
                    console.log(responses)
                    responses.date = this.setDate(responses.date);

                    this.commandes.push(responses);


                })
            }
            for (var val of this.commandes) {
                console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
                console.log(this.commandes);
                val.date = this.setDate(val.date)
            }

            this.total_prix = 0;
            this.groupId = 0;
            this.total_prix = 0;
            this.total_produit = 0;
            for (var commande2 of response) {
                // this.total_prix = commande2.total;
                this.groupId = commande2.group_id
                //   this.total_produit = this.total_produit + commande2.number;
                // console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP")
                // console.log(this.total_prix);
                //  console.log(this.total_produit)
            }
            // console.log("CCCCCCCCCCCCCCCCCCCCCCCCC");
            //  console.log(this.commandes)

        });


        getAllBuy().then(response => {
            //  console.log(" voici les différents achats ::::::!!")
            //  console.log(response);
            for (var item of response) {

                item.createdAt = this.setDate(item.createdAt)
                //   console.log(item.createdAt);
                //this.myDate = item.createdAt
            }
            // console.log(this.myDate)
            // this.myDate.toISOString().split('T')[0]
            //this.myDate = this.setDate(this.myDate)
            //console.log(this.myDate);
        });





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

.titre {
    height: 100px !important;
}

.profil2 {
    font-size: 30px !important;

}

.header-dropdown {
    text-align: left;
}

li {
    list-style-type: none;
}

.panier {
    /* margin-top: 2px !important;
    margin-bottom: 2px !important;
    margin-left: 2px !important;
    text-align: left;
    border-bottom: 1px solid rgba(0, 0, 0, 0.288);
    height: 15px;*/
    background-color: aliceblue !important;
}

.commande {
    height: 50px !important;
}

.myclass {
    height: 30px !important;
}
</style>