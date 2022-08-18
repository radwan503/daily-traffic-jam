const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];


//convert uppercase using map
function toUpper(cat) {
    return cat.toUpperCase()
}

const upperCats = cats.map(toUpper)
console.log(upperCats)

//run cmd - node map.js
//output: [ 'LEOPARD', 'SERVAL', 'JAGUAR', 'TIGER', 'CARACAL', 'LION' ]


//filter cats using filter function
const filtered = cats.filter((cat) => cat.startsWith('L'))
console.log(filtered)
//output: [ 'Leopard', 'Lion' ]