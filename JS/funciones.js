
function validateForm() {
    let w = document.forms["formulario_contacto"]["nombre"].value;
    if (w == "") {
      alert("Falta completar nombre");
      return false;
    }
    let x = document.forms["formulario_contacto"]["apellido"].value;
    if (x == "") {
      alert("Falta completar apellido");
      return false;
    }
    let y = document.forms["formulario_contacto"]["email"].value;
    if (y == "") {
      alert("Falta completar email");
      return false;
    }
  }