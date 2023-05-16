<template>
  <nav class="navbar-expand">
    <div class="container-expand text-uppercase shadow mt-0 mb-5 bg-bottom rounded  header ">
      <div class="row  ">
        <div class="col-4">
          <span class="fw-bold fs-2 drugstore"> <span class="drug">drug</span> store</span>
        </div>
        <div class="col">

        </div>
        <div class="col-3">
          <div class="card  border-0">
            <img src="../assets/Logo-Pharmacie.jpg" class="card-img-top-center  logo" alt="logo d'une pharmacie" />
            <div class="card-body">
              <p class="card-text"> nom de la pharmacie</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="col">
            <router-link to="/dashBoardPage"> <button class=" btn fs-3   connexion"> connexion</button></router-link>
          </div>
        </div>

      </div>

      <div class="row   pb-3">
        <div class="col-1">

        </div>
        <div class="col-3">
          <form class="d-flex">
            <input class="form-control me-2 cherche" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success recherche text-dark " type="submit">Search</button>
          </form>
        </div>
        <div class="col-2">

        </div>

        <div class="col-2">
          <router-link to="/home">
            <div class="card border-0 nav_card">
              <img src="../assets/Maison.png" class="card-img-top image1" alt="home">
              <div class="card-body">
                <span class="card-text">home</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-2">
          <router-link to="/messageriePage">
            <div class="card  border-0 nav_card">
              <img src="../assets/messagerie.png" class="card-img-top image2" alt="messagerie">
              <div class="card-body">
                <span class="card-text chario"></span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-2">
          <router-link to="/charioPage">
            <div class="card border-0 nav_card">
              <img src="../assets/chario.png" class="card-img-top image2" alt="chario">
              <div class="card-body">
                <span class="card-text chario">{{$store.state.chario}}</span>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col">

        </div>
      </div>

    </div>
  </nav>
</template>
<script>

</script>
<style>
.cherche {
  margin-right: 0 !important;
  border: 2px solid#029900  ! important;
}

.recherche {
  margin-left: 0 !important;
  background-color:#029900  !important;
}

.connexion {
  color:#029900  !important;
}

.drug {
  color:#029900 ;
}

.drugstore {
  font-family: 'Times New Roman', Times, serif !important;
}

.image1 {
  width: 50px !important;
  height: 40px !important;
  margin: auto !important;
}

.image2 {
  width: 30px !important;
  height: 30px !important;
  margin: auto !important;
}

.logo {
  margin: auto !important;
  width: 100px !important;
  height: 80px !important;
}

.nav_card {
  width: 100px !important;
  height: 80px !important;
}

.chario {
  color: rgb(49, 123, 235);
}
</style>