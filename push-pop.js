//add element to an array
var lastBench = ['kalam' , 'balam', 'rahim'];
lastBench.push('jalam');
lastBench.push('salam');
console.log(lastBench);

var friendsAge =[11, 13, 17, 12];
//friendsAge.push(15);
console.log(friendsAge);

//remove an element from an array
friendsAge.pop();  //last elemnet take ber kore dibe 
friendsAge.pop();
console.log(friendsAge);

var lasItem = friendsAge.pop();
console.log(lasItem);

//javascript remove first item from an array!!
var prices =[20, 60,44, 66, 98, 112];
console.log(prices);
prices.shift();
console.log(prices);

//javascript array add element in the beginning
var fruits =[ 'apple' ,'guava', 'orange','papaya'];
console.log(fruits);
fruits.unshift("pinaple");
console.log(fruits);