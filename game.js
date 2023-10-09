
function FuncAlert()
{
    //Dice rolls.
    var randNum1 = Math.ceil(Math.random()*6);
    var randNum2 = Math.ceil(Math.random()*6);
    var sum = randNum1+randNum2
    //Dispalying the result of the dice rolls.
    document.getElementById("diceRollResult").innerHTML = "Dice Rolls: " +randNum1+ ", " +randNum2+ ".";

    alert("Welcome to Craps! If your dice result in 7 or 11, you lose! If your dice are equal and even, you'll win! Everything else'll push!");

    alert("First Roll: " +randNum1+ ". Second Roll: " +randNum2+ ".");
    //if 7 or 11 is rolled, game is lost.
    if(sum == 7 || sum == 11)
    {
        alert("CRAPS - You Lose!");
        document.getElementById("gameResult").innerHTML = "CRAPS - You Lose!";
    }
    //if numbers are matching and even, game is won.
    else if(randNum1 == randNum2 && randNum1 % 2 == 0)
    {
        alert("You won!")
        document.getElementById("gameResult").innerHTML = "You won!";
    }
    //everything else results in push.
    else
    {
        alert("You pushed!")
        document.getElementById("gameResult").innerHTML = "You pushed!";
    }
}
