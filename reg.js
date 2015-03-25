

//accepts cat or car
var test1= /car|cat/;
var array1 = 
       ["my car", "bad cats",
       "camper", "high art"];
print(test1.test.forEach(array1));

// accepts prop or pop
verify(/pop|prop/,
       ["pop culture", "mad props",
       "plop"]);

// accepts ferret,ferry,ferrari
verify(/ferr(et|y|ari)/,
       ["ferret", "ferry", "ferrari",
       "ferrum", "transfer A"]);

// accepts words ending in ious
verify(/ious\b/,
       ["how delicious", "spacious room",
       "ruinous", "consciousness"]);

// test for a whitespace character followed by a dot,comma or semicolon
verify(/\s[.,;]/,
       ["bad punctuation .",
       "escape the dot"]);

// tests for words longer than 6 characters
verify(/\w{7}/,
       ["hottentottententen",
       "no", "hotten totten tenten"]);

// tests for words without the letter e
verify(/\b[a-df-z]+\b/i,
       ["red platypus", "wobbling nest",
       "earth bed", "learning ape"]);




function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
  });
}
