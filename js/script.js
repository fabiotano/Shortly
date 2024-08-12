const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");

function validUrl(url) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocolo
      "((([a-zA-Z0-9\\-\\.]+)\\.([a-zA-Z]{2,}))|" + // dominio o IP
      "localhost|" + // localhost
      "\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|" + // direcciones IP
      "\\[?[a-fA-F0-9]*:[a-fA-F0-9:]+\\]?)" + // IPv6
      "(\\:\\d+)?" + // puerto
      "(\\/[-a-zA-Z0-9@:%_\\+.~#?&//=]*)?" + // ruta
      "(\\?[;&a-zA-Z0-9%_\\+.~#-]*)?" + // parámetros de consulta
      "(#[a-zA-Z0-9\\-_]*)?$",
    "i"
  ); // fragmento

  return pattern.test(url);
}

linkForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (input.value === "") {
    errMsg.innerHTML = "Please enter something";
    input.classList.add("border-orange-500");
  } else if (validUrl(input.value)) {
    errMsg.innerHTML = "";
    input.classList.remove("border-orange-500");
    setTimeout(function () {
      alert("Success!");
    }, 800);
  } else {
    errMsg.innerHTML = "Please enter a valid URL";
    input.classList.add("border-orange-500");
  }
});
