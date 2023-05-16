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
                        <div class="row options bg-light">

                            <div class="col-5 mt-3">

                                <CButton class="modifier btn  fw-bold myclass" @click="showModal2(this.itemId)"><i
                                        class="bi bi-pen my_icons"></i>
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
                                                <label for="nom" class="form-label">Nom du
                                                    médicament</label>
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
                                                <label for="prix" class="form-label"> Prix du
                                                    médicament</label>
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

                            <div class="col-1 ">

                            </div>


                            <div class="col-4 mt-3">


                                <CButton class="modifier btn bg-light fw-bold myclass" @click="showModal()"> <i
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
                                                color="danger" @click="deleteOneThing(this.itemId)"> Oui</button>
                                        </CButton>
                                    </CModalFooter>
                                </CModal>

                            </div>

                            <div class="col-1 ">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">

                    <p class="card-text">
                    <ul>
                        <li> <span class="info">Nom du produit:</span> {{ oneUser.titre }}</li>
                        <li> <span class="info"> Quantité : </span> {{ oneUser.quantite }}</li>
                        <li> <span class="info"> Prix Unitaire : </span> {{ oneUser.prix }}</li>
                        <li> <span class="info"> Catégorie du produit : </span> {{ oneUser.categorie }}</li>
                        <li> <span class="info">Date d'expiration:</span> </li> {{ oneUser.peremption }}
                        <li><span class="info"> Vertues :</span> {{ oneUser.vertues }}</li>
                        <li> <span class="info"> Composition du produit : </span> {{ oneUser.composition }} </li>
                    </ul>
                    </p>

                </div>

            </div>


        </div>
    </div>
    <div class=" container">
        <div class="row stat" v-if="this.ready">
            <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
                :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles"
                :width="width" :height="height" />
        </div>
        <button @click="display_data()"> </button>
    </div>
    <div class=" divider">

    </div>
    <footer>
        <footerPage2 />
    </footer>
</template>


<script>
import { getAllCommande } from '../services/UserService.js';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import moment from 'moment';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
import { CModal } from '@coreui/vue'
import { CModalTitle } from '@coreui/vue';
import { CModalHeader } from '@coreui/vue';
import { CModalBody } from '@coreui/vue';
import { CModalFooter } from '@coreui/vue';
import { CButton } from '@coreui/vue'
import { getOneThing, deleteOneThing, modifyOneThing } from '../services/UserService.js';
//import headerPage2 from '@/components/headerPage2.vue';
import footerPage2 from '@/components/footerPage2.vue';

export default {
    name: 'infoMedicament2',
    components: {

        CModal,
        CButton,
        CModalFooter,
        CModalBody,
        CModalHeader,
        CModalTitle,
        // headerPage2,
        footerPage2,
        Bar
    },
   
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 40
    },
    height: {
      type: Number,
      default: 50
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => { }
    },
    plugins: {
      type: Object,
      default: () => { }
    }
  },
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
                categorie: ''
            },
            chartData: {
                labels: ['Aout', 'Septembre', 'Novembre'],


                datasets: [{ data: [], backgroundColor: ' #3737da96' }],

            },
            chartOptions: {
                responsive: true
            },
            mois1: [],
            mois2: [],
            mois3: [],
            ready: false,

            visibleStaticBackdropDemo: false,
            visibleLiveDemo: false,
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
                this.medoc = response;
                this.oneUser = response;
                //console.log(" VOICI LE PRODUIT SÉLECTIONNÉ !!!!!!!!!!!!!!!!!!!!!!!!!");
                //console.log(response);
                //console.log(" VOICI L PRODUIT SÉLECTIONNÉ!!!!!!!!!!!!!!!!!!!!!!!!!");
                //this.numberOfUsers = this.users.length
            })
        },
        modifyOneThing() {
            console.log("la foction a bien été appelé::::QQQQQQQQQQQQQQQQQQ:");
            console.log(this.peremption)
            const item = this.itemId
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
            //this.getAllUsers();
            this.getOneThing(item);

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
        setDate(value) {
            if (value) {
                return moment(String(value)).format('MM')
            }
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
        deleteOneThing(key) {
            deleteOneThing(key).then(response => {
                console.log(response)
                this.$router.push('/allUsersPage');
            })

        },

    },
    mounted() {
        this.getOneThing(this.itemId);

        this.mois1 = [],
            this.mois2 = [],
            this.mois3 = []
        getAllCommande().then(responses => {

            for (var response of responses) {

                response.createdAt = this.setDate(response.createdAt)
                if ((response.createdAt == 8)&& (response.drug_id._id ==  this.$route.params.id)) {
                    this.mois1.push(response.createdAt)
                }
                else {
                    if ((response.createdAt == 9) && (response.drug_id._id ==  this.$route.params.id)) {
                        this.mois2.push(response.createdAt)
                    }
                    else {
                        if ((response.createdAt == 10) && (response.drug_id._id ==  this.$route.params.id)) {
                            this.mois3.push(response.createdAt)
                        }
                    }
                }

            }

            console.log(this.mois1);
            console.log(this.mois2);
            console.log(this.mois3);
            for (var chard of this.chartData.datasets) {
                console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRR")
                chard.data.push(this.mois1.length);
                chard.data.push(this.mois2.length);
                chard.data.push(this.mois3.length);
            }
            this.ready = true;

        })

    }
}

</script>

<style>
.info_medicament {
    margin: auto !important;
    margin-top: 50px !important;

}

.info {
    font-weight: bold !important;
}

ul {
    text-align: left !important;
}

.continuer,
.ajouter {
    display: inline-block;
    border-radius: 10px !important;
    margin: 60px;
}

.mini_chario {
    width: 35px;
    height: 20px;
}

.ajouter {
    background-color: rgba(98, 236, 5, 0.568) ! important;
}

.image_info {
    width: 500px !important;
}

.options {

    border-radius: 30px;
}
.stat {
  height: 10px !important;
  width: 300px !important;
  margin: auto;
  color: #3737da96;
}
.divider{
    height: 400px;
}
</style>

