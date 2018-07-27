// Code your solution in this file!
function distanceFromHqInBlocks(n){
  if (n <= 42) {
    return 42 - n;
  }
  else if (n >= 42){
    return n - 42;
  }
}

function distanceFromHqInFeet(n){
  return distanceFromHqInBlocks(n) * 264;
}

function distanceTravelledInFeet(start, finish){
  if (start >= finish) {
    return (start - finish) * 264;
  }
  else if (start <= finish){
    return (finish - start) * 264;
  }
}

function calculatesFarePrice(start, destination){
  switch (distanceTravelledInFeet(start, destination){

    case (distanceTravelledInFeet(start, destination)) <= 400):
    return 0;
      break;
    case (distanceTravelledInFeet(start, destination) <= 2000):
      return ((distanceTravelledInFeet(start, destination) - 400) * 0.02);
      break;
    case (distanceTravelledInFeet(start, destination) <= 2500):
      return 25;
      break;
    default:
    return 'cannot travel that far';
  }
}
