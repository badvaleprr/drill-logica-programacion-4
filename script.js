function solicitarNumero() {
  let numero;
  do {
    const entrada = prompt("Ingresa la cantidad de números de la serie de Fibonacci:");
    numero = Number(entrada);

    if (isNaN(numero) || numero <= 0 || !Number.isInteger(numero)) {
      alert("Por favor, ingresa un número válido entero mayor que 0.");
    }
  } while (isNaN(numero) || numero <= 0 || !Number.isInteger(numero));

  const serie = generarFibonacci(numero);
  console.log("Serie de Fibonacci:", serie.join(", "));

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.textContent = `Serie de Fibonacci (${numero}): ${serie.join(", ")}`;
}

function generarFibonacci(n) {
  const serie = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      serie.push(0);
    } else if (i === 1) {
      serie.push(1);
    } else {
      serie.push(serie[i - 1] + serie[i - 2]);
    }
  }
  return serie;
}