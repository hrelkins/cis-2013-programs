//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
    var intCount, i, j, k, stringOutput

    i=0;  
	j=1;  
	stringOutput = i + " " + j;

    intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
	if (isNaN(intCount)||intCount<1||intCount>100) //validates user input
    {
        $("total_fib").value = ""; //clears value
        alert("Sorry, you must enter a number between 1 and 100.");
    }
    else
    {
        while (intCount >2) //actual fibonacci loop
        {
            k=i+j;
            i=j;
            j=k;
            intCount--;
            stringOutput = stringOutput + " " + k; //updates stringOutput
        }
        $("output").value = stringOutput;
    }

} 

// Push solution back to Output through DOM

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
}  