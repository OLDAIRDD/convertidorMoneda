function convertir() {
    var cantidad = parseFloat(document.getElementById("cantidad").value);
    var moneda = document.getElementById("moneda").value;
    var precioDolar = parseFloat(document.getElementById("precioDolar").value);
    var resultado = "";
  
    if (moneda === "pesos") {
      var dolares = cantidad / precioDolar;
      resultado = "$" + dolares.toFixed(2) + " USD";
    } else {
      var pesos = cantidad * precioDolar;
      resultado = "$" + pesos.toFixed(2) + " MXN";
    }
  
    document.getElementById("resultado").innerHTML = resultado;
  }
  