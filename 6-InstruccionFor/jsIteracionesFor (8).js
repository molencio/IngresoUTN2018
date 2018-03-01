function Mostrar()
{
var num = parseInt(prompt("Ingrese un numero"));
var contador = 0;

for (var i=1;i<=num;i++)
{
    if(num%i==0)
    {
        contador++;
    }
}

if (contador==2)
{
    alert("El número es primo");
}
else
{
    alert("El número no es primo");
}


}//FIN DE LA FUNCIÓN