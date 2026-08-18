onsole.clear();
const prompt = require("prompt-sync")();

//1.
const store="SEVEN ELEVEN (7/11)";
console.log(store);
console.log();

let items=["item1", "item2", "item3"];
let prices=[2000, 5000, 3000];

console.log(items);
console.log(items.length);
console.log();
console.log(prices);
console.log(prices.length);
console.log();

items.push("item4","item5"); 
console.log(items);
console.log(items.length);
console.log();

prices.push(3000,3500);
console.log(prices);
console.log(prices.length);
console.log();

items.pop(); 
console.log(items);
console.log(items.length);
console.log();

prices.pop();
console.log(prices);
console.log(prices.length);
console.log();

//2.
console.log("Billing System");
console.log();

console.log("Serial No.\t Items\t Price");
for(let i = 0; i<items.length; i++)
{
    console.log((i+1) + "\t\t", items[i] + "\t " + prices[i]);
}
console.log();

let serialnumber = Number(prompt("Enter Item No. : "));
console.log();
if (serialnumber < 1 || serialnumber > items.length) {
    console.log("Invalid Item Number!");
    return;
}

let quantity = Number(prompt("Enter Quantity : "));
console.log();
let price = prices[serialnumber-1];
let cost= price*quantity;
let discount = 0;

if (cost>=5000) {
    discount = cost*0.05;
}
else if (cost>=2000) {
    discount = cost *0.02;
}
else {
    discount = cost * 0.01;
}

console.log("Total Cost is :", cost)
console.log("Your Discount is :", discount)
console.log("Your Bill Amount is :", cost-discount);
console.log();

