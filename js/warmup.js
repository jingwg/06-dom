'use strict';

//be sure and test your function! Here is a string you can use...
var testString = "99 luftballons / auf ihrem weg zum horizont";


//Convert the test string into an array of words. Log out the results
var words = testString.split(" ");
console.log(words);


//Write a function 'capitalize' that takes in a String and 
//returns a new String that has the first letter in upper case
//Reference: http://www.w3schools.com/jsref/jsref_obj_string.asp
//be sure and test your function!




var capitalize = function (string) {
     return word.charAt(0).toUpperCase() + word.substr(1);
}
console.log(capitalize("tom"))

//Now pass each value in your words array to the capitalize function by using the 
//.map() function, and save the result to a new variable

var capWords = words.mao(capitalize);
console.log(capWords);
//Using .map() with an ANONYMOUS FUNCTION, add the text 
//"Give me a " to each element in your capitalized array. 
//Save the result to a new var (e.g., "cheer") and log it out

var cheer = capWords.mao(function (string) {
    return "Give me a " + string;
})
console.log(cheer)