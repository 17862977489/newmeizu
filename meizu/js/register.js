window.onload=function(){
	formsj();
	linkgrey();
	wwk();
	yqlink();
	yz();
	btndj();
	inputdj();	
}
function formsj(){
	$(".title").find("a").mouseenter(function(){
		$(this).css("color","#008ed1");
	})
	$(".title").find("a").mouseleave(function(){
		$(this).css("color","#00a7ea");
	})
	$("#phone").focus(function(){
		$(".sjh").css("border","1px solid #32a5e7");
	})
	$("#phone").blur(function(){
		$(".sjh").css("border","1px solid #dadada");
	})
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
	$(".language").mouseenter(function(){
		$(".yuyan").css("display","block");
	})
	$(".language").mouseleave(function(){
		$(".yuyan").css("display","none");
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
function inputdj(){
	$(".phone").click(function(){
		$(".sjh").css("border-color","#32a5e7");
	})
}
function btndj(){
	var flag=true;
	var pwdflag=null;
	$("#btn").click(function(){
		var reg=/^1[3578]\d{9}$/;
		var yzcg=$(".tip_content").html();
		var sjh=$("#phone").val();
		if(yzcg=="验证成功"&&reg.test(sjh)&&flag){
			flag=false;
			$(".txt-box").css("display","block");
			$(".normalInput").css("display","block");
			$("#getKey").html(getKey());
			$("#getKey").click(function(){
				$("#getKey").html(getKey());
			})
			$(".sjh").css("display","none");
			$(".yz").css("display","none");
			$(".rememberField").css("display","none");
			$("#btn").attr("value","下一步");
			$("#phoneNum").append(sjh);
			$(".title").css("margin-bottom","74px");
			$(".inp-focus").focus(function(){
				$(".normalInput").css("border-color","#32a5e7");
			})
			$(".inp-focus").blur(function(){
				$(".normalInput").css("border-color","#DADADA");
			})
			
		}
		if($("#btn").val()=="下一步"){
			if($("#kapkey").val()==$("#getKey").html()){
				$("#btn").val("提交");
				$(".txt-box").html("密码长度为8-16位,至少包含字母、数字和符号中的两种类型，且不可与账号相同");
				$(".normalInput").css("display","none");
				$(".pwdInput").css("display","block");
				$("#pwd").focus(function(){
					$(".pwdInput").css("border-color","#32a5e7");
				})
				$("#pwd").blur(function(){
					$(".pwdInput").css("border-color","#DADADA");
				})
			}
		}
		if($("#btn").val()=="提交"){
			var mima=/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,16}$/;
			if(mima.test($("#pwd").val())){
				var json = {
					"uname": $("#phone").val() ,
					"upwd": $("#pwd").val(),
				}
				document.cookie = "userInfo="+JSON.stringify(json);
				$(location).attr("href","index.html");
			}
		}
	})
}

