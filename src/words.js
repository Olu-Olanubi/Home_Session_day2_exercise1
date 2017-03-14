/* Function words takes in a string argument, 
and counts the occurence of each word in the string.
It returns a JSON object showing the words identified and their occurences.

And performs well on a host of test cases

*/

function words(str){
  //split the string into an array
var old = str.split(/\s+/g);

//sort the string array
words = old.sort();
//declares variable count, and two empty arrays to hold values
var count = 1;
    arr =[];
    wordCount = [];
// condition for single words
if(words.length === 1){
      wordCount = words;
      arr.push(1);
    }
//condition for multiple words
else{
for(i=1; i<words.length ;i++){
  // to count multiple occurences
  if (words[i] === words[i-1]){
    count++;
  }
  else{
    //when element doesn't occur next
    arr.push(count);
    wordCount.push(words[i - 1]);
    count = 1;
  }
  //to capture the last element in the words array
    if(i+1 === words.length){
      arr.push(count);
      wordCount.push(words[i]);
    }
  
  continue;
}

}

//declares object var
var obj = {};
//assigns elements of arr and wordCount in key: value pairs
for (i = 0; i < wordCount.length; i++){
  obj[wordCount[i]] = arr[i];
}

//creates JSON object
var myJSON = JSON.stringify(obj);
//returns JSON object
return obj;

}

module.exports = words;