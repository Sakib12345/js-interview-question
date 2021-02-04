// 0 //false
// const name = ''; //false
// let name; undefined //false
// let name = NaN; //false
// let name = null //false
// false

// truthy
// '0', {}, [], ' ', true

let name = 'false'
if(name){
    console.log('Condition is true')
}
else{
    console.log('Condition is false')
}