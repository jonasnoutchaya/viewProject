
<template>
  <div class="stat" v-if="this.ready">
    <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
      :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
  </div>
  <button @click="display_data()"> </button>
</template>
    
<script>
import moment from 'moment';
import { getAllCommande} from '../services/UserService.js';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
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
      chartData: {
        labels: ['Aout', 'Septembre', 'Octobre'],


        datasets: [{ data: [], backgroundColor: ' #3737da96' }],

      },
      chartOptions: {
        responsive: true
      },
      mois1: [],
      mois2: [],
      mois3: [],
      ready : false,
    }
  },
  methods: {
    display_data() {

      for (var data of this.chartData.datasets) {
        console.log("DDDDDDDDDDDDDDDDDDD")
        console.log(data.data);
      }

    },
    setDate(value) {
            if (value) {
                return moment(String(value)).format('MM')
            }
        },
  },
  mounted(){
    this.mois1 =[],
    this.mois2= [],
    this.mois3= []
    getAllCommande().then(responses => {
     
      for(var response of responses){
        
        response.createdAt = this.setDate(response.createdAt)
        if(response.createdAt ==  8){
          this.mois1.push(response.createdAt)
        }
        else{
          if(response.createdAt == 9){
            this.mois2.push(response.createdAt)
          }
          else{
            if(response.createdAt == 10){
              this.mois3.push(response.createdAt)
            }
          }
        }
        
      }
     
      console.log(this.mois1);
      console.log(this.mois2);
      console.log(this.mois3);
      for(var chard of this.chartData.datasets){
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
.stat {
  height: 10px !important;
  width: 300px !important;
  margin: auto;
  color: #3737da96;
}
</style>