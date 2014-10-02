$(document).ready(function(){
  var x;
  var y;
  var inputanswer;

  $("#button1").click(function(){
    $("#feedback").html(checkAnswer());
  });

  $("#math").html(mathProblem());
  
  function mathProblem() {
      x = Math.floor((Math.random() * 10) + 1); 
      y = Math.floor((Math.random() * 10) + 1); 
      return (x + " + " + y);           
  }

  function checkAnswer(){
    inputanswer = $("#answer").val();
    var correctanswer = x+y;
    if (inputanswer==correctanswer) {
      return ("Congrats, your answer is correct!");
    } else {
      return ("Sorry, the correct answer was " + correctanswer);
    }
  }
});