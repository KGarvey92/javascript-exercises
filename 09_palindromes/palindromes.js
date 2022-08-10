const palindromes = function (string) {
    //strip away punctuation, all empty space and convert to lowercase
    strippedString = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() != string[i].toUpperCase()) {
            strippedString.push(string[i].toLowerCase());
        }
    }
    console.log(strippedString);
    // reverse string and compare.
    reverseString = strippedString.slice().reverse().join('');
    console.log(reverseString);
    
    if (reverseString === strippedString.join('')) {
        return true;
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
