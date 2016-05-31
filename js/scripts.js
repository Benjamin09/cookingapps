var volumeLiterToGallon = function(pliter){
  return 0.264172*pliter
};

var volumeGallonToLiter = function(pgallon){
  return 3.78541*pgallon
};

var gallon = parseInt(prompt("Enter a Volume in Gallons:"));

//var liter = parseInt(prompt("Enter a Volume in Liters:"));

alert(volumeGallonToLiter(gallon));
