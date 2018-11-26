
var numeroClientes = Math.floor(Math.random() * 31);
var cli = new Array();
var movies = [
    "Bohemian rhapsody",
    "Venon",
    "Avengers 4",
    "Toy story 4",
    "Animales fantasticos"
];
var edad;
var precio;
var pelicula;
var recaudacion = [0, 0, 0, 0, 0];

var recaudacion2 = [
    "Bohemian rhapsody", 0,
    "Venon", 0,
    "Avengers 4", 0,
    "Toy story 4", 0,
    "Animales fantasticos", 0
];

function generarClientes(numeroClientes) {

    for (var i = 0; i < numeroClientes; i++) {
        cli.push("cliente " + (i+1));
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


function generar_edad_precio() {
    edad = Math.floor(Math.random() * 66) + 5;
    precio;
    document.getElementById("edad").innerHTML = edad;

    if (edad >= 5 && edad <= 10) {
        precio = 2;
    }
    else if (edad >= 11 && edad <= 17) {
        precio = 3;
    }
    else {
        precio = 4;
    }

    document.getElementById("precio").innerHTML = precio;

}

function generar_peli() {
    var npeli = Math.floor(Math.random() * 5);
    pelicula = movies[npeli];
    document.getElementById("pelicula").innerHTML = movies[npeli];
}

function comprar() {
    if (cli.length >= 1) {
        generar_edad_precio();
        generar_peli();
        var numero_pelicula = recaudacion2.indexOf(pelicula);
        recaudacion2[numero_pelicula+1] += precio;
        //imprimirArray(recaudacion, "pRecaudacion");
        imprimirArray(recaudacion2, "pRecaudacion2");
        cli.shift();
        imprimirArray(cli, "clientes");
    }
    else{
        alert("Ya no hay clientes, buen trabajo!");
    }
}

function main() {
    generarClientes(numeroClientes);
    generar_edad_precio();
    generar_peli();
    imprimirArray(recaudacion2, "pRecaudacion2");
}