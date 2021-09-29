
function oneHundredtoFive () {
    for(let i = 100; i >= 5; i--){
        console.log(i);
    }
}

//oneHundredtoFive()

function absoluteValue () {
 let x = 35 ;
 //this math.abs function returns the absolute value of a number
 x = Math.abs(x); {
  console.log(x)
 }
}
//absoluteValue()

function multipleOfFourOrSeven () {
    for(let i = 4; i <= 100; i++){
        if (i % 4 === 0 && i % 2 === 0 || i % 7 === 0 && i % 2 === 0){
            console.log(i)
         }
    }
}





function floorSqrt(x)
{
      
    
    if (x == 0 || x == 1)
        return x;
  
    
    let i = 1;
    let result = 1;
      
    while (result <= x)
    {
        i++;
        result = i * i;
    }
    return i - 1;
}function floorSqrt(x)
{
   
    if (x == 0 || x == 1)
        return x;
    
    let i = 1;
    let result = 1;
    while (result <= x)
    {
        i++;
        result = i * i;
    }
    return i - 1;
}
    
    
    console.log(floorSqrt(25))


//multipleOfFourOrSeven()

/*function square (n) {
if (n > 0 && Math.sqrt(n) % 1 === 0) {
    return n 
     }   else 
    return n ** 2
}


square(25)*/
