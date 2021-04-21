const mongodb = require('mongodb');
require('dotenv').config()
const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = (cb) =>{
    MongoClient.connect(process.env.DB_CONNECTION,{useUnifiedTopology: true})
    .then(result =>{
        // console.log(result);
        console.log("A")
        _db = result.db()
        cb(result);
    })
    .catch(err =>{
        console.log(err)
    })
}
const getDb = ()=>{
    if(_db){
        return _db;
    }
    throw 'db is not set';
}
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;