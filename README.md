Logic Explained

Step 1: Create variables to grab HTML elements you need to alter and to store values you need for the game

    - grab the submit button and add a click event listener to it with a callback function
    - grab the clue and lastturn <p> tags 
    create a variable that stores the random number for the game and stores the number of turns starting at 1 (make sure these variables are set outside of the callback function so the values don't reset after every button click!)
    

Step 2: callback function logic
    -grab the user's number input and store it in a variable
    - I created a nested conditional:
            - outer: "IF this is the player's first turn and their turn is less than 10 let them play the game. ELSE don't let them play the game and start over."
            - inner: "IF the guess is the correct display --- ELSE IF  the guess is to high/low display --- "