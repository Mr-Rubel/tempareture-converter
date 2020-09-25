document.querySelector("#fahr").addEventListener("keyup",function(){
	var fahrenheit = document.querySelector("#fahr").value;
     parseFloat(fahrenheit);
	var conv = (fahrenheit-32) * (5/9);
	document.querySelector("#celcius").value = conv;
})



document.querySelector("#celcius-2").addEventListener("keyup",function(){
	var celc = document.querySelector("#celcius-2").value;
     parseFloat(celc);
	var convert = (celc*(9/5))+32;
	document.querySelector("#fahrr").value = convert;
})
