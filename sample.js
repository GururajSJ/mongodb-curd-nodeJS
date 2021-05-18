var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var col = dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");

    var myobj = [{ name: "Gururaj", address: "Bangalore 91" }, { name: "Raj", address: "Hyderbad 91"}];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");


    // var dbo = db.db("new");
    dbo.collection("customers").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);


  var myquery = { address: "Hyderbad 91" };
  var newvalues = { $set: {name: "RajGuru", address: "Hyd 123" } };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
  });

  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });

  var myquery = { address: 'Bangalore 91' };
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
   });

   dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });
  
  });
});
});
//   db.close();

});