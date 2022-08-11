const findTheOldest = function(people) {
    // use sort to compare people one by one
    const oldest = people.sort((a, b) => {
        // account for those still alive
        let aAge;
        let bAge;
        if (!a.yearOfDeath) {
            aAge = new Date().getFullYear() - a.yearOfBirth;
        }
        else {
            aAge = a.yearOfDeath - a.yearOfBirth;
        }
        if (!b.yearOfDeath) {
            bAge = new Date().getFullYear() - b.yearOfBirth;
        }
        else {
            bAge = b.yearOfDeath - b.yearOfBirth;
        }
        return aAge > bAge ? -1 : 1;
    })
    //oldest person is first index
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
