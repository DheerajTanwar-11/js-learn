console.log(null < 0);
console.log(null > 0);
console.log(null == 0);
console.log(null <= 0);
console.log(null >= 0);
/* here the output of first three comparisons are false and last two are true because in javascript the comparison operator and equality check works differently. Comparison operator converts null to 0 and that's why the last two comparisons return true.*/

console.log("----------------");
console.log(2 == "2");
console.log(2 === "2");
/* Here we can see that fist equality operator returns true and second equlity return false because first one is loose equality which only compare value and other is strict equality which compare value and datatype both.*/
