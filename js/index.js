const pantallaValor = document.querySelector(".datos")
const pantallaResult = document.querySelector(".resultado");
const numero = document.querySelectorAll(".numero");
const operadores = document.querySelectorAll(".operador");
const $linkDOM = document.querySelector(".container");
const cambioColores = document.querySelector(".cambioColor");
const display = new Display(pantallaValor,pantallaResult);

cambioColores.addEventListener("click", () => {
    $linkDOM.classList.add("background2")
})

numero.forEach(boton => {
    boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML));
});

operadores.forEach(boton => {
    boton.addEventListener("click", () => display.computar(boton.value))
})
