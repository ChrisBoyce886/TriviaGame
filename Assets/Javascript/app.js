$(document).ready(function() {
    
  //Global variables
  var correct = 0;
  var wrong = 0;

  //Trivia question answers
  var answers = {
    q1: "13.8 billion years old",
    q2: "Elliptical galaxies",
    q3: "Spiral galaxy",
    q4: "Red Dwarf stars",
    q5: "Red Hypergiant stars",
    q6: "186,282.397 mi/s",
    q7: "25,000 light years",
    q8: "230 million years",
    q9: "200 billion galaxies",
    q10: "True"
  };

  //On page start, show only game name and start button, hide everything else
  $("#index2").hide();
  $("#index3").hide();
  $("#submitBtn").hide();

  //Function to display game results page, hide everything else
  function display() {
    $("#index2").hide();
    $("#index3").show();
    $("#submitBtn").hide();
    $(".clock").hide();
  }

  //Click function to start timer and display trivia game after start button is pressed, hide everything else
  $("#startBtn").on("click", function() {
    $("#start-page").hide();
    $("#index2").show();
    $("#submitBtn").show();
    $(".clock").show();
    //Function to display timer countdown, set for 1min 30sec.
    var clock = new FlipClock($(".clock"), 90, {
      countdown: true,
      clockFace: "MinuteCounter",
      //when timer hits 00:00, automatically end game and call 'display' function to display game results
      callbacks: {
        stop: function() {
          //auto scroll to top of page to counter a bug in falling stars background
          $("html, body").animate({ scrollTop: 0 }, "fast");
          setTimeout(function() {
            display();
          }),
            3000;
        }
      }
    });
  });

  //Click function to display game results page if submit button is pressed before time runs out
  $("#submitBtn").on("click", function() {
    //auto scroll to top of page to counter a bug in falling stars background
    $("html, body").animate({ scrollTop: 0 }, "fast");
    setTimeout(function() {
      display();
    }),
      3000;
  });

  //Click function to restart game from the start page
  $("#restartBtn").on("click", function() {
    $("#index2").hide();
    $("#index3").hide();
    $("#submitBtn").hide();
    $("#start-page").show();
    //Un-check all previously checked answers from last game
    $("input[name=inlineRadioOptions1]").prop("checked", false);
    $("input[name=inlineRadioOptions2]").prop("checked", false);
    $("input[name=inlineRadioOptions3]").prop("checked", false);
    $("input[name=inlineRadioOptions4]").prop("checked", false);
    $("input[name=inlineRadioOptions5]").prop("checked", false);
    $("input[name=inlineRadioOptions6]").prop("checked", false);
    $("input[name=inlineRadioOptions7]").prop("checked", false);
    $("input[name=inlineRadioOptions8]").prop("checked", false);
    $("input[name=inlineRadioOptions9]").prop("checked", false);
    $("input[name=inlineRadioOptions10]").prop("checked", false);
    //Reset right and wrong answers to 0
    correct = 0;
    $("#correct").empty().append("");
    wrong = 0;
    $("#wrong").empty().append("");
    let score = 0;
    $("#score").empty().append("");    
  });


  //Game logic//

  //Function to calculate score based on numbers stored in the 'correct' and 'wrong' variables and calculate score in percentage.  
  function score() {
    correct++;
    $("#correct").empty().append(correct + " out of 10");
    wrong = 10 - correct;
    $("#wrong").empty().append(wrong + " out of 10");
    let score = (correct / 10) * 100;
    $("#score").empty().append(score + "%");
  }

  //Grab ID from each set of available answers for each question and assign the value of that answer to a variable 
  $(".card-body1 input").on("change", function() {
    answer1 = $("input[name=inlineRadioOptions1]:checked", ".card-body1").val();
    //If the newly assigned variable matches the answer declared above for this question in the answers object, run the score function to keep track of score
    if (answer1 === answers.q1) {
      score();
      console.log("Correct: " + correct); //THIS LINE IS MEANT TO BE DELETED TO AVOID CHEATING BUT IS BEING KEPT FOR DEMONSTRATION 
      //If the 'correct' variable has a number higher than the current question number, drop the number to enure only 10 possible answers max. 
      if (correct > 1) {
        correct--;
        console.log("Correct: " + correct);;//THIS LINE IS MEANT TO BE DELETED TO AVOID CHEATING BUT IS BEING KEPT FOR DEMONSTRATION 
      }
    }
  });

  //Repeat above code for questions 2 -10 using appropriate ID names for each
  $(".card-body2 input").on("change", function() {
    answer2 = $("input[name=inlineRadioOptions2]:checked", ".card-body2").val();
    if (answer2 === answers.q2) {
      score();
      console.log("Correct: " + correct);//THIS LINE IS MEANT TO BE DELETED TO AVOID CHEATING BUT IS BEING KEPT FOR DEMONSTRATION 
      if (correct > 2) {
        correct--;
        console.log("Correct: " + correct);;//THIS LINE IS MEANT TO BE DELETED TO AVOID CHEATING BUT IS BEING KEPT FOR DEMONSTRATION 
      }
    }
  });

  $(".card-body3 input").on("change", function() {
    answer3 = $("input[name=inlineRadioOptions3]:checked", ".card-body3").val();
    if (answer3 === answers.q3) {
      score();
      console.log("Correct: " + correct);//THIS LINE IS MEANT TO BE DELETED TO AVOID CHEATING BUT IS BEING KEPT FOR DEMONSTRATION 
      if (correct > 3) {
        correct--;
        console.log("Correct: " + correct);;//THIS LINE IS MEANT TO BE DELETED TO AVOID CHEATING BUT IS BEING KEPT FOR DEMONSTRATION 
      }
    }
  });

  $(".card-body4 input").on("change", function() {
    answer4 = $("input[name=inlineRadioOptions4]:checked", ".card-body4").val();
    if (answer4 === answers.q4) {
      score();
      console.log("Correct: " + correct);//THIS LINE IS MEANT TO BE DELETED TO AVOID CHEATING BUT IS BEING KEPT FOR DEMONSTRATION 
      if (correct > 4) {
        correct--;
        console.log("Correct: " + correct);;//THIS LINE IS MEANT TO BE DELETED TO AVOID CHEATING BUT IS BEING KEPT FOR DEMONSTRATION 
      }
    }
  });

  $(".card-body5 input").on("change", function() {
    answer5 = $("input[name=inlineRadioOptions5]:checked", ".card-body5").val();
    if (answer5 === answers.q5) {
      score();
      console.log("Correct: " + correct);//THIS LINE IS MEANT TO BE DELETED TO AVOID CHEATING BUT IS BEING KEPT FOR DEMONSTRATION 
      if (correct > 5) {
        correct--;
        console.log("Correct: " + correct);;//THIS LINE IS MEANT TO BE DELETED TO AVOID CHEATING BUT IS BEING KEPT FOR DEMONSTRATION 
      }
    }
  });

  $(".card-body6 input").on("change", function() {
    answer6 = $("input[name=inlineRadioOptions6]:checked", ".card-body6").val();
    if (answer6 === answers.q6) {
      score();
      console.log("Correct: " + correct);//THIS LINE IS MEANT TO BE DELETED TO AVOID CHEATING BUT IS BEING KEPT FOR DEMONSTRATION 
      if (correct > 6) {
        correct--;
        console.log("Correct: " + correct);;//THIS LINE IS MEANT TO BE DELETED TO AVOID CHEATING BUT IS BEING KEPT FOR DEMONSTRATION 
      }
    }
  });

  $(".card-body7 input").on("change", function() {
    answer7 = $("input[name=inlineRadioOptions7]:checked", ".card-body7").val();
    if (answer7 === answers.q7) {
      score();
      console.log("Correct: " + correct);//THIS LINE IS MEANT TO BE DELETED TO AVOID CHEATING BUT IS BEING KEPT FOR DEMONSTRATION 
      if (correct > 7) {
        correct--;
        console.log("Correct: " + correct);;//THIS LINE IS MEANT TO BE DELETED TO AVOID CHEATING BUT IS BEING KEPT FOR DEMONSTRATION 
      }
    }
  });

  $(".card-body8 input").on("change", function() {
    answer8 = $("input[name=inlineRadioOptions8]:checked", ".card-body8").val();
    if (answer8 === answers.q8) {
      score();
      console.log("Correct: " + correct);//THIS LINE IS MEANT TO BE DELETED TO AVOID CHEATING BUT IS BEING KEPT FOR DEMONSTRATION 
      if (correct > 8) {
        correct--;
        console.log("Correct: " + correct);;//THIS LINE IS MEANT TO BE DELETED TO AVOID CHEATING BUT IS BEING KEPT FOR DEMONSTRATION 
      }
    }
  });

  $(".card-body9 input").on("change", function() {
    answer9 = $("input[name=inlineRadioOptions9]:checked", ".card-body9").val();
    if (answer9 === answers.q9) {
      score();
      console.log("Correct: " + correct);//THIS LINE IS MEANT TO BE DELETED TO AVOID CHEATING BUT IS BEING KEPT FOR DEMONSTRATION 
      if (correct > 9) {
        correct--;
        console.log("Correct: " + correct);;//THIS LINE IS MEANT TO BE DELETED TO AVOID CHEATING BUT IS BEING KEPT FOR DEMONSTRATION 
      }
    }
  });

  $(".card-body10 input").on("change", function() {
    answer10 = $("input[name=inlineRadioOptions10]:checked", ".card-body10").val();
    if (answer10 === answers.q10) {
      score();
      console.log("Correct: " + correct);//THIS LINE IS MEANT TO BE DELETED TO AVOID CHEATING BUT IS BEING KEPT FOR DEMONSTRATION 
      if (correct > 10) {
        correct--;
        console.log("Correct: " + correct);;//THIS LINE IS MEANT TO BE DELETED TO AVOID CHEATING BUT IS BEING KEPT FOR DEMONSTRATION 
      }
    }
  });

//End of document.ready
});
