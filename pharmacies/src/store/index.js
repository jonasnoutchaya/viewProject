import { createStore } from 'vuex'
//import Vue from 'vue'
//import Vuex from 'Vuex'


export default createStore({
//export default new Vuex.Store({
  state:{
    purchases_drugs :[],
    usersEmail: [],
    admin: false,
    username: '',
    user_Id:null,
    token: null,
    numberOfMessage: null,
    chario:null,
    drugList:[],
    users: [],
    All_drugs: [],
    allComments:[],
    allDates:[]
  },
  
  mutations:{
    setpurchases_drugs(state,titre){
      state.purchases_drugs.push(titre)
    },
    resetpurchases_drugs(state){
      state.purchases_drugs= []
    },
    setusersEmail(state,data){
      state.usersEmail.push(data);
    },
    setUser(state,userId){
      state.user_Id= userId;
    },
    setAdmin(state){
      state.admin= true;
    },
    setUserName(state,userName){
      state.username = userName
    },
    setToken(state,token){
      state.token= token ;
    },
    resetToken(state){
      state.token= null;
    },
    setmessage(state){
      state.numberOfMessage += 1;
    },
    incrementTrolly(state){
      state.chario += 1;
    },
    resetTrolly(state){
      state.chario= null
    },
    decrementTrolly(state){
      state.chario -= 1;
      if(state.chario == 0){
        state.chario =null;
      }
    },
    incrementDrugList(state,itemId){
      state.drugList.push(itemId);
    },
    increment_All_drugs(state,drug){
      state.All_drugs.push(drug);
    },
    reset_All_drugs(state){
      state.All_drugs= [];
    },
    increment_users(state,itemName){
      state.users.push(itemName);
    },
    deleteDrugId(state, drugId){
      var i = 0;
      for (var drug_Id of state.drugList) {

          if (drug_Id == drugId) {
              state.drugList.splice(i, 1);
             
          } else {
              i += 1;
          }

      }

    },
    resetDrugList (state){
      state.drugList = []
    },
    incrementallComments(state,comment){
      state.allComments.push(comment);
    },
    resetpurchasesDate (state){
      state.allDates= [];
    },
    setpurchasesDate (state,newDate){
      state.allDates.push(newDate);
    },
  },
  getters: {
    displayToken(state){
      return `${state.user_Id}///////${state.token}` ;
    },
    isLoggedIn(state) {
      return state.token;
    },

  },
 
  actions:{

  },
  modules:{

  }
})



/*import { createStore } from 'vuex'

export default createStore({
  state: {
    day:21,
    month: 10,
    year:2022,
  },
  getters: {
    formattedDate(state){
      return ` ${state.day}/${state.month}/${state.year}`
    }
  },
  mutations: {
    INCREMENT_DAY(state){
      state.day++ ;
    },
    INCREMENT_MONTH(state){
      state.month ++;
    },
    INCREMENT_YEAR(state){
      state.year++;
      state.month=1 ;
    
    }
  },
  actions: {
    incrementMonth(context){
      if(context.state.month+1 >12){
        context.commit("INCREMENT_YEAR")
      }
      context.commit("INCREMENT_MONTH");

    },
  },
  modules: {
  }
})*/
