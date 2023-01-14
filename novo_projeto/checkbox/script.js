let form = document.getElementById("form")
form.addEventListener("submit", validateCheckboxes)

function validateCheckboxes(event) {

  event.preventDefault();
  var checkboxes = document.getElementsByName("tipoRescisao")

  for (var i = 0; i < checkboxes.length; i++) {

    if (checkboxes[i].checked) {

      let tipoRe = checkboxes[i].getAttribute("id")
      console.log(tipoRe)
    }
  } 
}