
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

multipleOfFourOrSeven()