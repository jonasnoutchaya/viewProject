<template>
    <inscriptionForm @createStuff="stuffCreate($event)" />
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
</template>

<script>
import { CToaster, CToast, CToastHeader, CToastBody } from '@coreui/vue';
import inscriptionForm from './inscriptionForm.vue'
import { /*login,*/ createStuff } from '../services/UserService.js'
export default {
    name: 'myDashBoardPage',
    components: {
        inscriptionForm,
        CToaster, CToast,CToastHeader,CToastBody,

        
        
    },
    data() {
        return {
            allDrugs: [],
            toasts: []
        }
    },

    methods: {
        stuffCreate(token, data) {
            createStuff(token, data)
                .then(
                this.createToast(),    
                response => console.log(response))
                .catch(error => console.log(error));

        },
        createToast() {
        this.toasts.push({
          title: 'GESTION DES PRODUITS',
          content: this.titre + ' ajouter au panier'
        })
      },
    }


}
</script>