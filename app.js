let incidencias = JSON.parse(localStorage.getItem("incidencias") || "[]");
const $ = (s) => document.querySelector(s);
const esc = (t) => t.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const guardar = () => localStorage.setItem("incidencias", JSON.stringify(incidencias));

function render() {
  const ul = $("#lista");
  ul.innerHTML = "";
  if (!incidencias.length) {
    ul.innerHTML = '<li class="vacio">No hay incidencias registradas.</li>';
    return;
  }
  incidencias.forEach((i) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="badge">${i.estado}</span><strong>#${i.id} ${esc(i.titulo)}</strong>
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
    render();
  } catch (err) {
    $("#error").textContent = err.message;
  }
});

render();
