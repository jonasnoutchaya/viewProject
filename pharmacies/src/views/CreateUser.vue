<template>
    <h3> Vous n'avez pas de compte ?</h3>

    <div class="mt-5 mb-4">
        <h4> Crééz votre compte ! </h4>
    </div>
    <form class="bg-light">

        <div class="mb-3 bg-light">
            <label for="nom" class="form-label">Nom</label>
            <input type="text" v-model="firstName" name="firstname" style="box-shadow : none;" class="form-control" id="name" required>

            <label for="prenom" class="form-label">Prénom</label>
            <input type="text" v-model="lastName" name="lastname" style="box-shadow : none;" class="form-control" id="prenom" required>

            <label for="contact" class="form-label"> Numéro De Téléhpone</label>
            <input type="tel" v-model="contact" name="contact" style="box-shadow : none;" class="form-control" id="contact" required>

            <label for="exampleInputEmail1" class="form-label">Adress Email</label>
            <input type="email" v-model="email" name="email" style="box-shadow : none;" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp" required>
            
        </div>
        <div class="mb-3 ">
            <label for="exampleInputPassword1" class="form-label">Mot de Passe</label>
            <input type="password" v-model="password" style="box-shadow : none;" name="password" class="form-control" id="exampleInputPassword1" required>
        </div>
      
        <div>
          
        </div>
        <button type="button" @click='createUser()' style="box-shadow : none;" class="btn border-0 btn-primary mt-4 envoyer ">
            Envoyer </button>
    </form>
    

     <!--<CForm class="row g-3 needs-validation" novalidate :validated="validatedCustom01" @submit="handleSubmitCustom01">
        <CCol md="4">
            <CFormInput feedbackValid="Looks good!" id="validationCustom01" label="First name" required value="Mark" />
        </CCol>
        <CCol md="4">
            <CFormInput feedbackValid="Looks good!" id="validationCustom02" label="Email" value="Otto" required />
        </CCol>
        <CCol md="4">
            <CFormLabel for="validationCustomUsername">Username</CFormLabel>
            <CInputGroup class="has-validation">
                <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
                <CFormInput id="validationCustomUsername" aria-describedby="inputGroupPrepend"
                    feedbackInvalid="Please choose a username." required />
            </CInputGroup>
        </CCol>
        <CCol md="6">
            <CFormInput feedbackInvalid="numéro de téléphone" id="validationCustom03" label="Numéro De Déléphone" required />
        </CCol>
        <CCol md="3">
            <CFormInput aria-describedby="validationCustom04Feedback" feedbackInvalid="Please select a valid state."
                id="validationCustom04" label="State" required>     
            </CFormInput>
        </CCol>

        <CCol md="3">
            <CFormInput aria-describedby="validationCustom04Feedback" feedbackInvalid="Please select a valid state."
                id="validationCustom04"  type="password" label="Mot De Passe" required>     
            </CFormInput>
        </CCol>
  
        
        <CCol xs="12">
            <CButton color="primary" type="submit">Submit form</CButton>
        </CCol>
    </CForm> -->


</template>

<script>
//import { CForm, CFormInput,CFormLabel,CInputGroup,CInputGroupText,CCol } from '@coreui/vue'
export default {
    components:{
      //  CForm, CFormInput,CFormLabel,CInputGroup,CInputGroupText,CCol
    },
    name: 'CreateUser',
    data() {
        return {

            firstName: '',
            lastName: '',
            email: '',
            contact: '',
            password: ''

        }
    },


    methods: {
        createUser() {

            const payload = {
                firstName: this.firstName,
                lastName: this.lastName,
                password: this.password,
                contact: this.contact,
                email: this.email
            }
            this.$emit('createUser', payload);
            this.clearForm();
        },
        clearForm() {
            this.firstName = "";
            this.contact = "";
            this.password = "";
            this.lastName = "";
            this.email = "";
        }
    }
}
</script>

<style>

.envoyer{
        background-color:  #029900 !important ;
        color: white !important;
    }

</style>