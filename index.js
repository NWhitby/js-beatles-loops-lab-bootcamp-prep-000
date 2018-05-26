function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments){
let array =[];
for(let  i = 0; i<arrayOfMusicians.length; i++){

    array.push(`${arrayOfMusicians[i]} plays ${arrayOfInstruments[i]}`);
}
  return array;
}

function johnLennonFacts(array){
  var i = 0;
  var results =[];
  while(array[i]){
    results.push(array[i]+"!!!");
    i++;
  }
  return results;
}







