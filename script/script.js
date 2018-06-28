$(document).ready(function(){

$(".buttonTask").click(function(){

    var newTask = $("#newTask").val();
    var list = $("<li>")
    list.addClass("draggable")
    $('#toDo').append(list);
    $(list).append(newTask);
    $("#newTask").val("");
})




  $(".draggable").sortable();
  $(".draggable").css({
      "position":"absolute",
      "cursor": "move",
      "border": "solid 1px black",


  });

});
