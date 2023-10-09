function checkInput()
{
    var firstName = document.getElementById("firstName").value;
 //Variable for first name
    var lastName = document.getElementById("lastName").value;
//Variable for last name
    var allName = firstName + " " + lastName;
//Variable for checking length
    var len = allName.length;
//Variable of the length
    var zip = document.getElementById("zipCode").value;
//Variable for zip code

    if (len <2) //if length is less than two, returns too short
    {
       document.getElementById("verification").innerHTML ="Invalid name length: too short.";
    }
    else if (len >20) //if length is greater than 20, returns too long
    {
        document.getElementById("verification").innerHTML="Invalid name length: too long."
    }
    else if ((zip >9999) && (zip <100000)) //requires 5 digit zip code
    {
        document.getElementById("verification").innerHTML="Valid Login. Welcome to Palindrome Checker.";
    }
    else
    {
        document.getElementById("verification").innerHTML="Invalid Zip Code."
    }
}

function strings() //reverses text, then checks for palendromes
{
    var palindrome = document.getElementById("palindromeChecker").value
    var splitPalindrome = palindrome.split("");
    var reversedPalindrome = splitPalindrome.reverse();
    var joinedPalindrome = reversedPalindrome.join("");

    if(palindrome == joinedPalindrome)
    {
    document.getElementById("palindromeResult").innerHTML=palindrome+" = "+joinedPalindrome+": This is a Palindrome."
    }
    else
    {
    document.getElementById("palindromeResult").innerHTML=palindrome+" ≠ "+joinedPalindrome+": This is not a Palindrome."    
    }
}

function playMusic()
{
    mysound=new sound("cowboy-theme.mp3");
    mysound.play();
    document.getElementById("image").src="dance.gif"
}

function sound(src)
{
    this.sound=document.createElement("audio");
    this.sound.src=src;
    this.play=function(){
        this.sound.play();
    }
}

function stopMusic()
{
    window.location.reload();
}