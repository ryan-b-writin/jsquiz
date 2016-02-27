
// get reference
var button = document.getElementById("btn");

// click event
button.addEventListener("click",function(event) {

  // tree object
  var treeObject = { 
    height: document.getElementById("height").value,
    letter: document.getElementById("tree").value
  };

  if (!treeObject.height || !treeObject.letter) {
    alert("Hey you gotta fill in the inputs")
  };

  var numLevels = parseInt(treeObject.height);
  var baseWidth = (numLevels * 2 ) - 1;
  var treeFill = ""
  // loop through to add characters to variable every level
  for (i=0; i<baseWidth; i++) {
    treeFill += treeObject.letter;
    // only log on odds
    if (i % 2 === 0) {
      //subtract 1 from numLevels and add that many spaces
      var spaces = ""
      numLevels -= 1
      for (j=0;j<numLevels;j++) {
      spaces += " "
    };
    //log that beautiful tree
    console.log(spaces,treeFill); 
    };
  };
});