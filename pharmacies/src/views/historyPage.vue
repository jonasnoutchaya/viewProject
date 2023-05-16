<template>
    <div>


        <div>
            <div>



                <div>
                    
                    <errorAlert />
                </div>
                <div class="container">
                    <div class=" row shadow mt-0 mb-5 bg-bottom rounded ">
                        <div class="col-2">

                        </div>
                        <div class="col-4">
                            avatar
                        </div>
                        <div class="col-2">
                            nom
                        </div>
                        <div class="col-2">
                            prenom
                        </div>
                        <div class="col-2">

                        </div>

                    </div>



                    <div class="row-6">
                        <div class=" row shadow mt-0 mb-5 bg-bottom rounded ">



                            <div class="col-">

                            </div>
                            <div class="col-4">
                                avatar
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="row shadow mt-0 mb-5 bg-bottom rounded">




                                <div class="col-2">
                                    {{oneUser.firstName}}
                                </div>
                                <div class="col-2">
                                    {{oneUser.lastName}}
                                </div>
                                <div class="col-2">
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <div class="row">


                    <div class="col-6">
                        <div class="row shadow mt-0 mb-5 bg-bottom rounded ">



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
                        <div class="row shadow mt-0 mb-5 bg-bottom rounded ">



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
                        <div class="row shadow mt-0 mb-5 bg-bottom rounded " v-for="item in drugs" :key="item._id">




                            <div class="col-5">

                            </div>
                            <div class="col-2">
                                <span class="firstname"> {{item.titre}} </span>
                            </div>
                            <div class="col-2">

                            </div>
                            <div class="col-2">
                                <span class="lastname"> {{item.prix}} </span>
                            </div>
                            <div class="col-1">

                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row shadow mt-0 mb-5 bg-bottom rounded " v-for="new_item in purchases"
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
import { getAllBuy, getOneThing, getOneUser } from "@/services/UserService";


export default {
    name: 'historyPage',
    components: {
       // headerPage2,
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
            purchases: [],
            drugs: [],
            my_drugs: [],
            drug_info: {
                titre: '',
                prix: '',
                quantite: '',
                date: ''
            },

            value: false,
            userId: this.$route.params.id,
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
                this.drugs.push(response)



            })
        },
        getOneUser(itemId) {
            getOneUser(itemId).then(response => {
                this.oneUser.push(response)


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
    },
    mounted() {

        getAllBuy().then(response => {
            console.log(" voici les  achats d'un utilisateur ::::::!!")
            console.log(response);
            this.purchases = response;
            for (var item of response) {
                this.drug_info.quantite = item.number;
                this.drug_info.date = item.createdAt
                this.my_drugs.push(this.drug_info)
                this.getOneThing(item.drug_id)

                this.getOneUser(item.user_Id)

                // console.log("//////////////////////////////////////////////")
                // console.log(this.oneUser)
            }
            // this.update_my_drugs();


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