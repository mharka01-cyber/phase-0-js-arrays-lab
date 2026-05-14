// Write your code here
const products = ['laptop', 'phone', 'headphones', 'monitor']
console.log(products)
logFirstProduct = (0)
console.log(products[logFirstProduct])
function addProduct(product) {
  products.push(product)
  return products
}
addProduct("mouse")
function updateProductName(index, newName) {
  products[0]= "PC"
  return products
}
updateProductName(0, "PC")
function removeLastProduct() {
  products.pop()
  return products
}
removeLastProduct()

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
