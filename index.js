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
