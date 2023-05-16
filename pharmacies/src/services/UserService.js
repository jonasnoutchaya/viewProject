//import { objectToString } from '@vue/shared';

const axios = require('axios');


let tokens='';
//let ss='';

















const client_id = process.env.VUE_APP_PAYPAL_CLIENT_ID;
const client_secret = process.env.VUE_APP_PAYPAL_CLIENT_SECRET_ID;

/**
 * If you find challege then concat the url with + instead of html integral
 * "https://api-m.sandbox.paypal.com/v1/billing/subscriptions/" + subscriptionID + "/suspend"
 * =========================================================================================
 */

// retirive user subscription details
export async function retriveuserinformation(subscriptionID) {
  // 1. Call PayPal to get a token
  const auth = await axios({
    url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    method: "post",
    headers: {
      Accept: "application/json",
      "Accept-Language": "en_US",
      "content-type": "application/x-www-form-urlencoded"
    },
    auth: {
      username: client_id,
      password: client_secret
    },
    params: {
      grant_type: "client_credentials"
    }
  });
  // 2. Call PayPal to get the subscription details
  const user_subscription_details = await axios({
    url: `https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionID}`,
    method: "get",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${auth.data.access_token}`
    }
  });
  return user_subscription_details;
  // end
}

// suspend user subscription
export async function suspendusersubscription(subscriptionID) {
  // 1. Call PayPal to get a token
  const auth = await axios({
    url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    method: "post",
    headers: {
      Accept: "application/json",
      "Accept-Language": "en_US",
      "content-type": "application/x-www-form-urlencoded"
    },
    auth: {
      username: client_id,
      password: client_secret
    },
    params: {
      grant_type: "client_credentials"
    }
  });
  // 2. Call PayPal to get the subscription details
  const user_subscription_details = await axios({
    url: `https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionID}/suspend`,
    method: "post",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${auth.data.access_token}`
    },
    data: {
      reason: "Customer-requested pause" // reason
    }
  });
  return user_subscription_details;
  // end
}

// suspend user subscription
export async function cancelusersubscription(subscriptionID) {
  // 1. Call PayPal to get a token
  const auth = await axios({
    url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    method: "post",
    headers: {
      Accept: "application/json",
      "Accept-Language": "en_US",
      "content-type": "application/x-www-form-urlencoded"
    },
    auth: {
      username: client_id,
      password: client_secret
    },
    params: {
      grant_type: "client_credentials"
    }
  });
  // 2. Call PayPal to get the subscription details
  const user_subscription_details = await axios({
    url: `https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionID}/cancel`,
    method: "post",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${auth.data.access_token}`
    },
    data: {
      reason: "Customer-requested pause" // reason
    }
  });
  return user_subscription_details;
  // end
}

// activate user subscription
export async function activateusersubscription(subscriptionID) {
  // 1. Call PayPal to get a token
  const auth = await axios({
    url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    method: "post",
    headers: {
      Accept: "application/json",
      "Accept-Language": "en_US",
      "content-type": "application/x-www-form-urlencoded"
    },
    auth: {
      username: client_id,
      password: client_secret
    },
    params: {
      grant_type: "client_credentials"
    }
  });
  // 2. Call PayPal to get the subscription details
  const user_subscription_details = await axios({
    url: `https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionID}/activate`,
    method: "post",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${auth.data.access_token}`
    },
    data: {
      reason: "Reactivating on customer request"
    }
  });
  return user_subscription_details;
  // end
}

export async function getAllUsers() {
  

    const response = await axios.post('/api/stuff/getAllThing');
   // console.log(" VOICI LA LISTe DES PRODUITS 00 ::::::::::::::::");

     //   console.log(response.data);

   // console.log(" FIN DE  LA LIST DES PRODUITS 00 ::::::::::::::::");
    return response.data;
} 
export async function getAllUsers1() {
  

  const response = await axios.post('/api/stuff/getAllThings');
 // console.log(" VOICI LA LISTe DES PRODUITS 00 ::::::::::::::::");

   //   console.log(response.data);

 // console.log(" FIN DE  LA LIST DES PRODUITS 00 ::::::::::::::::");
  return response.data;
} 


export async function getAllUsers2() {
  

  const response = await axios.post('/api/stuff/getAllThing2');
 // console.log(" VOICI LA LISTe DES PRODUITS 00 ::::::::::::::::");

   //   console.log(response.data);

 // console.log(" FIN DE  LA LIST DES PRODUITS 00 ::::::::::::::::");
  return response.data;
} 


export async function getAllUsers3() {
  

  const response = await axios.post('/api/stuff/getAllThing3');
 // console.log(" VOICI LA LISTe DES PRODUITS 00 ::::::::::::::::");

   //   console.log(response.data);

 // console.log(" FIN DE  LA LIST DES PRODUITS 00 ::::::::::::::::");
  return response.data;
} 

export async function getAll_Users(token) {
  token=  tokens.token;
  axios.defaults.headers.common['Authorization'] =token;
  const response = await axios.post('/api/auth/getAllUsers');
 // console.log(" VOICI LES UTILISATEURS  ::::::::::::::::");

     // console.log(response.data);

 // console.log(" FIN DE  LA LISTE DES UTLISATEURS ::::::::::::::::");
  return response.data;
}

export async function deleteOneComment(key,token) {
//console.log("le commentaire qui sera supprimé est :;:::::");
//  console.log(key)
token=  tokens.token;
  axios.defaults.headers.common['Authorization'] =token;
  const response = await axios.delete(`/api/auth/comment/${key}`);
  //console.log(" des commentaires à supprimé ::::::::::::::::");

     // console.log(response);

 // console.log(" FIN DE  LA LIST DES commentaires ::::::::::::::::");
  return response.data;
} 


export async function deleteOneUser(key,token) {
//  console.log("le commentaire qui sera supprimé est :;:::::");
   // console.log(key)
  token=  tokens.token;
    axios.defaults.headers.common['Authorization'] =token;
    const response = await axios.post(`/api/auth/deleteOneUser/${key}`);
   // console.log(" des commentaires à supprimé ::::::::::::::::");
  
     //   console.log(response);
  
  //  console.log(" FIN DE  LA LIST DES commentaires ::::::::::::::::");
    return response.data;
  } 
  


export async function getAllComments() {

  const response = await axios.get('/api/auth/comment');
  //console.log(" des commentaires ::::::::::::::::");

    //  console.log(response);

 // console.log(" FIN DE  LA LIST DES commentaires ::::::::::::::::");
  return response.data;
} 

export async function getOneThing(key) {
//key= "63159a2ee3c2b8065ed0c0fa";
//ss= encodeURI(key);

console.log("VOICI LA CLÉ DE RECHERCHE::::::::!!");
//console.log(ss);
console.log(key);
//console.log(`${key}`);
//console.log("VOICI LA FIN DE LA CLÉ DE  RECHERCHE");
  const response = await axios.get(`/api/stuff/${key}`
  // {
    //params: { id :  `${key}`}}
    );
  console.log(" VOICI LE PRODUIT  RCHERCHÉ 00 ::::::::::::::::");

      console.log(response.data);

  console.log(" FIN DU PRODUIT  RCHERCHÉ  00 ::::::::::::::::");

  return response.data;
} 

/*export async function createUser(data) {
    const response = await axios.post(`/api/user`, {user: data});
    return response.data;
} */
//const token2= null;
export async function createUser(data) {
    
    const response = await axios.post(`/api/auth/signup` ,  data);
    //console.log("utilisateur enregistré");
    return response.data;
    
} 

export async function addComment(comment,token) {

 
  token=  tokens.token;
  //console.log("voici mon token d'authentification") ;
  //console.log(token) ; 
 // console.log("voici mon message qui est envoyé ::::::: !!!!!! :") ;
 // console.log(comment) ; 
 
  axios.defaults.headers.common['Authorization'] =token;
  const response = await axios.post(`/api/auth/comment` , { comment: comment});
  //console.log("comment saved !");
  return response.data;
  }
 

export async function login(data) {
    const response = await axios.post(`/api/auth/login`,  data);
   // console.log("connecté");
   // console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
   // console.log(response.data);
     tokens=response.data;
  
    //console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    return response.data;
    
} 



export async function createStuff(data,token) {
  
  token=  tokens.token;
  console.log(data);
 // console.log("//////////**********") ;
  //console.log(token) ; 
  //console.log(data) ;
  //console.log("//////////**********") ;
  axios.defaults.headers.common['Authorization'] =token;
  const response = await axios.post(`/api/stuff/`, {thing: data});
  console.log("objet enregistré");
  return response.data;
}

/*export async function createStuff(data) {
    
    //axios.defaults.headers.common['Authorization'] =response.token;
    const response = await axios.post(`/api/stuff/`,"Baerer <token:this.token2>", {thing: data});
    console.log("objet enregistré");
    return response.data;
}*/

/*rp = require('request-promise');
options = {
  method: post,
  uri: 'https://www.example.com/api/stuff',
  headers: {
    Authorization: "Bearer <response.token>"
  }
}
rp(options).then(function(res){
  <handle_response>
}*/


export async function validateBuy(item,token) {
  
  token=  tokens.token;
  
 // console.log("//////////**********") ;
  //console.log(token) ; 
  //console.log(data) ;
  //console.log("//////////**********") ;
  axios.defaults.headers.common['Authorization'] =token;
  const response = await axios.post(`/api/auth/buy`, {buy: item});
  console.log("objet enregistré");
  return response.data;
}

export async function validateCommande(item,token) {
  
  token=  tokens.token;
  
 // console.log("//////////**********") ;
  console.log(item) ; 
  console.log(token)
  //console.log(data) ;
  //console.log("//////////**********") ;
  axios.defaults.headers.common['Authorization'] =token;
  const response = await axios.post(`/api/auth/commande`, {commande: item});
  console.log("objet enregistré");
  return response.data;
}


export async function deleteOneCommande(group_id,token) {
  
  token=  tokens.token;
  
 // console.log("//////////**********") ;
 
  //console.log(token)
  //console.log(data) ;
  //console.log("//////////**********") ;
  axios.defaults.headers.common['Authorization'] =token;
  const response = await axios.delete(`/api/auth/commande/${group_id}`);
  console.log("objet supprimé");
  return response.data;
}



export async function CreateLivraison(item,token) {
  
  token=  tokens.token;
  
 // console.log("//////////**********") ;
  console.log(item) ; 
  console.log(token)
  //console.log(data) ;
  //console.log("//////////**********") ;
  axios.defaults.headers.common['Authorization'] =token;
  const response = await axios.post(`/api/auth/livraison`, {livraison: item});
  console.log("objet enregistré");
  return response.data;
}


export async function getOneCommande(item,group_id,token) {
  
  token=  tokens.token;
  
  console.log("//////////**********") ;
  console.log(item) ; 
  console.log(group_id)
  //console.log(data) ;
  //console.log("//////////**********") ;
  axios.defaults.headers.common['Authorization'] =token;
  const response = await axios.get(`/api/auth/commande/${item}/${group_id}`);
  console.log("commande obtenue");
  return response.data;
}


export async function getAllUsersCommande(id,token) {
  
  token=  tokens.token;
  
  console.log("//////////**********") ;
  
  //console.log(data) ;
  //console.log("//////////**********") ;
  axios.defaults.headers.common['Authorization'] =token;
  const response = await axios.get(`/api/auth/commande/${id}`);
  console.log("commande obtenue");
  return response.data;
}
export async function getAllgroupedCommande(id,token) {
  
  token=  tokens.token;
  
  console.log("//////////**********") ;
  
  console.log(id) ;
  //console.log("//////////**********") ;
  axios.defaults.headers.common['Authorization'] =token;
  const response = await axios.post(`/api/auth/commande/group/${id}`);
  console.log("commande obtenue");
  return response.data;
}


export async function getAllBuy(token) {
  token=  tokens.token;
  axios.defaults.headers.common['Authorization'] =token;
  const response = await axios.get('/api/auth/buy');
  //console.log(" VOICI LES ACHATS:::  ::::::::::::::::");

//      console.log(response.data);

  //console.log(" FIN DE  LA LISTE DES ACHATS::: ::::::::::::::::");
  return response.data;
}
export async function getAllCommande(token) {
  token=  tokens.token;
  axios.defaults.headers.common['Authorization'] =token;
  const response = await axios.get('/api/auth/commande');
  //console.log(" VOICI LES ACHATS:::  ::::::::::::::::");

//      console.log(response.data);

  //console.log(" FIN DE  LA LISTE DES ACHATS::: ::::::::::::::::");
  return response.data;
}

export async function deleteOneCommande2(key,token){
  token = tokens.token;

  axios.defaults.headers.common['Authorization'] =token;
  console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
const reponse = await axios.post(`/api/auth/commande/${key}`);
console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
console.log(reponse.data)
return reponse.data;
}

export async function modifyCommande(key,data,token){
  token = tokens.token;

  axios.defaults.headers.common['Authorization'] =token;
  console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
  console.log(token)
  console.log(key)
  console.log(data)
  console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
const reponse = await axios.put(`/api/auth/commande/${key}`, {commande: data});
console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
console.log(reponse.data)
return reponse.data;
}

export async function getOneBuy(key,token) {
  token=  tokens.token;
  axios.defaults.headers.common['Authorization'] =token;
  const response = await axios.get(`/api/auth/buy/${key}`);
 // console.log(" VOICI LES ACHATS du client ...:::  ::::::::::::::::");

  //    console.log(response.data);

 // console.log(" FIN DE  LA LISTE DES ACHATS::: ::::::::::::::::");
  return response.data;
}

export async function getOneUser(key,token) {
 
  token=  tokens.token;
  
  console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD")
  axios.defaults.headers.common['Authorization'] =token;
 
    const response = await axios.post(`/api/auth/getOneUser/${key}`);
    console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD")
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    console.log(response.data)
    return response.data;
    
  }
  export async function deleteOneThing(key,token){
    token = tokens.token;

    axios.defaults.headers.common['Authorization'] =token;
    console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
  const reponse = await axios.delete(`/api/stuff/${key}`);
  console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
  console.log(reponse.data)
  return reponse.data;
  }

  export async function modifyOneThing(key,data,token){
    token = tokens.token;

    axios.defaults.headers.common['Authorization'] =token;
    console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
    console.log(key)
    console.log(data)
    console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
  const reponse = await axios.put(`/api/stuff/${key}`,  data);
  console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
  console.log(reponse.data)
  return reponse.data;
  }