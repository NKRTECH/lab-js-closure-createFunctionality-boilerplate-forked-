// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop
const arrayOfNumbers = [1,2,3,4,5,6];
const itemToSearch = 4;

const NEG_INF = -1000000;
function createPop(arrayOfNumbers,itemToSearch){
  let currIndex = NEG_INF
  let check = false
  function searchForElement(){
      if(arrayOfNumbers.includes(itemToSearch)){
        check = true
        currIndex = arrayOfNumbers.indexOf(itemToSearch);
      }
      else{ check = false}
  }
  searchForElement();
    if(check==true){
     return `The item is present and is at index ${currIndex}`;
    }
    else{
     return `The item is not present and is at index ${currIndex}`;
    }
}
createPop(arrayOfNumbers,itemToSearch)
console.log(createPop(arrayOfNumbers,itemToSearch))

  // Progression 2: add 3 variables: title, currIndex, check

  // Progression 3: create a function "searchForElement" 


  // Progression 4: In `createPop()`, return a function - which uses the updated values of `currIndex` and `check`
// to return the desired output.
