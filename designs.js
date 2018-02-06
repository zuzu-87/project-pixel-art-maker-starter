// Select color input
// Select size input

const SIZE = $("#inputSubmit");
const TABLE = $("#pixelCanvas");

// When size is submitted by the user, call makeGrid()
$("#sizePicker").on("submit", function(event){
    event.preventDefault(); 
    TABLE.children().remove();
    makeGrid();
});

function makeGrid(event) {
    let row = $("#inputHeight").val();
    let column = $("#inputWeight").val();
    for(var i=0; i< row ; i ++){
        var square = $("<tr></tr>");
        for(var j=0; j< column; j++){
            square.last().append('<td class="table"></td>');
        }
        $(TABLE).append(square);
    }

    $(".table").click(function(){
        let color = $("#colorPicker").val();
        $(this).css("background-color", color);
    });
};
