// Ejercicico 1
//     Escriba una función llamada add7que tome un número y devuelva ese número + 7.
const add7 = (num) => {
    return num+7
}
console.log(add7(10))

//Ejercicio 2
// Escriba una función llamada multiplyque tome 2 números y devuelva su producto.

const multiplyque = (num1, num2) => {
    return num1*num2
}
console.log(multiplyque(12,2))

//Ejercicio 3
//Escriba una función llamada capitalizeque tome una cadena y la devuelva con solo la primera letra en mayúscula. 
//Asegúrese de que pueda aceptar cadenas en minúscula, MAYÚSCULAS o ambas.
const capitalizeque = (stringCap) => {
    let stringCap2=stringCap.toLowerCase();
    let newS = stringCap2.charAt(0).toUpperCase() + stringCap2.slice(1)
    
    return newS;
}
console.log(capitalizeque('holA Mundo'))

// Escriba una función llamada lastLetterque tome una cadena y devuelva la última letra de esa cadena:
// lastLetter("abcd")Debería regresar"d"

const lastLetterque = (meArray) => {
   let lastCharacter = meArray.slice(-1)
   return lastCharacter
}

console.log(lastLetterque("Hola"))
