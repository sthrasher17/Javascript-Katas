/* 3-For Loop */

//conditional where flavor = chocolate or vanilla
//prompt for flavor, then output "heres your flavor"
//if strawberry alert "all out of "strawberry"
//Else alert "no such flavor"
//Put in a for loop asking for 3 scoops
//After Loop, alert "Here's your"+flavor, flavor, flavor+"cone".




for(i = 0; i < 0; i++){
	flavor = prompt("Choose the flavor of ice cream that you want.");

if (flavor == "chocolate" || flavor == "vanilla"){
	alert("Here's your "+flavor+" ice cream");
	i--;
}
else if (flavor == "strawberry"){
	alert("Sorry we are all out of strawberry.");
	i--;
}
else{
	alert("There is no such flavor.");
	i--;
}
alert("Scoop"+1+");
}
