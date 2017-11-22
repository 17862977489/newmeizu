window.onload=function(){
	var flag=true;
	tzcs();
	$(".zw").find("li").eq(0).click(function(){
		$("html,body").animate({"scrollTop":"80"},1000);
		$(".cs").css("display","none");
		$(".gs").css("display","block");
		$(".zw").css({"background":"#112364"});
		$("#xd").css({"border-top":"1px solid #efefef","border-bottom":"1px solid #2a3c74"});
		$("#xd").find("h2").css({"color":"#fff"});
		$(this).addClass("current").css("color","#08c3eb").siblings().removeClass("current").css("color","#fff");
		$(".zw").css({"border-bottom":"1px solid #2a3c74"});
		flag=true;
	})
	$(".zw").find("li").eq(1).click(function(){
		$("html,body").animate({"scrollTop":"80"},1000);
		$(".cs").css("display","block");
		$(".gs").css("display","none");
		$("#xd").find("h2").css({"color":"#666"});
		$(this).addClass("current").css("color","#08c3eb").siblings().removeClass("current").css("color","#666")
		$(".zw").css({"background":"#fff"});
		$("#xd").css({"border-bottom":"1px solid #efefef","border-top":"0"});
		$(".zw").css({"border-bottom":"1px solid #efefef"});
		flag=false;
	})
	$(".tzcsbg").click(function(){
		flag=false;
		$("html,body").animate({"scrollTop":"80"},1000,function(){
			$(".cs").css("display","block");
			$(".gs").css("display","none");
			$("#xd").find("h2").css({"color":"#666"});
			$(".zw").css("background","#fff");
			$(".zw").find("li").eq(1).addClass("current").css("color","#08c3eb").siblings().removeClass("current").css("color","#666");		
			$("#xd").css({"border-bottom":"1px solid #efefef","border-top":"0"});
			$(".zw").css({"border-bottom":"1px solid #efefef"});
		});
	})
	$(window).scroll(function(){
		if(flag){
			if($(document).scrollTop()>=81){
				$(".zw").css({"position":"fixed","top":"0","background":"rgba(0,0,0,0.8)"});
			}else{
				$(".zw").css({"position":"absolute","top":"0","background":"#112364"});
			}
		}else{
			if($(document).scrollTop()>=81){
				$(".zw").css({"position":"fixed","top":"0","background":"rgba(255,255,255,0.8)"});
			}else{
				$(".zw").css({"position":"absolute","top":"0","background":"#fff"});
			}
		}
	})
	$("#bottom").load("bottom.html",function(){
		acolor();
	})
	navC();
	ul1();
	
	qhys();
	user();
}

//继续了解效果
function tzcs(){
	$(".tzcsbg").mouseenter(function(){
		$(".tzcsbg").css("background","url(images/tzcsbg.jpg) no-repeat center");
		$(".tzcsbg").stop().animate({"top":"-83px","height":"400px"},300)
		$(".tzcsbg p").stop().animate({"padding-top":"165px"},300)
		$(".tzcsbg p").css({"color":"#fff"})
		$(".tzcsbg h2").css({"color":"#fff"})
	})
	$(".tzcsbg").mouseleave(function(){
		$(".tzcsbg").css("background","#F8F8F8");
		$(".tzcsbg").stop().animate({"top":"0","height":"234px"},300)
		$(".tzcsbg p").stop().animate({"padding-top":"82px"},300)
		$(".tzcsbg p").css({"color":"#999"})
		$(".tzcsbg h2").css({"color":"#21c4f2"})
	})
}
//切换参数手机颜色
function qhys(){
	for(var i=0;i<$(".basic-block .colors").find("li").length;i++){
		$(".basic-block .colors").find("li").eq(i).click(function(){
			$(this).addClass("selected").siblings().removeClass("selected");
			$(".appearance-bg").eq($(this).index()).css("opacity","1").siblings().css("opacity","0");
		})
	}
}
