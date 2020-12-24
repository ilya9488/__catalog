$(function () {
	var img1 = $('img[src="img/galery/bed/1.jpg"]');
			img2 = $('img[src="img/galery/bed/2.jpg"]');
			img3 = $('img[src="img/galery/bed/3.jpg"]');
			btn1 = $('.nextBtn:eq(0)');
			btn2 = $('.nextBtn:eq(1)');
			btn3 = $('.nextBtn:eq(2)');
			btn4 = $('.prevBtn:eq(0)');
			btn5 = $('.prevBtn:eq(1)');
			btn6 = $('.prevBtn:eq(2)');
			
			img1.click(function () {
				$(this).hide(300, function(){
				img2.show(300)
				btn1.fadeOut()
				btn2.fadeIn()
				btn4.fadeOut()
				btn5.fadeIn()
	 		 });
			});
			img2.click(function() {
				$(this).hide(300, function(){
				img3.show(300)
				btn2.fadeOut()
				btn3.fadeIn()
				btn5.fadeOut()
				btn6.fadeIn()
			 });
			});
			img3.click(function() {
				$(this).hide(300, function(){
				img1.show(300)
				btn3.fadeOut()
				btn1.fadeIn()
				btn6.fadeOut()
				btn4.fadeIn()
			});
		 });
			btn1.click(function() {
				btn1.fadeOut()
				btn2.fadeIn()
				btn4.fadeOut()
				btn5.fadeIn()
				img1.fadeOut( function(){
				img3.fadeOut()
				img2.fadeIn()
			});
			});
			btn2.click(function() {
				btn2.fadeOut()
				btn3.fadeIn()
				btn5.fadeOut()
				btn6.fadeIn()
				img2.fadeOut( function(){
				img1.fadeOut()
				img3.fadeIn()
			});
			});
			btn3.click(function() {
				btn3.fadeOut()
				btn1.fadeIn()
				btn6.fadeOut()
				btn4.fadeIn()
				img3.fadeOut( function(){
				img2.fadeOut()
				img1.fadeIn()
			});
			});


			btn4.click(function() {
				btn4.fadeOut()
				btn5.fadeIn()
				btn1.fadeOut()
				btn2.fadeIn()
				img1.fadeOut( function(){
				img2.fadeOut()
				img3.fadeIn()
			});
			});
			btn5.click(function() {
				btn5.fadeOut()
				btn6.fadeIn()
				btn2.fadeOut()
				btn3.fadeIn()
				img3.fadeOut( function(){
				img1.fadeOut()
				img2.fadeIn()
			});
			});
			btn6.click(function() {
				btn6.fadeOut()
				btn4.fadeIn()
				btn3.fadeOut()
				btn1.fadeIn()
				img2.fadeOut( function(){
				img3.fadeOut()
				img1.fadeIn()
			});
			});
		 });

		/*	$(this).attr('src', '../img/galery/bed/1.jpg').fadeIn(300);
		 $(this).fadeOut(300, function(){
			$(this).on('click', function(){
		});
		});*/

   


$(function() {
			var tab = $('.tub_prod');
			tab.on('click', function(event) {
				$('.content_active').removeClass('content_active');	
				$('.content_disabled[data-tub='+$(this).attr('data-tub')+']')
				.toggleClass('content_active');
			});
	});

	
/* Slider */

$(function() {	
	var slideNow = 1;
	var slideTime = 2000;
	var slideCount = $('.sliderwprapper').children().length;
	var navBtn = $('.slide-nav');
	var slide = $('.slide');



	navBtn.click(function()  {
		navBtn = $(this).index();
		$('.active').removeClass('active');
		$(this).toggleClass('active');
		if (navBtn + 1 != slideNow) {
			var translateWidth = -$('.viewport').width()	* (navBtn);	
			$('.sliderwprapper').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});	
			slideNow = navBtn + 1;
		}
	});

  // setInterval(nextSlide, slideTime);

	$('.btn-next').click(nextSlide);
	$('.btn-prev').click(prevSlide);
	// от себя клик по слайдеру = nextSlide
	$('.slide').click(nextSlide);


	
	function nextSlide() {
		if (slideNow == slideCount || slideNow <=0 || slideNow > slideCount) {
			$('.sliderwprapper').css({
				'transform': 'translate(0,0)',
				'-o-transform': 'translate(0,0)',
				'-webkit-transform': 'translate(0,0)'
			});
			slideNow = 1;
		} else {
			var translateWidth = -$('.viewport').width()	* (slideNow);	
			$('.sliderwprapper').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});	
			slideNow++;
		}
	}
	function prevSlide() {
		if (slideNow == 1 || slideNow <=0 || slideNow > slideCount) {
			var translateWidth = -$('.viewport').width() * (slideCount - 1);
			$('.sliderwprapper').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});
			slideNow = slideCount;
		} else {
			var translateWidth = -$('.viewport').width()	* (slideNow - 2);
			$('.sliderwprapper').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});	
			slideNow--;
		}
	}
});