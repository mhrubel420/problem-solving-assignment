//feetToMile convertor
 
function feetToMile(feet){
    var mile = feet/5280;
    if(feet<0){
        return('distance can not be negative');
    }
    else{
        return mile;
    }
}
var result=feetToMile(10560);
console.log(result);


// woodCalculator Count

 
function woodCalculator(chair,table,bed){
    var woodChair = chair*1;
    var woodTable = table*3;
    var woodBed = bed*5;
    var allAmountOfWood = woodChair+woodTable+woodBed;
    if(chair < 0 || table < 0 || bed < 0){
        return('Neagative value is not valid')
    }
    else{
        return allAmountOfWood;
    }
    
}
var smallFriend = woodCalculator(-3,4,5);
console.log(smallFriend)


//brickCalculator 

function brickCalculator(n){
    var totalBrick=0;
    if(n < 0){
        return 'neagative value is not accepted';
    }
   else if(n <= 10){
        totalBrick = n * 15 * 1000;
    }
    else if(n <= 20){
        brickCount1 = 10 * 15 * 1000;
        var extra = n - 10;
        brickCount2 = extra * 12 * 1000;
        totalBrick = brickCount1 + brickCount2;
    }
    else{
        brickCount1 = 10 * 15 * 1000;
        brickCount2 = 10 * 12 * 1000;
        var extra = n - 20;
        brickCount3 = extra * 10 * 1000;
        totalBrick = brickCount1 + brickCount2 + brickCount3;
        
    }
    return totalBrick;
}
var totalCount=brickCalculator(12);
console.log(totalCount)

//tinyFriend

 function tinyFriend(arr){
     var iniitial = Infinity;
     var smaller = '';
     for(var i = 0; i < arr.length; i++){
         if(arr[i].length < iniitial){
             iniitial = arr[i].length;
             smaller = arr[i];
         }
     }
     return smaller;
 }
 var friends = ['rubel','jakirul','azizul','jhankarvaia'];
 var smallFriends = tinyFriend(friends);
 console.log(smallFriends);







