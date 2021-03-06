var nav = $('#nav'),
    animateTime = 500,
    navLink = $('.top .navLink');

    navLink.click(function() {
      nav.slideToggle();
    });
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
function iOSversion() {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
    var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
    return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
  }
}
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}



jQuery(document).ready(function($) {	
	/*if (!isMobile) {
		$('#page-transition').fadeOut(1000);
		$('.menu_container ul a, a.fade-link').click(function(){
			var link = $(this).attr('href');
			
			$('#page-transition').fadeIn(1000, function(){
				window.location.href = link;
			});
			return false;
		});
	} else {
		$('#page-transition').hide();
		
		$(document).on('touchstart', '.entry-thumb', function() {
			$(this).find('.portfolio .caption').toggleClass('mobile');
		});
	}	*/
	$('.menu_bt').on('click', function() {
		$(this).toggleClass('nav-close')
		if ( $( this ).hasClass( "nav-close" )) {
			$( ".overlay" ).addClass('open');
			$(this).addClass('open_menu_bt');
			disableScroll();
		} else {
			$( ".overlay" ).removeClass('open');
			$(this).removeClass('open_menu_bt');
			enableScroll();
		}
	});
	$('.nav-close').on('click', function() {
		$( ".overlay" ).removeClass('open');
		enableScroll();
	});
	 $(window).on("scroll", function(e) {
		if ($(window).scrollTop() <= 20) {
			if ($('.site-header').hasClass('sticky')) {
				$('.site-header').removeClass('sticky');
				$('.lines-button').removeClass('sticky');
				$('.header-logo a').removeClass('sticky');
				$('.header-icon a').removeClass('sticky');
			}
		} else if ($(window).scrollTop() > 36) {
			if (!$('.site-header').hasClass('sticky')) {
				$('.site-header').addClass('sticky');
				$('.lines-button').addClass('sticky');
				$('.header-logo a').addClass('sticky');
				$('.header-icon a').addClass('sticky');
			}
		}
	});		
	if ($(window).scrollTop() <= 20) {
		if ($('.site-header').hasClass('sticky')) {
			$('.site-header').removeClass('sticky');
			$('.lines-button').removeClass('sticky');
			$('.header-logo a').removeClass('sticky');
			$('.header-icon a').removeClass('sticky');
		}
	} else if ($(window).scrollTop() > 36) {
		if (!$('.site-header').hasClass('sticky')) {
			$('.site-header').addClass('sticky');
			$('.lines-button').addClass('sticky');
			$('.header-logo a').addClass('sticky');
			$('.header-icon a').addClass('sticky');
		}
	}	
	$('.scollTo').on('click',document,function(e) {
		e.preventDefault();
		var link = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(link).offset().top - 120
		}, 1000);
	});

var ver = iOSversion();
	if (!ver || ver[0] > 7) {
		window.sr = ScrollReveal()
			.reveal( '.portfolio .item', {scale:1.0, duration:1000})
			.reveal( '.profile .profile-image', {distance:'0', scale:1.0 });
	}
});


/*$(document).ready(function(){
    $('.testimonial-slider').bxSlider({
        'mode': 'fade',
        'pager': true,
        'controls': false,
        'auto': true
    });
});