var mysql = require("mysql");
var inquirer = require("inquirer");

var mySqlServerConnection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	user: "root",

	password: "aq92pl55B",
	database: "bamazon_db"
});

mySqlServerConnection.connect(function(err){
	if (err) throw err;
	console.log("connected as User " + mySqlServerConnection.threadId);
	// enter first function to run app HERE
	onRun();
});

function endConnection(){
	
		mySqlServerConnection.end();

	};

 function onRun(){
 	mySqlServerConnection.query("SELECT * FROM products", function(err, res){
		if(err) throw err;
		console.log("*****Welcome To Bamazon*****\n\nHere is our Inventory:\n"); 
		 for (var i = 0; i < res.length; i++) {
        	console.log("Item ID " + res[i].item_id + " || " + "Item: " + res[i].product_name + " || " + "Price: " + res[i].price + " || " + "Department: " + res[i].department_name + " || " + "Stock: " + res[i].stock_qty + "\n==========================================\n");
    }
		customerChoice()
 		})
	};

	function customerChoice(){
		
		mySqlServerConnection.query("SELECT * FROM products", function(err, res){
		if(err) throw err;
		
			inquirer.prompt([
      		{
		        name: "twoSelections",
		        type: "list",
		        message: "What is the item you would like to purchase?",
		        choices: function() {
		            var choiceArray = [];
		            var priceArray = [];
		            for (var i = 0; i < res.length; i++) {
		              choiceArray.push(res[i].product_name);

		            }
		            return choiceArray;
		          }
		      },
           {
	        name: "quantity",
	        type: "input",
	        message: "How many would you like to purchase?"
      		}
        
      ]).then(function(choice){

      	console.log("You are ordering " + choice.quantity + " " + choice.twoSelections);
      	
      	checkoutValidate(choice);

      	endConnection()
      });

 		})
      
	};

	 function checkoutValidate(choice){
		var query = 'SELECT stock_qty, price FROM products WHERE product_name =?';
		var params = choice.twoSelections;

		mySqlServerConnection.query(query, params, function(err, res) {

			if ( res[0].stock_qty < choice.quantity) {
				console.log("We do not have enough in stock to complete your order.");
				
			}
			else {

				var total = choice.quantity * res[0].price;
				var newQuantity = res[0].stock_qty - choice.quantity;
				
				console.log("Total Cost: $" + total);

				mySqlServerConnection.query("UPDATE 'products' SET stock_qty = (stock_qty - ?) WHERE id = ?;", [choice.quantity, choice.twoSelections], function(err, res){
					
						console.log("Your order has been processed at $" + total + "\n Thank you for shopping with us. \n Good Bye!");
			})
		}
	});
};