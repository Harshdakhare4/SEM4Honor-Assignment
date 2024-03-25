
let cities = ["Nagpur", "Bhopal", "Delhi", "Udaipur"];


function searchCity(city) {
    let index = cities.indexOf(city);
    if (index !== -1) {
        return index;
    } else {
        return "Not Found";
    }
}


let userInput = prompt("Enter a city:");

let result = searchCity(userInput);

console.log(result);


