function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments){
let array =[];
for(let  i = 0; i<arrayOfMusicians.length; i++){

    array.push(`${arrayOfMusicians[i]} plays ${arrayOfInstruments[i]}`);
}
  return array;
}

function johnLennonFacts(array){
  let i = 0;
  const results =[];
  while(array[i]){
    results.push(array[i] + "!!!");
    i += 1;
  }
  return results;
}

function iLoveTheBeatles(number) {
  const array = [];
} do {
  array.push('I Love The Beatles!')
} while(number += 1);

