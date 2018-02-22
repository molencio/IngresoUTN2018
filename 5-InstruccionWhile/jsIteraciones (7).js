function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta;
	
do
{
	numero=parseInt(prompt("Ingresar un numero: "));
	contador++;
	acumulador = acumulador + numero;
	respuesta = prompt("Quiere continuar?");
}while (respuesta == 's');


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN