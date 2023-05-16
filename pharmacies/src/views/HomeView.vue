<template>






    <body>
        <div class="container-expand mt-5">

            <div class="row menu">



                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="3000">
                            <img src="../assets/carousel0.jpg" class="d-block w-100% image_c"
                                alt="image d'une pharmacie">
                        </div>
                        <div class="carousel-item" data-bs-interval="3000">
                            <img src="../assets/carousel1.jpg" class="d-block w-100% image_c" alt="patient">
                        </div>
                        <div class="carousel-item" data-bs-interval="3000">
                            <img src="../assets/carousel2.jpg" class="d-block w-100% image_c" alt="achat en ligne">
                        </div>
                        <div class="carousel-item" data-bs-interval="3000">
                            <img src="../assets/carousel3.jpg" class="d-block w-100% v image_c" alt="livraison">
                        </div>
                        <div class="carousel-item" data-bs-interval="3000">
                            <img src="../assets/carousel4.jpg" class="d-block w-100% image_c" alt="livraison">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="row mt-5">
                    <div class="col-5">

                    </div>
                    <div class="col-2 categorie">
                        <div class="categories"> Médicaments</div>
                    </div>
                    <div class="col-5"> </div>
                </div>

                <div class="row mt-4">
                    <div class="card-group  ">
                        <div class="card  shadow-sm p-3 mb-5 bg-white rounded border-0">
                            <router-link to="/infoMedicament">
                                <img src="../assets/image4.png" class="card-img-top my_image" alt="../assets/image3">
                            </router-link>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider.</p>
                            </div>

                            <i class="bi bi-cart my_icons2" @click="incrementTrolly(drug._id)"> <span class="achat">
                                    AJOUTER AU PANIER</span> </i>
                        </div>
                        <div class="card border-0 mr-5 shadow-sm p-3 mb-5 bg-white rounded list_drug "
                            v-for="drug of allDrugs" :key="drug._id  ">
                            <router-link :to="`/infoMedicament2/${drug._id}`">
                                <img :src="(`${drug.imageUrl}`)" class="card-img-top my_image" alt="image1">
                            </router-link>
                            <div class="card-body my_body">
                                <h5 class="card-title">{{drug.titre}}</h5>
                                <p class="card-text">{{drug.vertues}}</p>

                            </div>

                            <i class="bi bi-cart my_icons2" @click="incrementTrolly(drug._id)"> <span class="achat">
                                    AJOUTER AU PANIER</span> </i>


                        </div>

                    </div>
                    <div class="row mb-5">
                        <button class=" btn voirplus  text-white"> <router-link :to="`/categoriePage/1`"> <span class=" text-white"> voir plus</span>  </router-link></button>
                    </div>

                </div>
                <div class="row mt-5 bg-light">
                    <div class="col-5">

                    </div>
                    <div class="col-2 categorie">
                        <div class="categories"> Soins et beauté</div>
                    </div>
                    <div class="col-5"> </div>
                </div>

                <div class="bg-light">
                    <div class="row mt-4">
                        <div class="card-group  ">

                            <div class="card border-0 mr-5 shadow-sm p-3 mb-5 bg-white rounded list_drug "
                                v-for="drug of allDrugs2" :key="drug._id">
                                <router-link :to="`/infoMedicament2/${drug._id}`">
                                    <img :src="(`${drug.imageUrl}`)" class="card-img-top my_image" alt="image1">
                                </router-link>
                                <div class="card-body my_body">
                                    <h5 class="card-title">{{drug.titre}}</h5>
                                    <p class="card-text">{{drug.vertues}}</p>

                                </div>


                                <i class="bi bi-cart my_icons2" @click="incrementTrolly(drug._id)"> <span class="achat">
                                        AJOUTER AU PANIER</span> </i>

                            </div>

                        </div>

                    </div>
                    <div class="row mb-5 mt-3">
                        <button class=" btn voirplus  text-white"> <router-link :to="`/categoriePage/2`"> <span class=" text-white"> voir plus</span>  </router-link></button>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col-6 my_message">
                        <p class=""> <span class="message"> effectuez une commande dès maintenant <br>
                                et payez à la livraison </span> <br />
                            <span class="message2"> commencez maintenant en cliquant sur le chario du produit qui vous
                                intéresse </span>
                        </p>
                    </div>
                    <div class="col-6">
                        <div class="">
                            <img src="../assets/carousel4.jpg" class="d-block w-100% " alt="livraison">
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-5">

                    </div>
                    <div class="col-2 categorie">
                        <div class="categories"> Nutritutions</div>
                    </div>
                    <div class="col-5"> </div>
                </div>
                <div class="card-group  ">

                    <div class="card border-0 mr-5 shadow-sm p-3 mb-5 bg-white rounded list_drug "
                        v-for="drug of allDrugs3" :key="drug._id">
                       
                            <router-link :to="`/infoMedicament2/${drug._id}`">
                                <img :src="(`${drug.imageUrl}`)" class="card-img-top my_image" alt="image1">
                            </router-link>
                            <div class="card-body my_body">
                                <h5 class="card-title">{{drug.titre}}</h5>
                                <p class="card-text">{{drug.vertues}}</p>

                            </div>
                       


                        <div v-if="drug.categorie == 1">
                            <i class="bi bi-cart my_icons2" @click="incrementTrolly(drug._id)"> <span class="achat">
                                    AJOUTER
                                    AU PANIER</span> </i>

                        </div>
                    </div>

                </div>


            </div>
            <div class="row mb-5 mt-5">
                <button class=" btn voirplus  text-white"> <router-link :to="`/categoriePage/3`"> <span class=" text-white"> voir plus</span>  </router-link></button>
            </div>
        </div>



    </body>


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

    <CToaster placement="top-end">
        <div>
            <CToast v-for="(toast2) in toasts2 " :key="toast2.id">
                <CToastHeader closeButton  class="bg-danger">
                    <span class="me-auto fw-bold bg-danger">{{toast2.title}}</span>

                </CToastHeader>
                <CToastBody>
                    {{ toast2.content }}
                </CToastBody>
            </CToast>
        </div>
    </CToaster>

    <footer class="mt-5">

        <div class="footer">
            <footerPage2 />
        </div>
    </footer>



</template>




<script>
import { getAllUsers, getAllUsers2, getAllUsers3 } from '@/services/UserService';
//import headerPage2 from '@/components/headerPage2.vue'
import footerPage2 from '@/components/footerPage2.vue';
import { CToaster, CToast, CToastHeader, CToastBody } from '@coreui/vue';
export default {
    name: 'homeView',
    components: {
        CToaster, CToast, CToastHeader, CToastBody,
        // headerPage2,
        footerPage2
    },

    data() {
        return {
            allDrugs: [],
            allDrugs2: [],
            allDrugs3: [],
            toasts: []
        }
    },
    methods: {
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
                this.createToast();
            } else {
                console.log("médicament déjà présent dans le tableau !!!");
                this.createToast2();
            }
        },
        createToast() {
            this.toasts.push({
                title: 'Réussit',
                content: 'produit ajouter au panier'
            })
        },
        createToast2() {
            this.toasts.push({
                title: 'Échec !',
                content: 'ce produit est déjà dans le panier ! '
            })
        }
    },
    mounted() {

        getAllUsers().then(response => {
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

        getAllUsers3().then(response => {
            this.allDrugs3 = response;
            console.log("DDDDDDDDDDDDDDDDDDDDDDDD")
            console.log(this.allDrugs3)
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

        getAllUsers2().then(response => {
            this.allDrugs2 = response;
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
.h1 {
    height: 200px;
    margin-top: 70px;
}

.list_drug {
    margin-right: 10px !important;
}


/* article
    {
        background-image: url("../assets/Logo-Pharmacie.jpg");
        width: 100%;
        margin: auto;
        
        opacity:0.3;

    }*/





.logo {

    width: 100px;
}

header {
    margin-top: 0;
}

.image_c {
    width: 95% !important;
    height: 490px !important;
}

.menu {
    text-align: left !important;
    margin-left: 60px !important;
}

.head_featured {
    background-color: rgba(98, 236, 5, 0.568) ! important;
    height: 60px !important;


}

.featured {
    border: 3px solid rgba(98, 236, 5, 0.568) ! important;

}





.mini_chario {
    width: 35px;
    height: 20px;
}

.mycontainer {
    margin-top: 30spx !important;
}

.left_card {
    margin-top: 100px !important;
}

.left_card_bottom {

    margin-bottom: 100px !important;
}

.footer {
    border: 1px solid black !important;
    height: 300px !important;

}

.categories {
    font-size: large;
}

.categorie {
    height: 50px;
    border-bottom: 4px solid #029900;
}

.card_button3 {
    text-align: left !important;
}

.my_icons2 {
    color: #029900;
    font-size: x-large;
}

.livraison {
    height: 150px;
}

.message {
    font-size: xx-large;
    z-index: 2;
}

.message2 {
    font-size: large;
}

.my_message {
    box-shadow: 80px 0px 70px rgb(255, 255, 255);
    z-index: 3;

}

.voirplus {
    background-color: #029900 !important;
    width: 100px !important;
    margin: auto !important;
    color: aliceblue !important;
}

.achat {
    font-size: x-small;
}

.my_image {
    width: 180px !important;
    height: 200px !important;
}

.my_body {
    height: 100px !important;
    overflow: hidden !important;
}
</style>