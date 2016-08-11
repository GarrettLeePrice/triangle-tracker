$(function(){
   $("#blanks form").submit(function(event){
     var length1Input  = parseInt($("input#length1").val());
     var length2Input  = parseInt($("input#length2").val());
     var length3Input  = parseInt($("input#length3").val());



     event.preventDefault();
   });
});
