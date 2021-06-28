<!doctype html>
<html lang="ko">
<head>
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">  <!--국문 영문 euc-kr -->
<meta name="robots" content="index,follow">
<title>KYM</title>

<!-- 공통 CSS -->
<link rel="stylesheet" href="./css/common.css" type="text/css"> 
<!-- 스타일 CSS -->
<link rel="stylesheet" href="./css/style.css" type="text/css">
<!-- 스타일 서브 CSS -->
<link rel="stylesheet" href="./css/style_sub.css" type="text/css">
<!-- 스킬차트 css -->
<link rel="stylesheet" href="./css/style_skillchart.css" type="text/css">
<!-- 포트폴리오 css 
<link rel="stylesheet" href="./css/style_portfolio.css" type="text/css">
-->
<!-- 포트폴리오 css -->
<link rel="stylesheet" href="./css/portfolio.css" type="text/css">

<link rel="stylesheet" href="./css/jquery.mCustomScrollbar.min.css" type="text/css">

<!-- jQuery 2.1.3 압축버젼 -->
<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<!-- jQuery 애니메이션 (가속,탄력) 효과관련 추가 스크립트 -->
<script type="text/javascript" src="./js/jquery.easing.min.js"></script>
<!-- 이미지오버 -->
<script type="text/javascript" src="./js/default.js"></script>

<!-- about-chart JS -->
<script type='text/javascript' src='./js/chart.js'></script>

<!-- 포트폴리오 js 
<script src="./js/scrollreveal.min.js"></script>-->

<!-- 메뉴
<script type='text/javascript' src='./js/menu.js'></script>-->


<!-- loading -->
<script src="./js/noprogress.js"></script>

<!-- scroll fade -->
<script type="text/javascript" src="./js/jquery.smoove.js"></script>

<!-- portfolio -->
<script type="text/javascript" src="./js/portfolio.js"></script>

<script type="text/javascript" src="./js/jquery.mCustomScrollbar.concat.min.js"></script>

<Script>
/*scroll down*/
$(".mouse").css({"top":"650px"});
var JK = setInterval(function() {
	$(".mouse").animate({"top":"650px","opacity":"0.9"},800).animate({"top":"680px","opacity":"1"},800);
},0);
</script>

<Script>
$(document).ready(function() {
  $('.open-menu').on('click', function() {
     $('.overlay').addClass('open');
  });

  $('.close-menu').on('click', function() {
	 
    $('.overlay').removeClass('open');
  });
});
</script>

</head>

<body class="body_bg">
<script> 
	$('body').show();
	NProgress.start();
	setTimeout(function() { NProgress.done(); $('.fade').removeClass('out'); },50);

</script>

<div id="wrap" class='fade out' >
	<header>	 	
		<div id="header_inner">
			<h1 class="logo"><a href="index.php"><img src="./img/kymm_logo.png" alt="로고"></a></h1>
			<span class="menu_bt open-menu"></span>
		</div>
	</div>
	<div class="overlay">
    	<div class="menu_container">
        	<div class="inner">
            	<ul id="menu-primary-nav" class="menu">
	                <li><a href="./index.php">Home</a></li>
	                <li><a href="./about.php">About Me</a></li>
	                <li><a href="./work.php">YUMI Work</a></li>
	                <li><a href="./contact.php">Contact Us</a></li>
           		</ul>
	        </div>
	    </div>
	    <!-- <div class="overlay_sns">
	    	<span><a href="#"><img src="./img/facebook_bt_off.png" alt="facebook 바로가기" class="over"></a></span>
	    	<span><a href="#"><img src="./img/blog_bt_off.png" alt="blog 바로가기" class="over"></a></span>
	    	<span><a href="#"><img src="./img/twitter_bt_off.png" alt="twitter 바로가기" class="over"></a></span>
	    </div>	 -->
		<p class="open_menu_bt close-menu"><img  src="/img/menu_close_bt.png" alt=""/></p>
	</div>    

	
