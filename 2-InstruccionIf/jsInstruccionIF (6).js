function Mostrar()
{
//tomo la edad  

var edad = parseInt(document.getElementById("edad").value);

if (edad >= 18)
{
    alert("La persona es mayor de edad.");

    if (edad<=17 && edad>=13){
        alert("La persona es adolescente");
    }

    else
    {
        alert("La persona es un niño");
    }
}
}//FIN DE LA FUNCIÓN