

var clock

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

var choices = {
    q1: [""],
    q2: [""],
    q3: [""],
    q4: [""],
    q5: [""],
    q6: [""],
    q7: [""],
    q8: [""],
    q9: [""],
    q10: [""]
};

$("#index2").hide();
$("#index3").hide();
$("#submitBtn").hide();

function display(){
    $("#index2").hide();
    $("#index3").show();
    $("#submitBtn").hide();
    $(".clock").hide(); 
};

$("#startBtn").on("click", function () {
    $("#start-page").hide();
    $("#index2").show();
    $("#submitBtn").show();
    var clock = new FlipClock($('.clock'), 90, {
        countdown: true,
        clockFace: 'MinuteCounter',
        callbacks: {
            stop: function() {
                $("html, body").animate({ scrollTop: 0 }, "fast");
                setTimeout(function(){
                display() 
                }),3000          
            }
        }
    });
});    

$("#submitBtn").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "fast");
    setTimeout(function(){
    display()
    }),3000  
});
















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


