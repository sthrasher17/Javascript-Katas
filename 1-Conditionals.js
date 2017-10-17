/* 1-1 Conditionals Prompt */

//conditional where flavor = chocolate or vanilla
//prompt for flavor, then output heres your flavor
//if strawberry alert all out of strawberry
//Else alert no such flavor

flavor = prompt("Choose the flavor of ice cream that you want.");

if (flavor == "chocolate" || flavor == "vanilla"){
	alert("Here is your flavor of ice cream "+flavor);
}
else if (flavor == "strawberry"){
	alert("Sorry we are all out of strawberry.");
}
else{
	alert("There is no such flavor.");
}