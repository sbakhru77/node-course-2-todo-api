const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MondoDB server');
  }

  console.log('Connected to MondoDB server');

  //findOneAndUpdate
  db.collection('Users').findOneAndUpdate(
    {_id: new ObjectID('5a821cfd631a142df53e398c')},
    {
      $set: {name: 'Bittu'},
      $inc: {age: -1}
    }, {
      returnOriginal: false
    }
  ).then((result) => {
    console.log(result);
  });

//  db.close();
});
