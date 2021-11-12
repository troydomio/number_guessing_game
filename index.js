

let randomNumber = Math.floor(Math.random()*10)+1;
let turn = 1

let button = document.getElementById('button');
let clue = document.getElementById('clue')
console.log(randomNumber)
let turns = document.getElementById('turns')




const handleClick = () => {
    let userGuess = document.getElementById("guess").value;
    
    if(turn >= 1 && turn < 10) {
    if (userGuess == randomNumber){
        clue.textContent = "Winner!"
    } else if (userGuess > randomNumber){
        clue.textContent = "Your number is too high!"
        turns.textContent = `Last Guess = ${userGuess}`
    } else if(userGuess < randomNumber){
        clue.textContent = "Your number is too low!"
        turns.textContent = `Your last guess was: ${userGuess}`
    }
} else {
    clue.textContent = "You've run out of turns"
    button.remove();
    let newButton = document.createElement('button')
    newButton.textContent= 'Play again'
    let guessContainer = document.querySelector('.guess-container');
    guessContainer.appendChild(newButton)

    newButton.addEventListener('click', ()=>{
        location.reload();
    })
   
}
turn++;
}

button.addEventListener('click', ()=> handleClick())


