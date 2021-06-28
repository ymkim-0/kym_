$(function() {
	//list of skills
	var skills = {
				  "HTML 5":{work:100, personal:0},
				  "CSS 3":{work:100, personal:0},
				  "Sass(SCSS)":{work:90, personal:10},
				  "JAVASCRIPT":{personal:30, work:70},
				  "JQUERY" :{work:80, personal:20},
				  "Zeplin":{work:100, personal:0},
				  "Figma":{work:100, personal:0},
				  "AdobeXD":{work:100, personal:0},
				  "PHOTOSHOP":{work:60, personal:30},
				  "ILLUSTRATOR":{work:40, personal:25},
				  "BOOTSTRAP":{work:40, personal:35},
				//   "REACTION TYPE":{work:50, personal:30}
				 };
	  
	displayData(skills);
	animate();
	
	//add new skill
	$('input:button').click(function(){
	  var name = $('#txtSkill').val(),
		  perc = $('#txtPerc').val();
	  
	  if(name && perc){
		skills[name] = {work:perc};
		displayData(skills);
		animate();
  
		var newheight = $('.chart').outerHeight() + 50;
		$('.chart').css('height',newheight);
	  }else{
		animate();
	  }
	  $('input:text').val('');
	});
  });
  
  
  
  //Functions
  //display data
  function displayData(skills){
	$('.bars').html('');
	$('.skills').html('');
	for (var key in skills){
	  var personal = skills[key].personal,
		  work = skills[key].work;
	  
	  $('.skills').append("<li><span>"+key+"</span></li>");
	  $('.bars').append("<li><div data-percentage='"+skills[key].work+"' class='bar'>"+work+"</div><div data-percentage='"+skills[key].personal+"' class='bar'>"+personal+"</div></li>"); 
	  
	};
  }
  
  
  //animate the data
  function animate(){
	$('.bar').css('width','0px');
	$(".bars .bar").delay(1000).each(function(i){
	  var percentage = $(this).data('percentage');
	  
	  $(this).delay(i+"00").animate({'width': percentage + '%'}, 700);
	 
	});
  }