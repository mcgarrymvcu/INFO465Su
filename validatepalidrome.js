var inArray = ["racecar", "indoor", "A man a plan a. canal, Panama", "hello", "a", ""];
var isPalindrome = false;
var newData = "";

function cleanData(inputWord) {

        inputWord = inputWord.toLowerCase();
        inputWord = inputWord.replace(/\s/g, ""); // Replaces all whitespace
        inputWord = inputWord.replace(/\./g, ""); // Replaces all dots
        inputWord = inputWord.replace(/,/g, ""); // Replaces all commas

    return inputWord
}

function testPalindrome(inputWord) {
    returnValue = false;
    reverseString = inputWord.split("").reverse().join("");
    if (reverseString == inputWord) {
        returnValue = true;
    }
    return returnValue;
}

function main() {
    for (let i=0; i<inArray.length; i++) {
        newData = cleanData(inArray[i]);
        isPalindrome = testPalindrome(newData)
        if (isPalindrome) {
            console.log("The word " + inArray[i] + " is a palindrome.")
        } else {
            console.log("The word " + inArray[i] + " is not a palindrome.")
        }
    }
}

main()