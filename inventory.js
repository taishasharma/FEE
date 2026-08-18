console.clear();
const prompt=require("prompt-sync")();

//1.
console.log("inventory entry system");
console.log();

let stock=[];

function addStock() 
{
    let item_code=Number(prompt("enter item code : "));
    let item_name=prompt("enter item name : ");
    let item_price=Number(prompt("enter item price : "));
    let item_quantity=Number(prompt("enter item quantity : "));

    let item={
        code:item_code,
        item:item_name,
        price:item_price,
        quantity:item_quantity
    };

    stock.push(item); //now stock is an array of objects.

    console.log("\ninventory updated.");
    console.log();
}

while (true){
    addStock();
    let loop=prompt("add more items (0 for no / 1 for yes) : ");
    loop=parseInt(loop);
    if (loop==0) break;
}

console.log("\ninventory entry completed.");
console.log("\nupdated stock is as follows : ");
console.log(stock);
console.log();

//2.
for (let element of stock){
    console.log(element.item, "\n");
}

//3.
stock.forEach((element)=>{console.log(element.price);}); //this is a demo of callback function.
