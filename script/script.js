$(document).ready(function(){

$(".buttonTask").click(function(){

    var newTask = $("#newTask").val();
    var list = $("<li>")
    list.addClass("draggable");
    $('#toDo').append(list);
    $(list).append(newTask);
    $("#newTask").val("");
    $(list).css({
        "cursor": "move",
        "border":"solid 1px black",

    })
})

$("#toDo").sortable();

$("#btnDebut").click(function(){
    $('#inProg').append($('#toDo li').first());
    $('.timer').startTimer();
            });

});
