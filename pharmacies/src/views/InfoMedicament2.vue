<template>


    <div class="container mt-5 mb-5">
        <div class="row shadow-sm p-3 mb-5 bg-white rounded">


            <div class="col-md-4">
                <img :src="(`${oneUser.imageUrl}`)" class="img-fluid image_info" alt="image d'un médicament">
            </div>
            <div class="col-1">

            </div>
            <div class="col-md-7 ">
                <div class="row   ">
                    <div class="col-7"></div>
                    <div class="col-5">
                        <div class="row  ">

                            <div class="col-5 options bg-light mt-3">
                                <i class="bi bi-cart my_icons2" @click="incrementTrolly(this.itemId)"> </i>

                            </div>

                            <div class="col-1 ">

                            </div>


                            <div class="col-4 mt-3 ">

                                <router-link to="/home"> <button class="continuer2 btn btn-primary "> continuer</button>
                                </router-link>


                            </div>

                            <div class="col-1 ">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">

                    <p class="card-text">
                    <ul>
                        <li> <span class="info">Nom du produit:</span> {{oneUser.titre}}</li>
                        
                        <li> <span class="info"> Prix Unitaire : </span> {{oneUser.prix}} fcfa</li>
                       
                        <li> <span class="info">Date d'expiration:</span> </li> {{oneUser.peremption}}
                        <li><span class="info"> Vertues :</span> {{oneUser.vertues}}</li>
                        <li> <span class="info"> Composition du produit : </span> {{oneUser.composition}} </li>
                    </ul>
                    </p>

                </div>

            </div>


        </div>
    </div>
    <footer>
        <footerPage2 />
    </footer>
</template>


<script>

import { getOneThing, } from '../services/UserService.js';
//import headerPage2 from '@/components/headerPage2.vue';
import footerPage2 from '@/components/footerPage2.vue';

export default {
    name: 'infoMedicament2',
    components: {


        // headerPage2,
        footerPage2
    },
    data() {
        return {


            oneUser: [],
            itemId: this.$route.params.id,
        }
    },
    methods: {

        getOneThing(itemId) {
            console.log(" VOICI LE PRODUIT EXPLOITABLE 22222 !!!!!!!!!!!!!!!!!!!!!!!!!");
            console.log(itemId);
            console.log(" VOICI LA FIN DU  EXPLOITABLE 2222222 !!!!!!!!!!!!!!!!!!!!!!!!!");
            getOneThing(itemId).then(response => {

                this.oneUser = response;
                //console.log(" VOICI LE PRODUIT SÉLECTIONNÉ !!!!!!!!!!!!!!!!!!!!!!!!!");
                //console.log(response);
                //console.log(" VOICI L PRODUIT SÉLECTIONNÉ!!!!!!!!!!!!!!!!!!!!!!!!!");
                //this.numberOfUsers = this.users.length
            })
        },



        incrementTrolly(item) {
            console.log("appelé avec succès::::::::!!!!!");
            var exist = false;
            for (var drugId of this.$store.state.drugList) {
                if (item == drugId) {
                    exist = true;
                }
            }
            if (exist == false) {
                console.log("function called successfully:::!!");
                console.log(item);
                this.$store.commit('incrementDrugList', item);
                this.$store.commit('incrementTrolly');
            } else {
                console.log("médicament déjà présent dans le tableau !!!");
            }
        },


    },
    mounted() {
        this.getOneThing(this.itemId);
    }
}

</script>

<style>
.info_medicament {
    margin: auto !important;
    margin-top: 50px !important;

}

.continuer2 {
    border-radius: 30px;
}

.info {
    font-weight: bold !important;
}

ul {
    text-align: left !important;
}



.mini_chario {
    width: 35px;
    height: 20px;
}

.ajouter {
    background-color: rgba(98, 236, 5, 0.568) ! important;
}

.image_info {
    width: 250px !important;
    height: 200px !important;
}

.options {

    border-radius: 30px;
}
.my_icons2{
    color:  #029900 !important;
}
</style>

