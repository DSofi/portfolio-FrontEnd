function verIdiomas() {
  document.getElementById("idiomas-ocult").style.display = "block";
  document.getElementById("ver-idiomas").style.display = "none";
  document.getElementById("ver-workshops").style.display = "list-item";

}
function verWorkshops() {
  document.getElementById("workshops-ocult").style.display = "block";
  document.getElementById("ver-workshops").style.display = "none";
}

function ocultarEstudios() {
  document.getElementById("workshops-ocult").style.display = "none";
  document.getElementById("idiomas-ocult").style.display = "none";
  document.getElementById("ver-idiomas").style.display = "list-item";
}

