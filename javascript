function mostrarCampos() {
  const figura = document.getElementById("figura").value;
  const campos = document.getElementById("campos");
  campos.innerHTML = "";

  if (figura === "quadrado") {
    campos.innerHTML = '<input type="number" id="lado" placeholder="Digite o lado">';
  } 
  else if (figura === "retangulo" || figura === "triangulo" || figura === "paralelogramo") {
    campos.innerHTML = `
      <input type="number" id="base" placeholder="Digite a base">
      <input type="number" id="altura" placeholder="Digite a altura">
    `;
  } 
  else if (figura === "circulo") {
    campos.innerHTML = '<input type="number" id="raio" placeholder="Digite o raio">';
  } 
  else if (figura === "trapezio") {
    campos.innerHTML = `
      <input type="number" id="baseMaior" placeholder="Digite a base maior">
      <input type="number" id="baseMenor" placeholder="Digite a base menor">
      <input type="number" id="altura" placeholder="Digite a altura">
    `;
  }
  else if (figura === "losango") {
    campos.innerHTML = `
      <input type="number" id="dMaior" placeholder="Digite a diagonal maior">
      <input type="number" id="dMenor" placeholder="Digite a diagonal menor">
    `;
  }
  else if (figura === "pentagono" || figura === "hexagono") {
    campos.innerHTML = `
      <input type="number" id="lado" placeholder="Digite o lado">
      <input type="number" id="apotema" placeholder="Digite a apótema">
    `;
  }
}

function calcular() {
  const figura = document.getElementById("figura").value;
  let area = 0;

  if (figura === "quadrado") {
    const lado = parseFloat(document.getElementById("lado").value);
    area = lado * lado;
  } 
  else if (figura === "retangulo") {
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);
    area = base * altura;
  } 
  else if (figura === "triangulo") {
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);
    area = (base * altura) / 2;
  } 
  else if (figura === "circulo") {
    const raio = parseFloat(document.getElementById("raio").value);
    area = Math.PI * Math.pow(raio, 2);
  } 
  else if (figura === "trapezio") {
    const baseMaior = parseFloat(document.getElementById("baseMaior").value);
    const baseMenor = parseFloat(document.getElementById("baseMenor").value);
    const altura = parseFloat(document.getElementById("altura").value);
    area = ((baseMaior + baseMenor) * altura) / 2;
  }
  else if (figura === "losango") {
    const dMaior = parseFloat(document.getElementById("dMaior").value);
    const dMenor = parseFloat(document.getElementById("dMenor").value);
    area = (dMaior * dMenor) / 2;
  }
  else if (figura === "paralelogramo") {
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);
    area = base * altura;
  }
  else if (figura === "pentagono") {
    const lado = parseFloat(document.getElementById("lado").value);
    const apotema = parseFloat(document.getElementById("apotema").value);
    const perimetro = 5 * lado;
    area = (perimetro * apotema) / 2;
  }
  else if (figura === "hexagono") {
    const lado = parseFloat(document.getElementById("lado").value);
    const apotema = parseFloat(document.getElementById("apotema").value);
    const perimetro = 6 * lado;
    area = (perimetro * apotema) / 2;
  }

  document.getElementById("resultado").innerText = 
    "Área: " + area.toFixed(2) + " unidades²";
}
