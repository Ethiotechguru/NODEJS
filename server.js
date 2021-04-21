// const mongodb = require('mongodb')
const express = require('express');
const app = express();
const path = require('path')
const mongoConnect = require('./util/dataBase').mongoConnect;
const User = require('./model/user')
// const addProductRouter = require('./router/add-product')
const shopRouter = require('./router/shop')
// const cartRouter = require('./router/cart')
const adminRouter = require('./router/admin')
const errRouter = require('./router/404')

const bodyParser = require('body-parser')
app.set('view engine', 'ejs');
app.set('views', 'views')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))
// app.use(shopRouter)
// app.use(cartRouter)
app.use((req, res, next)=>{
    User.fetchUsers()
    .then(users =>{
        console.log('this is from server.js', users)
        next()
    }).catch(err =>{
        console.log(err)
    })
})
app.use(adminRouter)
// app.use(addProductRouter)
app.use(shopRouter)
app.use(errRouter)

mongoConnect(() =>{
    console.log("connected")
    app.listen(3000)
})
