

var cli = new Array();
var edad;
var precio;
var pelicula;
var limpio = true;
var movies = [
    "Bohemian rhapsody", 0,
    "Venon", 0,
    "Avengers 4", 0,
    "Toy story 4", 0,
    "Animales fantasticos", 0
];

function generarClientes(numeroClientes) {

    for (var i = 0; i < numeroClientes; i++) {
        cli.push("cliente " + (i + 1));
    }
    imprimirArray(cli, "clientes");
}

function imprimirArray(lista, identificador) {
    var tex = "";
    lista.forEach(imprimir);
    document.getElementById(identificador).innerHTML = tex;

    function imprimir(value) {
        tex = tex + value + "<br>";
    }
}


function generar_edad() {
    edad = Math.floor(Math.random() * 66) + 5;
    document.getElementById("cliente").innerHTML = cli[0];
    document.getElementById("edad").innerHTML = "Edad: " + edad;

}

function generar_precio() {
    if (edad >= 5 && edad <= 10) {
        precio = 2;
    }
    else if (edad >= 11 && edad <= 17) {
        precio = 3;
    }
    else {
        precio = 4;
    }

    document.getElementById("precio").innerHTML = "Precio: " + precio;
}

function generar_peli() {
    npeli = 1;
    while (npeli % 2 != 0)
        var npeli = Math.floor(Math.random() * 5);
    pelicula = movies[npeli];
    document.getElementById("pelicula").innerHTML = "Pelicula: " + movies[npeli];
}

function comprar() {
    if (cli.length >= 1 && !limpio) {
        var numero_pelicula = movies.indexOf(pelicula);
        movies[numero_pelicula + 1] += precio;
        imprimirArray(movies, "pRecaudacion");
        cli.shift();
        imprimirArray(cli, "clientes");
        limpiar();
        document.getElementById("cliente").innerHTML = "cliente X";
    }
    else if (limpio) {
        alert("Genera datos para seguir con la venta");
    }
    else {
        alert("Ya no hay clientes, buen trabajo!");
    }
}

function generar() {
    if (cli.length >= 1) {
        generar_edad();
        generar_precio();
        generar_peli();
        limpio = false;
    }
    else {
        alert("Ya no hay clientes, buen trabajo!");
    }
}

function limpiar() {
    pelicula = "";
    edad = "";
    precio = "";
    limpio = true;
    document.getElementById("edad").innerHTML = "Edad: ";
    document.getElementById("pelicula").innerHTML = "Pelicula: ";
    document.getElementById("precio").innerHTML = "Precio: ";
    document.getElementById("cliente").innerHTML = "cliente X";
}

function init() {
    var numeroClientes = Math.floor(Math.random() * 31);
    generarClientes(numeroClientes);
    imprimirArray(movies, "pRecaudacion");
}