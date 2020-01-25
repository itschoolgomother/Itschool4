var words = "Hi, lalala"
var word = words.split("")
var shifr = [];

// console.log(word)
// for(var i = 0; i<10; i++ ){
// 	console.log(words)
// }

function code(type,words){

 	for (var i = 0; i < word.length; i++) {
 		var code = word[i].charCodeAt(0)+3
 		shifr.push(String.fromCharCode(code))
	}
	console.log(shifr)
}

code(1, "sscxacs")

// type boolean

// console.log(words.charCodeAt(0));
// alert(String.FromCharCode(168))