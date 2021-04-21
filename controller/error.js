exports.error = (req, res) =>{
    res.render('404', {
        pageTitle:"page not found",
        path:'/'
    })
}