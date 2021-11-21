var text="hai hello good morning"
// HAI,HELLO,GOOD MORNING
// using space we split the string
var words=text.split(" ");
for(let word of words){
    console.log(word.toUpperCase());
}
 // simplified method
var upper_words=text.split(" ").map(word=>word.toUpperCase())
console.log(upper_words);
