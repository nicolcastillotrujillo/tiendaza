const filtrarProductos = require('../js/productos');

const productos = require("../api/productos.json")

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

test("contabilizar camperas", () => {
    const cantidad = 5
    let resultado = 0
    const camperas = filtrarProductos(productos, "camperas")
    camperas.forEach((item) => {
        if (item) {
            resultado++
        }
    })
    expect(resultado).toBe(cantidad)
})

test("contabilizar remeras", () => {
    const cantidad = 8
    let resultado = 0
    const remeras = filtrarProductos(productos, "remeras")
    remeras.forEach((item) => {
        if (item) {
            resultado++
        }
    })
    expect(resultado).toBe(cantidad)
})

test("contabilizar pantalones", () => {
    const cantidad = 5
    let resultado = 0
    const pantalones = filtrarProductos(productos, "pantalones")
    pantalones.forEach((item) => {
        if (item) {
            resultado++
        }
    })
    expect(resultado).toBe(cantidad)
})