$(document).ready(function(){

$(".buttonTask").click(function(){

    var newTask = $("#newTask").val();
    var list = $("<li>")
    list.addClass("draggable")
    $('#toDo').append(list);
    $(list).append(newTask);
    $("#newTask").val("");

})
$("#toDo").sortable();




});
