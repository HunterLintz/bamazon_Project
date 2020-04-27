var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({

	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "bamazon"

});

connection.connect(function(err) {

	if (err) throw err;
	console.log("connected as id " + connection.threadId + "\n");
	menu();

});

var currentItem;

function menu() {

	console.log("Displaying all available products... \n");
	connection.query("SELECT * FROM products", function(err, res) {
		if (err) throw err;
		console.log("|-------------------------------------------------------------------------------");
		for(var i = 0; i  < res.length; i++){

			console.log("| Item ID: " + res[i].item_id + " | Product Name: " + res[i].products_name + " | Price: " + res[i].price + " | Stock Left: " + res[i].stock_quantity + "\n|-------------------------------------------------------------------------------");
		}
		inquirer.prompt([
			{
				type:"input",
				name:"itemPick",
				message:"Please enter the ID of the item you would like to buy. Type 0 to exit from the application: "
			}
		]).then(function(postedItem){
			
			var itemPicked = (postedItem.itemPick - 1);
			currentItem = res[itemPicked];
			var itemActuallyPicked = false;
			if (itemPicked == -1){
				connection.end();
			}else{
				var i;
				
				for(var i = 0; i  < res.length; i++){
					if (itemPicked == res[i].item_id - 1){
						itemActuallyPicked = true;
						itemAmount();
					};
				};
				if (itemActuallyPicked == false){
					console.log("Please Input an ID of an item...");
					menu();
				};
			};
		});
	});
};

function itemAmount(){
	inquirer.prompt([
		{
			type:"input",
			name:"itemAmount",
			message:"Please enter the Amount of the item you would like to buy: "
		}
	]).then(function(postedAmount){
		var itemAmount = postedAmount.itemAmount;
		if( itemAmount <= currentItem.stock_quantity){
			var query = connection.query(
				"UPDATE products SET ? WHERE ?",
				[
					{
						stock_quantity: currentItem.stock_quantity -= itemAmount
					},
					{
						item_id: currentItem.item_id
					}
				],
				function(err,res) {
					console.log("Thank you for the purchase!");
					itemActuallyPicked = false;
					menu();
				}
			);
		}else{
			console.log("There is not enough of that item in our stock please pick a number under " + currentItem.stock_quantity);
			itemActuallyPicked = false;
			menu();
		};
	});
};