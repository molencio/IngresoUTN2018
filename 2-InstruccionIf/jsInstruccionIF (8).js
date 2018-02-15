function Mostrar()
{
//tomo la edad  

var edad = parseInt(document.getElementById("edad").value);
var estadocivil = document.getElementById("estadoCivil");

if (edad>17)
{if (estadocivil=="Soltero")
    {
        alert("Es soltero y no es menor.")
    }   

}
}
//FIN DE