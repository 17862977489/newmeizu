window.onload=function(){
	formsj();
	linkgrey();
	wwk();
	yqlink();
	yz();
	dlqh();
	dl();
	var flag=true;
	var flag1=true;
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
	$(".mzchkbox").click(function(){
		if(flag1){
			$(".checkboxPic").css("background","url(images/jzmm.png) no-repeat center");
			$("#remember").attr("checked","true");
			flag1=false;
		}else{
			$(".checkboxPic").css("background","url(images/kjzmm.png) no-repeat center");
			$("#remember").removeAttr("checked");
			flag1=true;
		}
	})
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
function yz(){
	$(".yz").click(function(){
		$(".circle").css("display","none");
		$(".yzcg").css("display","block");
		$(this).css({"border-color":"#26c267","background":"#eefff5"});
		$(".tip_content").html("验证成功");
		$(".tip_content").css({"color":"#26c267"});
		$(".geetest_logo").css("background-position-y","-212px");
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

function dlqh(){
	$(".yzmdl").click(function(){
		$("#yzmdl").css("display","block");
		$("#zhdl").css("display","none");
		$(".yzmdl").addClass("current").siblings().removeClass("current");
		$("#getKey").html(getKey());
		$("#getKey").click(function(){
			$("#getKey").html(getKey());
		})
		$(".ipt-phone").focus(function(){
			$(".sjh2").css("border-color","#32a5e7");
		})
		$(".ipt-phone").blur(function(){
			$(".sjh2").css("border-color","#DADADA");
		})
		$(".inp-focus").focus(function(){
			$(".normalInput").css("border-color","#32a5e7");
		})
		$(".inp-focus").blur(function(){
			$(".normalInput").css("border-color","#DADADA");
		})
	})
	$(".zhdl").click(function(){
		$("#zhdl").css("display","block");
		$("#yzmdl").css("display","none");
		$(".zhdl").addClass("current").siblings().removeClass("current");
	})
}

function dl(){
	var tusername,tpassword;
	if( document.cookie ){
		var str = document.cookie;
		var arr = str.split("; ");
		for( var i = 0 ; i < arr.length ; i++ ){
			var item = arr[i].split("=");
			if( item[0] == "userInfo" ){
				uInfo = JSON.parse( item[1] ) ;
			}
		}
		tusername = uInfo.uname;
		tpassword = uInfo.upwd;
	}
	var flagName=null;
	$("#dlbtn").click(function(){
		var str=$("#account").val();
		var str2=$("#password").val();
		if($("#remember").attr("checked")&&$(".tip_content").html()=="验证成功"){
			var json = {
				"uname": getCookie("userInfo").uname ,
				"upwd": getCookie("userInfo").upwd
			}
			document.cookie = "userInfo="+JSON.stringify(json);
		}
		if($("#phone").val()==tusername){
			var json = {
				"uname": getCookie("userInfo").uname ,
				"upwd": getCookie("userInfo").upwd
			}
			document.cookie = "userInfo="+JSON.stringify(json);
		}
		if(str==tusername&&str2==tpassword&&$(".tip_content").html()=="验证成功"){
			flagName=true;
		}else if($("#phone").val()==tusername&&$("#kapkey").val()==$("#getKey").html()){
			flagName=true;
		}else{
			flagName=false;
		}
		if(flagName){
			$(location).attr("href","index.html");
			flagName=false;
		}
	})
}


