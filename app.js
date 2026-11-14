let incidencias = JSON.parse(localStorage.getItem("incidencias") || "[]");
const $ = (s) => document.querySelector(s);
const esc = (t) => t.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const guardar = () => localStorage.setItem("incidencias", JSON.stringify(incidencias));

function render() {
  const ul = $("#lista");
  ul.innerHTML = "";
  const visibles = filtrarPorEstado(incidencias, $("#filtro").value);
  if (!visibles.length) {
    ul.innerHTML = '<li class="vacio">No hay incidencias para mostrar.</li>';
    return;
  }
  visibles.forEach((i) => {
    const li = document.createElement("li");
    li.innerHTML = `<select class="estado" data-id="${i.id}">${ESTADOS.map((e) => `<option${e === i.estado ? " selected" : ""}>${e}</option>`).join("")}</select><strong>#${i.id} ${esc(i.titulo)}</strong>
      <p>${esc(i.descripcion)}</p><small>Prioridad: ${i.prioridad} · ${i.fecha}</small>`;
    ul.appendChild(li);
  });
}

$("#formulario").addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    const id = incidencias.length + 1;
    incidencias.push(crearIncidencia($("#titulo").value, $("#descripcion").value, $("#prioridad").value, id));
    guardar();
    e.target.reset();
    $("#error").textContent = "";
    $("#filtro").addEventListener("change", render);
$("#lista").addEventListener("change", (e) => {
  if (!e.target.classList.contains("estado")) return;
  incidencias.find((i) => i.id == e.target.dataset.id).estado = e.target.value;
  guardar();
  render();
});

render();
  } catch (err) {
    $("#error").textContent = err.message;
  }
});

$("#filtro").addEventListener("change", render);
$("#lista").addEventListener("change", (e) => {
  if (!e.target.classList.contains("estado")) return;
  incidencias.find((i) => i.id == e.target.dataset.id).estado = e.target.value;
  guardar();
  render();
});

render();
