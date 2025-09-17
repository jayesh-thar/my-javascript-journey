console.log("2">1); //here "2" converted to => 2 which is number
console.log("02">1);    // "02" => 2

console.log(null > 0);    //false
console.log(null == 0);   //false
console.log(null >= 0);   //true    // here "null" converted to number => 0

//The reason is that in equlity check ==and comparisons >, <, <=, >= work differently
//Comparisons convert null to number, treting it as 0
//That's why null >= 9 is true and null > 0  is false

console.log(undefined > 0);    //false
console.log(undefined == 0);   //false
console.log(undefined >= 0);   //false   

//NOTE: This type of conparison is difficult to understand, so avoid using this type of comparison like null and undefined because some time its converted into 0 or in null/undefined objects

console.log("2" == 2);      //true     //here "2" converted to 2 and reture true values
console.log("2" === 2);     //false    //But here "2" is not converted to 2 because here === means that it ckeck the value but it also ckeck the datatype also that's why here no conversion is happened



