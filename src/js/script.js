$('#burguer').click(function(){
    $('.menu').addClass('enter')
})

$('.close').click(function(){
    $('.menu').removeClass('enter')
})

$('.menu a').on('click',function (e) {
	e.preventDefault();
	var target 	= this.hash;
	var $target = $(target);
	$('html, body').stop().animate({
		'scrollTop': $target.offset().top - 90
	}, 500, 'swing', function(){
		$('.menu').removeClass('enter')
	});
	// console.log(this.hash)
	// if (window.location.pathname == "/") {
	// 	e.preventDefault();
		
	// 	var hash = this.hash
		
	// 	$('html, body').stop().animate({
	// 		scrollTop: $(hash).offset().top - 90
	// 	}, 500, function(){
			
	// 	});
	// 	console.log('aaaaaaaaaaaa')
	// } else{
	// 	// window.location.href = './';
	// 	var uno = window.location.href = './'
	// 	// var dos = uno = './'
	// 	// dos
	// }
});

$('.menu a').on('click', function(){
	$('.menu a').removeClass('active')
	$(this).addClass('active')
});

$('.open-popup').magnificPopup({
	type: 'image',
	mainClass: 'mfp-with-zoom', 
	gallery:{
				enabled:true
			},
	
	zoom: {
		enabled: true,
		duration: 300, // duration of the effect, in milliseconds
		easing: 'ease-in-out', // CSS transition easing function
	
		opener: function(openerElement) {
	
			return openerElement.is('img') ? openerElement : openerElement.find('img');
		}
	}
});

