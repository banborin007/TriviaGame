// begin jQuery
$(document).ready(function(){

// create a way to have a start screen and switches to trivia 
// when the start button is pressed, switch over to trivia div...learned how to hide and show between divs!
    $("#StartButton").click(function() {
        $("#StartScreen").hide();
        $("#TriviaScreen").show();
        $("#FinishButton").show();
    });

// setting up the variables early
    var time = 25;
    var intervalId;
// number of correct/incorrect answers
    var Correct = 0;
    var Incorrect = 0;

// create a way to start the clock
// when start button is clicked, start the timer
    $("#StartButton").on("click", run);

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
    time--;

    $("#timer").html("<h2>" + time + "</h2>");
    
    if (time === 0) {

        stop();
        alert("Time's Up!");
        $("#TriviaScreen").hide();
        $("#FinishButton").hide();
        $("#results").show();
    }
}

    function stop(){
        clearInterval(intervalId);
    }

// find a way to prevent player from selecting for than radio button...this was not easy
    var options = 3;
    $('.limited input[type="radio"]').click(function(){
        var a = $('limited input[type="radio"]:checked').length;
        if(a > options) if($(this).is(":checked"))
        $(this).removeAttr("checked");
    });

// create a way to add point for selecting correct answer
    $(function(){
        $('input[value="Yoda"], [value="Anakin"], [value="Red"]').click(function(){
            if($(this).is(':checked'))
            {
                console.log($(this).val());
                Correct++;
                $("#correct").text(Correct)
            }
        })
// this function is for adding points to incorrect score
    $(function(){
        $('input[value="ObiWan"], [value="Jabba"], [value="Boba"], [value="Emperor"], [value="Green"], [value="Black"]').click(function(){
            if($(this).is(':checked'))
            {
                console.log($(this).val());
                Incorrect++;
                $("#incorrect").text(Incorrect)
            }
        })
    })

// clicking the finished button should hide everything and show the results page
    $("#FinishButton").click(function(){
        $("#TriviaScreen").hide();
        $("#FinishButton").hide();
        $("#results").show();
    })

})

})