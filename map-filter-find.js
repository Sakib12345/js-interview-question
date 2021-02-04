const number = [
    3, 4, 6, 2, 8
]
const result = number.map(x => x * x)
console.log(result)
// const output = [];
// for(let i = 0; i < number.length; i++){
//     const element = number[i];
//     const square = element * element
//     output.push(square)
// }

// function square(element) {
//     return element * element;
// }
// number.map(square)

// const result = number.map((element, index, array)=>{
//     return element * element
//     //console.log(element, index, array)
// })

////////////////FILTER///////////////////
const bigger = number.filter( x => x > 5)
console.log(bigger)

const isThere = number.find( x => x > 5)
console.log(isThere)