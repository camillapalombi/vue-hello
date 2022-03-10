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
/*
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
console.log(arrMammiferi);*/



/*
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome
e cognome e l’indicazione se può guidare, in base all’età.
*/

const arrPeople = [
    {
        name : 'Paolo',
        surname : 'Giordano',
        age : 15
    },
    {
        name : 'Chiara',
        surname : 'Gigghi',
        age : 50
    },
    {
        name : 'Francesco',
        surname : 'Ascoli',
        age : 10
    },
    {
        name : 'Barbara',
        surname : 'Masche',
        age : 78
    },
    {
        name : 'Antonio',
        surname : 'Botto',
        age : 18
    },
    {
        name : 'Elena',
        surname : 'Muccini',
        age : 17
    }
];

console.log(arrPeople);


let newArrPeople = arrPeople.map((person) => {

    if (person.age < 18) {
        return `${person.name} ${person.surname} : Non puoi ancora guidare`;
    } else {
        return `${person.name} ${person.surname} : Puoi guidare!`;
    }

});

console.log(newArrPeople);