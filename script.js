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
});
$(document).on('click', '.mas', function() {
    $(this).parent().prev().html(parseInt($(this).parent().prev().text()) + 1);
});
$(document).on('click', '.menos',  function() {
    $(this).parent().next().html(parseInt($(this).parent().next().text()) - 1);
});
$(document).on('click', '.borrar', function() {
    $(this).closest("tr")
           .remove();
});
$(document).on('click', '.guardar', function() {
    $.cookie('name', 'value');
});
$(document).on('click', '.cargar', function() {
    let x = $.cookie('name');;
    alert(x);
});
// $(document).on('click', '.csv', function() {
//     $("table").table2csv({
//         filename:'table.csv'
//     });      
// });