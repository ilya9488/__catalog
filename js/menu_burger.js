/* Делаем адаптивное меню на jQuery */
/* И + nav навигация */

$(function() {
	var menuLink = $('.menu-link');
	var menu = $('menu');
	var close = $('.close-btn');
	var navLink = $('.li .a');
	var nav = $('li a');

	menuLink.click(function() {
		menu.toggleClass('active-menu');
	});
	close.click(function() {
		menu.toggleClass('active-menu');
	});
	navLink.click(function() {
		menu.toggleClass('active-menu');
	});

	navLink.on('click', function(event) {
		event.preventDefault();
		var target = $(this).attr('href');
		var top = $(target).offset().top;
		$('html,body').animate({scrollTop: top}, 500)
	});
	nav.on('click', function(event) {
		event.preventDefault();
		var target = $(this).attr('href');
		var top = $(target).offset().top;
		$('html,body').animate({scrollTop: top}, 600)
	});
});