function Mostrar()
{

	//var contador=0;
	// declarar variables
	var respuesta;
	var minimo;
	var maximo;
	var flag=0;

/*		do
		{
			numero=parseInt(prompt("Ingresar un numero: "));
			contador++;
			if (contador==1)
			{
				minimo=numero;
				maximo=numero;
			}
			if (numero>maximo)
			{
				maximo=numero;
			}
			if (numero<minimo)
			{
				minimo=numero;
			}
			respuesta = prompt("Quiere continuar?", 's');
		}while (respuesta == 's');
*/
do
{
	numero=parseInt(prompt("Ingresar un numero: "));
	if (numero>maximo || flag==0)
	{
		maximo=numero;
	}
	if (numero<minimo || flag==0)
	{
		minimo=numero;
		flag=1;
	}
	respuesta = prompt("Quiere continuar?", 's');
}while (respuesta == 's');


document.getElementById("minimo").value="El minimo es: "+minimo;
document.getElementById("maximo").value="El maximo es: "+maximo;


}//FIN DE LA FUNCIÓN