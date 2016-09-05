$(document).ready(function() {
    var d_canvas = document.getElementById('canvas');
    var context = d_canvas.getContext('2d');
    var background = document.getElementById('background');
    var ballon = document.getElementById('ballon')
    context.drawImage(background, 0, 0);
    $('#ballon').draggable();
    $('#onword').draggable();

    $('#draw').click(function() {
        var $ballon = $('#ballon'),
            $canvas = $('#canvas'),
            $onword = $('#onword');
        var ballon_x = $ballon.offset().left - $canvas.offset().left,
            ballon_y = $ballon.offset().top - $canvas.offset().top;

        context.fillStyle = "blue";
        context.font = "18px sans-serif";
        context.textBaseline = 'top';
        context.fillText($("#word").val(),$onword.offset().left - $canvas.offset().left, $onword.offset().top - $canvas.offset().top);
        $onword.hide();
        context.drawImage(ballon, ballon_x, ballon_y);
        $ballon.hide();
        $(this).attr('disabled', 'disabled');
    });
    $( "#word" ).change(function() {
        $( "#onword" ).text($( "#word" ).val());
    });
});