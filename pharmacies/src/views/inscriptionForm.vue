<template>

    <body>

        <div class="container my_container2 mt-5">
            <div class="row">

                <div class="col-3 ">

                </div>
                <div class="col-1">

                </div>
                <div class="col-6 bg-light shadow-lg p-3 mb-5 bg-body rounded">
                    <h3> AJOUTEZ UN NOUVEAU PRODUIT</h3>

                    <div class="mt-5 mb-4">
                        <h4>  </h4>
                    </div>
                    <form class="bg-light">

                        <div class="mb-3 bg-light">
                            <label for="nom" class="form-label">Nom du Produit</label>
                            <input type="text" v-model="titre" name="titre" class="form-control" id="titre" required>
                            <label for="quantite" class="form-label"> Quantité </label>
                            <input type="text" v-model="quantite" name="quantié" class="form-control" id="quantité" />

                            <label for="categorie" class="form-label"> Catégorie</label>
                            <input type="text" v-model="categorie" name="categorie" class="form-control" id="categorie" required />




                            <label for="vertues" class="form-label"> Vertues </label>
                            <input type="vertues" v-model="vertues" name="vertues" class="form-control" id="vertues" required />

                            <label for="permption" class="form-label"> Date de péremption</label>
                            <input type="date" v-model="peremption" name="peremption" class="form-control"
                                id="peremption" required />
                            <label for="composition" class="form-label"> Composition du Produit</label>
                            <input type="text" v-model="composition" name="composition" class="form-control"
                                id="composition" required />
                            <label for="prix" class="form-label"> Prix du Produit</label>
                            <input type="number" v-model="prix" name="prix" class="form-control" id="prix" required />
                            <label for="url" class="form-label"> Adresse url du Produit</label>
                            <input type="text" v-model="imageUrl" name="urlImage" class="form-control" id="url" required />

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
                        <!--<div class="mb-3 ">
                            <label for="exampleInputcompostion1" class="form-label">compostion</label>
                            <input type="compostion" v-model="compostion" name="compostion" class="form-control"
                                id="exampleInputcompostion1">
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">cochez cette case si vous avez lu et
                                aprouvé
                                lapoilitique de confidentialité </label>
                        </div> -->
                        <div>
                            <router-link to="/"> voir la politique de confidentialité</router-link>
                        </div>
                        <button type="button" @click='createStuff()' class="btn border-0 btn-primary mt-4 envoyer">
                            Ajouter </button>
                        -
                    </form>
                </div>
                <div class="col-3 ">

                </div>
            </div>
        </div>


    </body>

    <footer>
        <footerPage2 />
    </footer>
</template>
   
   
<script>
import {  CToaster, CToast,CToastHeader,CToastBody  } from '@coreui/vue';
import footerPage2 from '@/components/footerPage2.vue';
import { mapGetters } from "vuex";

export default {
    /* computed: {
       //...mapGetters(["formattedDate"]),
       ... mapGetters(["displayToken"])
     },*/

    computed: {
        ...mapGetters(["isLoggedIn"])
    },

    name: 'inscriptionForm',
    components: {
        CToaster, CToast,CToastHeader,CToastBody,
        footerPage2
    },
    token() {
        return {
            newToken: this.isLoggedIn
        }

    },
    data() {
        return {

            titre: '',
            quantite: '',
            vertues: '',
            peremption: null,
            composition: '',
            prix: '',
            imageUrl: '',
            categorie: '',
            toasts: []



        }
    },
    /* methods: {
         createStuff(data) {
             const payload = {
                 titre: this.titre,
                 quantite: this.quantite,
                 vertues: this.vertues,
                 peremption: this.peremption,
                 compostion: this.compostion,
                 prix : this.prix,
                 imageUrl this.imageUrl
                 
             }
             this.$emit('createStuff', payload)
             this.clearForm();
 
 
             //this.$emit('createUser', payload)
             this.clearForm();
         },*/
    methods: {
        createStuff() {
            console.log("la foction a bien été appelé::::QQQQQQQQQQQQQQQQQQ:");
            console.log(this.peremption)

            const payload = {

                titre: this.titre,
                quantite: this.quantite,
                vertues: this.vertues,
                peremption: this.peremption,
                composition: this.composition,
                prix: this.prix,
                imageUrl: this.imageUrl,
                categorie: this.categorie

            }

            this.$emit('createStuff', payload);
            this.createToast();
            this.clearForm();
        },
           createToast() {
        this.toasts.push({
          title: 'GESTION DES PRODUITS',
          content: this.titre + ' ajouter au panier'
        })
      },

        clearForm() {
            this.titre = "";
            this.quantite = "";
            this.vertues = "";
            this.peremption = "";
            this.composition = "";
            this.imageUrl = '';
            this.prix = '';
            this.peremption = "";
            this.categorie = "";
            
        }
    },

}

</script>
   
   
   
<style>
.envoyer {
    background-color: #029900 ! important;
}
</style>