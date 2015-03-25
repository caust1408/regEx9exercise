
function expressionTest(arr,exp) {
	for ( i =0; i < arr.length; i++) {
           if(exp.test(arr[i]) == false) {
	      print(arr[i] + ' does not match');
	   }
	}
}


//accepts cat or car
var test1= /car|cat/;
var array1 =  ["my car", "bad cats", "camper", "high art"];
expressionTest(array1,test1);
print('\n');
// accepts prop or pop
var test2 = /pop|prop/;
var array2 = ["pop culture", "mad props","plop"];
expressionTest(array2,test2);
print('\n');
// accepts ferret,ferry,ferrari
var test3 = /ferr(et|y|ari)/;
var array3 = ["ferret", "ferry", "ferrari","ferrum", "transfer A"];
expressionTest(array3,test3);
print('\n');
// accepts words ending in ious
var test4 = /ious\b/;
var array4 = ["how delicious", "spacious room","ruinous", "consciousnes"];
expressionTest(array4,test4);
print('\n');
// test for a whitespace character followed by a dot,comma or semicolon
var test5 = /\s[.,;]/;
var array5 = ["bad punctuation .","escape the dot"];
expressionTest(array5,test5);
print('\n');
// tests for words longer than 6 characters
var test6 = /\w{7}/;
var array6 = ["hottentottententen","no", "hotten totten tenten"];
expressionTest(array6,test6);
print('\n');
// tests for words without the letter e
var test7 = /\b[a-df-z]+\b/i;
var array7 = ["red platypus", "wobbling nest","earth bed", "learning ape"];
expressionTest(array7,test7);


