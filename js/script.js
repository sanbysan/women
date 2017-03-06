var main = function() {
	$('.show_list').hide();
	$('.title_list h1').mouseenter(function(event){
		$(this).next().show();
	});
	$('.title_list h1').mouseleave(function(event){
		$(this).next().hide();
	});
	$('.women img').on('click', function() {
        $(this).toggleClass('hide');
    });
};
$(document).ready(main);