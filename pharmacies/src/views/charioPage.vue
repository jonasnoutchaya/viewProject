<template>

    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    </head>
    <div>

        <errorAlert />
    </div>
    <div>





    </div>
    <div class="container container2">
        <div class="row mt-5 mb-5">
            <div class="col-3">
                <h4 class="text-uppercase titre">
                    liste des achats

                </h4>
            </div>

            <div class="col-5">

            </div>
            <div class="col-4"> vous avez déjà un compte ? <router-link to="/dashBoardPage"> <button
                        class=" btn fs-8 bg-info  connexion4 ">
                        Connexion</button> </router-link>
            </div>
        </div>
        <div class="row">

            <div class="col-8">

                <div class="row shadow-sm p-3 mb-5 bg-white rounded  drug_buy" v-for="drug in drugs" :key="drug._id">

                    <div class="col-2">
                        <img :src="(`${drug.imageUrl}`)" class="card-img-top" alt="image1">
                    </div>
                    <div class="col-1">
                        <span class="nom"> {{ drug.titre }}</span>
                    </div>
                    <div class="col-1">

                    </div>
                    <div class="col-1">
                        <span class="quantié"> {{ drug.nombre }} </span>
                    </div>

                    <div class="col-2">
                        <span class="pu"> {{ drug.prix }} fcfa </span>
                    </div>
                    <div class="col-2">
                        <span class="pt"> </span>
                    </div>
                    <div class="col-1">
                        <i class="bi bi-plus-square bg-light my_icons mr-2" @click="incrementnumber(drug._id)"></i>
                        <i class="bi bi-dash-circle ml-1 my_icons " @click="decrementnumber(drug._id)"></i>
                    </div>
                    <div class="col-1" bg-light>
                        <i class="bi bi-trash3-fill my_icons " @click="deleteDrug(drug._id,drug.nombre)"></i>
                    </div>

                </div>
                <router-link to="/home"> <button class=" btn bg-info poursuivre"><span class="poursuivre"> CONTINUER LES
                            ACHATS</span></button></router-link>
            </div>
            <div class="col-4">
                <div class="conatiner  panier ">

                    <div class="row panier2 ">
                        <div class=" panier3 mt-4">
                            <span class="titre">
                                Total du panier </span>
                        </div>
                    </div>
                    <div class="row panier2 ">
                        <div class=" panier3  mt-4 ">
                            Total produits : <span class="total"> {{ this.total_produit }}</span>
                        </div>
                    </div>
                    <div class="row panier2 ">


                        <div class=" panier3  mt-4 ">
                            Total: <span class="total"> {{ this.prix_total }} fcfa</span>
                        </div>

                    </div>



                </div>
            </div>





        </div>
        <div class="row mt-5 mb-5 ">
            <div class="col-5">
                <h4 class="text-uppercase titre">
                    Finaliser la commande

                </h4>
            </div>
            <div class="col-9"></div>
        </div>


        <form @submit.prevent="onSubmit">
            <div class="row mb-5">




                <div class="col-4">
                    <div class=" mb-3">
                        <label for="validationDefault01">Nom</label>
                        <input type="text" v-model="commande.firstName" class="form-control" id="validationDefault01"
                            placeholder="Nom" required>
                    </div>
                    <div class=" mb-3">
                        <label for="validationDefault02">Prénom</label>
                        <input type="text" v-model="commande.lastName" class="form-control" id="validationDefault02"
                            placeholder="Prénom" required>
                    </div>
                    <div class=" mb-3">
                        <label for="validationDefault02">Contact</label>
                        <input type="text" v-model="commande.contact" class="form-control" id="validationDefault02"
                            placeholder="contact" required>
                    </div>
                    <div class=" mb-3">
                        <label for="validationDefaultUsername">Adresse e-mail</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupPrepend2">@</span>
                            </div>
                            <input type="text" v-model="commande.email" class="form-control"
                                id="validationDefaultUsername" placeholder="Adresse e-mail"
                                aria-describedby="inputGroupPrepend2" required>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class=" mb-3">
                        <label for="validationDefault03">Pays</label>
                        <input type="text" v-model="commande.pays" class="form-control" id="validationDefault03"
                            placeholder="Pays" required>
                    </div>
                    <div class=" mb-3">
                        <label for="validationDefault04">Ville</label>
                        <input type="text" v-model="commande.ville" class="form-control" id="validationDefault04"
                            placeholder="Ville" required>
                    </div>
                    <div class=" mb-3">
                        <label for="validationDefault05">Quartier</label>
                        <input type="text" class="form-control" id="validationDefault05" placeholder="Quartier"
                            required>
                    </div>
                </div>
                <div class="col-4">
                    <div class="conatiner  panier ">

                        <div class="row panier2 ">
                            <div class=" panier3 mt-4">

                            </div>
                        </div>
                        <div class="row panier2 ">
                            <div class=" panier3  mt-4 ">
                                <label class="form-check-label mr-5" for="invalidCheck2">
                                    Retrait en magasin sans frais
                                </label> <input class="form-check-input ml-5" v-model="commande.mode_payemantphy"
                                    type="checkbox" value="" id="invalidCheck2" />
                            </div>
                        </div>
                        <div class="row panier2 ">


                            <div class=" panier3  mt-4 ">
                                <div class=" panier3  mt-4 ">
                                    <router-link to="/home"> <button class=" btn bg-danger poursuivre"><span
                                                class="poursuivre"> Annuler
                                                </span></button></router-link>
                                </div>
                            </div>
                        </div>
                        <button class=" btn   ml-5 mt-5 mb-5 buy bg-info " @click="validateCommande()"> <span
                                class="buy2"> VALIDER LA COMMANDE </span></button>


                    </div>
                </div>
            </div>

        </form>
    </div>
    <CToaster placement="top-end">
        <CToast v-for="(toast) in toasts2 " :key="toast.id">
            <CToastHeader closeButton>
                <span class="me-auto fw-bold ">{{ toast.title }}</span>

            </CToastHeader>
            <CToastBody class="bg-danger">
                {{ toast.content }}
            </CToastBody>
        </CToast>
    </CToaster>

    <CToaster placement="top-end">
        <CToast v-for="(toast) in toasts3 " :key="toast.id">
            <CToastHeader closeButton>
                <span class="me-auto fw-bold ">{{ toast.title }}</span>

            </CToastHeader>
            <CToastBody class="bg-info">
                {{ toast.content }}
            </CToastBody>
        </CToast>
    </CToaster>
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
    
    <footer>
        <footerPage2 />
    </footer>



</template>
    
    
<script  >
import { CToaster, CToast, CToastHeader, CToastBody } from '@coreui/vue';
import { v4 as uuidv4 } from 'uuid';
import { getOneThing, getOneUser, validateCommande, validateBuy } from '../services/UserService.js';
//import headerPage2 from '@/components/headerPage2.vue';
import footerPage2 from '@/components/footerPage2.vue';

export default {
    name: 'messageriePage',
    components: {
        CToaster, CToast, CToastHeader, CToastBody,
        // headerPage2,
        footerPage2
    },
    data() {
        return {
            commande: {
                prix: '',
                title: '',
                firstName: '',
                lastName: '',
                email: '',
                contact: '',
                pays: '',
                ville: '',
                quatier: '',
                drug_id: '',
                number: 1,
                mode_payemantphy: '',
                mode_payemant: '',
                user_Id: this.$store.state.user_Id,
                total: '',
                group_id: '',
                livrer: '',

            },
            drug_to_buy: {
                drug_id: '',
                number: 1,
                group_id: '',
                user_Id: this.$store.state.user_Id
            },
            reussit: false,
            drugs: [],
            inside: false,
            itemId: '',
            allDrug: [],
            toasts: [],
            toasts2: [],
            toasts3: [],

            // drug_number: 1,


            total_produit: 0,
            prix_total: 0,
        }

    },
    methods: {
        deleteDrug(item) {

            //console.log("delete function called successfully");
            var i = 0;
            for (var drug of this.drugs) {

                if (item == drug._id) {
                    this.drugs.splice(i, 1);
                    this.$store.commit('decrementTrolly');
                    this.$store.commit('deleteDrugId', item);
                    this.total_produit = this.total_produit - drug.nombre;
                    this.prix_total = this.prix_total- (drug.prix * drug.nombre);

                    this.decrementnumber(item);


                } else {
                    i += 1;
                }

            }

        },
        validateBuy(item) {

            this.drug_to_buy.group_id = uuidv4();

            console.log("CCCCCCCCCCCCCCCCCCCCCCCCAAAALLLLLLLLLL")
            let new_allDrug = [];
            console.log("vvvvvvvvvvvvvvvvvvvvvvvv")
            console.log(new_allDrug)
            console.log("vvvvvvvvvvvvvvvvvvvvvvvv")
            console.log(this.drugs)
            if (this.drugs.length) {
                for (var one_drug of this.drugs) {








                    this.drug_to_buy.drug_id = one_drug._id;
                    console.log("èèèèèèèèèèèèèè")
                    //console.log(this.drug_to_buy.drug_id)
                    this.drug_to_buy.number = one_drug.nombre;
                    console.log("TTTTTTTTTTTTTTTTTTTTTTTT")
                    console.log(this.drug_to_buy)

                    item = this.drug_to_buy;


                    validateBuy(item).then(response => {
                        console.log("RERERERERERERERERERE")
                        console.log(response)
                        console.log("achat réussit ::::");
                        //this.$store.commit('resetTrolly');
                        //this.$store.commit('resetDrugList');
                        //this.allDrug = [];
                        // this.setChario()

                    })

                    // new_allDrug.push(this.drug_to_buy);





                }
                // item = new_allDrug;
                console.log("NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN")
                console.log(new_allDrug)
            }


            console.log(" VOICI LE PRODUIT EXPLOITABLE 22222 !!!!!!!!!!!!!!!!!!!!!!!!!");
            console.log(this.new_allDrug)

            /*if (this.allDrug.length == 0) {
                console.log("tableau vide");
                console.log(this.allDrug.length)
            } else {*/


            /*  var uuid = uuidv4();
              item = item.map((x) => {
                  return {
                      ...x,
                      group_id: uuid,
  
  
                  }
              })*/
            console.log(item)

            this.drug_to_buy.user_Id = this.$store.state.user_Id

            /* validateBuy(item).then(response => {
                 console.log(response)
                 console.log("achat réussit ::::");
                 this.$store.commit('resetTrolly');
                 this.$store.commit('resetDrugList');
                 this.allDrug = [];
                 // this.setChario()
                 
             })
            
             
             /*}*/

        },
        createToast() {
            this.toasts.push({
                title: 'Réussit',
                content: 'Commande enregistrée avec succès !'
            })
        },
        createToast2() {
            this.toasts2.push({
                title: 'Échec',
                content: 'la commande est déjà enregistrée  !'
            })
        },
        createToast3() {
            this.toasts2.push({
                title: 'Échec',
                content: ' Connectez avant de passer une commande !'
            })
        },
        validateCommande(item) {
            if(this.$store.state.token){
            if (this.reussit == false) {
                this.reussit = true;
                this.createToast();
                this.commande.livrer = false;
                this.commande.group_id = uuidv4();

                console.log("CCCCCCCCCCCCCCCCCCCCCCCCAAAALLLLLLLLLL")
                this.allDrug = [];
                console.log("vvvvvvvvvvvvvvvvvvvvvvvv")
                console.log(this.allDrug)
                console.log("vvvvvvvvvvvvvvvvvvvvvvvv")
                console.log(this.drugs)
                if (this.drugs.length) {
                    for (var one_drug of this.drugs) {



                        console.log("èèèèèèèèèèèèèè")
                        console.log(this.commande.drug_id)
                        console.log(one_drug._id)
                        this.commande.drug_id = one_drug._id;
                        this.commande.title = one_drug.titre;
                        this.commande.prix = one_drug.prix;

                        this.commande.drug_id = one_drug._id;
                        this.commande.total = this.prix_total
                        this.commande.number = one_drug.nombre

                        item = this.commande;

                        validateCommande(item).then(response => {
                            console.log(response)
                            console.log("achat réussit ::::");
                            this.$store.commit('resetTrolly');
                            this.$store.commit('resetDrugList');
                            //this.$store.commit('resetTrolly');
                            //this.$store.commit('resetDrugList');
                            // this.allDrug = [];
                            // this.setChario()
                        })



                    }

                }


                console.log(" VOICI LE PRODUIT EXPLOITABLE 22222 !!!!!!!!!!!!!!!!!!!!!!!!!");
                console.log(this.new_allDrug)

                /*if (this.allDrug.length == 0) {
                    console.log("tableau vide");
                    console.log(this.allDrug.length)
                } else {*/




                //this.commande.user_Id = this.$store.state.user_Id

                /* validateBuy(item).then(response => {
                     console.log(response)
                     console.log("achat réussit ::::");
                     this.$store.commit('resetTrolly');
                     this.$store.commit('resetDrugList');
                     this.allDrug = [];
                     // this.setChario()
                     
                 })*/


                /*}*/

            }
            else {
                this.createToast2();
            }
        }else{
            this.createToast3();
        }
        },

        incrementnumber(item) {
            console.log("AAAAAAAAAAAAAAAAA")
            console.log(item)
            // this.drug_number ++ ; 
            for (var drug of this.drugs) {
                if (item == drug._id) {
                    drug.nombre++;
                    this.total_produit++;
                    this.prix_total = this.prix_total + drug.prix;

                }
            }

        },
        decrementnumber(item) {
            console.log("AAAAAAAAAAAAAAAAA")
            console.log(item)
            //  drug_number -- ;
            for (var drug of this.drugs) {
                console.log("BBBBBBBBBBBBBBBBBBB")
                console.log(item)
                if (item == drug._id) {

                    if (drug.nombre > 1) {
                        console.log("AAAAAAAAAAAAAAAAA")
                        console.log(item)
                        drug.nombre--;
                        this.total_produit--;
                        this.prix_total = this.prix_total - drug.prix;
                        console.log(this.prix_total)
                    }
                }
            }

        },
        setChario() {

            this.new_allDrug = [];

            this.drugs = [];
            this.itemId = '';
            //this.rugs_id = [];

            for (var drugId of this.$store.state.drugList) {
                ////console.log(drugId);
                //console.log(" voici la liste des médicaments disponible dans $store state druglist :::!!  ");
                console.log(this.$store.state.drugList)
                this.itemId = drugId;
                //this.drug_id.push(this.itemId);
                //this.drug_to_buy = this.itemId;
                this.drug_to_buy.drug_id = this.itemId;
                this.new_allDrug.push(this.drug_to_buy)
                // console.log("voici une mon tableau :::::::::::::::::::::::::::::::::::::::!!")
                //console.log(this.$store.state.user_Id);
                console.log(this.drug_to_buy);
                ////console.log(this.allDrug);
                ////console.log(" VOICI LE PRODUIT EXPLOITABLE 22222 !!!!!!!!!!!!!!!!!!!!!!!!!");
                ////console.log(itemId);
                ////console.log(" VOICI LA FIN DU  EXPLOITABLE 2222222 !!!!!!!!!!!!!!!!!!!!!!!!!");
                getOneThing(this.itemId).then(response => {

                    this.oneUser = response;
                    response.number = 1;
                    //console.log(" VOICI LE PRODUIT SÉLECTIONNÉ !!!!!!!!!!!!!!!!!!!!!!!!!");
                    //console.log(response);
                    ////console.log(" VOICI L PRODUIT SÉLECTIONNÉ!!!!!!!!!!!!!!!!!!!!!!!!!");
                    //this.numberOfUsers = this.users.length
                    this.drugs.push(response);
                    //console.log(" voici la liste cmplète de produits que vous désirez acheter");
                    //console.log(this.drugs);
                });

            }
        },

    },

    mounted() {
        this.reussit = false;

        getOneUser(this.$store.state.user_Id).then(response => {
            console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR")
            console.log(response)
            this.commande = response
        });
        this.allDrug = [];
        console.log("voici le contenu de ALLDRUG au debut zzzzzzzzzzzzzzzzzzzzzz")
        console.log(this.allDrug);
        this.drugs = [];
        this.itemId = '';
        //this.rugs_id = [];

        for (var drugId of this.$store.state.drugList) {
            ////console.log(drugId);
            console.log(" voici la liste des médicaments disponible dans $store state druglist :::!!  ");
            //  console.log(this.$store.state.drugList)
            this.itemId = drugId;
            //this.drug_id.push(this.itemId);
            //this.drug_to_buy = this.itemId;
            //  this.drug_to_buy.drug_id = this.itemId;
            // this.allDrug.push(this.drug_to_buy)
            // console.log("voici une mon tableau :::::::::::::::::::::::::::::::::::::::!!")
            //console.log(this.$store.state.user_Id);
            //  console.log(this.drug_to_buy);
            //console.log(this.allDrug);
            //console.log(" VOICI LE PRODUIT EXPLOITABLE 22222 !!!!!!!!!!!!!!!!!!!!!!!!!");
            ////console.log(itemId);
            ////console.log(" VOICI LA FIN DU  EXPLOITABLE 2222222 !!!!!!!!!!!!!!!!!!!!!!!!!");
            getOneThing(this.itemId).then(response => {

                this.oneUser = response;
                response.nombre = 1;
                this.total_produit = response.nombre + this.total_produit;
                this.prix_total = response.nombre * response.prix + this.prix_total
                console.log(" VOICI LE PRODUIT SÉLECTIONNÉ !!!!!!!!!!!!!!!!!!!!!!!!!");
                console.log(response);
                ////console.log(" VOICI L PRODUIT SÉLECTIONNÉ!!!!!!!!!!!!!!!!!!!!!!!!!");
                //this.numberOfUsers = this.users.length
                this.drugs.push(response);
                //console.log(" voici la liste cmplète de produits que vous désirez acheter");
                //console.log(this.drugs);
            });

        }
        console.log("  HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
        console.log(this.drugs);

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
    font-weight: bold;
}

.drug_buy {
    border-right: 1px solid rgba(0, 0, 0, 0.288);

}

.my_icons:hover {
    color: #029900;
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

.panier2 {
    margin-top: 2px !important;
    margin-bottom: 2px !important;
    margin-left: 2px !important;
    text-align: left;

    height: 60px;
    width: 80%pxs;
}

.buy {
    margin-top: 5px;
    margin: auto;
    border-radius: 15px !important;
    font-size: x-small;
    background-color: #029900;
}

.buy2 {
    text-align: center !important;
}

.poursuivre {
    font-size: x-small;
    border-radius: 15px;

}

.panier3 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.151);
    width: 90% !important;
    padding-left: 10px !important;

}

.total {
    font-weight: bold;
    margin-left: 15px !important;
}

.connexion4 {

    border-radius: 15px !important;
}
</style>