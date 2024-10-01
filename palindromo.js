/*
    Um palindromo pode ser validado invertendo a palavra e depois comparando-a com a não invertida;
    Porém, vamos fazer algo diferente:
*/

function palynCheck(word)
{  
    let length = word.length;

    if (length == 0)
        return false

    let maxIndex = length-1;
    let iterations = Math.trunc(length/2);

    for (j = 0; j < iterations; ++j)
    {
        if (word[j] != word[maxIndex-j])
            return false
    }

    return true;
}

module.exports = { palynCheck }
  