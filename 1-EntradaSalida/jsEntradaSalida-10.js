/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
	var descuento;
    var importe = document.getElementById("importe").value;
    importe = parseInt(importe);
    descuento = (importe-(importe/4));
    document.getElementById("resultado").value=descuento;
}
