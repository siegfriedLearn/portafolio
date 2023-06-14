import { infoProyectos } from "./proyectos.js";

infoProyectos.forEach((proyecto) => {
  let tarjetas = document.getElementById("tarjetas");

  let tarjeta = document.createElement("div");
  tarjeta.classList.add("card");
  tarjeta.classList.add("bg-light");
  tarjeta.classList.add("mb-3");
  tarjeta.style = "max-width: 20rem;";

  let cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  cardHeader.innerHTML = proyecto.titulo;

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let h4 = document.createElement("h4");
  h4.classList.add("card-title");
  h4.innerHTML = proyecto.titulo;

  let p = document.createElement("p");
  p.classList.add("card-text");
  p.innerHTML = proyecto.descripcion;

  cardBody.appendChild(h4);
  cardBody.appendChild(p);
  tarjeta.appendChild(cardHeader);
  tarjeta.appendChild(cardBody);
  tarjetas.appendChild(tarjeta);
});
