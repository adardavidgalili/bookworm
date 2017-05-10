var userInput = document.getElementById("userInput");
userInput.onkeyup = function(e){
  e = e || event;
  if (e.keyCode === 13) {
    addBook();
  }
  return true;
 }


function addBook() {
    var current_book = document.getElementById("userInput").value;
    if (current_book != "") {
        var bookshelf = document.getElementById("bookShelf")
    
        var node = document.createElement("LI");
        bookshelf.appendChild(node); 
        
        addLine(node)
        
        var box = document.createElement("DIV");
        node.appendChild(box); 
        
        document.getElementById("userInput").value = ""
        var textnode = document.createTextNode(current_book);       
        box.appendChild(textnode);
        
        addLine(node);   
    }
}

function addLine(node){
    var line = document.createElement("span");
    line.className = "sexy_line"
    node.appendChild(line);
}


var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(100,75,50,0,2*Math.PI);
ctx.stroke();