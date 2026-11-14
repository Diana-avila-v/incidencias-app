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

if (typeof module !== "undefined") module.exports = { ESTADOS, crearIncidencia };
