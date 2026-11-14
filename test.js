const assert = require("assert");
const { crearIncidencia, filtrarPorEstado } = require("./logic.js");

const i = crearIncidencia("  Falla login ", "No puedo entrar", "Alta", 1);
assert.strictEqual(i.titulo, "Falla login");
assert.strictEqual(i.estado, "Abierta");
assert.throws(() => crearIncidencia("   ", "x", "Baja", 2));
const lista = [{ estado: "Abierta" }, { estado: "Resuelta" }, { estado: "Abierta" }];
assert.strictEqual(filtrarPorEstado(lista, "Abierta").length, 2);
assert.strictEqual(filtrarPorEstado(lista, "Todas").length, 3);
console.log("OK: pruebas superadas");
