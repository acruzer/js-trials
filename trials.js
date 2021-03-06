// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";


const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map
phoneNumbers.set('home', '510-867-5309');
phoneNumbers.set('mobile', '415-555-1212');
phoneNumbers.set('business', '415-123-4567');

// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function accountInfo(name, number, businessName) {
  console.log(name);
  console.log(number);
  console.log(businessName);
}

// Add function to print all addresses, including a header
function showAddresses(addresses) {
	console.log("Addresses");
	for (let address of addresses) {
		console.log(address);
	}
}

function showAddresses2 (addresses) {
	console.log("Addresses iterating");
	for (let i = 0; i < addresses.length; i++){
		console.log(addresses[i]);
	}
}

// Add function to print phone types and numbers
function showPhoneNums (phoneNumbers) {
	console.log("Phone Numbers");
	for (let phone of phoneNumbers) {
		console.log(phone[0] + ': ' + phone[1]);
	}
}

// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
let transactions = new Map();

// Add function to add transactions
function addTransaction(date, amount) {
	transactions.set(date, amount);	
}

// Use the function to add transactions
addTransaction('May-2', -500);
addTransaction('May-13', 1200);
addTransaction('May-15', -100);
addTransaction('May-21', -359);
addTransaction('May-29', 2200);


// Add function to show balance status
function showBalanceStatus(balance) {
	let message;
	console.log("Balance: " + balance);
	if (balance < 0) {
		message = "You are overdrawn"
	} else if (balance < 20 && balance > 0) {
		message = "Warning: You are close to zero balance";
	} else {
		message = "Thank you for your business.";
	}
	console.log(message)
	return message;
}

// Add function to show transactions
function showTransactions(transactions, balance) {
	console.log("Beginning Balance: " + balance);
	console.log("");

	for (let action of transactions) {
		//console.log(action)
		console.log("Date: " + `${action[0]}`);
		if (action[1] < 0) {
			console.log("Withdrawal");
		} else if (action[1] > 0) {
			console.log("Deposit");
		}
		console.log("Amount: " + `${action[1]}`);

		balance = balance + action[1];
		console.log("New balance: " + balance);
		console.log("");
	}
	let finalMsg = balance;
	console.log("Your final balance is " + finalMsg)
	showBalanceStatus(finalMsg)
}

showTransactions(transactions, 26000);
showTransactions(transactions, -2360);

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




