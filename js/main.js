function pagina() {
    alert("La página está cargada")
}

function out() {
    alert("Estuvistes sobre MI")
}

function over() {
    alert("Estás sobre MI")
}

var saludo = function() {
    alert("HOLA MUNDO");
};

function principal() {
    var btn = document.getElementById("demo");
    btn.addEventListener("click", saludo);
};

principal();
