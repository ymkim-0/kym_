$(function() {	
	//imgOver
	$(".over").each(function() {
		$(this).mouseenter(function() {
			$(this).attr("src", $(this).attr("src").replace("_off", "_on"));
		});
		$(this).mouseleave(function() {
			$(this).attr("src", $(this).attr("src").replace("_on", "_off"));
		});
	});

	$('#portfoliolist .portfolio').on('click', function(){
		let $data = $(this).data('pop');
		
		if($data != undefined) { 
			$('#'+$data).addClass('active'); 
			$('#popup-wrap').show();
			$('body').addClass('scroll');
		}
	})
	$('#popup-wrap .btn-close').on('click', function(){
		$('#popup-wrap').hide();
		$('.popup').removeClass('active');
		$('body').removeClass('scroll');
	})
	$('.filter').on('click', function(){
		$('.filter').removeClass('on');
		$(this).addClass('on');
	})
});

$(window).on({

	load : function(){
		onScroll();
	},
	resize: function(){
		onScroll();
	}
});

function onScroll(){
	if(window.innerWidth > 767) {
		$('.popup .body .inner').mCustomScrollbar({ 
			theme:"dark-3"        
		});
	}
}
