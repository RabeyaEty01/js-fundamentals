var bottoleColor = 'yellow';
var waterQuantity = 1;
var isFull = false;


//array

var items =['pen','pencil','book', 'paper'];
//items.indexOf('logens'); //-1
console.log(items);
items.push('envelop','latter');
console.log(items);
 items.pop();

 //conditionals

 if(items.length > 5){
console.log('You have too many stuff on your desk');
 }
 else if(items.length == 5){
     console.log('You have only 4 items');
 }
 else{
     console.log('wow you have a clean desk!!');
 }
