
<template>
    <div class="container-fluid shadow-sm p-3  rounded ">
        <div class="row my_container">
            <div class="col-3">
                <h5> médicament bien conservé normalisé</h5>
                <h6> mention légales:</h6>
                <ul>
                    <li>droit d'exercer</li>
                    <li> respect des normalités</li>
                    <li> ministère de la santé ! </li>
                </ul>
            </div>
            <div class="col-6">

            </div>
            <div class="col-3">
                <h5> <img src="../assets/om.png" class="transaction" alt=" image transaction">
                    payement fiable et sécuriser </h5>
                <h6> le payement s'effectue :</h6>
                <ul>
                    <li> en ligne </li>
                    <li> à la livraison</li>
                </ul>
            </div>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="col">

                </div>
                <div class="col">
                    <div class="card h-100 border-0">
                        <img src="../assets/Logo-Pharmacie.jpg" class="card-img-top logo" alt="logo pharmacie">
                        <div class="card-body">
                            <h5 class="card-title">nom de la pharmacie</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                to additional content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col pharmacie ">
                <div class="card h-100  border-0">
                    <img src="../assets/Logo-Pharmacie.jpg" class="card-img-top logo" alt="logo pharmacie">
                    <div class="card-body">
                        <h5 class="card-title">nom de la pharmacie</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
            
            <div class="col pharmacie ">
                <div class="card h-100 border-0">
                    <img src="../assets/Logo-Pharmacie.jpg" class="card-img-top logo" alt="logo pharmacie">
                    <div class="card-body">
                        <h5 class="card-title">nom de la pharmacie</h5>
                        <p class="card-text">This is a short card.</p>
                    </div>
                </div>
            </div>

            

        </div>

    </div>


    <div class="lienPharmacie">
        <a href="kkk"> <img src="../assets/facebook.png" alt="icone facebook" class="facebook"></a>
        <a href="kkk"> <img src="../assets/linkeIn.png" alt="icone linkein" class="linkein"></a>
        <a href="kkk"> <img src="../assets/twiter.png" alt="icone twitter" class="twitter"></a>
    </div>

</template>


<script>

export default {
    name: 'footerPage'
}    
</script>

<style>
.footer {
    margin-top: 30px;

}

.div1,
.div2 {
    display: inline-block;
    width: 40%;
}
.logo
{
    width: 150px !important;
    height: 100px !important;
}

</style>