var firstObject = {
  name: "Ram",
  age: "Treta",
  power: 2500,
};

var secondObject = {
  name: "Krishna",
  age: "Dwapar",
  power: 2325,
};

function returnPowerful(firstObject, secondObject) {
  if (firstObject.power > secondObject.power) {
    return firstObject.name;
  } else {
    return secondObject.name;
  }
}

console.log(returnPowerful(firstObject, secondObject));
