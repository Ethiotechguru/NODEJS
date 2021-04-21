const Name = require('../model/product')

exports.getAdminController = (req, res, next)=>{
    res.render('edit-Product', {
        pageTitle:'add-product', 
        path:'/add-product',
        editing:false
    })
}
exports.postAdminController = (req, res, next)=>{
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Name(title, imageUrl, price, description);
    product.save()
    .then(result =>{
        
        res.redirect('/admin')
    })
    .catch(err =>{
        console.log(err)
    }) 
}

exports.getEditProduct = (req, res)=>{
    const edit = req.query.edit;
    if(!edit){
        return res.redirect('/admin')
    }
    const prodId = req.params.productId;
    Name.findById(prodId)
    .then(product =>{
        res.render('edit-Product', {
            user:product,
            editing:edit,
            pageTitle:"Edit admin product",
            path:'/admin'
        })
    })
    .catch(err=>{
        console.log(err)
    })
    
}
exports.postEditProduct = (req, res, next)=>{
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedImageUrl = req.body.imageUrl;
    const updatedPrice = req.body.price;
    const updatedDes = req.body.description;
    const product = new Name(
            updatedTitle,
            updatedImageUrl,
            updatedPrice, 
            updatedDes,
            prodId
        );
    product.save()
    .then(result=>{
        res.redirect('/admin')
    })
    .catch(err=>{
        console.log(err)
    })
}
exports.adminProducts =  (req, res)=>{
    Name.fetchAll()
    .then(products =>{
        res.render('admin', {
            users:products,
            pageTitle:"Admin Products",
            path:'/admin'
        })
    })
    .catch(err =>{
        console.log(err)
    })
}
exports.postDeleteProduct = (req, res, next)=>{
    const prodId = req.body.productId;
    Name.deleteById(prodId)
    .then(() =>{
        console.log("Deleted")
        res.redirect('/admin')
    })
    .catch(err =>{
        console.log(err)
    })
}

