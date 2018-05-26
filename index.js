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


function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    num++;
  } while (num < 15);
  return array;
}