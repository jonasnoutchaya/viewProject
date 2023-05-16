<template>
  <div>


      <div>
          <div>



              <div>

                  <errorAlert />
              </div>
              <div class="container expan">
                  <div class="row ">
                      <div class="col-3  mb-5 mt-5">
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
                              <div class="header-dropdown bg-white" v-if="users.length" id="list">
                                  <li v-for="item in users" :key="item._id">
                                      <router-link :to="`/infoMedicament2/${item._id}`"
                                          v-if="this.symptomes == false"> {{item.titre}}
                                      </router-link>
                                      <router-link :to="`/infoMedicament2/${item._id}`" v-if="this.symptomes == true">
                                          {{item.vertues}}
                                      </router-link>
                                  </li>
                              </div>
                          </div>

                      </div>
                      <div class="col-7">

                      </div>

                      <div class="col-2 mt-5 mb-5">
                          <router-link to="/myDashBoardPage"> <button class=" btn ajouter_medoc"> Ajouter </button>
                          </router-link>
                      </div>





                      <div class="row  ">
                          <div class="row shadow-sm p-3 mb-5 bg-light rounded  drug_buy" v-for="drug in allDrugs"
                              :key="drug._id">

                              <div class="col-2 ">
                                  <router-link :to="`/detailsPage/${drug._id}`">     <img :src="(`${drug.imageUrl}`)" class="card-img-top drug_image" alt="image1"> </router-link>
                              </div>
                              <div class="col-1 mt-4">

                              </div>
                              <div class="col-2 my-4">
                                  <span class="nom"> {{drug.titre}}</span>
                              </div>

                              <div class="col-2 mt-4">
                                  <span class="quantié mt-4"> {{drug.quantite}} </span>
                              </div>


                              <div class="col-1 mt-4">
                                  <span class="pt"> {{drug.prix}} Fcfa </span>
                              </div>
                              <div class="col-1 mt-4">

                              </div>
                              <div class="col-1 mt-3">

                                  <CButton class="modifier btn bg-light fw-bold myclass"
                                      @click="showModal2(drug._id) "><i class="bi bi-pen my_icons"></i>
                                  </CButton>
                                  <CModal backdrop="static" :visible="visibleStaticBackdropDemo"
                                      @close="() => { visibleStaticBackdropDemo = false }">
                                      <CModalHeader class="modal_header">

                                          <CModalTitle class="modal_header">
                                              Modifier un produit
                                          </CModalTitle>


                                      </CModalHeader>
                                      <CModalBody class=" bg-light">

                                          <form class="bg-light">

                                              <div class="mb-3 bg-light">
                                                  <label for="nom" class="form-label">Nom du médicament</label>
                                                  <input type="text" v-model="medoc.titre" name="titre"
                                                      class="form-control" id="titre">
                                                  <label for="quantite" class="form-label"> Quantité </label>
                                                  <input type="text" v-model="medoc.quantite" name="quantié"
                                                      class="form-control" id="quantité" />

                                                  <label for="categorie" class="form-label"> Catégorie</label>
                                                  <input type="text" v-model="medoc.categorie" name="categorie"
                                                      class="form-control" id="categorie">




                                                  <label for="vertues" class="form-label"> Vertues </label>
                                                  <input type="vertues" v-model="medoc.vertues" name="vertues"
                                                      class="form-control" id="vertues" />

                                                  <label for="permption" class="form-label"> Date de
                                                      péremption</label>
                                                  <input type="date" v-model="medoc.peremption" name="peremption"
                                                      class="form-control" id="peremption" />
                                                  <label for="composition" class="form-label"> Composition du
                                                      médicament</label>
                                                  <input type="text" v-model="medoc.composition" name="composition"
                                                      class="form-control" id="composition">
                                                  <label for="prix" class="form-label"> Prix du médicament</label>
                                                  <input type="number" v-model="medoc.prix" name="prix"
                                                      class="form-control" id="prix" />
                                                  <label for="url" class="form-label"> Adresse url du
                                                      médicament</label>
                                                  <input type="text" v-model="medoc.imageUrl" name="urlImage"
                                                      class="form-control" id="url">

                                              </div>
                                              <div class="container">


                                                  <div class="row">
                                                      <div class="col-2">

                                                      </div>
                                                      <div class="col-2">
                                                          <CButton class="ml-5 mt-4" color="secondary"
                                                              @click="() => { visibleStaticBackdropDemo = false }">
                                                              Annuler
                                                          </CButton>
                                                      </div>
                                                      <div class="col-2">

                                                      </div>
                                                      <div class="col-2">
                                                          <button type="button" @click='modifyOneThing()'
                                                              class="btn border-0 btn-primary mt-4 mr-5 envoyer2">
                                                              Modifier </button>
                                                      </div>
                                                      <div class="col-2"></div>
                                                  </div>
                                              </div>

                                          </form>

                                      </CModalBody>

                                  </CModal>
                              </div>
                              <div class="col-1 mt-3">

                                  <CButton class="modifier btn bg-light fw-bold myclass" @click="showModal() "> <i
                                          class="bi bi-trash3-fill my_icons "></i>
                                  </CButton>
                                  <CModal :visible="visibleLiveDemo" @close="() => { visibleLiveDemo = false }">
                                      <CModalHeader>

                                          <CModalTitle>
                                              Supprimer un produit
                                          </CModalTitle>


                                      </CModalHeader>
                                      <CModalBody class=" bg-light">
                                          Voulez vous vraiment supprimer ce produit ?


                                      </CModalBody>
                                      <CModalFooter>
                                          <CButton color="secondary" @click="() => { visibleLiveDemo = false }">
                                              Non
                                          </CButton>
                                          <CButton color="danger"> <button class="btn border:none " height:5px
                                                  color="danger" @click="deleteOneThing(drug._id)"> Oui</button>
                                          </CButton>
                                      </CModalFooter>
                                  </CModal>
                              </div>
                              <div class="col-1 mt-4">
                                  <router-link :to="`/detailsPage/${drug._id}`">Details </router-link>
                                  
                              </div>
                              

                          </div>



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

              </div>
              <footerPage2 />
          </div>
      </div>
  </div>
  <div>
  </div>




</template>

<script>
//import moment from 'moment'
import {  CToaster, CToast,CToastHeader,CToastBody  } from '@coreui/vue';
import { CModal } from '@coreui/vue'
import { CModalTitle } from '@coreui/vue';
import { CModalHeader } from '@coreui/vue';
import { CModalBody } from '@coreui/vue';
import { CModalFooter } from '@coreui/vue';
import { CButton } from '@coreui/vue'
//import headerPage2 from '@/components/headerPage2.vue';
import footerPage2 from '@/components/footerPage2.vue';
import moment from 'moment'
import { getOneThing, getOneUser, getAllUsers1, deleteOneThing, modifyOneThing } from "@/services/UserService";



export default {
  name: 'allBuys',
  components: {
      CModal,
      CButton,
      CModalFooter,
      CModalBody,
      CModalHeader,
      CModalTitle,
      CToaster, CToast,CToastHeader,CToastBody,
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
          medoc: {
              titre: '',
              quantite: '',
              vertues: '',
              peremption: null,
              composition: '',
              prix: '',
              imageUrl: '',
              categorie: '',
              allDrugs: [],
          },
          
      
          visibleStaticBackdropDemo: false,
          visibleLiveDemo: false,
          oneUser: [],
          userId: this.$route.params.id,
          purchases: [],
          drugs: [],
          my_drugs: [],
          symptomes: false,
          inside: true,
          hasError: false,
          dates: [],
          value: false,
          allDrugs: [],
          users: [],
          drug_modal: [],
          drug_id: null,
          toasts: [],
          // userId: this.$route.params.id,
          // visibleStaticBackdropDemo: false,
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
              this.medoc = response;
              //  console.log(this.medoc.titre);
              this.drug_modal = response;
              console.log(response.composition)
              this.drug_id = response._id
              //this.drug_info.display_drugs.push(response)
              // this.$store.commit('setpurchases_drugs', response.titre)
              // console.log(this.$store.state.purchases_drugs)


          })
      },
      createToast() {
      this.toasts.push({
        title: 'GESTION Stockage',
        content: 'produit modifié avec succès!'
      })
    },
      getOneUser(itemId) {
          getOneUser(itemId).then(response => {
              console.log("okokokokokokokokokokokokokokokoko")
              console.log(response)
              this.oneUser = response


          })
      },

      modifyOneThing() {
          console.log("la foction a bien été appelé::::QQQQQQQQQQQQQQQQQQ:");
          console.log(this.peremption)
          const item = this.drug_id
          const payload = {

              titre: this.medoc.titre,
              quantite: this.medoc.quantite,
              vertues: this.medoc.vertues,
              peremption: this.medoc.peremption,
              composition: this.medoc.composition,
              prix: this.medoc.prix,
              imageUrl: this.medoc.imageUrl,
              categorie: this.medoc.categorie

          }
          modifyOneThing(item, payload).then(response => console.log(response))

          // this.clearForm();
          this.visibleStaticBackdropDemo = false;
          this.createToast();
          this.getAllUsers1();

      },
      showModal() {
          this.visibleLiveDemo = true;
      },
      showModal2(item) {
          console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIII")
          console.log(item)
          this.getOneThing(item)

          this.visibleStaticBackdropDemo = true;

      },
      deleteOneThing(key) {
          deleteOneThing(key).then(response => {
              console.log(response)
              this.getAllUsers1();
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

          //console.log("voici le résultat!!!!:::::");
          // console.log(input);
          //let x = document.getElementsByClassName('animals');
          console.log(this.$store.state.users);
          for (var thing of this.$store.state.All_drugs) {
              m++;
              console.log(" voici le thing ::::::::::::::");
              console.log(thing);
              /*drugName = thing 
              for(var item of drugName){
                if(thing== item){
                  drugs = thing;
                }
              }*/
              if (thing.titre.toLowerCase().includes(input)) {

                  console.log("voici le thing sélectionné:::::::::::");
                  console.log(thing.titre);


                  if (this.drugs.length == 0) {
                      i++;
                      this.drugs.push(thing);
                      console.log(" voici le contenu de drug :::::::::");
                      console.log(this.drugs);
                  } else if (this.drugs.length > 0) {

                      for (var drug of this.drugs)
                          if (drug.titre != thing.titre) {
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
                  // console.log(drug.titre);


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
      },

      getAllUsers1() {
          getAllUsers1().then(response => {
              this.allDrugs = response;
              var value = false;
              for (var drug of response) {

                  if (this.$store.state.All_drugs.length == 0) {

                      this.$store.commit('increment_All_drugs', drug);

                  }

                  else if (this.$store.state.All_drugs.length > 0) {

                      for (var thing of this.$store.state.All_drugs) {

                          if (thing._id == drug._id) {

                              value = true;
                          }

                      }
                  }
                  if (value == false) {

                      this.$store.commit('increment_All_drugs', drug);
                  }

                  //this.$store.commit('increment_All_drugs', drug);
              }
              console.log(this.$store.state.drugList);
          });

      }
  },



  mounted() {
      getAllUsers1().then(response => {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR")
        console.log(response);
          this.allDrugs = response;
          var value = false;
          for (var drug of response) {

              if (this.$store.state.All_drugs.length == 0) {

                  this.$store.commit('increment_All_drugs', drug);

              }

              else if (this.$store.state.All_drugs.length > 0) {

                  for (var thing of this.$store.state.All_drugs) {

                      if (thing._id == drug._id) {

                          value = true;
                      }

                  }
              }
              if (value == false) {

                  this.$store.commit('increment_All_drugs', drug);
              }

              //this.$store.commit('increment_All_drugs', drug);
          }
          console.log(this.$store.state.drugList);
      });

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

.ajouter_medoc {
  background-color: #029900 !important;
  color: aliceblue !important;
}

.drug_image {
  width: 100px;
  height: 100px;
}

.envoyer2 {
  color: aliceblue !important;
  background-color: #029900 !important;
}

.modal_header {
  text-align: justify !important;
  
}
</style>