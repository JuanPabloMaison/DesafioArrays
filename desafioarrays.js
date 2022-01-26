// El orden en el código es
// 1. Constructores de clase
// 2. Inicialización de variables
// 3. Construcción de funciones
// 4. Invocación de funciones

//id, marca,precio,cantidad,preciototal

class Computadora {
  constructor(computadora) {
    this.id = computadora.id;
    this.marca = computadora.marca;
    this.precio = Number(computadora.precio);
    this.cantidad = 1;
    this.precioTotal = computadora.precio;
  }
  agregarItem() {
    //declaro el metodo para sumar la cantidad
    this.cantidad++;
  }
  actualizarPrecioTotal() {
    //declaro el metodo para actualizar el precio, que va a ser el resultado entre precio y cantidad.
    this.precioTotal = this.precio * this.cantidad;
  }
}

//declaramos el array

const computadoras = [
  {
    id: 0,
    marca: "Acer",
    descripcion: "Notebook Acer Nitro 5",
    precio: 168254.32,
  },
  {
    id: 1,
    marca: "Lenovo",
    descripcion: "Notebook Lenovo Pro",
    precio: 136887.32,
  },
  {
    id: 2,
    marca: "Hp",
    descripcion: "Notebook Hp Gamer",
    precio: 165665.32,
  },
  {
    id: 3,
    marca: "Toshiba",
    descripcion: "Notebook Toshiba Enterprise",
    precio: 132987.69,
  },
  {
    id: 4,
    marca: "Apple",
    descripcion: "Macbook Apple M1",
    precio: 450698.99,
  },
];

//carrito va a ser donde se van a ir almacenando las compras.
let carrito = [];
let precioTotal;

function simDeCompras() {
  let idProducto =
    prompt(`Escriba el número del producto que desea comprar, sino escriba 'ESC' para finalizar
  0: ${computadoras[0].marca}, Precio: ${computadoras[0].precio}
  1: ${computadoras[1].marca}, Precio: ${computadoras[1].precio}
  2: ${computadoras[2].marca}, Precio: ${computadoras[2].precio}
  3: ${computadoras[3].marca}, Precio: ${computadoras[3].precio}
  4: ${computadoras[4].marca}, Precio: ${computadoras[4].precio}`);

  while (idProducto !== "ESC") {
    console.log(
      `Se ha añadido al carrito la notebook ${computadoras[idProducto].marca}`
    );

    let computadoraEnCarrito = carrito.find((elemento) => {
      if (elemento.id == idProducto) {
        return true;
      }
    });

    if (computadoraEnCarrito) {
      let index = carrito.findIndex((elemento) => {
        if (elemento.id === computadoraEnCarrito.id) {
          return true;
        }
      });
      carrito[index].agregarItem();
      carrito[index].actualizarPrecioTotal();
    } else {
      carrito.push(new Computadora(computadoras[idProducto]));
    }
    idProducto =
      prompt(`¿Desea seguir comprando?, sino escriba 'ESC' para finalizar
  0: ${computadoras[0].marca}, Precio: ${computadoras[0].precio}
  1: ${computadoras[1].marca}, Precio: ${computadoras[1].precio}
  2: ${computadoras[2].marca}, Precio: ${computadoras[2].precio}
  3: ${computadoras[3].marca}, Precio: ${computadoras[3].precio}
  4: ${computadoras[4].marca}, Precio: ${computadoras[4].precio}`);
  }
}

function obtenerPrecioTotal() {
  let precioTotal = 0;
  for (let i = 0; i < carrito.length; i++) {
    precioTotal += carrito[i].precio;
  }
  return precioTotal;
}

simDeCompras();
precioTotal = obtenerPrecioTotal();
console.log(
  `El precio total de tu compra es de ${precioTotal}, ¡Gracias por tu compra!`
);

let precioAsc = computadoras.sort((a, b) => a.precio - b.precio);
console.log("Ordenado por precio ascendente ", precioAsc);

let precioDesc = computadoras.sort((a, b) => b.precio - a.precio);
console.log("Ordenado por precio descendente", precioDesc);
