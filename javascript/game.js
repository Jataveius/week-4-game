// Random Funtion for numbers between 19 -120//
$(document).ready(function () {

    //  variables
    var winsCount = 0;
    var lossesCount = 0;
    var total = 0;
    var random;




    function initializeVariables() {
        //  Random number between 19 to 120//
        random = Math.floor((Math.random() * 102) + 19);
        // Gems have a random number from 1 - 12//
        gem1 = Math.floor((Math.random() * 11) + 1);
        gem2 = Math.floor((Math.random() * 11) + 1);
        gem3 = Math.floor((Math.random() * 11) + 1);
        gem4 = Math.floor((Math.random() * 11) + 1);


        $(".randomNumber").text(random);

        // Total Wins and Losses//
        $("#wins").text("Win" + winsCount);
        $("#losses").text("Losses" + lossesCount);
        $(".randomNumber").text(random);
        $(".playerScore").text(total);

    }
    //resets the game
    function reset() {
        random = Math.floor((Math.random() * 102) + 19);
        $(".randomNumber").text(random);
        gem1 = Math.floor((Math.random() * 11) + 1);
        gem2 = Math.floor((Math.random() * 11) + 1);
        gem3 = Math.floor((Math.random() * 11) + 1);
        gem4 = Math.floor((Math.random() * 11) + 1);
        total = 0;
        $(".playerScore").text(total);
    }

    //Did player win or lose//

    function winner() {
        alert("Youve Won!");

        winsCount++;
        $("#wins").text(winsCount);
        reset();
    }
    //Add the losses//
    function losser() {
        alert("Youve lose!");

        losses++;
        $("#losses").text(losses);
        reset();
    }

    //         //Players Score
    //         $(".playerScore").html(total);
    //         var total = 0;
    //         $(".playerScore").text(count);

    //     }
    // }

    // On clicks


    $("#gem1").on("click", function(){
        total = total + gem1;
        $(".playerScore").text(total);

        if (total == random) {
            winner();
        } else if (total > random) {
            losser();
        }
    })

    $("#gem2").on("click", function(){
        total = total + gem2;
        $(".playerScore").text(total);

        if (total == random) {
            winner();
        } else if (total > random){
            losser();
        }

    })

    $("#gem3").on("click", function(){
        total = total + gem3;
        $(".playerScore").text(total);

        if (total == random) {
            winner();
        } else if (total > random) {
            losser();
        }

    })
    $("#gem4").on("click", function(){
        total = total + gem4;
        $(".playerScore").text(total);

        if (total == random) {
            winner();
        } else if (total > random) {
            losser();
        }
    })
})