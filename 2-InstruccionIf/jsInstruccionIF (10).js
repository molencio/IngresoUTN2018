function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var numero;
numero=Math.floor(Math.random()*10+1);
alert(numero);

if (numero>8)
{
	alert("Excelente");
}
else if (numero>3)
{
	alert("Aprobó");
}
else
{
	alert("Vamos, la proxima se puede");
}



}//FIN DE LA FUNCIÓN