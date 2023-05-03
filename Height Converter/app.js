//BMI = Kg / (H/100 * H/100)

document.getElementById("submit").addEventListener("click", convertidorMedidas);
function convertidorMedidas(){
    var pies = parseInt(document.getElementById("pies").value * 12);
    var pulgadas = parseInt(document.getElementById("pulgadas").value);
    var cm = (pies+ pulgadas) * 2.54;
    var n = cm.toFixed(0);
    document.getElementById("resultado").innerHTML = n;
}