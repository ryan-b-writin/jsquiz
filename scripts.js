
// get reference
var button = document.getElementById("btn");

// click event
button.addEventListener("click",function(event) {

// tree object
  var treeObject = { 
    height: document.getElementById("height").value,
    letter: document.getElementById("tree").value
  };
  var tall = parseInt(treeObject.height);
  var numLevels = (parseInt(tall) + 1 ) / 2;
  var treeFill = " "

// loop through to add characters to variable every level
  for (i=0; i<tall; i++) {
  treeFill += treeObject.letter;



// only log on odds
    if (i % 2 === 0) {
      var spaces = ""
//subtract 1 from numLevels and add that many spaces
      numLevels -= 1
      for (j=0;j<numLevels;j++) {
      spaces += " "
    };
      console.log(spaces,treeFill); 
    };
  };
});