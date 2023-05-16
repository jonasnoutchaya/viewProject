<template>
    <div>


        <div>
            <div>



                <div>

                    <errorAlert />
                </div>
                <div class="container expan">
                    <div class="row">
                        <div class="">
                            

                        </div>





                        <div class="col-3 mb-5 mt-5">
                            <div>
                                <form class="d-flex  ">
                                    <div class="row height d-flex justify-content-center align-items-center">
                                        <div class="search">
                                            <i class="fa fa-search"></i>
                                            <input class=" form-control  cherche3 " style="box-shadow : none;"
                                                :class="{ okay: this.inside, 'border-danger': !this.inside  }"
                                                ref="search" v-model="searchkey" @keyup="search_Drugs()" type="search"
                                                placeholder="Search" aria-label="Search">
                                            <button class="btn btn-outline-success recherche2 text-dark my_button "
                                                type="submit"> <i class="bi bi-search search "></i></button>
                                        </div>
                                    </div>
                                </form>
                                <div class="header-dropdown bg-white" id="list">
                                    <li v-for="item in users" :key="item._id">
                                       {{item}}
                                        
                                        <router-link :to="`/infoMedicament2/${item._id}`" v-if="this.symptomes == true">
                                            {{item.vertues}}
                                        </router-link>
                                    </li>
                                </div>
                            </div>
                        </div>

                        <div class="col-9">

                        </div>
                    </div>
                </div>

                <div class="container">





                    <div class="row shadow-sm p-3 mb-5 bg-light rounded ">
                        <div class="col-2 mt-3">
                            
                        </div>
                        <div class="col-1">
                            <i class="bi bi-person-fill  profil"></i>
                            <!-- <div id="app">
                            <div :style="{ backgroundColor: randomColor }" class="np-color-preview">

                               

                               
                            </div>
                        </div> -->
                        </div>
                       
                        <div class="col-2 mt-3">
                            <span class="firstname"> {{oneUser.firstName}} </span>
                        </div>
                        <div class="col-2 mt-3">
                            <span class="lastname"> {{oneUser.lastName}} </span>
                        </div>
                        
                        <div class="col-2 mt-3">
                            <span class="email"> {{oneUser.email}} </span>
                        </div>
                        <div class="col-2 mt-3">
                            <span class="email"> {{oneUser.contact}} </span>
                        </div>
                        <div class="col-2 mt-3">
                            
                        </div>

                    </div>

                    <div class="row">


                        <div class="col-6">
                            <div class="row shadow-sm p-3 mb-5 bg-light rounded ">



                                <div class="col-5">

                                </div>
                                <div class="col-2">
                                    <span class="quantite fw-bold"> Nom </span>
                                </div>

                                <div class="col-2">

                                </div>
                                <div class="col-2">
                                    <span class="quantite fw-bold"> prix </span>
                                </div>

                                <div class="col-1">

                                </div>

                            </div>
                        </div>
                        <div class="col-6">
                            <div class="row shadow-sm p-3 mb-5 bg-light rounded  ">



                                <div class="col-1">

                                </div>

                                <div class="col-1">
                                    <span class="pt fw-bold"> quantité </span>
                                </div>
                                <div class="col-2">

                                </div>
                                <div class="col-5">
                                    <span class="pt fw-bold"> date </span>
                                </div>
                                <div class="col-3">

                                </div>

                            </div>
                        </div>
                    </div>


                    <div class="row  ">
                        <div class="col-6">
                            <div class="row shadow-sm p-3 mb-5 bg-light rounded "
                                v-for="item in drug_info.display_drugs" :key="item._id">




                                <div class="col-5">

                                </div>
                                <div class="col-2">
                                    <span class="firstname"> {{item.titre}} </span>
                                </div>
                                <div class="col-2">

                                </div>
                                <div class="col-2">
                                    <span class="lastname"> {{item.prix}} fcfa </span>
                                </div>
                                <div class="col-1">

                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="row shadow-sm p-3 mb-5 bg-light rounded " v-for="new_item in purchases"
                                :key="new_item._id">
                                <div class="col-1">

                                </div>
                                <div class="col-1">
                                    <span class="firstname"> {{new_item.number}} </span>
                                </div>
                                <div class="col-2">

                                </div>
                                <div class="col-5">
                                    <span class="lastname"> {{this.setDate(new_item.createdAt)}} </span>
                                </div>
                                <div class="col-3">

                                </div>
                            </div>
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

//import headerPage2 from '@/components/headerPage2.vue';
import footerPage2 from '@/components/footerPage2.vue';
import moment from 'moment'
import { getOneBuy, getOneThing, getOneUser } from "@/services/UserService";


export default {
    name: 'allBuys',
    components: {
        //  headerPage2,
        footerPage2
    },

    /* date() {
         return {
             userId: this.$route.params.id,
             purchases: [],
             value: false
         };
     },*/

    data() {
        return {
            oneUser: [],
           // userId: this.$route.params.id,
            purchases: [],
            drugs: [],
            my_drugs: [],
            symptomes: false,
            inside: true,
            hasError: false,
            dates: [],
            value: false,
            users: [],
           // userId: this.$route.params.id,

            drug_info: {
                titre: '',
                prix: '',
                quantite: '',
                date: '',
                
                display_drugs: [],


            },


        }
    },
    methods: {

        setDate(value) {
            if (value) {
                return moment(String(value)).format('MM/DD/YYYY hh:mm')
            }
        },

        getOneThing(itemId) {
            getOneThing(itemId).then(response => {
                console.log("RRRRRRRRRRRRRRRRRRRRRRRR")
                
                this.drug_info.display_drugs.push(response)
                this.$store.commit('setpurchases_drugs', response.titre)
               // console.log(this.$store.state.purchases_drugs)


            })
        },
        getOneUser(itemId) {
            getOneUser(itemId).then(response => {
                console.log("okokokokokokokokokokokokokokokoko")
                console.log(response)
                this.oneUser = response


            })
        },
        /*  update_my_drugs() {
              for (var item of this.drugs) {
                  let i = 0; let j = 0;
                  for (var new_item of this.my_drugs) {
  
                      if (i == j) {
  
                          new_item.titre = item.titre;
                          new_item.prix = item.prix
  
                      }
                      j++
                  }
                  i++;
                  j = 0;
                  console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD")
                  console.log(this.my_drugs)
              }
          }*/
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
            this.drugs = []
            //console.log("voici le résultat!!!!:::::");
            // console.log(input);
            //let x = document.getElementsByClassName('animals');
            console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP")
            console.log(this.$store.state.purchases_drugs);
            for (var thing of this.$store.state.purchases_drugs) {
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
                    console.log("//////////////////////////////");
                    console.log(this.drugs);

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
                    // console.log(drug.titre);


                    //drugName = thing ;
                    //this.users = input;f
                    /* for( var user of this.users )
                     if(thing != user){
                     this.users.push(thing);
                     }*/
                } /*else if (thing.vertues.toLowerCase().includes(input)) {
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
                    // console.log(drug.titre);


                    //drugName = thing ;
                    //this.users = input;f
                     for( var user of this.users )
                     if(thing != user){
                     this.users.push(thing);
                     }
                    }*/


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
            // this.getFocus();
        }
    },
    mounted() {
        this.$store.commit('resetpurchases_drugs')
        // this.$store.commit('reset_All_drugs');
        this.inside = true
        // this.drugs = [];
        console.log("****************************************");
        //console.log(this.userId);
        getOneBuy(this.$store.state.user_Id).then(response => {
            console.log(" voici les  achats d'un utilisateur ::::::!!")
            console.log(response);
            this.purchases = response;
            for (var item of response) {
                var date = this.setDate(item.createdAt)
                this.$store.commit('setpurchasesDate', date)
                
                this.drug_info.quantite = item.number;
                this.drug_info.date = item.createdAt
                this.my_drugs.push(this.drug_info)
                this.getOneThing(item.drug_id)

                this.getOneUser(item.user_Id)

                // console.log("//////////////////////////////////////////////")
                // console.log(this.oneUser)
            }
            // this.update_my_drugs();
            //this.getOneUser(this.userId)


            console.log("///////////////////");
            console.log(this.my_drugs);

            /* for (var item of response) {
                 // item.createdAt = this.setDate(item.createdAt)
                 //console.log(item.createdAt);
                 this.purchases = [];
                 var one_buy = item;
                 this.purchases.push(one_buy)
                 for (var new_item of response) {
                     console.log(one_buy.createdAt)
                     if ((one_buy.createdAt = new_item.createdAt) && (one_buy._id != new_item._id)) {
                         if (this.purchases.length == 0) {
                             this.purchases.push(new_item)
                         } else if (this.purchases.length > 0) {
                             for (var buy_item of this.purchases) {
                                 if (buy_item == new_item) {
                                     this.value = true;
                                 }
                             }
                             if (this.value == false) {
                                 this.purchases.push(new_item)
 
                             }
                         }
 
                     }
 
                 }
                 console.log(this.purchases)
             }*/
        })
        /*for (var item of this.drugs) {
            let i = 0; let j = 0;
            for (var new_item of this.my_drugs) {

                if (i == j) {

                    new_item.titre = item.titre;
                    new_item.prix = item.prix

                }
                j++
            }
            i++;
            j = 0;
            console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD")
            console.log(this.my_drugs)
        }*/
    }


}




</script>
<style>
.profil {
    font-size: 50px;
}

ul {
    list-style-type: none;
    text-align: left;
}

li {
    list-style-type: none;
}
</style>