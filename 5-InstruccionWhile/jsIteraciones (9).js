function Mostrar()
{

	var contador=0;
	// declarar variables
	var respuesta;
	var minimo;
	var maximo;

		do
		{
			numero=parseInt(prompt("Ingresar un numero: "));
			if (contador==0)
			{
				minimo=numero;
				maximo=numero;
			}
			if (numero>maximo)
			{
				maximo=numero;
			}
			else
			{
				minimo=numero;
			}
			contador++;
			respuesta = prompt("Quiere continuar?", 's');
		}while (respuesta == 's');
 
document.getElementById("minimo").value=minimo;
document.getElementById("maximo").value=maximo;


}//FIN DE LA FUNCIÓN