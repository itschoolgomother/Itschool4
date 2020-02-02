// alert(String.fromCharCode(97));

// var str = "Admin";
// var string = str.split('');

// for(var i = 0; i<string.length-1;i++){

// alert(string[i].charCodeAt(0))
// }



var text = "you)("
var letters = text.split("")
var shifr = []
var option = prompt("1 or 3", "6")


for(var i = 0; i<letters.length; i++){
	var code = letters[i].charCodeAt(0)
	if(option == "1"){
		code += 10
	}else if(option == "2"){
		code -= 10
	}else{
		alert("error")
	}
	
	
	shifr.push(String.fromCharCode(code))
}
console.log(shifr)
//String.fromCharCodeAt(97))
