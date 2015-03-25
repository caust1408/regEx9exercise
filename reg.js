

//accepts cat or car
var test1= /car|cat/;
var array1 =  ["my car", "bad cats", "camper", "high art"];
for (i = 0;i < array1.length; i++) {
   if(test1.test(array1[i]) == false) {
	   print(array1[i] + ' does not match');
   }
   
}


print('\n');
// accepts prop or pop
var test2 = /pop|prop/;
var array2 = ["pop culture", "mad props","plop"];

for (i = 0;i < array2.length; i++) {
   if(test2.test(array2[i]) == false) {
	   print(array2[i] + ' does not match');
   }
   
}
print('\n');
// accepts ferret,ferry,ferrari
var test3 = /ferr(et|y|ari)/;
var array3 = ["ferret", "ferry", "ferrari",
       "ferrum", "transfer A"];

for (i = 0;i < array3.length; i++) {
   if(test3.test(array3[i]) == false) {
	   print(array3[i] + ' does not match');
   }
   
}

print('\n');
// accepts words ending in ious
var test4 = /ious\b/;
var array4 = ["how delicious", "spacious room",
       "ruinous", "consciousnes"];

for (i = 0;i < array4.length; i++) {
   if(test4.test(array4[i]) == false) {
	   print(array4[i] + ' does not match');
   }
   
}
print('\n');
// test for a whitespace character followed by a dot,comma or semicolon
var test5 = /\s[.,;]/;
var array5 = ["bad punctuation .",
       "escape the dot"];

for (i = 0;i < array5.length; i++) {
   if(test5.test(array5[i]) == false) {
	   print(array5[i] + ' does not match');
   }
   
}
print('\n');
// tests for words longer than 6 characters
var test6 = /\w{7}/;
var array6 = ["hottentottententen",
       "no", "hotten totten tenten"];

for (i = 0;i < array6.length; i++) {
   if(test6.test(array6[i]) == false) {
	   print(array6[i] + ' does not match');
   }
   
}
print('\n');
// tests for words without the letter e
var test7 = /\b[a-df-z]+\b/i;
var array7 = ["red platypus", "wobbling nest",
       "earth bed", "learning ape"];

for (i = 0;i < array7.length; i++) {
   if(test7.test(array7[i]) == false) {
	   print(array7[i] + ' does not match');
   }
   
}




