const sumAll = function(a, b) {

    // We can use Gauss' equation for this problem.
    // First check arguments are positive integers.
    for (arg of arguments) (
        if (arg < 0) {
            return 'ERROR';
        }
    )
    // Find the length of the sequence of numbers.
    let n = Math.abs(a - b) + 1;
    let sum = (n / 2) * (a + b);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
