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
	navC();
	ul1();
	acolor();
	qhys();
	//登录
	$("#denglu").mouseenter(function(){
		$("#user").css("display","block");
		if(getCookie("userInfo").uname&&getCookie("userInfo").ztz!=1){
			$(".ljdl").css("display","none");
			$(".ljzc").css("display","none");
			$(".grzx").css("display","block");
			$(".tcdl").css("display","block");
		}
	})
	$(".tcdl").click(function(){
		var json = {
			"uname": getCookie("userInfo").uname ,
			"upwd": getCookie("userInfo").upwd,
			"ztz":1
		}
		document.cookie = "userInfo="+JSON.stringify(json);
		$(".ljdl").css("display","block");
		$(".ljzc").css("display","block");
		$(".grzx").css("display","none");
		$(".tcdl").css("display","none");
	})
	$("#denglu").mouseleave(function(){
		$("#user").css("display","none");
	})
	$("#user").find("a").mouseenter(function(){
		$(this).css("color","#31a5e7");
	})
	$("#user").find("a").mouseleave(function(){
		$(this).css("color","#515151");
	})
}
//导航特效
function navC(){
	for(var i=0;i<$("#nav").find("li").length;i++){
		$("#nav").find("li").eq(i).mouseenter(function(){
			$(this).find(".blu").css("color","#31a5e7");
		})
		$("#nav").find("li").eq(i).mouseleave(function(){
			$(this).find(".blu").css("color","#333");
		})
	}
}
//导航下拉特效
function ul1(){
	$(".mzsj").find(".blu").mouseenter(function(){
		$(this).css("color","#31a5e7");
		$(".tit").css("background","rgba(255,255,255,1)");
		$(this).parent().siblings().find(".blu").css("color","#515151");
		$(".morepro1").css("display","block");
		$(".morepro1").animate({"height":"180px"},300);
		$(".morepro1").find(".ul1").css("display","block");
	})
	$(".mzsj").mouseleave(function(){
		$(this).find(".blu").css("color","#333");
		$(this).siblings().find(".blu").css("color","#333");
		$(".morepro1").css("display","none");
		$(".tit").css("background","rgba(255,255,255,0)");
		$(".morepro1").animate({"height":"0"},300);
		$(".morepro1").find(".ul1").css("display","none");
	})
	$(".mlsj").find(".blu").mouseenter(function(){
		$(this).css("color","#31a5e7");
		$(".tit").css("background","rgba(255,255,255,1)");
		$(this).parent().siblings().find(".blu").css("color","#515151");
		$(".morepro2").css("display","block");
		$(".morepro2").animate({"height":"180px"},300);
		$(".morepro2").find(".ul2").css("display","block");
	})
	$(".mlsj").mouseleave(function(){
		$(this).find(".blu").css("color","#333");
		$(this).siblings().find(".blu").css("color","#333");
		$(".morepro2").css("display","none");
		$(".tit").css("background","rgba(255,255,255,0)");
		$(".morepro2").animate({"height":"0"},300);
		$(".morepro2").find(".ul2").css("display","none");
	})
	$(".znpj").find(".blu").mouseenter(function(){
		$(this).css("color","#31a5e7");
		$(".tit").css("background","rgba(255,255,255,1)");
		$(this).parent().siblings().find(".blu").css("color","#515151");
		$(".morepro3").css("display","block");
		$(".morepro3").animate({"height":"180px"},300);
		$(".morepro3").find(".ul3").css("display","block");
	})
	$(".znpj").mouseleave(function(){
		$(this).find(".blu").css("color","#333");
		$(this).siblings().find(".blu").css("color","#333");
		$(".morepro3").css("display","none");
		$(".tit").css("background","rgba(255,255,255,0)");
		$(".morepro3").animate({"height":"0"},300);
		$(".morepro3").find(".ul3").css("display","none");
	})
}
//bottom特效
function acolor(){
	$(".bottom_bottom").find("a").mouseenter(function(){
		$(this).css("color","#31a5e7");
	})
	$(".bottom_bottom").find("a").mouseleave(function(){
		$(this).css("color","#999");
	})
	$("#bottom_bottomR").find("li").eq(0).mouseenter(function(){
		$(this).find("i").css("color","#ed5565");
	})
	$("#bottom_bottomR").find("li").eq(0).mouseleave(function(){
		$(this).find("i").css("color","#999");
	})
	$("#bottom_bottomR").find("li").eq(1).mouseenter(function(){
		$(this).find("i").css("color","#6fc749");
		$("#bottom_bottomR").find("div").css("display","block");
	})
	$("#bottom_bottomR").find("li").eq(1).mouseleave(function(){
		$(this).find("i").css("color","#999");
		$("#bottom_bottomR").find("div").css("display","none");
	})
	$("#bottom_bottomR").find("li").eq(2).mouseenter(function(){
		$(this).find("i").css("color","#ebbf2a");
	})
	$("#bottom_bottomR").find("li").eq(2).mouseleave(function(){
		$(this).find("i").css("color","#999");
	})
	$(".zj").mouseenter(function(){	
		$(this).find("img").attr("src","images/zj.png");
		$(this).find("img").css({"margin-left":"4px","margin-right":"-1px"});
	})
	$(".zj").mouseleave(function(){
		$(this).find("img").css({"margin-left":"5px","margin-right":"0"});
		$(this).find("img").attr("src","images/bq_03.png");
	})
	$(".jc").mouseenter(function(){	
		$(this).find("img").attr("src","images/jc.png");
		$(this).find("img").css({"margin-top":"-2px","margin-right":"-1px"});
	})
	$(".jc").mouseleave(function(){	
		$(this).find("img").attr("src","images/bq_05.png");
		$(this).find("img").css({"margin-top":"-4px","margin-right":"0px"});
	})
	$(".x").mouseenter(function(){	
		$(this).find("img").attr("src","images/x.png");
		$(this).find("img").css({"margin-top":"-1px","margin-left":"3px"});
	})
	$(".x").mouseleave(function(){	
		$(this).find("img").attr("src","images/bq_07.png");
		$(this).find("img").css({"margin-top":"-4px","margin-left":"5px"});
	})
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
