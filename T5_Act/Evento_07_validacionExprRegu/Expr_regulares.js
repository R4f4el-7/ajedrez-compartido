const regex = /[0-9]{2,4}/; // Entre 2 y 4 dígitos
console.log(regex.test("1"));    // false
console.log(regex.test("12"));   // true
console.log(regex.test("1234")); // true
console.log(regex.test("12345"));// true, encuentra los primeros 4 dígitos