const accountId= 123
let accountEmail = "Rajesh@gmail.com"
var accountPassword = "Rajesh@123"
//accountId=2; // not allowed
console.log(accountId);
accountEmail = "Raj@gmail.com"
console.log(accountEmail)
accountCity = "Bhubaneswar"
let accountBranch;
console.table([accountId, accountEmail ,accountPassword, accountCity,accountBranch ])

/*
prefer not to use var . always use let because of functional scope issues
*/
accountCity = "Bhubaneswar"