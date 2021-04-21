const mongodb = require('mongodb')
const getDb = require('../util/dataBase').getDb;
class Product{
    constructor(t, i, p, d,id){
        this.title = t;
        this.imageUrl = i;
        this.price = p;
        this.description =d;
        this._id = id?new mongodb.ObjectId(id):null;
        //Alternative to ternery Op
        // if(id){
        //     this._id = new mongodb.ObjectId(id)
        // }else{
        //     this._id = null
        // };
        
    }
    save(){
        const db = getDb();
        let dbOp;
        if(this._id){
            dbOp = db
            .collection('products')
            .updateOne({_id:this._id}, {$set:this})
        }
        else{
            dbOp = db.collection('products').insertOne(this)
        }
        return dbOp
        .then(result =>{
            console.log("B")
        })
        .catch(err =>{
            console.log("no data is found")
        })
    }
    static fetchAll(){
        const db = getDb()
        return db.collection('products')
        .find()
        .toArray()
        .then(products =>{
            console.log("from FetchAll B")
            return products;
        })
        .catch(err=>{
            console.log(err)
        })
    }
    static findById(pId){
        const db = getDb();
        return db.collection('products')
        .findOne({_id:new mongodb.ObjectId(pId)})
        .then(product =>{
            // console.log(product)
            return product;
        })
        .catch(err=>{
            console.log(err)
        })
    }
    static deleteById(pId){
        const db = getDb();
        return db
        .collection('products')
        .deleteOne({_id:new mongodb.ObjectId(pId)})
        .then(result =>{
            // console.log(product)
            console.log("Deleted")
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
module.exports = Product;