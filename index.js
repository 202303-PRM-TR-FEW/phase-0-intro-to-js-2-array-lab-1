const cats = ["Milo", "Otis", "Garfield"];

cats.push("Ralph");

console.log(cats);



cats.unshift("Bob");

console.log(cats);


cats.pop();
console.log(cats);



cats.shift();
console.log(cats);




function appendCat(name) {
   
    const newCats = [...cats, name];
    return newCats;
  }

 

  function removeLastCat() {
    const newcats2 = [...cats];
    newcats2.pop();  
    return newcats2;
  }
  
 


  function removeFirstCat() {
    const newcats2 = [...cats];
    newcats2.shift();  
    return newcats2;
  }

  function destructivelyAppendCat(name) {
   
    cats.push(name);
  }
  
  function destructivelyPrependCat(name) {
   
    cats.unshift(name);
  }
  
  function destructivelyRemoveLastCat() {
   
    cats.pop();
  }
  
  function destructivelyRemoveFirstCat() {
 
    cats.shift();
  }
  
  function prependCat(name) {
 
    const newCats = [name, ...cats];
    return newCats;
  }
  