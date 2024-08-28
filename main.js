const productos = [
  { id: 1, nombre: "Crema Hidratante", precio: 500 },
  { id: 2, nombre: "Jabón Natural", precio: 300 },
  { id: 3, nombre: "Aceite Esencial", precio: 400 },
  { id: 4, nombre: "Champú Orgánico", precio: 450 },
  { id: 5, nombre: "Bálsamo Labial", precio: 150 }
];

let carrito = {};

function mostrarProductos() {
  console.log("Productos disponibles:");
  productos.forEach(producto => {
      console.log(`${producto.id}. ${producto.nombre} - $${producto.precio}`);
  });
}

function agregarAlCarrito(idProducto, cantidad) {
  let producto = productos.find(p => p.id === idProducto);
  if (producto) {
      if (carrito[producto.nombre]) {
          carrito[producto.nombre] += cantidad;
      } else {
          carrito[producto.nombre] = cantidad;
      }
      console.log(`${cantidad} x ${producto.nombre} agregado(s) al carrito.`);
  } else {
      alert("Producto no válido.");
  }
}

function mostrarResumenCompra() {
  console.log("Resumen de tu compra:");
  let total = 0;
  for (let producto in carrito) {
      let cantidad = carrito[producto];
      let precio = productos.find(p => p.nombre === producto).precio;
      let subtotal = cantidad * precio;
      total += subtotal;
      console.log(`${producto} x${cantidad} - $${subtotal}`);
  }
  console.log(`Total a pagar: $${total}`);
}

function iniciarSimulador() {
  let continuar = true;
  mostrarProductos();

  while (continuar) {
      let idProducto;
      do {
          idProducto = parseInt(prompt("Ingresa el número del producto que deseas comprar (o ingresa '0' para finalizar):"));
          if (idProducto === 0) {
              continuar = false;
              break;
          }
          if (!productos.some(p => p.id === idProducto)) {
              console.log("Producto inexistente. Por favor, ingresa un número de producto válido.");
          }
      } while (!productos.some(p => p.id === idProducto) && continuar);

      if (continuar) {
          let cantidad = parseInt(prompt("¿Cuántas unidades deseas comprar?"));
          agregarAlCarrito(idProducto, cantidad);
      }
  }

  mostrarResumenCompra();
}

iniciarSimulador();
