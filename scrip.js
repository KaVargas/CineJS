
var numeroClientes = Math.floor(Math.random() * 31);

function clientes(numeroClientes) {
    var cli = new Array();
    var tex = "";
    for (var i = 1; i < numeroClientes + 1; i++) {
        cli.push("cliente " + i);
    }
    cli.forEach(imprimir);
    document.getElementById("clientes").innerHTML = tex;

    function imprimir(value) {
        tex = tex + value + "<br>";
    }
}



function generar_edad_precio() {
    var edad = Math.floor(Math.random() * 66) + 5;
    var precio;
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
    var movies = [
        "Bohemian rhapsody",
        "Venon",
        "Avengers 4",
        "Toy story 4",
        "Animales fantasticos"
    ];
    var npeli = Math.floor(Math.random() * 5);
    document.getElementById("pelicula").innerHTML = movies[npeli];
}

function main(){
    clientes(numeroClientes);
    generar_edad_precio();
    generar_peli();

}