window.onload=function(){
	//要是cookie中有记住密码
	if(getCookie("userInfo1").jzname){
		$("#account").val(getCookie("userInfo1").jzname)
		$("#password").val(getCookie("userInfo1").jzpwd);
		$(".checkboxPic").css("background","url(images/jzmm.png) center center no-repeat");
		$("#remember").attr("checked","checked");
	}
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
	//二维码
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
//表单事件
function formsj(){
	//按钮
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
	//验证码
	$(".yz").mouseenter(function(){
		$(this).addClass("active");
	})
	$(".yz").mouseleave(function(){
		$(this).removeClass("active");
	})
}
//移入事件
function linkgrey(){
	$(".linkAGray").mouseenter(function(){
		$(this).css("color","#2b2b2b");
	})
	$(".linkAGray").mouseleave(function(){
		$(this).css("color","#7f7f7f");
	})
}
//验证码点击事件
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
//微博微信空间
function wwk(){
	//微博
	$(".footer_sinaMblog").mouseenter(function(){
		$(this).css({"color":"#fb5353","border-color":"#fb5353"});
	})
	$(".footer_sinaMblog").mouseleave(function(){
		$(this).css({"color":"#A8A8A8","border-color":"#c9c9c9"});
	})
	//微信
	$(".footer_weChat").mouseenter(function(){
		$(this).css({"color":"#29cc29","border-color":"#29cc29"});
		$(".wx").css("display","block");
	})
	$(".footer_weChat").mouseleave(function(){
		$(this).css({"color":"#a8a8a8","border-color":"#c9c9c9"});
		$(".wx").css("display","none");
	})
	//空间
	$(".footer_qzone").mouseenter(function(){
		$(this).css({"color":"#ffc100","border-color":"#ffc100"});
	})
	$(".footer_qzone").mouseleave(function(){
		$(this).css({"color":"#A8A8A8","border-color":"#c9c9c9"});
	})
}
//友情链接
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
//登陆切换
function dlqh(){
	//验证码登陆
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
	//账号登陆
	$(".zhdl").click(function(){
		$("#zhdl").css("display","block");
		$("#yzmdl").css("display","none");
		$(".zhdl").addClass("current").siblings().removeClass("current");
	})
}
//登陆
function dl(){
	var tusername,tpassword;
	console.log(getCookie("userInfo"));
	if(getCookie("userInfo")){
		var arr = getCookie("userInfo");
		tusername = arr.uname;
		tpassword = arr.upwd;
	}else{
		alert("请先注册");
		$(location).attr("href","register.html");
	}
	var flagName=null;
	$("#dlbtn").click(function(){
		var str=$("#account").val();
		var str2=$("#password").val();
		if($("#remember").attr("checked")){
			var json = {
				"jzname": getCookie("userInfo").uname ,
				"jzpwd": getCookie("userInfo").upwd
			}
			document.cookie = "userInfo1="+JSON.stringify(json);
		}
		//判断是否验证了
		if($(".tip_content").html()=="验证成功"){
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


