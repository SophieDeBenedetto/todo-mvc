// 1. make a listener on submit
// 2. post form with ajax request
// 3. create action of lists controller, it should respond with ONE NEW LIST ITEM
// 4. eventually need to prepend new list returned to our ajax request from 
// controller to the top of the lists. Change order 

$(function(){

  newListListener();

});


function newListListener(){
  $("form#new_list").on("submit", newListAction);
}

function newListAction(e){
  e.preventDefault();
  e.stopPropagation();
  // debugger;
  var url = $(this).attr("action");
  var method = $(this).attr("method");
  var data = $(this).serialize();
  $.ajax(url, {
    method: method,
    data: data,
    success: function(response){
      // debugger;
      insertList(response);

    }

  });


}
 
function insertList(response){
  // take our new list item and prepend it to the top of the list of lists 
  $("ul#todo-list").prepend(response);
}


