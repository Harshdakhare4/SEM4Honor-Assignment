
let stringsArray = ["apple", "banana", "orange", "strawberry", "kiwi", "pineapple", "grape", "watermelon", "blueberry", "peach"];


function findLongestString(array) {
    let longestString = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longestString.length) {
            longestString = array[i];
        }
    }
    return longestString;
}

let longest = findLongestString(stringsArray);

console.log("Longest string:", longest);
