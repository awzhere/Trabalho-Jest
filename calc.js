let BANISH_ZERO_DIV = false;

function adicao(a, b) 
{
    return a + b;
}

function sub(a, b) 
{
    return a - b;
}

function mult(a, b) 
{
    return a * b;
}

function div(a, b) 
{
    if (b == 0 && BANISH_ZERO_DIV)
        throw new Error("Divisão por zero não permitida!");

    return a / b;
}

var dict = {
    "adicao": adicao,
    "sub": sub,
    "mult": mult,
    "div": div
}

function calculadora(a, b, op)
{
    let operation = dict[op]
    if (operation)
        return operation(a, b);

}

  module.exports = { calculadora }
  
  