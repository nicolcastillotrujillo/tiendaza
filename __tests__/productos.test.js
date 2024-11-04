const filtrarProductos = require('../js/productos');

const productos = []
fetch("../api/productos.json")
.then(response => response.json())
.then(data => {
  productos = data;
})
.catch((error) => { console.error(error) })

// Escribir los tests debajo

test("Test para el boton camperas", () => {
    const result = filtrarProductos(productos, "camperas")
    result.forEach((item) => {
        expect(item).toHaveProperty("categoria", "camperas")
    })
})

test("Test para el boton remeras", () => {
    const result = filtrarProductos(productos, "remeras")
    result.forEach((item) => {
        expect(item).toHaveProperty("categoria", "remeras")
    })
})

test("Test para el boton pantalones", () => {
    const result = filtrarProductos(productos, "pantalones")
    result.forEach((item) => {
        expect(item).toHaveProperty("categoria", "pantalones")
    })
})
