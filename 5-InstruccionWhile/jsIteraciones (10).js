function Mostrar()
{
/*1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).
*/
	var contador=0;
	//declarar contadores y variables 
	var respuesta;
	var numero;
	var positivos=0;
	var negativos=0;
	var contadorCeros=0;
	var contadorPos=0;
	var contadorNeg=0;
	var contadorPares=0;
	var promPos=0;
	var promNeg=0;
	var difPosNeg;

	do
	{
		numero=parseInt(prompt("Ingresar un numero: "));
		contador++;
	if (numero%2==0)
	{
		contadorPares++;
	}
	if (numero>0)
	{
		contadorPos++;
		positivos=positivos+numero;
	}
	else if (numero==0)
	{
		contadorCeros++;
	}
	else
	{
		contadorNeg++;
		negativos=negativos+numero;
	}
	respuesta = prompt("Quiere continuar?", 's');
	} while (respuesta == 's');

//esto afuera del while porque no se repite. 

if (contadorPos!=0)
{
	promPos = positivos/contadorPos	
}
if (contadorNeg!=0)
{
promNeg = negativos/contadorNeg
}

difPosNeg = positivos-negativos

//document.write para pisar el HTML con los datos. "<br" para hacer espacios

document.write("1-Suma de los negativos: "+negativos+"<br>");
document.write("2-Suma de los positivos: "+positivos+"<br>");
document.write("3-Cantidad de positivos: "+contadorPos+"<br>");
document.write("4-Cantidad de negativos: "+contadorNeg+"<br>");
document.write("5-Cantidad de ceros: "+contadorCeros+"<br>");
document.write("6-Cantidad de números pares: "+contadorPares+"<br>");
document.write("7-Promedio de positivos: "+promPos+"<br>");
document.write("8-Promedios de negativos: "+promNeg+"<br>");
document.write("9-Diferencia entre positivos y negativos: "+difPosNeg+"<br>");

}//FIN DE LA FUNCIÓN