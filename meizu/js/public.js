//获取随机验证码
function getKey(){
	var str="0123456789QWERTYUIOPASDFGHJKLZXCVBNMmnbvcxzlkjhgfdsaqwertyuiop";
	var key="";
	for(var i=0;i<6;i++){
		key+=str.charAt(getRand(0,61));
	}	
	return key;
}
//获取随机数
function getRand(min,max){
	return Math.round( Math.random()*(max-min) + min );
}
//导航条效果
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
//导航条下拉
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

//底部特效
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
	//最底部的效果
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
//用户登录
function user(){
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
