var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("easy-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_db"
});
connection.connect(function(err) {
    if (err) throw err;
});
var data = [];
var startList = function() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        for (var i = 0; i < results.length; i++) {
            data.push(results[i].id)
        }
        for (var i = 0; i < results.length; i++) {
            data.push(results[i].product_name)
        }
        for (var i = 0; i < results.length; i++) {
            data.push(results[i].department_name)
        }
        for (var i = 0; i < results.length; i++) {
            data.push(results[i].stock)
        }
        for (var i = 0; i < results.length; i++) {
            data.push(results[i].price)
        }
        // console.log(data);

    })

    var t = new Table;
    data.forEach(function(product) {
        t.cell('Id', results[i].id)
        t.cell('Product Name', results[i].product_name)
        t.cell('Department Name', results[i].department_name)
        t.cell('Stock', results[i].stock)
        t.cell('Price', results[i].price)

    })
    console.log(t.toString());

};

startList();

// console.log("data is:", data);
