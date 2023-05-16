<template>

  <div class="container mt-5 mb-5 foots bg-dark text-light">
    <div class=" row">
      <div class="col-3 ">
        <div class="row">
          <div class=" col-4">
            <router-link to="/"> <img src="../assets/Logo-Pharmacie.jpg" class="card-img-top-center  my_card "
                alt="logo d'une pharmacie" /> </router-link>
          </div>
          <div class="col-8">
            <div class="mt-4 fw-bold"> <span class="pharmacie">P</span>harmacie  <span class="pharmacie">P</span>harma </div>
          </div>

        </div>
        <div class="row">
          la meilleure pharmacies de toute la ville !! <br/>
          acheter et faite vous livrer à domicile .
        </div>
      </div>

      <div class="col-1 footer1"></div>

      <div class="col-5 footer1">
        <div class="row">

        
        <h6 class="fw-bold"> NOS CATÉGORIES </h6>
        <div class="col-4">
          Produits pour Hommes
        </div >
        <div class="col-4">
          Produits pour Femmes
        </div>
        <div class="col-4"> Produits pour Enfant </div>
      </div>
     
    </div>
      <div class="col-3 ">
        <h6 class="fw-bold"> Services</h6>
        <div class="row">
          <i class="bi bi-linkedin  services"></i>
        </div>
        <div class="row">
          <i class="bi bi-facebook  services"></i>
        </div>
      </div>

    </div>

  </div>

  <l-map style="height: 300px" :zoom="zoom" :center="center" v-if="this.ready">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker :lat-lng="markerLatLng"></l-marker>
    <l-marker :lat-lng="markerLatLng2"></l-marker>

  </l-map>

</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue3-leaflet';

export default {
  name: 'footerPage',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      lat: '',
      lng: '',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [],
      markerLatLng2: [47.41422, -1.250482],
      markerLatLng: [],
      ready: false
    };
  },

  methods: {
    async getUserPosition() {
      // check if API is supported
      if (navigator.geolocation) {
        // get  geolocation
        navigator.geolocation.getCurrentPosition(pos => {
          // set user location

          this.lat = pos.coords.latitude,
            this.lng = pos.coords.longitude;
            console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPP")
          console.log(this.lat);
          console.log(this.lng);
          this.center.push(this.lat);
          this.center.push(this.lng);
          this.markerLatLng.push(this.lat);
          this.markerLatLng.push(this.lng);
         this.ready = true

        });
        
      }
    }
  },

  mounted() {
    this.getUserPosition();
   // this.ready = true
  }
}
</script>

<style>
  .pharmacie{
    color:  #029900;
  }
  .services{
    color:  #029900;
    font-size: x-large;
  }
  .footer1{
    border-right: 1px solid rgba(0, 0, 0, 0.288);
    border-top: 1px solid rgba(0, 0, 0, 0.288);
  }
  .foots{
    margin-top: 100px !important ;
  }
  
</style>