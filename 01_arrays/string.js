// array coding challenge

/***
 * 
 * Reverse a string
 * 
 *  no in-built methods
 * E.g  x = 'i am samuel'
 * result = 'leumas ma i'
 */


//  * Naive and Poor Solution
const reverseString = (str) => {
    // no array methods

    // check for non-str
    if(typeof str !== 'string'){
        return
    }


    // split up string into array assuming white-spaces
    const strArr = str.split(' ') 
    
    // walk through each element and reverse them based on their indexes
    // ['i','am','samuel'] 
    // 
    // 
    const reverser = (arr) => {
        const tempArr = []
        let len = arr.length
        for (let i = 1; i < len + 1; i++) {
             tempArr.push(arr[len - i])  
        }
    
        return tempArr.join('')
    }

    let result = []
    let len = strArr.length
    for (let i = 1; i < len+1; i++) { 
        result.push(reverser(strArr[len - i].split('')))
    }

    return result.join(' ')

}

// Naive but Better Solution 

const reverser = (str) => {
    const tempArr = []
    let len = str.length
    for (let i = 1; i < len + 1; i++) {
         tempArr.push(str[len - i])  
    }

    return tempArr.join('')
}



// Fancy but Readable Solution

const reverser2 = (str) => {
    return str.split('').reverse().join('')
}

const reverser3 = (str) => [...str].reverse().join('')





/**
 * 
 * Anagram
 * 
 * Given mo
 */



/**
 * 
 * Palindrome
 * 
 * 
 */


/**
 * 
 * 
 */