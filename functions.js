//function
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);


//anonymous functions
const plantNeedsWater = function(day) {
  if (day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
}

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));

//arrow functions
//changed the following block code from "regular" function to use arrow function instead
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};


//concise body arrow functions
//converted the following to use concise body arrow functions
const plantNeedsWater = day => day === 'Wednesday' ? true : false;
;