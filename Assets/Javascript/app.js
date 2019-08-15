$(document).ready(function() {
//Global variables
var clock
var selected
var correct = 0
var wrong = 0


//Trivia question answers
var answers = {
    q1: "13.8 billion years old",
    q2: "Elliptical galaxies",
    q3: "Spiral galaxy",
    q4: "Red Dwarf stars",
    q5: "Red Supergiant stars",
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
function display(){
    $("#index2").hide();
    $("#index3").show();
    $("#submitBtn").hide();
    $(".clock").hide(); 
};

//Click function to start timer and display trivia game after start button is pressed, hide everything else
$("#startBtn").on("click", function () {
    $("#start-page").hide();
    $("#index2").show();
    $("#submitBtn").show();
    //Function to display timer countdown, set for 1min 30sec.
    var clock = new FlipClock($(".clock"), 90, {
        countdown: true,
        clockFace: 'MinuteCounter',
        //when timer hits 00:00, automatically end game and call 'display' function to display game results
        callbacks: {
            stop: function() {
                //auto scroll to top of page to counter a bug in falling stars background
                $("html, body").animate({ scrollTop: 0 }, "fast");
                setTimeout(function(){
                display();
                }),3000        }
        }
    });
});    

//Click function to display game results page if submit button is pressed before time runs out
$("#submitBtn").on("click", function () {
    //auto scroll to top of page to counter a bug in falling stars background
    $("html, body").animate({ scrollTop: 0 }, "fast");
    setTimeout(function(){
    display();
    }),3000  
});

//Game logic
//Grab value of selected answer 

// var name = []
//   $('.card-body input').on('change', function() {
// for (i = 0; i <= 10; i++){
//     name[i] = $('input[name=inlineRadioOptions'+i+']:checked', '.card-body').val();
//     console.log(name[0])

//  if (name[i] === answers.q1){
//         correct++
//         console.log("Correct: " + correct)
//     }   
// }




$('.card-body1 input').on('change', function() {
    answer1 = $('input[name=inlineRadioOptions1]:checked', '.card-body1').val();
        if (answer1 === answers.q1){
            score()
            console.log("Correct: " + correct)  
        }
});

$('.card-body2 input').on('change', function() {
    answer2 = $('input[name=inlineRadioOptions2]:checked', '.card-body2').val();
        if (answer2 === answers.q2){
            score()
            console.log("Correct: " + correct)            
        }  
});

$('.card-body3 input').on('change', function() {
    answer3 = $('input[name=inlineRadioOptions3]:checked', '.card-body3').val();
        if (answer3 === answers.q3){
            score()
            
            console.log("Correct: " + correct)
        }  
});

$('.card-body4 input').on('change', function() {
    answer4 = $('input[name=inlineRadioOptions4]:checked', '.card-body4').val();
        if (answer4 === answers.q4){
            score()
            console.log("Correct: " + correct)
        }  
});

$('.card-body5 input').on('change', function() {
    answer5 = $('input[name=inlineRadioOptions5]:checked', '.card-body5').val();
        if (answer5 === answers.q5){
            score()
            console.log("Correct: " + correct)
        }  
});

$('.card-body6 input').on('change', function() {
    answer6 = $('input[name=inlineRadioOptions6]:checked', '.card-body6').val();
        if (answer6 === answers.q6){
            score()
            console.log("Correct: " + correct)
        }  
});

$('.card-body7 input').on('change', function() {
    answer7 = $('input[name=inlineRadioOptions7]:checked', '.card-body7').val();
        if (answer7 === answers.q7){
            score()
            console.log("Correct: " + correct)
        }  
});

$('.card-body8 input').on('change', function() {
    answer8 = $('input[name=inlineRadioOptions8]:checked', '.card-body8').val();
        if (answer8 === answers.q8){
            score()
            console.log("Correct: " + correct)
        }  
});

$('.card-body9 input').on('change', function() {
    answer9 = $('input[name=inlineRadioOptions9]:checked', '.card-body9').val();
        if (answer9 === answers.q9){
            score()
            console.log("Correct: " + correct)
        }  
});

$('.card-body10 input').on('change', function() {
    answer10 = $('input[name=inlineRadioOptions10]:checked', '.card-body10').val();
        if (answer10 === answers.q10){
            score()
            console.log("Correct: " + correct)            
        }  
});



function score(){
    correct++
    $("#correct").empty().append(correct + " out of 10")
    wrong = 10 - correct
    $("#wrong").empty().append(wrong + " out of 10");
    let score = (correct/10)*100
    $("#score").empty().append(score + "%");
};

    //  }
     
   





   
    
   






 });

 


//  var selected = $('input[name=inlineRadioOptions0]:checked', '.form-check').val()
// console.log(selected)
// $('.form-check input').on('change', function() {
// 	console.log(selected)
// });

// $('input[name=radioName]:checked', '#myForm').val()
// $('#myForm input').on('change', function() {
// 	$('#val').text($('input[name=radioName]:checked', '#myForm').val());
// });


// console.log(answers.q1)



//  if (selected === answers.q1){
//      correct++
//      console.log("Correct: " + correct)
//  }
//  else {
//      wrong++
//      console.log("Wrong: " + wrong)
//  }









// ("Correct: " + correct), ("Wrong: " + wrong))





// var q 
// var qCount
// // var questionNum = question

// for (qCount = 1; qCount <= 10; qCount++){
//     $('#index2').append(qBox)        
//     var q = "Question " + qCount + ":";
//     $("#card-header").append(q) 
    
// }





//    var qBox = $('<div>').addClass("card").attr("id", "indexCard" + qCount) +
//             $('<div>').addClass("class card-header").attr("id", "card-header" + qCount) +
                 
//             '</div>' +
//             '<div class="card-body">'+
//                 $('<h5>').addClass("card-title").attr("id", "card-title" + qCount)+
//                 '<div class="form-check form-check-inline">' +
//                     '<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">' +
//                         '<label class="form-check-label" for="inlineRadio1"></label>' +
//                 '</div>' +
//                 '<div class="form-check form-check-inline">' +
//                     '<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">' +
//                         '<label class="form-check-label" for="inlineRadio2"></label>' +
//                 '</div>' +
//                 '<div class="form-check form-check-inline">' +
//                     '<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">' +
//                         '<label class="form-check-label" for="inlineRadio3"></label>' +
//                 '</div>' +
//                 '<div class="form-check form-check-inline">' +
//                     '<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4">' +
//                         '<label class="form-check-label" for="inlineRadio4"></label>' +
//                 '</div>' +
//             '</div>' +
//         '</div>') 


