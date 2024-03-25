// Function to find the intersection of two arrays
function findIntersection(array1, array2) {
    let intersection = [];
    for (let num of array1) {
        if (array2.includes(num) ) {
            intersection.push(num);
        }
    }
    return intersection;
}


let array1 = [1, 2, 6, 4, 5];
let array2 = [4, 5, 6, 7, 8];

let intersectionArray = findIntersection(array1, array2);

console.log("Intersection of the two arrays:", intersectionArray);
