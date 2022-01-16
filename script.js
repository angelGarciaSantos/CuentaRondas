// Save new drinker
$('#nuevo').on('click', function() {
	$('tbody').append(`
        <tr>
            <td>`+ $('input').val() +`</td>
            <td><button class="menos">-</button></td>
            <td class="cantidad">0</td> 
            <td><button class="mas">+</button></td> 
            <td><button class="borrar">Borrar</button></td> 
        </tr>
    `);
    $('input').val('');
    var x = $('table').prop('outerHTML');     
    $.cookie('tabledata', x, { expires: 7 });
});

// Retrieve data from cookies into table after page load
$(document).ready(function(){
    let content = $.cookie('tabledata');
    if (content!=='undefined')
        $('table').html(content);
});

// Increase amount
$(document).on('click', '.mas', function() {
    $(this).parent().prev().html(parseInt($(this).parent().prev().text()) + 1);
    var x = $('table').prop('outerHTML');     
    $.cookie('tabledata', x, { expires: 7 });
});

// Increase amount for everyone
$(document).on('click', '.ronda', function() {
    $('table > tbody  > tr').each(function(index, tr) { 
        $.each(this.cells, function(index2, td){
            var classList = $(td).attr("class");   
            if (classList != undefined && classList == 'cantidad') {
                $(td).html(parseInt($(td).text()) + 1);
            }   
        });
     });
     var x = $('table').prop('outerHTML');
     $.cookie('tabledata', x, { expires: 7 });
});

// Decrease amount
$(document).on('click', '.menos',  function() {
    if(parseInt($(this).parent().next().text()) > 0) {
        $(this).parent().next().html(parseInt($(this).parent().next().text()) - 1);
        var x = $('table').prop('outerHTML');     
        $.cookie('tabledata', x, { expires: 7 });
    }
});

// Delete drinker
$(document).on('click', '.borrar', function() {
    $(this).closest("tr")
           .remove();
    var x = $('table').prop('outerHTML');     
    $.cookie('tabledata', x, { expires: 7 });
});

// Save table on cookie manually
$(document).on('click', '.guardar', function() {
    var x = $('table').prop('outerHTML');     
    $.cookie('tabledata', x, { expires: 7 });
});

// Load cookie on table manually
$(document).on('click', '.cargar', function() {
    let content = $.cookie('tabledata');
    $('table').html(content);
    alert(content);
});


// $(document).on('click', '.csv', function() {
//     $("table").table2csv({
//         filename:'table.csv'
//     });      
// });