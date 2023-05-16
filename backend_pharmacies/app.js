const express = require('express');
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff');
const commentRoutes = require('./routes/comments');

const userRoutes = require('./routes/user');
const buyRoutes = require('./routes/buy');
const CommandeRoutes = require('./routes/commandes');
const LivraisonRoutes = require('./routes/livraison');
const path = require('path');

const app = express();

app.use(express.json());


mongoose.connect('mongodb+srv://jonas:noutchaya99@jonascluster.owqt7.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/auth/comment', commentRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/buy', buyRoutes);
app.use('/api/auth/commande', CommandeRoutes);
app.use('/api/auth/livraison', LivraisonRoutes);



module.exports = app;






/*const express = require('express');
const path = require('path');


const app = express(),    bodyParser = require("body-parser");
port = '8081';

// place holder for the data
const users = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});


module.exports = app;
 */