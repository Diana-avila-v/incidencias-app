const assert = require("assert");
const { crearIncidencia, filtrarPorEstado } = require("./logic.js");

const i = crearIncidencia("  Falla login ", "No puedo entrar", "Alta", 1);
assert.strictEqual(i.titulo, "Falla login");
assert.strictEqual(i.estado, "Abierta");
assert.throws(() => crearIncidencia("   ", "x", "Baja", 2));
const lista = [{ estado: "Abierta" }, { estado: "Resuelta" }, { estado: "Abierta" }];
assert.strictEqual(filtrarPorEstado(lista, "Abierta").length, 2);
assert.strictEqual(filtrarPorEstado(lista, "Todas").length, 3);
// Regresión v1.1.1: cada opción del filtro debe ser un estado válido
const html = require("fs").readFileSync("./index.html", "utf8");
const valores = [...html.matchAll(/<option value="([^"]+)">/g)].map((m) => m[1]);
const { ESTADOS } = require("./logic.js");
valores.filter((v) => v !== "Todas").forEach((v) => assert.ok(ESTADOS.includes(v), "Opción de filtro inválida: " + v));
console.log("OK: pruebas superadas");
