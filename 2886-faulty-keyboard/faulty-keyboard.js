/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let resultStr = [];

    for(let ch of s) {
        if(ch === "i") {
            resultStr.reverse();
            continue;
        }
        resultStr.push(ch);

    }

    return resultStr.join("");



    
    
};