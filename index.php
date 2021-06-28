<? include("./head.php"); ?>	
<div id="main_visual">
	<div class="slider">
		<ul class="slides"> 
			<li>
				<img src="./img/visual.png" alt="비주얼이미지1">
				<div class="caption left-align">
					<div class="visual_txt">
						<p class="visual_txt_1">Hello, My name is <span class="color">Kim Yu Mi</span></p>
						<p class="visual_txt_2">Transforming semantic tags into <br / >marvellous platforms</p>
						<p class="visual_txt_3">I want to be a Web-Publisher to make the world on the web. <br />become a more advanced publisher in the future.</p>
					</div>
				</div>
				<p class="scroll_bt mouse">SCROLL DOWN</p>
			</li>
			<li>
				<img src="./img/visual2.png" alt="비주얼이미지2">
				<div class="caption left-align">
					<div class="visual_txt txt_kr">
						<p class="visual_txt_1">안녕하세요! 3년차 웹 퍼블리셔 <span class="color">김 유 미</span> 입니다.</p>
						<p class="visual_txt_2" style="">사용자 입장을 생각하고<br> 섬세하고 견고한 구조를 만들기 위해 늘 고민합니다.</p>
						<p class="visual_txt_3">웹 브라우저를 잘 알고 HTML, CSS, SCSS, 자바스크립트를 잘 알고, 웹표준과 웹접근성을 잘 알고, <br />보다 더 많은 것을 알고 싶습니다.</p>
					</div>
				</div>
				<p class="scroll_bt mouse">SCROLL DOWN</p>
			</li>
		</ul>
	</div>
</div>
<script src='./js/materialize.js'></script>
<script>
$(document).ready(function(){
  $('.slider').slider({
    full_width: false,
    interval:5000,
    transition:800,
  });
});

</script>
	<div id="aboutme" name="aboutme" class="fadeInBlock" data-move-y="3%" data-move-x="0">		
		<div id="aboutme_inner">
			<div class="aboutme_left">
				<span class="sub_title">KYM</span>
				<h2>ABOUT<br /><span class="color">ME</span></h2>
				<!-- <p>I'm a Web Publisher from Korea. I love CSS and JavaScript which <br />
				along with other acronyms gives me superpower to develop compelling <br />
				Web Publisher, intuitive yet minimalistic interfaces, and engaging designs <br />
				I work to the principle that Simple is beautiful, while carefully including <br />
				the finest details and interactions.</p> -->
				<p class="mt35">
					안녕하세요, 3년차 웹 퍼블리셔 김유미입니다 :)<br/>
					사용자 입장을 고민하며, 꼭 다시 찾고 싶은 웹 사이트를 만들고자 노력합니다.<br/>
					동료들과의 소통을 중요시 여기며, 같이 일하고 싶은 사람이 되기 위해 노력합니다.<br/><br>
					탄탄하고 섬세한 구조를 만들기 위해 늘 고민합니다.<br>
					가치를 높이기 위해 계속해서 앞으로 나아갈 수 있는 사람이 되겠습니다.
				</p>
				<div class="sub_btn mt50"><a href="./about.php">about Me</a></div>	
			</div>
			<div class="aboutme_right">
				<img src="./img/aboutme_img.png" alt="">
			</div>			
		</div>
		<span class="view_expertise"><a href="#myexpertise"><img src="./img/viewexpertise_bt.png" alt="View Expertise"></a></span>
	</div>
	<!-- <div id="myexpertise">
		<div id="myexpertise_inner">
			<h2>MY<br /><span class="color">EXPERTISE</span></h2>
			<div class="myexp_box development">
				<span class="myexp_box_left"><img src="./img/development_icon.png" alt="web development icon"></span>
				<div class="myexp_box_right">
					<h3>WEB<br /><span class="color">DEVELOPMENT</span></h3>
					<p>I build next-generation web products<br />
					using best-in-practice technologies &<br /> 
					frameworks. </p>
				</div>
			</div>
			<div class="myexp_box design">
				<div class="myexp_box_left"><img src="./img/design_icon.png" alt="ux/ul design icon"></div>
				<div class="myexp_box_right">
					<h3>UX/UL<br /><span class="color">DESIGN</span></h3>
					<p>I love shaping your product from <br />
					research to interaction to pixels, thus defining <br />
					how easy a product is to use. </p>
				</div>
			</div>
			<div class="myexp_box product mt105">
				<div class="myexp_box_left"><img src="./img/product_icon.png" alt="improving product icon"></div>
				<div class="myexp_box_right">
					<h3>IMPROVING<br /><span class="color">PRODUCT</span></h3>
					<p>No task is too small. I do product enhancements<br />
					and fix issues. After all, that's where amazing user<br /> 
					experiences start. </p>
				</div>
			</div>
			<div class="myexp_box marketing mt105">
				<div class="myexp_box_left"><img src="./img/marketing_icon.png" alt="web development icon"></div>
				<div class="myexp_box_right">
					<h3>Digital<br /><span class="color">Marketing</span></h3>
					<p>I help you understanding the users<br /> 
					and knowing how to engage them at the<br /> 
					right time in the right place.</p>
				</div>
			</div>
			<span class="myskills_bt"><a href="./about.php"><img src="./img/myskills_bt.png" alt="my skills 더보기"></a></span>
		</div>
		<span class="view_works"><a href="#works"><img src="./img/viewworks_bt.png" alt="View works"></a></span>
	</div> -->
	<div id="works" >
		<div id="works_inner">
			<h2>KYM<span class="color"> WORK</span></h2>
			<p class="mt20 color">Digital Branding Marketing Homepage</p>
			<p class="mt50">I'm a Web Publisher from Korea. I love CSS and JavaScript which <br />
			along with other acronyms gives me superpower to develop compelling <br />
			Web Publisher, intuitive yet minimalistic interfaces, and engaging <br />
			designs. I work to the principle that Simple is beautiful, while carefully<br />
			including the finest details and interactions.</p>			
			<div class="sub_btn mt50"><a href="./work.php">work page</a></div>		
		</div>
		<span class="view_contact"><a href="#contactus"><img src="./img/viewcontact_bt.png" alt="View contact us"></a></span>
	</div>
<? include("./footer.php"); ?>