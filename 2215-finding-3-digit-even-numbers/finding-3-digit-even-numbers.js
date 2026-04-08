/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    const resultSet = new Set();
    for(let i = 0; i < digits.length; i++) {
        if(digits[i] === 0) continue;
        for(let j = 0; j < digits.length; j++) {
            if(j === i) continue;
            for (let k = 0; k < digits.length; k++) {
                if(digits[k] % 2 !== 0) continue;
                if(j === k || k === i) continue;

                const result = "" + digits[i] + digits[j] + digits[k];
                resultSet.add(Number(result));


            }
        }
    }

    return Array.from(resultSet).sort((a,b) => a-b);
    
    
};