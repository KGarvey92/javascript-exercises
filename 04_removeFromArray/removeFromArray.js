const removeFromArray = function() {
    // find the number of arguments and check an array was passed.
    let args = Array.from(arguments);
    if (Array.isArray(args[0]) == false) {
        return 'Error'; }
    let newArray = args[0]
    // if arguments > 1 then intialise a for loop to iterate over each one past the first.
    if (args.length > 1) {
        // for each iteration of the loop compare the value against each position of the original array
        for (let i = 1; i <= args.length; i++){
            for (let j = 0; j < args[0].length; j++){
                // if value matches position in array then splice the new array at the current array position
                if (args[0][j] === args[i]){
                    newArray.splice(j, 1);
                }
            }
        }
    }
    // return the new array
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
