//Sistema de carrito en el que mediante prompts podemos ingresar el nombre y el precio del producto
//Escribiendo ESC podemos salir del sistema
//Si ingresamos CARRITO podemos ver los productos del carrito con su precio y el total
//En el carrito podemos eliminar productos ingresando el indice del producto que deseamos eliminar y si ponemos COMPRAR finaliza el proceso


//--------Creo las variables y arrays que voy a utilizar--------
const carrito = [];
indexProd = 0;
let precioProd;
let nombreProd;
let compras = "";
let total = 0;

//--------Clase Productos con nombre, precio y id--------
class Productos {
    constructor(nombre, precio, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
    }

}

//--------Creo las funciones para agregar y eliminar productos del carrito--------
const agregarCarrito = (nomProd, precProd, indexProd) => carrito.push(new Productos(nomProd, precProd, indexProd));

const eliminarCarrito = i => carrito.splice(i-1, 1);



nombreProd = prompt(`Ingrese el nombre del producto\n\nCARRITO: ${indexProd}`).toUpperCase(); //Se pide al usuario ingresar el nombre del producto

while (nombreProd != "ESC") {
    if (nombreProd != "") {
        indexProd++;

        precioProd = Number(prompt(`Ingrese el precio de ${nombreProd}`));

        while (precioProd === 0) {
            precioProd = Number(prompt(`Debe ingresar el precio de ${nombreProd}`));
        }

        if (precioProd !== 0) {

            agregarCarrito(nombreProd, precioProd, indexProd);

        } if (nombreProd != "CARRITO") {
            nombreProd = prompt(`Ingrese el nombre de otro producto, CARRITO para ver los productos o ESC para salir\n\nCARRITO: ${indexProd}`).toUpperCase();
        }

//--------Se accede al CARRITO que muestra los productos ingresados, sus precios y el total--------
        while (nombreProd.toUpperCase() == "CARRITO") {
            let iProd = 0;
  
            for (const producto of carrito) {
                iProd++;
                compras += `${iProd} - ${producto.nombre}: $${producto.precio}\n`;
                total += producto.precio;
            }

            let carro = prompt(`CARRITO:\n${compras}\nTOTAL: $${total}\nSi desea borrar un producto escriba su numero o escriba COMPRAR para finalizar la compra`);

            if (carro.toUpperCase() == "COMPRAR") { 
                alert("Gracias por su compra");
                nombreProd = "ESC"; 

            }
            if (Number(carro) > 0 && Number(carro) <= carrito.length) {
                eliminarCarrito(Number(carro));
                total = 0;
                compras = "";

            } if (Number(carro) > (carrito.length+1)) {
                alert(`Debe ingresar un numero de porducto valido, entre el 1 y el ${carrito.length}`);
            }
        }
    } else {
        nombreProd = prompt(`Debe ingresar el nombre del producto\n\nCARRITO: ${indexProd}`).toUpperCase();
    }
}
alert("Gracias por su visita");
