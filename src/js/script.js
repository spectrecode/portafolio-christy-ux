$('#burguer').click(function(){
    $('.menu').addClass('enter')
})

$('.close').click(function(){
    $('.menu').removeClass('enter')
})

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 90
	    }, 700, 'swing', function(){
			window.location.hash = './' + target;
            $('.menu').removeClass('enter')
			console.log('11111111')
        });
	});
	$('.menu a').on('click', function(){
		$('.menu a').removeClass('active')
		$(this).addClass('active')
	});

	// $('a[href^="#"]').click(function(e){				
	// 	e.preventDefault();		//evitar el eventos del enlace normal
	// 	var strAncla=$(this).attr('href'); //id del ancla
	// 		$('body,html').stop(true,true).animate({				
	// 			scrollTop: $(strAncla).offset().top
	// 		},1000);
		
	// });

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
});

