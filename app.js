//console.log("Hello World");
// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
//console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

//fromDollarToYen(1);

//fromYenToPound(1);
const fromDollarToYen=function(valor){
let resultado=valor*106.60;
return resultado;
}


const fromEuroToDollar=function(valor){
let resultado=valor*oneEuroIs.USD;
return resultado;
}


const fromYenToPound=function (valor){
let resultado=valor*0.0067;
return resultado;
};

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };