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

function  iLoveTheBeatles (number){

  let array = [];
  let i = 0;
  
  do {
    number++;
    array.push('I love the Beatles!');
  }
  while (i < number);
  if (number < 15){  
  return (array);
}
  else {
    return (['I love the Beatles!']);
  }
}