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
            imageGem.addClass();
            imageGem.attr("src", gems[i]);
            // Each gem has a random value between 1 - 12 (Whole numbers only)
            imageGem.attr("crystalValue", Math.floor(Math.random() * 12) + 1);
            // Appending the images and values to ID gem
            $("#gem").append(imageGem);
        }
    }
})