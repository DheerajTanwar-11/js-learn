/*
1. Sometimes we get the data from some other sources like forms and want to do some opeartion on a particular type but we dont know the type of that value so we do type conversion on them. 
2. Type conversion typically means to convert one dataype to another datatype.
3. We can convert Number to string, boolean or vice versa. 
*/

let password = '33abc'
let numberPassword = Number(password) // type conversion of string to number.

let phonenumber = 99587382634
let stringPhonenumber = String(phonenumber) // type conversion of number to string.

let activeStatus = true
let numberActiveStatus = Number(activeStatus) /* type conversion from boolean to number or it can be vice versa or boolean to string and vice versa */


