const productController = require("../controllers/product.controller")



module.exports = (app) => {
    app.get("/api/product", productController.FindAllproduct)
    app.get("/api/product/:productId", productController.FindOneSingleproduct)
    app.patch("/api/product/:productId", productController.updateExistingproduct)
    app.put("/api/product/:productId", productController.updateExistingproduct)
    app.post("/api/product", productController.CreateNewproduct)
    app.delete("/api/product/:productId", productController.deleteAnExistingproduct)
}