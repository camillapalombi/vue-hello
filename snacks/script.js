// A partire da un array di stringhe, crea un secondo array formattando
// le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

const arrNames = ['Camilla', 'FRANCO', 'giulio', 'CheCco']

let correctArrNames = arrNames.map((names) => {
    
    let minuscole = names.toLocaleLowerCase();
    console.log(minuscole)
    let maiuscole = minuscole[0].toLocaleUpperCase();
    let resto = minuscole.substring(1);
    return maiuscole + resto;
});
console.log(correctArrNames)

