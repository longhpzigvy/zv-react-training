const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const uuidv1 = require('uuid/v1');
const cors = require('cors')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('tiny'));

const port = process.env.PORT || 9000;
const router = express.Router();


app.use(cors());

const currentTodos = [{
  id: 'M9gdBMpsvvWrWvgpL',
  name: 'To do 1',
  completed: false,
}, {
  id: 'M9gdBMpsvvWrWvgpL1',
  name: 'To do 2',
  completed: false,
}, {
  id: 'M9gdBMpsvvWrWvgpL4',
  name: 'To do 3',
  completed: false,
}];

router.get('/todos', function(req, res) {
  res.json(currentTodos)
});




router.post('/todos', function(req, res) {
  const todo = req.body;
  todo.id = uuidv1();
  currentTodos.push(todo);
  res.json(todo);
});


router.put('/todos/:todoId', function(req, res) {
  const todoId = req.params.todoId;
  
  const todo = currentTodos.find(({ id }) => id === todoId);
  Object.keys(req.body).forEach(field => {
    todo[field] = req.body[field];
  });
  res.json(todo);
});


router.delete('/todos/:todoId', function(req, res) {
  const todoId = req.params.todoId;
  const index = currentTodos.findIndex(({ id }) => todoId === id);
  currentTodos.splice(index, 1);
  res.json({});
});


app.use('/', router);

app.listen(port);
console.log('Server running on port ' + port);
