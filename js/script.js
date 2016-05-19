" use strict ";

var display = document.getElementById("display");

function oneToTen(){
  var output = "";
  for(i = 1 ; i <= 10 ; i++){
    output += i + "<br>";
  }
  display.innerHTML = output;
}

function oddNumbers(){
  var output = "";
  for(i = 1 ; i <= 20 ; i++){
    if(i % 2 == 1){
      output += i + "<br>";
    }
  }
  display.innerHTML = output;
}

function squareNumbers(){
  var output = "";
  for(i = 1 ; i <= 10 ; i++){
      output += (i*i) + "<br>";
  }
  display.innerHTML = output;
}

function random4(){
  var output = "";
  for(i = 1 ; i <= 4 ; i++){
      output += Math.floor(Math.random() * (101 - 1)) + 1 + "<br>";
  }
  display.innerHTML = output;
}

function evenNumbers(n){
  var output = "";
  for(i = 1 ; i < n ; i++){
    if(i % 2 == 0){
      output += i + "<br>";
    }
  }
  display.innerHTML = output;
}

function powersOfTwo(n){
  var output = "";
  for(i = 1 ; i <= n ; i++){
    output += Math.pow(2,i)+ "<br>";
  }
  display.innerHTML = output;
}

function areWeThereYet(){
  var ask = "";
  var output = "";
  while(ask!="Yes"){
    ask = prompt("Arewethereyet?");
    output += "Arewethereyet?"+ "<br>";
    output += ask + "<br>";
  }
  output += "Good!";
  display.innerHTML = output;
}

function triangle(){
  var output = "";
  for(i = 1 ; i <= 5 ; i++){
    for(j = 1 ; j <= i ; j++){
      output += "*";
    }
    output += "<br>";
  }
  display.innerHTML = output;
}

function triangle(){
  var output = "";
  for(i = 1 ; i <= 5 ; i++){
    for(j = 1 ; j <= i ; j++){
      output += "*";
    }
    output += "<br>";
  }
  display.innerHTML = output;
}

function tableSquare(n){
  var timesTableArray = timesTableCreator(n);
  var digitsPerColumnArray = digitsPerColumn(n);
  var output = "";
  for(i = 0; i < n; i++){
      output+="<br>|";
      for( j = 0; j < n; j ++){
          var digitDifference = digitsPerColumnArray[j] - digitsOfSingleNumber(timesTableArray[i][j]);
          console.log(digitDifference);
          output+="&nbsp;";
          for( k = 0; k < digitDifference; k++){
              output+="&nbsp;";
          }
          output+=timesTableArray[i][j].toString()+"&nbsp;|";
      }
  }
  display.innerHTML = output;
}

      function digitsOfSingleNumber(n){
          return n.toString().length;
      }

      function digitsPerColumn(n){
          //Returns the max number of digits of each column
          var digitsPerColumn = new Array(n);
          for(i = 0; i < n; i++){
              digitsPerColumn[i] = (n*i).toString().length;
          }
          return digitsPerColumn;
      }

    function timesTableCreator(n){
          var timesTable = new Array(n);
          for (i = 0 ; i < n; i++){
              timesTable[i] = new Array(n);
              for(j = 0; j < n; j++){
                timesTable[i][j] = (i+1) * (j+1);
              }
          }
          return timesTable;
      }
