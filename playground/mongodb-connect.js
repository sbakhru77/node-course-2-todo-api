const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MondoDB server');
  }

  console.log('Connected to MondoDB server');

  db.collection('Users').insertMany([{
    name: 'Sanaa',
    age: 10,
    location: 'San Jose'
  },{
    name: 'Sunila',
    age: 41,
    location: 'San Jose'
  }, {
    name: 'Sunila',
    age: 40,
    location: 'Santa Clara'
  }, {
    name: 'Sunila',
    age: 40,
    location: 'San Jose'
  }], (err, result) => {
    if(err) {
      return console.log('Unable to insert user', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
