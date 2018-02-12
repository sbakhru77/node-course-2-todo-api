const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MondoDB server');
  }

  console.log('Connected to MondoDB server');

  db.collection('Users').find({location: 'San Jose'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });

  // db.collection('Users').find({name: 'Dummy'}).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // });
  //
  // db.collection('Users').find({name: 'Sunila'}).count().then((count) => {
  //   console.log(`user count: ${count}`);
  // }, (err) => {
  //   console.log('unable to find the user', err);
  // });



//  db.close();
});
