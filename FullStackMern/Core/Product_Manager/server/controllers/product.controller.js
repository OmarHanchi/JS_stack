const productSchema = require("../models/product.model")



//? Read All

module.exports.FindAllproduct = (req, res) => {
    // db.product.find()
    productSchema.find()
        .then((Allproducts) => {
            console.log(Allproducts)
            res.json(Allproducts)
        })
        .catch(err => { res.json({ message: "Wait a minute 🙄🙄" }) })
}



//? Create

module.exports.CreateNewproduct = (req, res) => {
    // db.product.insertOne({fistName:65454})
    console.log(req.body)
    productSchema.create(req.body)
        .then(Createproduct => {
            console.log(Createproduct)
            res.json({ newproduct: Createproduct })
        })
        .catch(err => { res.json({ message: "Wait a minute 🙄🙄", err }) })
}

//? Read One

module.exports.FindOneSingleproduct = (req, res) => {
    productSchema.findOne({ _id: req.params.productId })
        .then(oneSingleproduct => {
            res.json(oneSingleproduct)
        })
        .catch((err) => {
            res.json(err)
        })
}


//? DELETE

module.exports.deleteAnExistingproduct = (req, res) => {
    productSchema.deleteOne({ _id: req.params.productId })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.json(err)
        })
}

//? UPDATE

module.exports.updateExistingproduct = (req, res) => {
    console.log(req.body);
    productSchema.findOneAndUpdate({ _id: req.params.productId }, req.body, { new: true, runValidators: true })
        .then(result => {
            res.json({ "done": result })
        })
        .catch((err) => {
            res.json(err)
        })

}