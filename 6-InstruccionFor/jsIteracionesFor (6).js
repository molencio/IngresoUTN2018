function Mostrar()
{

var num = parseInt(prompt("Ingrese un numero"));
var contador = 0;

for (var i=1;i<=num;i++)
{
    if(i%2==0)
    {
        console.log(i);
        contador++;
    }
}
console.log("La cantidad de numeros pares es " + contador);


}//FIN DE LA FUNCIÓN