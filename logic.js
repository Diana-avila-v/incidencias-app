const ESTADOS = ["Abierta", "En proceso", "Resuelta"];

function crearIncidencia(titulo, descripcion, prioridad, id) {
  if (!titulo || !titulo.trim()) throw new Error("El título es obligatorio");
  return {
    id,
    titulo: titulo.trim(),
    descripcion: (descripcion || "").trim(),
    prioridad: prioridad || "Media",
    estado: "Abierta",
    fecha: new Date().toISOString().slice(0, 10),
  };
}

function filtrarPorEstado(lista, estado) {
  if (!estado || estado === "Todas") return lista;
  return lista.filter((i) => i.estado === estado);
}

if (typeof module !== "undefined") module.exports = { ESTADOS, crearIncidencia, filtrarPorEstado };
