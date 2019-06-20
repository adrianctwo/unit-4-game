$(document).ready(function(){
    var wins = 0;
    var loses = 0;
    $("#wins").text(wins);
    $("#loses").text(loses);

    var gems = ["assets/images/red.png", "assets/images/purple.png", "assets/images/green.png", "assets/images/pink.png"];

    // Add a random value to each Gem
    function gemValues() {
        
        // We going through the whole array of images in Gems to add values to them
        for (var i = 0; i < gems.length; i++) {
        
            var imageGem = $("<img>");
            imageGem.addClass("gems gemImage gemButtons");
            imageGem.attr("src", gems[i]);
            // Each gem has a random value between 1 - 12 (Whole numbers only)
            imageGem.attr("crystalValue", Math.floor(Math.random() * 12) + 1);
            // Appending the images and values to ID gem
            $("#gem").append(imageGem);
        }
    }

    function game() {

        // Player value always starts at 0
        var playerValue = 0;

        // Generate a random whole number between 19-120
        var targetValue = Math.floor(Math.random() * (120 - 19) + 19);

        // Show the current value of the player
        $("#currentValue").text("Current Value: " + playerValue); 
            
        // Show the target value
        $("#targetValue").text("Target Value: " + targetValue);

        // When player press a gem, it calls this function.
        $(".gemButtons").on("click", function() {
            
            //Assigns random number to each gem after a gem is clicked
            gemClicked = true;
            var gemValue = ($(this).attr("crystalValue"));
            gemValue = parseInt(gemValue);
            //Adds the gem value that was pressed to playerValue.
            playerValue += gemValue;
            // We updating the website to show the current player value after a gem is clicked
            $("#currentValue").text("Your points: " + playerValue);
            
            // Alert win if player value equals to target value
            if (playerValue === targetValue) {
            // wins counter add 1
            wins++;
            // Pop-up alert
            alert("You win!");
            // Update website to show win score
            $(".wins-text").text("Wins: " + wins);
            // Reset
            $("#gem").empty();
            // Get new gem value
            gemValues();
            // Start the game again
            game();
            }
            
            // If player value goes over target value
            else if (playerValue >= targetValue) {
            // Losses counter add 1
            losses++;
            // pop-up alert
            alert("You lose!");
            // update website to show losses score
            $(".losses-text").text("Loses:" + losses);
            // reset
            $("#gem").empty();
            // get new gem value
            gemValues();
            // start the game again
            game();
            }
            
        });
    }
    // calling for both functions
    gemValues();
    game();
})