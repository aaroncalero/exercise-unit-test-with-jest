// import the function sum from the app.js file
//const { sum } = require('./app.js');

// start your first test
//test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
  //  let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    //expect(total).toBe(23);
//});
// importar la función sum del archivo app.js
/*
const { sum } = require('./app.js');
// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);
    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
*/
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    let { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    let euro = fromEuroToDollar(3.5);

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    let expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(euro);
});

test("dollars to yen", function(){
    // importo la funcion desde app.js
    let { fromDollarToYen } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    let dollars = fromDollarToYen(3.5);

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    let expected = 3.5 * 106.60; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
});

test("yen to pound", function(){
    // importo la funcion desde app.js
    let { fromYenToPound } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    let yen = fromYenToPound(3.5);

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    let expected = 3.5 * 0.0067; 
    
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(yen);
});