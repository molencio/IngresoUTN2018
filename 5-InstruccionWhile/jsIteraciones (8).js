function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta;
	var contadorNegativo=0;

	do
	{
		numero=parseInt(prompt("Ingresar un numero: "));
		contador++;
		if (numero < 0)
		{
			negativo = negativo * numero;
			contadorNegativo++
		}
		else
		{
			positivo = positivo + numero
		}
		respuesta = prompt("Quiere continuar?");
	}while (respuesta == 's');

if (contadorNegativo==0)
{
	negativo=0
}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN