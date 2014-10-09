$(document).ready(function(){
  var x;
  var y;
  var inputanswer;
  var count = 0;
  var sign = "";

  $("#math").html(AdditionProblem());
  $("#mathtype").html("Addition");
  $("#count").html(count);


  $("#button1").click(function(){
    $("#feedback").html(checkAnswer());

  });


  $("#tryagain").click(function(){
    if ($("#mathtype").text() == "Addition"){
       $("#math").html(AdditionProblem());
       //$("#mathtype").html("Addition");
       $("#feedback").html("");
       $( ".iconomation" ).empty();
    }
    else if ($("#mathtype").text() == "Multiplication"){
       $("#math").html(MultProblem());
       //$("#mathtype").html("Multiplication");
       $("#feedback").html(""); 
       $( ".iconomation" ).empty();
    }
  });

  $("#addition").click(function(){
     $("#math").html(AdditionProblem());
     $("#mathtype").html("Addition");
     $("#feedback").html("");
     $(".testspace").css("border", "3px solid green");
  });

  $("#multiplication").click(function(){
     $("#math").html(MultProblem());
     $("#mathtype").html("Multiplication");
     $("#feedback").html("");
     $(".testspace").css("border", "3px solid red");
  });
  
  //randomize two numbers 
  function AdditionProblem() {
      x = Math.floor((Math.random() * 10) + 1); 
      y = Math.floor((Math.random() * 10) + 1); 
      sign = "+";
      return (x + sign + y);           
  }
  //randomize two numbers 
  function MultProblem() {
      x = Math.floor((Math.random() * 10) + 1); 
      y = Math.floor((Math.random() * 10) + 1); 
      sign = "*";
      return (x + sign + y);           
  }


  function checkAnswer(){
    inputanswer = $("#answer").val();
    
    if ($("#mathtype").text() == "Addition"){
      var correctanswer = x+y;
    }
    else if ($("#mathtype").text() == "Multiplication"){
      var correctanswer = x*y;
    }
    if (inputanswer==correctanswer) {
      count++;
      $("#count").html(count);

      if (count ==5 && $("#mathtype").text() == "Multiplication"){
        alert("Congratulations you have completed the simple math test!");
      }
      else if (count == 5){
        $("#multiplication").prop("disabled",false);
        $("#newlevel").html("new level unlocked!");
        count = 0;
      }
      $( ".iconomation" ).empty();
      return ("Congrats, your answer is correct!");

      
    } 
    else {
      count = 0;
      $("#count").html(count);
      for ( var i = 0; i < x; i++){
        $('.iconomation').append('<i class="em em-apple"></i>');
      }
      $('.iconomation').append('<p>'+sign+'</p><br>');
      for ( var i = 0; i < y; i++){
        $('.iconomation').append('<i class="em em-green_apple"></i>');
      }
      $('.iconomation').append('<p>=</p><br>');

      if (sign == "+"){
        for ( var i = 0; i < x; i++){
          $('.iconomation').append('<i class="em em-apple"></i>');
        }
        if(x > 7 && y > 3 || y > 7 && x > 3){
          $('.iconomation').append('<br>');
        }
        for ( var i = 0; i < y; i++){
          $('.iconomation').append('<i class="em em-green_apple"></i>');
        }
      }
      else if (sign == "*"){
        for(var i = 0; i < y; i++){
          for (var j = 0; j < x; j++){
            $('.iconomation').append('<i class="em em-apple"></i>');
          }
          $('.iconomation').append('<br>');
        }
      }
      return ("Sorry, the correct answer was " + correctanswer);

    }
  }



  

});