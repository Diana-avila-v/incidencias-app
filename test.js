const assert = require("assert");
const { crearIncidencia } = require("./logic.js");

const i = crearIncidencia("  Falla login ", "No puedo entrar", "Alta", 1);
assert.strictEqual(i.titulo, "Falla login");
assert.strictEqual(i.estado, "Abierta");
assert.throws(() => crearIncidencia("   ", "x", "Baja", 2));
console.log("OK: pruebas superadas");
