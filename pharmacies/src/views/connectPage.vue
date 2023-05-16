<template>
<body>
    

    <form  >
        
            <label for="email"> adresse email: </label> <input type="email" name="email" id="tel" required /><br/>
            <label for="passsWord"> mot de passe: </label> <input type="password" name="password" id="passwod" required /><br/>

           <br/> <br/> <br/>
        
        <input type="submit" value="envoyer" class="envoyer"/>

        <p> mot de passe oublié? </p>
    </form>
    
    
</body>

 <footer>
        <footerPage/>
    </footer>
</template>


<script>

import footerPage from '@/components/footerPage.vue';

export default{
    name : 'connectPage',
    components: {
    
    
    footerPage
}
}

</script>



<style>
    label,input,select
    {
        display: inline-block;
        height: 20px;
        margin-bottom: 20px;
        
    }
    form
    {
        margin: auto;
        margin-top: 100px;
        
        width: 30%;
        text-align: left;
        height: 900px;
    }
   body
   {
    background-color: rgb(222, 222, 231);
   }
   .envoyer
   {
    background-color: rgb(109, 212, 109);
    
   }

</style>