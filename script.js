$(document).ready(function(){
    $('header, p1').fadeIn('slow');
    $('p2').hover(function(){
    	$(this).addClass('active');
    });

    $('button').click(function() {
    	var toAdd = $("input[name=message]").val();
        $('#messages').append("<p>"+toAdd+"</p>");
    });
});