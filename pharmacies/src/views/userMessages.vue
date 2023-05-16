<template>

    <div class="header">
        <headerPage2 />
    </div>
    <div class=" titre">

        <h3> Méssages postés par l'utilisateur <span class="name"> {{name}}</span> </h3>
    </div>
    <div class="container ">

        <div col-3>
            <div class="col-3">
                <form class="d-flex">
                    <input class=" form-control me-2 cherche " style="box-shadow : none;"
                        :class="{ okay: this.inside, 'border-danger': !this.inside  }" ref="search" v-model="searchkey"
                        @keyup="search_animal()" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success recherche text-dark " type="submit">Search</button>
                </form>
                <ul id="list">
                    <li v-for="item in all_Comments" :key="item._id">
                        <router-link :to="`/infoMedicament2/${item._id}`" v-if="this.symptomes == false">
                            {{item.comment}}
                        </router-link>
                        <router-link :to="`/infoMedicament2/${item._id}`" v-if="this.symptomes == true">
                            {{item.vertues}}
                        </router-link>
                    </li>

                </ul>
            </div>
        </div>
        <div col-9>

        </div>

    </div>
    <div v-if="value == true">
        <div class="container">

            <div v-for="comment of myComments" :key="comment._id">
                <div class="row">


                    <div class="col-4">

                    </div>
                    <div class="col-4">
                        <div class="  shadow-sm p-3 mb-5 bg-white rounded myclass">
                            {{comment.comment}}
                            <div class="mt-5">

                                <CButton class="modifier btn bg-light fw-bold myclass"
                                    @click="() => { visibleLiveDemo = true }">supprimer</CButton>
                                <CModal :visible="visibleLiveDemo" @close="() => { visibleLiveDemo = false }">
                                    <CModalHeader>
                                        <CModalTitle>supprimer</CModalTitle>
                                    </CModalHeader>
                                    <CModalBody>voulez vous vraiment supprimer cet utilisateur ?</CModalBody>
                                    <CModalFooter>
                                        <CButton color="secondary" @click="() => { visibleLiveDemo = false }">
                                            annuler
                                        </CButton>
                                        <CButton color="danger"> <button class="btn border:none " height:5px
                                                color="danger" @click="deleteOneComment(comment._id)"> supprimé</button>
                                        </CButton>
                                    </CModalFooter>
                                </CModal>

                            </div>
                        </div>
                        <div class="col-4">

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div v-if="value == false">
        <div>
            <div col-3>

            </div>
            <div col-6>
                <span class="danger"> cet utilasteur n'a participé à aucune conversation !</span>
            </div>
            <div col-3>

            </div>
        </div>
    </div>
    <footer>
        <footerPage2 />
    </footer>
</template>


<script>

import { CModal } from '@coreui/vue'
import { CModalTitle } from '@coreui/vue';
import { CModalHeader } from '@coreui/vue';
import { CModalBody } from '@coreui/vue';
import { CModalFooter } from '@coreui/vue';
import { CButton } from '@coreui/vue'

import { getAllComments, deleteOneComment } from '@/services/UserService';
import headerPage2 from '@/components/headerPage2.vue';
import footerPage2 from '@/components/footerPage2.vue';

export default {
    name: 'userMessages',
    components: {
        CModal,

        CButton,
        CModalFooter,
        CModalBody,
        CModalHeader,
        CModalTitle,
        headerPage2,
        footerPage2
    },
    props: {
        nom: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            visibleLiveDemo: false,
            all_Comments: [],
            commentList: [],
            inside: true,
            value: false,
            myComments: [],
            itemId: this.$route.params.id,
            is_inside: false,
            name: this.$route.params.name
        }
    },


    methods: {

        search_animal() {
            this.symptomes = false;
            this.inside = true;
            //let drugName =[];
            //let commentList = [];
            let m = 0;
            let i = 0;
            let input = this.searchkey;
            input = input.toLowerCase();
            let value = false;

            //console.log("voici le résultat!!!!:::::");
            // console.log(input);
            //let x = document.getElementsByClassName('animals');
            console.log(this.$store.state.all_Comments);
            for (var comment of this.myComments) {
                m++;
                console.log(" voici le comment ::::::::::::::");
                console.log(comment);
                /*drugName = comment 
                for(var item of drugName){
                  if(comment== item){
                    commentList = comment;
                  }
                }*/
                if (comment.comment.toLowerCase().includes(input)) {

                    console.log("voici le comment sélectionné:::::::::::");
                    console.log(comment.comment);


                    if (this.commentList.length == 0) {
                        i++;
                        this.commentList.push(comment);
                        console.log(" voici le contenu de drug :::::::::");
                        console.log(this.commentList);
                    } else if (this.commentList.length > 0) {

                        for (var drug of this.commentList)
                            if (drug.comment != comment.comment) {
                                value = true
                                console.log("voici le contenu de drug:::::::::::!!!!");
                                console.log(this.commentList);
                            }
                        if (value == true) {
                            this.commentList.push(comment);
                        }


                    }

                    console.log("voici le contenu de drug après tous les ajouts!!!:::::::::::");
                    console.log(i);
                    console.log(m);
                    console.log(this.myComments);
                    // console.log(drug.comment);


                    //drugName = comment ;
                    //this.all_Comments = input;f
                    /* for( var user of this.all_Comments )
                     if(comment != user){
                     this.all_Comments.push(comment);
                     }*/

                }


            }
            console.log("voici le contenu de drug:::::::::::!!!!");
            console.log(this.commentList);
            this.all_Comments = this.commentList;


            console.log("voici le contenu de all_Comments:::::::::::!!!!");
            console.log(this.all_Comments)





            this.commentList = [];
            //this.all_Comments.push(drugName);
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
                this.all_Comments = [];
            }
            if (this.all_Comments.length == 0) {
                if (!input) {
                    this.inside = true;
                } else {
                    this.inside = false;
                }

            }
            console.log("voici la liste des médicaments:::::::::::::");
            console.log(this.myComments.comment);
            this.getFocus();
        },
        deleteOneComment(item) {
            console.log("fonction appellée avec")
            deleteOneComment(item)
           
            this.getAllComments();
        },
        
        getAllComments(){
            console.log("function called successfully")
            this.is_inside= false,
            this.myComments= [],
            getAllComments().then(response => {
            console.log(response);
            for (var oneresponse of response) {
                console.log(this.itemId)
                if (this.itemId == oneresponse.userId) {
                    this.myComments.push(oneresponse);
                    console.log(this.myComments);
                    this.value = true;
                }

                if (this.myComments.length == 0) {
                    this.$store.commit('incrementallComments', oneresponse);
                }
                else if (this.myComments.length > 0) {
                    for (var comment of this.myComments) {
                        if (oneresponse == comment) {
                            this.is_inside == true;
                        }
                    }
                }
                if (this.is_inside == false) {
                    this.$store.commit('incrementallComments', oneresponse);
                }
            }

        });
        }
    },
    mounted() {
        getAllComments().then(response => {
            console.log(response);
            for (var oneresponse of response) {
                console.log(this.itemId)
                if (this.itemId == oneresponse.userId) {
                    this.myComments.push(oneresponse);
                    console.log(this.myComments);
                    this.value = true;
                }

                if (this.myComments.length == 0) {
                    this.$store.commit('incrementallComments', oneresponse);
                }
                else if (this.myComments.length > 0) {
                    for (var comment of this.myComments) {
                        if (oneresponse == comment) {
                            this.is_inside == true;
                        }
                    }
                }
                if (this.is_inside == false) {
                    this.$store.commit('incrementallComments', oneresponse);
                }
            }

        });
        console.log("data store:::::");
        console.log(this.myComments);

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

.myclass {
    background-color: aliceblue !important;
}

.mini_chario2 {
    width: 20px;
    height: 20px;
}

.titre {
    /* height: 100px;*/
    margin-top: 100px;
    margin-bottom: 100px;
}

.name {
    background-color: rgb(197, 221, 243);
}
</style>

