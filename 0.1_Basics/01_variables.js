const accountId = 144553
let accountEmail = "nim@google.com"
var accountPassword = "12345"
accountCity = "Karachi"
let accountState;

// accountId = 2 //not allowed
accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Islamabad"
console.log(accountId);

/*
prefer not to use var 
because of issues in block scope and functional scope 
*/
console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);
