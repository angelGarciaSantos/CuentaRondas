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
$(document).ready(function(){
    let content = $.cookie('tabledata');
    if (content!=='undefined')
        $('table').html(content);
});
$(document).on('click', '.mas', function() {
    $(this).parent().prev().html(parseInt($(this).parent().prev().text()) + 1);
    var x = $('table').prop('outerHTML');     
    $.cookie('tabledata', x, { expires: 7 });
});
$(document).on('click', '.menos',  function() {
    $(this).parent().next().html(parseInt($(this).parent().next().text()) - 1);
    var x = $('table').prop('outerHTML');     
    $.cookie('tabledata', x, { expires: 7 });
});
$(document).on('click', '.borrar', function() {
    $(this).closest("tr")
           .remove();
    var x = $('table').prop('outerHTML');     
    $.cookie('tabledata', x, { expires: 7 });
});
$(document).on('click', '.guardar', function() {
    var x = $('table').prop('outerHTML');     
    $.cookie('tabledata', x, { expires: 7 });
});
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