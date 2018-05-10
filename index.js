function roll () {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}
   
  //Prints dice roll to the page
  
  function printNumber(number) {
    var side1 = document.getElementById('side1');
    side1.src = 'img/side' + number + '.png';
  }
  
  var button = document.getElementById('button');
  
  button.onclick = function() {
    var result = roll();
    printNumber(result);
  };
  
  