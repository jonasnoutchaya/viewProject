<template>



  <body>


      <div class="container ">
          <div class="row">
          <div class="col-4">HELLO ....!   <h1> </h1></div>
          <div class="col-1"></div>
          <div class="col-7">

              <div class="  message" v-for="item in comments" :key="item._id">
                  <div class="  message2 row" v-if="item.userId == $store.state.user_Id">
                      <div class="col-8">

                      </div>
                      <div class="col-4 bg-info message3">
                          {{ item.comment }}
                      </div>
                  </div>
                  <div class=" message2 row" v-if="item.userId != $store.state.user_Id">
                      <div class="col-4">
                          <div class="bg-light message3">
                              {{ item.comment }}
                          </div>
                      </div>
                      <div class="col-8">

                      </div>
                  </div>
              </div>


              <div class=" row ">
                  <div v-if="this.time">
                      <h1> 2 secondes</h1>
                  </div>


                  <form @submit.prevent="send">
                      <div class="form-group">

                          <small v-if="typing"> <small v-if="this.im_typing == true"> {{ this.typername }} is
                                  typing...
                              </small></small>
                          <input type="text" id="comment" class="form-control commentaire"
                              @keyup="send_comment($store.state.username)" style="box-shadow : none;"
                              v-model="comment" placeholder="laissez un commentaire...">
                      </div>
                  </form>
                  <button class="btn  send" @click="addComment(this.comment)" style="box-shadow : none;">
                      envoyer</button>


                  <!--  <form>
                <textarea name="comment" id="comment" cols="15" rows="10" required="required" v-model="comment"
                    class="commentaire"> laissez un commentaire</textarea>
            </form>

        
            send_comment($store.state.username)
            <button class="btn  send" @click="sendMessage(this.comment)"> envoyer</button>  -->

              </div>

          </div>
      </div>
  </div>
  </body>
  <footer>
      <footerPage2 />
  </footer>



</template>


<script>
import io from 'socket.io-client';
import { getAllComments } from '../services/UserService.js';
import { addComment } from '../services/UserService.js';
//import headerPage2 from '@/components/headerPage2.vue'
import footerPage2 from '@/components/footerPage2.vue';

//var socket = io();


export default {

  name: 'messageriePage',
  components: {
      //  headerPage2,
      footerPage2
  },
  data() {
      return {
          inside:false,
          typername: '',
          im_typing: true,
          comments: [],
          comment: '',
          typing: false,
          username: this.$store.state.username,
          ready: false,

          user: '',
          connections: 0,
          message: '',
          messages: [],
          info: [],
          time: false,
          socket: io('http://localhost:3000', { transports: ['websocket', 'polling', 'flashsocket'] }),

      }
  },
  // Our vue created method
  created() {
      // Emitting 'leave' event on tab closed event.
      /*  window.onbeforeunload = () => {
            this.socket.emit('leave', this.username);
        }*/


      // Listening to typing event emitted from the server and setting the data (username) to the UI

      /*this.socket.on('typing', (data) => {
          console.log("statut::::::::::::");
          
          this.typing = data;
          console.log(data);
      });*/

      // Listening to stopTyping event emitted from the server and setting the typing property to false

      /* socket.on('stopTyping', () => {
           this.typing = false;
       });*/

      // Listening to 'joined' event emitted from the server and pushing the data to info array

      /* socket.on('joined', (data) => {
           this.info.push({
               username: data,
               type: 'joined'
           });
           setTimeout(() => {
               this.info = [];
           }, 5000);
       });*/
      // Setting a time out for the info array to be emptied
      /* socket.on('leave', (data) => {
          this.info.push({
              username: data,
              type: 'left'
          });
          // Setting a time out for the info array to be emptied
          setTimeout(() => {
              this.info = [];
          }, 5000);
      }); */

      // Listening to 'connections' event emitted from the server to get the total number of connected clients
      /* socket.on('connections', (data) => {
          this.connections = data;
      }); */

  },

  // Watching for changes in the message inbox box and emitting the either 'typing' or 'stopTyping' event
  /* watch: {
       comment(value) {
           value ? this.socket.emit('typing', this.username) : this.socket.emit('stopTyping')
       }
   },*/

  //Vue Methods hook
  methods: {

      addComment(comment) {


          console.log("enregistré");
          comment = this.comment
          //console.log("voici le commentaire à sauvegarder: :::: ::::::");
          //  console.log(comment);
          addComment(comment).then(response => {
              console.log("voici la réponse du server::::::!!");
              console.log(response);
              console.log(response);
              this.clearForm();
              //this.setNumberOfMessage();
              // this.getAllComments();
              this.sendMessage(comment);
          })
      },
      miseEnAttente() {
          //Traitement
          console.log("traitement...")
          setTimeout(this.fonctionAExecuter, 2000); //On attend 5 secondes avant d'exécuter la fonction
      },
      fonctionAExecuter() {
          console.log("Le code écrit dans cette fonction ne sera exécuté qu'au bout de 5 secondes");
          this.im_typing = false;
      },

      clearForm() {
          this.comment = '';

      },
      /* setNumberOfMessage() {
           this.$store.commit('setmessage');
       },*/
      getAllComments() {
          getAllComments().then(response => {
              console.log("voici la liste des commentaires !!!!!!!!!!!!!!!!!!!!!!!!!");
              console.log(response);
              console.log(" voici la fin de la liste des commentaires  !!!!!!!!!!!!!!!!!!!!!!!!!");
              this.comments = response;
              console.log(" voici la fin de la liste des commentaires  !!!!!!!!!!!!!!!!!!!!!!!!!");
              console.log(this.comments);
              this.numberOfComments = this.comments.length;

          })
      },
      sendMessage(e) {
          console.log(" voici le message qui sera transmit::::::::");
          //console.log(message);
          console.log(e);
          // e= this.message;


          //e.preventDefault();

          this.socket.emit('chat-message', {
              user: this.user,
              message: e,
          });
          //console.log(e);
          this.message = ''
      },
      //The send method stores the user message and emit an event to the server.
      send() {
          this.messages.push({
              message: this.comment,
              type: 0,
              user: 'Me',
          });

          this.socket.emit('chat-message', {
              message: this.comment,
              user: this.username
          });
          this.comment = null;
      },

      // The addUser method emit a 'joined' event with the username and set the 'ready' property to true.
      addUser() {
          this.ready = true;
          this.socket.emit('joined', this.username)
      },

      send_comment(value) {

          console.log(" comment called successfully");
          //value= this.username;



          this.socket.emit('typing', value)

          // this.socket.emit('stopTyping', this.username)
          setTimeout(this.fonctionAExecuter, 3000); //On attend 5 secondes avant d'exécuter la fonction





      },

      watch: {
          send_comment() {

              console.log("...:::::::::::::::::");
              /*  console.log(value.length);
                if (value.length > 0) {
      
      
                    this.socket.emit('typing', this.username)
                }
               /* else if (value.length == 0) {
                    this.socket.emit('stopTyping', this.username)
      
      
                }*/

              this.socket.emit('stopTyping', this.username)
          },

      }

  },

  mounted() {
      /* console.log("salut")
       this.socket.on('MESSAGE', (data) => {
           console.log("salut");
           this.messages = [...this.messages, data];
           console.log("voici les messages renvoyés par le server!!!!");
           console.log(this.messages);
           // you can also do this.messages.push(data)
       }); */



      getAllComments().then(response => {
          // console.log("voici la liste des commentaires !!!!!!!!!!!!!!!!!!!!!!!!!");
          //console.log(response);
          //console.log(" voici la fin de la liste des commentaires  !!!!!!!!!!!!!!!!!!!!!!!!!");
          this.comments = response;
          //console.log(" voici la fin de la liste des commentaires  !!!!!!!!!!!!!!!!!!!!!!!!!");
          //console.log(this.comments);
          this.numberOfComments = this.comments.length;

      });

      // Listening to chat-message event emitted from the server and pushing to messages array
      /*this.socket.on('MESSAGE', (data) => {
          console.log("le message est arrivé  avec succès::::::::::");
          console.log(data.message);
          this.messages.push({
              message: data.message,
              type: 1,
              user: data.user,
          });
          console.log("message ajouter avec succès::::::::::");
          console.log(this.messages);
      });*/

      /*  this.socket.on('stopTyping', () => {
            //console.log(username);
            this.typing = false;
            console.log("stoptyping est écouté..:::::::::::::::::");
            console.log(this.typing);

        });*/
      this.socket.on('MESSAGE', (data) => {
          this.getAllComments();
          console.log("chat-message écouter :::::::!!!");
          console.log(data);
      });
      this.socket.on('joigned', (data) => {
          if(this.data){
              for(var item of this.data){
                  if(item == this.username){
                      this.inside = true
                  }
              }
              if(this.inside == false){
                  this.info.push(data);
              }
          }
        
          console.log("///////////////////JJJJJOIIIIGEDDD");
          console.log(this.info)
          /* setTimeout(() => {
               this.info = [];
           }, 5000);*/
      });
      this.socket.on('leave', (data) => {
          this.info.push({
              username: data,
              type: 'left'
          });
          // Setting a time out for the info array to be emptied
          setTimeout(() => {
              this.info = [];
          }, 5000);
      });

      this.socket.emit('joigned', this.username)



  },



}
</script>

<style>
.commentaire {
  margin: auto !important;
  width: 300px !important;
  height: 50px !important;
  border-radius: 50px !important;





}

.commentaire:focus {
  border: 2px solid #029900;
}

/* article
{
    background-image: url("../assets/Logo-Pharmacie.jpg");
    width: 100%;
    margin: auto;
    
    opacity:0.3;

}*/











.comments {
  margin: auto !important;

  width: 300px !important;
  height: 50px !important;
  margin-top: 100px !important;
  margin-bottom: 100px !important;
}

.comment .send {
  display: inline-block !important;

}

.send {
  color: rgba(98, 236, 5, 0.568) ! important;
  width: 200px !important;
  margin: auto;
  margin-bottom: 10% !important;
}

.myform {
  margin: auto !important;
}

.message2 {
  margin-top: 5% !important;
  margin-bottom: 5% !important;

}

.message3 {
  border: 1px solid white;
  border-radius: 15px !important;
}
</style>