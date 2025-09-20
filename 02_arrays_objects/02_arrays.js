const marvel_heros = ["ironman", "thor", "vaknada"]
const dc_heros = ["batman", "superman", "flash"]

marvel_heros.push(dc_heros);
console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros);
console.log(marvel_heros);
console.log(marvel_heros[3][0])
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //spred operator
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("Jayesh"))
console.log(Array.from("Jayesh")) //Converted to array form

console.log(Array.from({name: "jayesh"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) //Converted values to an array.


