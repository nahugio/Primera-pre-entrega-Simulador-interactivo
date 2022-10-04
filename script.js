const iva = 1.21
function calcularPrecioFinal(precioSinIva,iva){
    return precioSinIva * iva;
}
for(let i=1;i<=3;i++){
    let nombre = prompt("Ingrese su nombre");
if(nombre != ""){
    alert("Hola "+nombre+" vendemos videojuegos para todas las plataformas!!")
    break;
}else{
    alert("Escribe tu nombre para continuar, te quedan "+(3-i)+" intentos!")
}
}
let juego = prompt("Ingrese el juego que esta buscando\n1-God of War\n2-Fifa 23\n3-Gta V ");
if((juego == "God of War") || (juego == "god of war") || (juego == "GOD OF WAR") || (juego == "1")){
    alert("El precio del juego es de $6000");
    let precioSinIva = 6000
    let preciofinal = calcularPrecioFinal(precioSinIva,iva);
    alert("El precio total con iva incluido es de $"+preciofinal)
}else if ((juego == "Fifa 23") || (juego == "fifa 23") || (juego == "FIFA 23") || (juego == "2")){
    alert("El precio del juego es de $32000");
    let precioSinIva = 32000
    let preciofinal = calcularPrecioFinal(precioSinIva,iva);
    alert("El precio total con iva incluido es de $"+preciofinal)
}else if ((juego == "Gta V") || (juego == "gta 5") || (juego == "GTA 5") || (juego == "3")){
    alert("El precio del juego es de $6000");
    let precioSinIva = 6000
    let preciofinal = calcularPrecioFinal(precioSinIva,iva);
    alert("El precio total con iva incluido es de $"+preciofinal)
}else{
    alert("Actualmente no tenemos stock disponible!");
}

