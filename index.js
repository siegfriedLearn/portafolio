import { infoProyectos } from "./proyectos.js";

infoProyectos.forEach((proyecto) => {
  let tarjetas = document.getElementById("tarjetas");

  let tarjeta = document.createElement("div");
  tarjeta.classList.add("card");
  tarjeta.classList.add("bg-light");
  tarjeta.classList.add("mb-3");
  tarjeta.style = "max-width: 20rem;";
  

  let img = document.createElement("img");
  img.classList.add("card-img-top");
  img.style.width = "296px"
  img.style.height = "180px"
  img.src = proyecto.img;
  img.alt = "..."

  let cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  cardHeader.innerHTML = proyecto.proyecto;

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let h4 = document.createElement("h4");
  h4.classList.add("card-title");
  h4.innerHTML = proyecto.titulo;

  let p = document.createElement("p");
  p.classList.add("card-text");
  p.innerHTML = proyecto.descripcion;

  let a1 = document.createElement("a");
  a1.classList.add("btn");
  a1.classList.add("btn-primary");
  a1.target = "_blank"
  a1.href= proyecto.repositorio;
  a1.innerHTML = "Repositorio Github";
  a1.style.margin = "15px"

  let a2 = document.createElement("a");
  a2.classList.add("btn");
  a2.classList.add("btn-primary");
  a2.target = "_blank"
  a2.href= proyecto.live;
  a2.innerHTML = "¡En acción!";
  

  cardBody.appendChild(h4);
  cardBody.appendChild(p);
  cardBody.appendChild(a1);
  cardBody.appendChild(a2);
  tarjeta.appendChild(cardHeader);
  tarjeta.appendChild(img)
  tarjeta.appendChild(cardBody);
  tarjetas.appendChild(tarjeta);
});
