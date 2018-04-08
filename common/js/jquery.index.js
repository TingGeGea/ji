 $(document).ready(function  () {
	 $("header div").click(function  () {
					$(".nav_1").slideToggle();
						});
	 $(".over li:last-of-type").children("a").click(function  () { 
				$(this).parents("ul").children(".overflow").toggleClass("no");	
					$(this).parent().children("a").toggleClass("none");
				});		
	 $('.container ul li').click(function  () {
				$(this).toggleClass('hover');
					});
	$(function(){
		$(window).scroll(function(){
		var $scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;//兼容浏览器
			 if($scrollTop >350){
			    $("#up").show();
			}else{ $("#up").hide();};	
			});
			$("#up").click(function(){
			$('body,html').animate({scrollTop:0},500);
					return false;
				});
	});				
 
 });
$(window).resize(function  () {
			$(".nav_1").hide();
})
