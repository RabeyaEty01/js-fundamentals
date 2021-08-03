var danishPrice =50;
var butterBreadPrice =25;
var toastBiscuitPrice = 10 ;
var myBudget =8;
packedWell=true;

// if(danishPrice< myBudget){
//     console.log('Dansih kheye danish jabo!!');
// }
// else if(butterBreadPrice< myBudget){
//     console.log('Butter bon diye cha khamu');
// }
// else if(toastBiscuitPrice<myBudget){
//     console.log('Toast Biscuite khamu');
// }
// else{
//     console.log('ajke r kichu khawa hoibona mama!!')
// }

if(danishPrice < myBudget){
    if(packedWell == true){
        console.log('danish khabo');
    }
    else{
        console.log('danish khamu na! karon ami khawar age machi kheye felse ordhek');
    }
}
else{
  console.log('ajke r kichu khawa hoibona mama!!')
 }