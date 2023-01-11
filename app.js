
function Product(nombre, precio, cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.decirPrecio = function(){
        return "El precio es de " + this.precio;
    }
}


const product1 = new Product('contactor', 1500, 15)
const product2 = new Product('termica', 2500, 15)

console.log(product1)
console.log(product1.decirPrecio())
console.log('nombre' in product1)

for(const i in product1){
    console.log(product1[i])
}