$(document).ready(function(){
      
//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        var Choices = ["rock","paper","scissors"];
        var userChoice = ""; 
        var CompChoice = "";
        var winner = "";
        
        
        // Practice using console.log() and debugger to debug your code
        console.log(Choices.length);
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        $("#shoot").click(function(){
        var userChoice = $("#input").val();   

        // Display the user choice to the output screen
        console.log($("#User"));
        $("#User").text(userChoice);
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
      function CompChoice
        var num = Math.floor(Math.random()*Choices.length);
        var CompChoice = Choices[num];
        console.log(CompChoice);
        });
        //Display the computer choice to the output screen
        console.log($("#com"));
        $("#com").text(CompChoice);
        //Compare the user choice and the computer choice to determine who won. 
        //Display the user winner to the output screen 
        //Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES



//FUNCTIONS
function selectWinner(userChoice, computerChoice) {
    
    if (userChoice === "scissors") {
 
        if (computerChoice === "rock") {
            return "computer wins";
        } else if (computerChoice === "paper") {
            return "user wins";
        } else {
            return "it's a tie";
        }
        
    }
    
    
}

var winner = selectWinner("scissors", "rock");

//alert(winner);


// DOCUMENT READY FUNCTION

});
///Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click handler for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice


// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
//var computerChoice = null;
//var userChoice = null;
//var winner = null;
//var choices = ["rock","paper","scissors"];


// DOCUMENT READY FUNCTION
//$(document).ready(function() {

    //Click Function when shoot is clicked
    //$("#shoot").click(function(){
      
      //Takes in User Choice from the input box and stores it in a variable
      //userChoice = $("#input").val();
      
      //Display the user choice to the screen
//      $("#userChoice").html(userChoice);

//    });
       
//});