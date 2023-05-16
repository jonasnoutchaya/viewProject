<template>

    <div class="header">
        <headerPage />
    </div>
    <div class="info_medicament">

        <div class="card mb-3 info_medicament border-0" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="../assets/image4.png" class="img-fluid rounded-start" alt="image d'un médicament">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title"> nom du médicament</h5>
                        <p class="card-text">
                        <ul>
                            <li> <span class="info">nom:</span> </li><br />
                            <li> <span class="info">date d'expiration:</span> </li><br />
                            <li><span class="info"> vertues :</span> </li><br />
                            <li> <span class="info"> composition du médicament : </span> </li>
                        </ul>
                        </p>

                    </div>
                </div>
            </div>
        </div>
        <button class="ajouter btn "> <img src="../assets/chario.png" alt="chario" class="mini_chario" @click="getOnUser()"> ajouter
        </button>
        <button class="continuer btn btn-primary "> continuer les achats </button>
    </div>
    <footer>
        <footerPage />
    </footer>
</template>


<script>
import oneUser from './HomeView.vue';
import headerPage from '@/components/headerPage.vue';
import footerPage from '@/components/footerPage.vue';

export default {
    name: 'infoMedicament',
    components: {

        headerPage,
        footerPage
    },

    methods:{
        getOneUser(){
            console.log("::::VOICI  LES INFOS SUR NOTRE UTILISA");
            console.log(oneUser);
            return oneUser;
        },
        
    },
    mounted() {
        this.getOneUser();
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


</style>

