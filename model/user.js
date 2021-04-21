const getDb = require('../util/dataBase').getDb;

class User{
    constructor(name, email){
        this.name=name;
        this.email=email
    }
    save(){
        const db = getDb();
       return db.collection('users')
        .insertOne(this)
        .then(result =>{
            console.log("user Added")
        })
        .catch(err=>{
            console.log(err)
        })
    }
    static fetchUsers(){
        const db = getDb();
        return db.collection('users')
        .find().toArray()
        .then(users =>{
            return users;
        })
    }
}
module.exports = User;