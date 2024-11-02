const filtrarProductos = require('../js/productos');
const fs = require("fs")
const API = "./api/productos.json"
const productos = JSON.parse(fs.readFileSync(API, "utf-8"))
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



