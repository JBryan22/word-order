var blockArr = [];

var countInArray = function(array, lookingFor) {
  var count = 0;
  array.forEach(function(item) {
    if (item === lookingFor) {
      count++;
    }
  });
  return count;
}

$(function(){
  $("#text-block").submit(function(event){
    event.preventDefault();
    var wordCounts = [];
     blockArr = $("#block").val().split(" ");
     blockArr.forEach(function(word){
       wordCounts.push(word + " " + countInArray(blockArr, word));
     });
     var uniqueBlockArr = wordCounts.filter(function(word, index, arr) {
       return arr.indexOf(word) === index;
     });
     console.log(uniqueBlockArr);
  });
});
