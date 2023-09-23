const accountId = 111334;
let accountEmail = 'dheeraj@gmail.com';
var accountPassword = '111223445';
accountCity = 'Jaipur';
let accountState;

console.log('The given account id is : ' + accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);
console.log('Value of account state is : ' + accountState);

/*
1. Do not use var dut to problem in block scope and functional scope.
2. Once we have declared the const then we cannot change it.
3. In javascript we can give memory space to a variable without using a keyword just like we are doing in accountCity but is not a good practise.
4. In javascript if we do not give value to a variable then it will be considered as undefined.
*/