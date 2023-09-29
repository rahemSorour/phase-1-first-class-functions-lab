// return a new array containing the first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

const result = returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
console.log(result);

// return an array of the last two drivers
const returnLastTwoDrivers=function(drivers) {
  return drivers.slice(2,4);
};

const result2 = returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
console.log(result2);

//  array containing two two functions that we previously defined
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

// returns a function that will multiply a fare
function createFareMultiplier(integer) {
  return function(fare) {
    return fare * integer;
  }
}

const quadrupleFare = createFareMultiplier(4);
const newFare = quadrupleFare(10); 
console.log(newFare); 


const fareDoubler = createFareMultiplier(2);

const fare = 39; 
const doubledFare = fareDoubler(fare);// Use the created fareDoubler function
console.log(doubledFare);

const fareTripler = createFareMultiplier(3);

const fare2 = 39; 
const doubledFare2 = fareDoubler(fare);// Use the created fareDoubler function
console.log(doubledFare);


function selectDifferentDrivers(arrOfDrivers,func){
  return func(arrOfDrivers);
}

// Use returnFirstTwoDrivers to select the first two drivers
const firstTwoDrivers = selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers);
console.log(firstTwoDrivers); 

// Use returnLastTwoDrivers to select the last two drivers
const lastTwoDrivers = selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers);
console.log(lastTwoDrivers);
