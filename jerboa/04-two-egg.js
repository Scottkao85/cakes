/*
A building has 100 floors. One of the floors is the highest floor an egg can be dropped from without breaking.
If an egg is dropped from above that floor, it will break. If it is dropped from that floor or below, it will be completely undamaged and you can drop the egg again.

Given two eggs, find the highest floor an egg can be dropped from without breaking, with as few drops as possible.
*/


let eggDrop = (nEgg, floors) => {
  let res;
  let min = 1000;

  if (nEgg === 1) {
    return floors;
  }

  // base case if there are less than 1 floors then you either need one or no tests;
  if (floors === 0 || floors === 1){
    return 0;
  }

  for (let i = 1; i <= floors; i++) {
    let oneLessEgg = nEgg - 1;
    let oneLessFloor = floors - 1;

    console.log('ugh', oneLessEgg, oneLessFloor)

    res = 1 + Math.max(eggDrop(oneLessEgg, oneLessFloor), eggDrop(nEgg, floors - i));

    if (res < min) {
      min = res;
    }
  }

  console.log('min', min)
  return min;
};

eggDrop(2, 100)
