window.onload=function(){
	if(getCookie("userInfo").uname&&getCookie("userInfo").ztz!=1){
		$(".dl").css("display","none");
		$(".zc").css("display","none");
		$(".yh").css("display","block");
		$(".tc").css("display","block");
		$(".yh").html(getCookie("userInfo").uname+"的购物车");
		$("#wdl").css("display","none");
	}
	//未登录且购物车为空时提示用户登录
	console.log(document.cookie.indexOf("shopCar=")==-1&&document.cookie.indexOf("userInfo=")!=-1)
	if(document.cookie.indexOf("shopCar=")!=-1){
		$(".shopcar_con").css("display","block");
		$(".cal").css("display","block");
		$(".cart-empty").css("display","none");
	}else if(document.cookie.indexOf("shopCar=")==-1&&document.cookie.indexOf("userInfo=")!=-1){
		$(".login").css("display","table");
		$(".unlogin").css("display","none");
		$(".shopcar_con").css("display","none");
		$(".cal").css("display","none");
	}else if(document.cookie.indexOf("shopCar=")==-1&&(document.cookie.indexOf("userInfo=")==-1||getCookie("userInfo").ztz==1)){
		$(".unlogin").css("display","table");
		$(".login").css("display","none");
		$(".shopcar_con").css("display","none");
		$(".cal").css("display","none");
	}
	acolor();
	wdlck();
	user();
	tjsp();
}
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
//未登录提示
function wdlck(){
	$(".wdl_con").find("a").click(function(){
		$(location).attr("href","login.html");
	})
}
//用户登录和退出
function user(){
	$(".topR .dl").click(function(){
		$(location).attr("href","login.html");
	})
	$(".topR .zc").click(function(){
		$(location).attr("href","register.html");
	})
	$(".topR  .tc").click(function(){
		var json = {
			"uname": getCookie("userInfo").uname ,
			"upwd": getCookie("userInfo").upwd,
			"ztz":1
		}
		document.cookie = "userInfo="+JSON.stringify(json);
		$(".dl").css("display","block");
		$(".zc").css("display","block");
		$(".yh").css("display","none");
		$(".tc").css("display","none");
	})
}
//添加商品	
function tjsp(){
	var arr=getCookie("shopCar");
	var str="";
	for( var i = 0; i < arr.length ; i++ ){
		shopcar = arr[i];
		var xj=Number(shopcar.jg)*shopcar.count;
		str += `<tr class="sj">
					<td class="sj1">
						<img src="images/jzmm.png" alt="" class="xz"/>
						<input type="checkbox" class="sjxz" style="display: none;"/>
						<a href="details.html">
							<img src="images/shopcarml6j.png" alt="" class="sjt"/>
						</a></td>
					<td class="cart-col-name">
						<a href="details.html">
							<p>魅蓝6</p>
							<span>全网通公开版 ${shopcar.ys} ${shopcar.rl}</span>
						</a>
					</td>
					<td class="cart-col-price">￥${shopcar.jg}</td>
					<td class="cart-col-number">
						<div class="cart-product-number-adder">
						   	<div class="mz-adder">
								<div class="mz-adder-reduce">-</div>
								<div class="mz-adder-num"><input type="text" class="mz-adder-input" value=${shopcar.count}></div>
								<div class="mz-adder-add">+</div>
							</div>
						</div>
					</td>
					<td class="cart-col-total">￥${xj}.00</td>
					<td class="cart-col-ctrl">
						<img src="images/remove.png" alt="" class="del"/>
					</td>
				</tr>`;
		
	}
	$(".cart-product").append(str);
}
