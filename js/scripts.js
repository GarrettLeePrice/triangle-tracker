$(document).ready(function() {
  $("#triangle_form").submit(function(event) {
      var length1Input = parseInt($("input#length1").val());
      var length2Input = parseInt($("input#length2").val());
      var length3Input = parseInt($("input#length3").val());
      if (length1Input === length2Input === length3Input) {
        alert("This is an equilateral triangle");
      } else if (length1Input === length3Input || length2Input ===
        length3Input || length1Input === length2Input) {
        alert("This is an isocoles triangle");
      } else if (length1Input != length2Input != length3Input) {
        alert("This is a scalene triangle");
        //  } else {
        //   var resultA = function(length1,length2){
        //   return length1 + length2;
        //   var resultB = function(length1,length3){
        //   return length1 + length3;
        //   var resultC = function(length2,length3){
        //   return length2 + length3;
      } else {
        alert("you broke our program");
        event.preventDefault();
      });
  });
});
