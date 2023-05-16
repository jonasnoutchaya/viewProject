<template>
  <nav class="navbar-expand">
    <div class="container-expand text-uppercase shadow mt-0 mb-5 bg-bottom rounded  header ">
      <div class="row  ">
        <div class="col-4">
          <span class="fw-bold fs-2 drugstore"> <span class="drug">drug</span> store</span>
        </div>
        <div class="col-2">

        </div>
        <div class="col-3">
          <div class="card  border-0" style="width: 18rem; height: 10rem;">
            <img src="../assets/Logo-Pharmacie.jpg" class="card-img-top-center  logo" alt="logo d'une pharmacie" />
            <div class="card-body">
              <p class="card-text"> nom de la pharmacie</p>
            </div>
          </div>
        </div>
        <div class="col-4">

        </div>

      </div>

      <div class="row   pb-3">
        <div class="col-1">
          <CDropdown>
            <CDropdownToggle> <img src="../assets/icone_menu-removebg-preview.png" class=" image1" alt="">
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem >Mon compte</CDropdownItem>
              <CDropdownItem ><router-link to="/oneUserPurchasses"> Historique </router-link></CDropdownItem>
              
               <CDropdownItem ><router-link to="/allUsersPage">Utilisateurs </router-link></CDropdownItem>  <!-- re cherche de médicament et d'utilisateur avec ancre pour rediriger bers l'utilasteur en question !-->
              <CDropdownItem >Médicaments</CDropdownItem>
              <CDropdownItem >Gestion</CDropdownItem>
              <CDropdownItem >Historique</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </div>
        <div class="dp-container col-3">
          <form class="d-flex">
            <input class=" form-control me-2 cherche " style="box-shadow : none;"
              :class="{ okay: this.inside, 'border-danger': !this.inside  }" ref="search" v-model="searchkey"
              @keyup="search_Drugs()" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success recherche text-dark " type="submit">Search</button>
          </form>
          <div class="header-dropdown" v-if="users.length" id="list">
            <li v-for="item in users" :key="item._id">
              <router-link :to="`/infoMedicament2/${item._id}`" v-if="this.symptomes == false"> {{item.titre}}
              </router-link>
              <router-link :to="`/infoMedicament2/${item._id}`" v-if="this.symptomes == true"> {{item.vertues}}
              </router-link>
            </li>
          </div>
        </div>
        <div class="  col-2">




        </div>

        <div class="col-2">
          <router-link to="/home">
            <div class="card border-0 nav_card">
              <img src="../assets/Maison.png" class="card-img-top image1" alt="home">
              <div class="card-body">
                <span class="card-text">home</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-2">
          <!--  <router-link to="/myDashBoardPage"> -->
          <router-link to="/messageriePage">
            <div class="card  border-0 nav_card">
              <img src="../assets/messagerie.png" class="card-img-top image2" alt="messagerie"
                @click="resetNumberOfMessage()">
              <div class="card-body">
                <span class="card-text chario">{{$store.state.numberOfMessage}}</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-2">
          <router-link to="/charioPage">
            <div class="card border-0 nav_card">
              <img src="../assets/chario.png" class="card-img-top image2" alt="chario">
              <div class="card-body">
                <span class="card-text chario">{{$store.state.chario}}</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col">

        </div>
      </div>

    </div>
  </nav>
</template>
<script>
import { CDropdownMenu } from '@coreui/vue'
import { CDropdownItem } from '@coreui/vue'
import { CDropdownToggle } from '@coreui/vue'
import { CDropdown } from '@coreui/vue'
//import { library } from '@fortawesome/fontawesome-svg-core'
export default {
  components: {
    CDropdown,
    CDropdownItem,
    CDropdownToggle,
    CDropdownMenu,
  },
  data() {
    return {
      users: [],
      drugs: [],
      symptomes: false,
      inside: true,
      hasError: false
    }
  },
  methods: {
    resetNumberOfMessage() {
      this.$store.commit('resetmessage');
    },
    getFocus() {
      console.log("cette fonction est bien appelée");
      console.log(this.$refs.search);
      this.$refs.search.focus();

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
.cherche {
  margin-right: 0 !important;


}
.dp-container {
  position: relative;
}
.header-dropdown {
  position: absolute;

}




.recherche {
  margin-left: 0 !important;
  background-color: #029900 !important;
}

.connexion {
  color: #029900 !important;
  font-size: large !important;
}

.drug {
  color: #029900;
}

.drugstore {
  font-family: 'Times New Roman', Times, serif !important;
}

.image1 {
  width: 50px !important;
  height: 40px !important;
  margin: auto !important;
}

.image2 {
  width: 30px !important;
  height: 30px !important;
  margin: auto !important;
}

.logo {
  margin: auto !important;
}

.nav_card {
  width: 100px !important;
  height: 80px !important;
}

.chario {
  color: rgb(49, 123, 235);
}

#list {
  height: 100px;

  overflow: auto;
}
</style>