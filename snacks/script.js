// A partire da un array di stringhe, crea un secondo array formattando
// le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
/*
const arrNames = ['Camilla', 'FRANCO', 'giulio', 'CheCco']

let correctArrNames = arrNames.map((names) => {
    
    let minuscole = names.toLocaleLowerCase();
    console.log(minuscole)
    let maiuscole = minuscole[0].toLocaleUpperCase();
    let resto = minuscole.substring(1);
    return maiuscole + resto;
});
console.log(correctArrNames)*/



// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.

const arrObjAnimals = [
    {
        name : 'Leone',
        family : 'Felidi',
        class : 'Mammiferi'
    },
    {
        name : 'Cane',
        family : 'Canidi',
        class : 'Mammiferi'
    },
    {
        name : 'Gallina',
        family : 'fasianidi',
        class : 'Uccelli'
    },
    {
        name : 'Aquila',
        family : 'Accipitridae',
        class : 'Uccelli'
    },
    {
        name : 'Trota',
        family : 'Salmonidae',
        class : 'Pesci'
    }
];

const arrMammiferi = arrObjAnimals.filter((elemento) => {
    if (elemento.class == 'Mammiferi') {
        return true;
    }
    return false;
});
console.log(arrMammiferi);