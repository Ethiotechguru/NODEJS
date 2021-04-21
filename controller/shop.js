const Name = require('../model/product')
exports.shopProduct =  (req, res)=>{
    Name.fetchAll()
    .then(products =>{
        res.render('shop', {
            users:products,
            pageTitle:"shop",
            path:'/home'
        })
    })
    .catch(err =>{
        console.log(err)
    })
    // console.log(names)
}

exports.productList =  (req, res)=>{
    Name.fetchAll()
    .then(products =>{
        res.render('product-list', {
            users:products,
            pageTitle:"All Products",
            path:'/product-list'
        })
    })
    .catch(err =>{
        console.log(err)
    })
}
// exports.getCart = (req, res)=>{
//     res.render('cart', {
//         pageTitle:"cart",
//         path:'/cart'
//     })
// }
// exports.postCart = (req, res)=>{
//     const prodId = req.body.productId;
//     console.log(prodId, 'is the product id for this product')
//     res.redirect('/cart')
// }
exports.getDetail =  (req, res)=>{
    const prodId = req.params.productId;
    // console.log(prodId)
    Name.findById(prodId)
    .then(product=>{
        res.render('product-detail',{
            user:product,
            pageTitle: product.title,
            path:'/product-list'
        })
    })
    .catch(err=>{
        console.log(err)
    })
    // console.log('This is a return of my name', user)
    
}
