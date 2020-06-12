$(".resp_menu").click(function () 	{
	$('.menu_item').toggleClass("navlistopen");
	   								});

	if ( $(window).width() < 575 ){
 		$("#menu ul li").mouseover(function(){
			$("#menu ul li ul").css("display","block").css("position","absolute").css("left","160px").css("width","100%").css("top","0px");
 										});
									};
						