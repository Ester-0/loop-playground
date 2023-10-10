/**
 * Un buen caso para usar switch
 *
 * Queremos escribir un script que, dado un mes del año, nos diga en que trimestre nos encomtramos.
 *
 * Por ejemplo, si mes = 4, deberíamos mostrar por el terminal "Nos encontramos en el segundo trimestre"
 *
 * Explora esta información para averiguar como usar el condicional 'switch'; y cómo se pueden agrupar varios casos: https://javascript.info/switch#grouping-of-case
 *
 */

let mes = 12;

// Escribir tu código a partir de aquí

let numCase = 0

switch (mes) {
    case numCase = numCase +1:
    case numCase = numCase +1:
    case numCase = numCase +1:
        alert = ("Nos encontramos en el primer trimestre");
        break;
        
    case numCase = numCase +1:
    case numCase = numCase +1:
    case numCase = numCase +1:
        alert =("Nos encontramos en el segundo trimestre");
        break;

    case numCase = numCase +1:
    case numCase = numCase +1:
    case numCase = numCase +1:
        alert =("Nos encontramos en el tercer trimestre");
        break;

    case numCase = numCase +1:
    case numCase = numCase +1:
    case numCase = numCase +1:
        alert =("Nos encontramos en el cuarto trimestre");
        break;

    default:
        alert = ("El mes no existe");      
}

console.log(alert)