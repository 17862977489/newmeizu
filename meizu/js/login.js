window.onload=function(){
	formsj();
	linkgrey();
	wwk();
	yqlink();
	var flag=true;
	way();
	function way(){
		$(".way").click(function(){
			if(flag){
				$(".qr_panel").css("display","block");
				$(".way img").attr("src","images/ewmdl2.png");
				flag=false;
			}else{
				$(".qr_panel").css("display","none");
				$(".way img").attr("src","images/ewmdl.png");
				flag=true;
			}
		})
	}	
}
function formsj(){
	$("#btn").mouseenter(function(){
		$(this).css("background","#2b8cc5");
	})
	$("#btn").mouseleave(function(){
		$(this).css("background","#00a7ea");
	})
	$(".linkblue").mouseenter(function(){
		$(this).css("color","#2b8cc5");
	})
	$(".linkblue").mouseleave(function(){
		$(this).css("color","#00a7ea");
	})
	$(".yz").mouseenter(function(){
		$(this).addClass("active");
	})
	$(".yz").mouseleave(function(){
		$(this).removeClass("active");
	})
}
function linkgrey(){
	$(".linkAGray").mouseenter(function(){
		$(this).css("color","#2b2b2b");
	})
	$(".linkAGray").mouseleave(function(){
		$(this).css("color","#7f7f7f");
	})
}
function wwk(){
	$(".footer_sinaMblog").mouseenter(function(){
		$(this).css({"color":"#fb5353","border-color":"#fb5353"});
	})
	$(".footer_sinaMblog").mouseleave(function(){
		$(this).css({"color":"#A8A8A8","border-color":"#c9c9c9"});
	})
	$(".footer_weChat").mouseenter(function(){
		$(this).css({"color":"#29cc29","border-color":"#29cc29"});
		$(".wx").css("display","block");
	})
	$(".footer_weChat").mouseleave(function(){
		$(this).css({"color":"#a8a8a8","border-color":"#c9c9c9"});
		$(".wx").css("display","none");
	})
	$(".footer_qzone").mouseenter(function(){
		$(this).css({"color":"#ffc100","border-color":"#ffc100"});
	})
	$(".footer_qzone").mouseleave(function(){
		$(this).css({"color":"#A8A8A8","border-color":"#c9c9c9"});
	})
}
function yqlink(){
	$(".link").find("a").click(function(){
		$(this).css("color","#515151");
	})
	$(".link").find("a").mouseenter(function(){
		$(this).css("color","#000");
	})
	$(".language").mouseenter(function(){
		$(".yuyan").css("display","block");
	})
	$(".language").mouseleave(function(){
		$(".yuyan").css("display","none");
	})
}

