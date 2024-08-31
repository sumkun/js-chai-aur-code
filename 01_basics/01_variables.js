const accountId = 10;
let accountName = "Sumit";
var accountPass = "Donkeykong";
let accountNo;

// accountId = 134; const cannot be defined again.

/*
Prefer not to user var 
because of issue in functional and block scope  
*/

accountName = "Ramesh";
accountState = "Maharashtra"; // accepted state

console.log(accountId);
console.table([accountId, accountName, accountPass, accountState, accountNo]);