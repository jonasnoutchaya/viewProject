<template>

  <div v-if="$store.state.admin">

   
    <header class="shadow-sm p-3 mb-5 bg-white rounded">


      <div class="container-expand">
        <div class="row mt-3">
          <div class="col-4 ">

            <router-link to="/"> <img src="./assets/Logo-Pharmacie.jpg" class="card-img-top-center  my_card "
                alt="logo d'une pharmacie" /> </router-link>
            PHARMACIE <span class="pharm">PHARMA</span>


          </div>

          <div class="col-2"> </div>


          <div class="col-6 mt-2">
            <nav class="navbar navbar-expand-lg navbar">

              <div class="col-2">
                <router-link to="/allUsersPage">Utilisateurs </router-link>
              </div>
              <div class="col-2">
                <router-link to="/commandePage"> Commandes </router-link>
              </div>
             

              <div class="col-2">
                <router-link to="/produitsPage">Produits </router-link>
              </div>
              <div class="col-1">
                <router-link to="/statistiquePage"> Statistiques </router-link>
              </div>
            </nav>

          </div>

        </div>


      </div>




    </header>
    <router-view />
  </div>

  <div v-else>
    <header class="shadow-sm p-3 mb-5 bg-white rounded">

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
      <div class="container-expand">
        <div class="row mt-3">
          <div class="col-3 ">

            <router-link to="/"> <img src="./assets/Logo-Pharmacie.jpg" class="card-img-top-center  my_card "
                alt="logo d'une pharmacie" /> </router-link>



          </div>

          <div class="col-2"> </div>


          <div class="col-7">
            <nav class="navbar navbar-expand-lg navbar">



              <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#"> <span class="acceuil"> Acceuil</span> </a>
                  </li>

                  <li class="nav-item dropdown my_dropdown mr-5">

                    <CDropdown class="mr-5 my_dropdown">
                      <CDropdownToggle class="mytoogle mr-5" style="box-shadow : none;">
                        <div class="mytoggle " style="box-shadow : none;"> Catégories </div>
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem>  <router-link :to="`/categoriePage/1`"> Médicaments </router-link></CDropdownItem>
                        <CDropdownItem>
                          <router-link :to="`/categoriePage/2`"> Soins et Beauté </router-link>
                        </CDropdownItem>
                        <CDropdownItem>
                          <router-link :to="`/categoriePage/2`"> Nutritution </router-link>
                        </CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </li>
                  <div ml-5>

                    <div class="row  ml-5 height justify-content-center align-items-center">
                      
                        <div class="search">
                          <form>
                          <i class="fa fa-search"></i>
                          <input class=" form-control  cherche3 " style="box-shadow : none;"
                            :class="{ okay: this.inside, 'border-danger': !this.inside  }" ref="search"
                            v-model="searchkey" @keyup="search_Drugs()" type="search" placeholder="Search"
                            aria-label="Search">
                          <button class="btn btn-outline-success recherche2 text-dark my_button " type="submit"> <i
                              class="bi bi-search search "></i></button>
                              </form>
                        </div>
                      
                    </div>

                    <div class="header-dropdown  bg-white" v-if="users.length" id="list">
                      <li v-for="item in users" :key="item._id">
                        <router-link :to="`/infoMedicament2/${item._id}`" v-if="this.symptomes == false"> {{item.titre}}
                        </router-link>
                        <router-link :to="`/infoMedicament2/${item._id}`" v-if="this.symptomes == true">
                          {{item.vertues}}
                        </router-link>
                      </li>
                    </div>
                  </div>

                </ul>


               
                <div class="col-1">
                  <CDropdown>
                    <CDropdownToggle class="mytoogle" style="box-shadow : none;">
                      <div class="mytoggle " style="box-shadow : none;"> <i class="bi bi-person my_icons"></i> </div>
                    </CDropdownToggle>
                     <CDropdownMenu>
                      <!--
                      <CDropdownItem v-if="$store.state.token">Mon compte</CDropdownItem>
                      <CDropdownItem>
                        <router-link to="/oneUserCommands" v-if="$store.state.token"> Commandes </router-link>
                      </CDropdownItem>
                      <CDropdownItem>
                        <router-link to="/oneUserPurchasses" v-if="$store.state.token"> Historique </router-link>
                      </CDropdownItem>-->



                      <CDropdownItem v-if="$store.state.token"> <button class=" btn fs-5   connexion3"
                          @click="reset_token()"> Déconnexion</button></CDropdownItem>
                      <CDropdownItem v-else>
                        <router-link to="/dashBoardPage"> <button class=" btn fs-5   connexion3">
                            Connexion</button> </router-link>
                      </CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </div>
                <div class="col-1"   v-if = "this.$store.state.token">
                  <router-link to="/messageriePage">

                    <i class="bi bi-chat-text my_icons"> <span class="card-text chario">{{$store.state.numberOfMessage}}</span></i>

                  </router-link>
                </div>
                <div class="col-1">
                  <router-link to="/charioPage">
                   
                    <i class="bi bi-cart my_icons"> <span class="card-text chario">{{$store.state.chario}}</span></i>

                  </router-link>
                </div>

              </div>
            </nav>

          </div>

        </div>
        <div class="row mt-2" style="background-color:#f4f4f4">
          <div class="col-3 mt-1">
            <span class=" open"> ouvert de 24h à 24h </span>
          </div>

          <div class="col-2">

          </div>

          <div class=" mt-1 col-3">

          </div>
          <div class="col-1">

          </div>
          <div class="col-2">
            <i class="bi bi-telephone-fill phone"></i>
            <span class="number"> +237 698 99
              30 90</span>
          </div>

        </div>

      </div>
      <!-- 
  <div class="purple-box" stborder-radius: 5px !important;yle="border: puiple 2px solid; min-height: 50px;">
  <helloWorld  />
  </div>-->





    </header>
    <router-view />
  </div>
</template> 


<script>

// import HelloWorld from './components/HelloWorld.vue';
// export default{
//   name: 'App',
//   components:{
//     HelloWorld
//   }
//}
import {  CToaster, CToast,CToastHeader,CToastBody  } from '@coreui/vue';
import { CDropdownMenu } from '@coreui/vue'
import { CDropdownItem } from '@coreui/vue'
import { CDropdownToggle } from '@coreui/vue'
import { CDropdown } from '@coreui/vue'
//import { library } from '@fortawesome/fontawesome-svg-core'

import { mapGetters } from "vuex";

// const token= this.$store.state.token;
export default {
  computed: {
    ...mapGetters(["formattedDate"]),
    ...mapGetters(["displayToken"])
  },
  components: {
    CToaster, CToast,CToastHeader,CToastBody,
    CDropdown,
    CDropdownItem,
    CDropdownToggle,
    CDropdownMenu,
  },
  // CNavItem, CNavbarBrand, CNavbar, CContainer, CNavbarNav, CNavbarToggler, CNavLink, CDropdown,
  //CDropdownToggle, CDropdownMenu, CDropdownDivider, CDropdownItem

  data() {
    return {
      users: [],
      drugs: [],
      symptomes: false,
      inside: true,
      hasError: false,
      toasts: []
    }
  },
  methods: {
    incrementDay() {
      this.$store.dispatch("incrementMonth")
    },
    reset_token() {
      this.$store.commit('resetToken');
      this.$router.push('/');
      this.createToast();
      //this.loader()

    },
    createToast() {
        this.toasts.push({
          title: 'DÉCONNEXION',
          content: ' vous etes Déconnecté !'
        })
      },
    loader() {
      this.loading = !false
      setTimeout(() => {
        this.loading = true
      }, 2
      )
    },
    resetNumberOfMessage() {
      this.$store.commit('resetmessage');
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
    }
  }
}


</script> 




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.my_card {
  width: 120px !important;
  height: 70px !important;

}

.dp-container {
  position: relative;
}

.header-dropdown {
  position: absolute;
  width: 280px !important;
  height: 70px;
  overflow: auto !important;

}


nav a {
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
}


.icon {
  width: 30px !important;
  height: 30px !important;
}

.container {
  text-align: bottom;
}

header {
  margin-bottom: 0px !important;

}

.number {
  font-weight: bold !important;
  size: 300px !important;

}

li {
  margin-right: 40px !important;
}

.cherche3 {
  /*margin-right: 0 !important;*/
  border-radius: 15px !important;


}

/*.cherche3:focus{
  border: 2px solid #029900 !important ;
}*/

.recherche2 {
  /*margin-left: 0px !important;*/
  /*background-color:#029900 !important;*/
  border-radius: 20px !important;
  width: 40px !important;
  height: 30px !important;
  border-color: none;
  background-color: #029900 !important;
}

.dropdown {
  text-align: left;
}






.search {
  position: relative;
  box-shadow: 0 0 40px rgba(51, 51, 51, .1);

}

.search input {

  height: 30px;




}



.search .fa-search {

  position: absolute;
  top: 30px;
  left: 16px;

}

.search button {

  position: absolute;
  top: 0px;
  right: 13px;
  height: 30px;
  width: 30px;


}

.search {
  margin: auto !important;
  margin-right: 5px !important;

}


.my_card {
  text-align: left !important;
}

.my_icons:hover {
  color: #029900 !important;

}

.my_icons {
  font-size: large !important;
}

.search {

  color: white !important;
}

.phone {
  color: #029900 !important;
  margin: auto !important;

}

.connexion3 {
  color: #029900 !important;
  font-size: large !important;
  text-align: left !important;
  margin-right: 50% !important;
}

.phone,
.number,
.open {
  margin: auto !important;
  padding-top: 55px !important;
}

.mytoogle {
  color: white !important;
}

.mytoggle {
  color: black !important;
  width: 10px !important;
  height: 10px !important;
}

.acceuil:hover {
  color: #029900 !important;
}

.pharm {
  color: #029900 !important;
  font-weight: bold;
}

.my_dropdown{
  margin-right: 50px !important;
}
</style> 
