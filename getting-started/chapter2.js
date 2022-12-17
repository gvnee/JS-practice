// values
// The most fundamental unit of information in a program is a value. 
// Values are data. They're how the program maintains state. 
// Values come in two forms in JS: primitive and object.
console.log(typeof 20);
console.log(typeof "abc");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof { "a": 1 });
console.log(typeof [1, 2, 3]);
console.log(typeof function hello() { });

function awesomeFunction(coolThighs){
  let amazingStuff;
  return amazingStuff;
}

// let awesomeFunction = function(coolThighs){
//   let amazingStuff;
//   return amazingStuff;
// }

//Organizing JS

// classes

class Page{
  constructor(text){
    this.text = text;
  }
  print(){
    console.log(this.text);
  }
}

class Notebook{
  constructor(){
    this.pages = []
  }
  addPage(text){
    let page = new Page(text);
    this.pages.push(page);
  }
  print(){
    for(let page of this.pages){
      page.print();
    }
  }
}

let mathNotes = new Notebook();
mathNotes.addPage("a note");
mathNotes.addPage("another note");

mathNotes.print();