function init() {
  alert("Razvan Rus: " + message);
}
var button = document.getElementById('entrybutton');
button.addEventListener('click', init);

var message = document.getElementById("entryinput").value;
document.getElementById("textoutput").value = message;

window.addEventListener('load', init);

