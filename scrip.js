
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

function generarClientes(numeroClientes) {

    for (var i = 0; i < numeroClientes; i++) {
        cli.push("cliente " + (numeroClientes - i));
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
        cli.pop();
        imprimirArray(cli, "clientes");
        generar_edad_precio();
        generar_peli();
        var numero_pelicula = movies.indexOf(pelicula);
        recaudacion[numero_pelicula] += precio;

    }
    else{
        alert("Ya no hay clientes, buen trabajo!");
    }
}

function main() {
    generarClientes(numeroClientes);
    generar_edad_precio();
    generar_peli();

}