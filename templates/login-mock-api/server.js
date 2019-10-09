const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('tiny'));

const jwt = require('./jwt');

const port = process.env.PORT || 9000;
const router = express.Router();
const routerAuth = express.Router();

const authMiddleware = require('./authMiddleware');

const users = [{
  fullName: 'John Doe',
  email: 'john@doe.com',
  password: 'zigvy123',
  id: 'fb3111f1-ea6e-11e9-ba42-2368758065ba',
  role: 'Admin',

}, {
  fullName: 'John Smith',
  email: 'john@smith.com',
  password: 'zigvy123',
  id: '781f9a70-ea6e-11e9-a9a5-4d422b2ea8f4',
  role: 'User',
}]


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});


router.post('/login', async function(req, res) {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    res.json({
      error: 'Incorrect password or email',
    });
  }

  const payload = {
    fullName: user.fullName,
    email: user.email,
    role: user.role,
    id: user.id,
  }


  try {
    const token = await jwt.signToken(payload);
    res.json({
      token,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Unexpected error',
    });
  }
});

routerAuth.get('/users/my', function(req, res) {
  const currentUser = req.user;
  const userId = req.user.id;
  const user = users.find(({ id }) => id === userId);
  res.json(user);
});

routerAuth.get('/users', function(req, res) {
  const currentUser = req.user;
  if (currentUser.role !== 'Admin') {
    res.status(401).json({
      error: 'You have not permission to perform this action',
    })
    return;
  }
  res.json({
    users,
  });
});

app.use('/', router);

app.use('/api', authMiddleware, routerAuth);

app.listen(port);
console.log('Server running on port ' + port);
