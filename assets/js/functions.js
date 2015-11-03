$(document).ready(function(){
	$('a.item').click(function(){
		$('.item').removeClass('active');
		$(this).addClass('active');
	});

	$('a.item.header').click(function(){
		$('.ui.sidebar.ui.segment').sidebar('toggle');		
	})
});

