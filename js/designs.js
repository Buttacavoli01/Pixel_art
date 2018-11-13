function createGrid() {
  let rows = $("#input_height").val();
  let cols = $("#input_width").val();
  $("table tr").remove();

  for (var i = 1; i <= rows; i++) {
    $('table').append("<tr></tr>");
    $('tr').attr("class", 'cells');

    for (var j = 1; j <= cols; j++) {
      $("tr:last").append("<td></td>");
      $('td').attr("class", 'cells');
    }
  }
}

//form sumbit event handler
$('#gridSize').submit((e) => {
  //preventing form from resetting
  e.preventDefault();
  createGrid();

  //event handler for painting
  $(".cells").click((e) => {
    e.preventDefault();
    let paint = $("#colorPicker").val();
    $(e.target).css("background-color", paint);
  });

  //event handler for erasing
  $(".cells").dblclick((e) => $(e.target).css("background-color", "#fff"));
});
