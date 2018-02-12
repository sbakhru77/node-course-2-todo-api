const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MondoDB server');
  }

  console.log('Connected to MondoDB server');

  //deleteMany
  // db.collection('Users').deleteMany({name: 'Sunila'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  db.collection('Users').deleteOne({name: 'Sanaa'}).then((result) => {
    console.log(result);
  });

  //findOneAndDelete
  // db.collection('Users').findOneAndDelete({age: 40}).then((result) => {
  //   console.log(result);
  // });

//  db.close();
});
