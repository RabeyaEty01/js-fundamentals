var bookPages = ['hablu', 'bolod', 'chouddogoshti', 'battery' , 'peracitanol', 'gymansium'];

var batteryIndex =bookPages.indexOf('battery');
console.log(batteryIndex); //array index start from 0

var number = [45, 56, 666, 879, 22, 46, 76];
//var index = number.indexOf(76);
var index = number.indexOf(77); //eta mne () eto number ta ba ei value ta kon index e ache ta ber korte parbe. value ba element ta array te nai tokhon position -1 dekhabe
console.log(index);

var secondIndex = bookPages[5]; // [ ] eta mne hosse eto number index e k ache ta dekhabe
var thirdIndex = bookPages[0];
console.log(secondIndex);
console.log(thirdIndex);

console.log(number);
number[1]=95;//  1 number index er ager value k replace kore 95 boshabe
number[5] =21;
console.log(number);


