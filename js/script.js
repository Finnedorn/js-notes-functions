//funzioni

//nomedella funzione(argomento) {}
//l'argomento sono gli elementi placeholder della funzione che rappresenteranno due o più ipotetici valori coinvolti dentro la funzione 
//es:

function sommanumeri(num1,num2) {
    alert(num1 + num2);
};

//in questo caso ho creato una funzione che sommi due ipotetici let (num1 e num2) e mi crei un alert con la somma!

//è importante che una funzione ritorni un valore in quanto tutto ciò che è contenuto dentro alla funzione si esaurisce al termine della funzione

//lo possiamo ottenere associando ad una variabile il valore della funzione

//in questo caso sto richiamando la funzione che ha come effetto quello di creare un alert con la somma dei valori di due  ipotetici soggetti num 1 e num 2, ma al posto dei due inserirò le variabili per eseguire l'operazione

//es:

let numero = 2;
let numero2  = 3;

let sommafuori = sommanumeri(numero,numero2);
console.log(sommafuori);

//è identico a quando chiamavamo il getrndinteger negli esercizi precedenti 

//oppure

let num1 = 2;
let num2 = 3;

function sommanumeri(num1,num2){
    alert(num1 + num2);
    return num1 +num2;
};

//dichiarare il ritorno di un valore con il comando return

//NOTA!!!! se la funzione non ha un valore di ritorno dara come valore undefined 

//quando si usa return la funzione termina !! a prescindere dal tutti gli elementi dentro 



//esistono funzioni senza nome e argomento
//banalmente il nostro:

let btn;

btn = addEventListener('click', function() {
    
    if (activeindex === images.length - 1) {
        activeindex = 0;
    } else {
        activeindex += 1;
    }
});

//sto usando la funzione addevent listener che negli argomenti ha un evento ed una funzione che noi definiamo contestualmente 

//in questo caso la funzione non è stata definita come espressione

//potremmo pure definircela fuori
//es:

const miafunzione = function () {
    alert('ciao')
};

//oppure:

function miafunzione() {

}

//e quindi: 

btn = addEventListener('click', miafunzione);





//una funzione si può documentare in questo modo:

/**
 * determina se il numero è pari
 * @param {Number} num 
 * @returns {Boolean}
*/

function isEven(num) {
    if(num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

//oppure scritto in sistema ternario

function isEven(num) {
    return (num % 2 === 0) ? true : false;
}


//quando in una consegna incontrate un verbo spesso si traduce in usare una funzione per quello scopo


//sfrutto la funzione di prima per aiutarmi in questa funzione 
const btn = document.querySelector('button');

btn.addEventListener('click', printAlwaysEven);

function printAlwaysEven(){
    resetForm();
    const inputEl = document.getElementById('data');
    let alertcolor;
    let msg;
    let numeroinserito = parseInt(inputEl.vale);
    if(!isNaN(numeroinserito)) {
        msg = (isEven(numeroinserito)) ? numeroinserito : numeroinserito + 1;
        alertcolor = 'alert- success'
    } else {
        alertcolor = 'alert';
        msg = 'non hai inserito un numero'
    }
    printResult(alertcolor, msg);
};


//creo una funzione che in gergo viene chaiamata reset
//questa mi servirà a resettare il div dentro al quale inserirò l'outcome dell'if togliendole la classe di prima e ridandole quella del display none
function resetForm(){
    const resultEl = document.querySelector('.alert');
    resultEl.classList.remove('alert-danger');
    resultEl.classList.add('d-none');

};


//creo una funzione per stampare dentro alla funzione prima 
function printResult(alert, message) {
    const resultEl = document.querySelector('.alert');
    resultEl.classList.add(alert);
    resultEl.classList.remove('d-none');
    resultEl.innerText = message; 
};

//per evitare però che i nomi delle funzioni creino chaos nello scope globale della console piazzo tutto dentro ad una macrofunzione 

//es:

//ora pero devo chiamarla altrimenti non partirà mai
AlwaysEven();

function AlwaysEven() {

    const btn = document.querySelector('button');

    btn.addEventListener('click', printAlwaysEven);

    function printAlwaysEven(){
    resetForm();
    const inputEl = document.getElementById('data');
    let alertcolor;
    let msg;
    let numeroinserito = parseInt(inputEl.vale);
    if(!isNaN(numeroinserito)) {
        msg = (isEven(numeroinserito)) ? numeroinserito : numeroinserito + 1;
        alertcolor = 'alert- success'
    } else {
        alertcolor = 'alert';
        msg = 'non hai inserito un numero'
    }
    printResult(alertcolor, msg);
    };

    function resetForm(){
        const resultEl = document.querySelector('.alert');
        resultEl.classList.remove('alert-danger');
        resultEl.classList.add('d-none');
    
    };

    function printResult(alert, message) {
        const resultEl = document.querySelector('.alert');
        resultEl.classList.add(alert);
        resultEl.classList.remove('d-none');
        resultEl.innerText = message; 
    };
}




