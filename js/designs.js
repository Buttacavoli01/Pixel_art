//form sumbit event handler
$('#gridSize').submit((e) => {
  //preventing form from resetting
  e.preventDefault();
  //removing any applicable classes
  $("table tr").remove();
  //rows to create
  let rows = $("#input_height").val();
  //columns to create
  let cols = $("#input_width").val();
  //for loop to append the rows and cols to the table
  for (var i = 1; i <= rows; i++) {
    $('table').append("<tr></tr>");
    $('tr').attr("class", 'cells')
    for (var j = 1; j <= cols; j++) {
      $("tr:last").append("<td></td>");
      $('td').attr("class", 'cells');
    }
  }
  // color Selector
  let paint = $("#colorPicker").val();
  //event handler for painting
  $(".cells").click((e) => $(e.target).css("background-color", paint));
  //event handler for erasing
  $(".cells").dblclick((e) => $(e.target).css("background-color", "#fff"));
});
