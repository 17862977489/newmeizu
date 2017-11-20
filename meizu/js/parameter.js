window.onload=function(){
	var flag=0;
	$(".zw").find("li").eq(0).click(function(){
		$(".cs").css("display","none");
		$(".gs").css("display","block");
		$(this).addClass("current").siblings().removeClass("current");
		flag=0;
	})
	$(".zw").find("li").eq(1).click(function(){
		$(".cs").css("display","block");
		$(".gs").css("display","none");
		$("#xd").find("h2").css({"color":"#666"});
		$(this).addClass("current").siblings().removeClass("current").css({"color":"#666"});;
		$("#xd").css({"background":"#ccc","border-top":"0"});
		$(".zw").css({"background":"#ccc"});
		
		flag=1;
	})
	if(flag=="0"){
		$(window).scroll(function(){
			if($(document).scrollTop()>=81){
				$(".zw").css({"position":"fixed","top":"0","background":"rgba(0,0,0,0.8)"});
			}else{
				$(".zw").css({"position":"absolute","top":"0","background":"#112364"});
			}
		})
	}
	
}