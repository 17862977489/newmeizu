window.onload=function(){
	$("#bottom").load("bottom.html",function(){
		acolor();
	})
	$("#header").load("top.html",function(){
		navC();
		ul1();
		user();
	})
	change();
	fdj();
	show();
	scrolltop();
	djsj();
	json("ml6j");
	jrgwc();
	ljgm();
	//点击数量增加
	$(".vm_plus").click(function(){
		var sl=Number($("#J_quantity").val())+1;
		if(sl>=2){
			$(".vm_minus").removeClass("disabled");
		}
		$("#J_quantity").val(sl);
	})
	//点击数量减少
	$(".vm_minus").click(function(){
		var sl=Number($("#J_quantity").val())-1;
		if(sl<=1){
			$(".vm_minus").addClass("disabled");
			$("#J_quantity").val(1);
		}else{
			$("#J_quantity").val(sl);
		}
	})
}
//立即购买和按钮滑入效果
function ljgm(){
	$("#J_btnBuy").click(function(){
		$("#shopcar").find("em").html($("#J_quantity").val());
		$(location).attr("href","shopcar.html");
	})
	$("#J_btnBuy").mouseenter(function(){
		$(this).css("background","#fe7476");
	})
	$("#J_btnBuy").mouseleave(function(){
		$(this).css("background","#f66567");
	})
	$("#J_btnAddCart").mouseenter(function(){
		$(this).css("background","#4dcff6");
	})
	$("#J_btnAddCart").mouseleave(function(){
		$(this).css("background","#00c3f5");
	})
}
//加入购物车
function jrgwc(){
	$("#J_btnAddCart").click(function(){
		var sl;
		sl=$("#shopcar").find("em").html();
		$("#shopcar").find("em").html(Number($("#J_quantity").val())+Number(sl));
		var json={
			"total":$("#shopcar").find("em").html()
		}
		document.cookie = "gwc="+JSON.stringify(json);
		shopcookie();
	})
	$("#shopcar").click(function(){
		$(location).attr("href","shopcar.html");
	})	
}
//收集手机信息
function shopcookie(){
	var sjys,sjrl,sjtc;
		for(let i=0;i<$(".ysfl").find("a").length;i++){
			if($(".ysfl").find("a").eq(i).attr("class")=="vm_sale_img selected"){
				sjys=$(".ysfl").find("a").eq(i).find("span").html();
				break;
			}
		}
		for(let i=0;i<$(".ncrl").find("a").length;i++){
			if($(".ncrl").find("a").eq(i).attr("class")=="selected"){
				sjrl=$(".ncrl").find("a").eq(i).find("span").html();
				break;
			}
		}
		for(let i=0;i<$(".tc").find("a").length;i++){
			if($(".tc").find("a").eq(i).attr("class")=="selected"){
				sjtc=$(".tc").find("a").eq(i).find(".vm_text").html();
				break;
			}
		}
		var arr = [];
		var flag = true;//如果值为真 就像arr中push商品
		var shopcar ={
			"id":sjys+sjrl+sjtc,
			"ys":sjys,
			"rl":sjrl,
			"tc":sjtc,
			"jg":$(".price").find("em").html(),
			"count":Number($("#J_quantity").val())
		}
		var oldCookie = getCookie("shopCar");
		if( oldCookie.length != 0 ){
			arr=oldCookie;
			//再次点击商品时  判断这个商品在原cookie中是否存在  如果存在就将数量++
			for( var i = 0 ; i < arr.length ; i++ ){
				if( shopcar.ys == arr[i].ys && shopcar.rl == arr[i].rl&&shopcar.tc == arr[i].tc){
					arr[i].count++;
					flag = false;
					break;
				}
			}
		}
		
		if( flag ){//如果值为真 就像arr中push商品
			arr.push( shopcar);
		}
		console.log(arr);
		setCookie( "shopCar", JSON.stringify(arr) );
}
function json(obj){
	$.ajax({
		type:"get",
		url:"ml6.json",
		success : function(res){
			var arr=res[obj].ml6;
			var str="";
			var str2="";
			str=`<img src="images/${arr[0].src1}" class="imgBig" style="z-index:4"/>
						<img src="images/${arr[0].src2}" class="imgBig" style="z-index:3"/>
						<img src="images/${arr[0].src3}" class="imgBig" style="z-index:2"/>
						<img src="images/${arr[0].src4}" class="imgBig" style="z-index:1"/>`;
			$(".phoneShow_con").html(str);
			str2=`<li class="current">
							<a href="javascript:;">
								<img width="75" height="75" src="images/${arr[1].src1}">
							</a>
						</li>
						<li class="">
							<a href="javascript:;">
								<img width="75" height="75" src="images/${arr[1].src2}"></a>
						</li>
						<li class="">
							<a href="javascript:;">
								<img width="75" height="75" src="images/${arr[1].src3}">
							</a>
						</li>
						<li class="">
							<a href="javascript:;">
								<img width="75" height="75" src="images/${arr[1].src4}">
							</a>
						</li>`;
			$(".imgUl").html(str2);
		}
	})
}
//改变手机大图
function change(){
	$(".imgUl").delegate("li","click",function(){
		$(".imgBig").eq($(this).index()).fadeIn(1000).siblings().fadeOut(100);
		$(this).addClass("current").siblings().removeClass("current");
	})
}
//滚动条事件
function show(){
	$(window).scroll(function(){
		if($(document).scrollTop()>=250){
			$("#xd").stop().animate({"height":"80px"},100,function(){
				$(".mod_total").css("display","block");
				$(".xd_con").css("display","block");
				$("#J_totalPriceShortcut").html($(".price").find("em").html());
				$("#J_summaryName").html("全网通公开版&nbsp;");
				for(let i=0;i<$(".ysfl").find("a").length;i++){
					if($(".ysfl").find("a").eq(i).attr("class")=="vm_sale_img selected"){
						$("#J_summaryName").append($(".ysfl").find("a").eq(i).find("span").html()+"&nbsp;");
						break;
					}
				}
				for(let i=0;i<$(".ncrl").find("a").length;i++){
					if($(".ncrl").find("a").eq(i).attr("class")=="selected"){
						$("#J_summaryName").append($(".ncrl").find("a").eq(i).find("span").html()+"&nbsp;");
						break;
					}
				}
				for(let i=0;i<$(".tc").find("a").length;i++){
					if($(".tc").find("a").eq(i).attr("class")=="selected"){
						$("#J_summaryName").append($(".tc").find("a").eq(i).find("p").html());
						break;
					}
				}
			});
		}else{
			$("#xd").stop().animate({"height":"0"},100,function(){
				$(".xd_con").css("display","none");
				$(".mod_total").css("display","none");
			});
		}
		if($(document).scrollTop()>=500){
			$("#backtop").stop().animate({"opacity":1},300);
		}else{
			$("#backtop").stop().animate({"opacity":0},300);
		}
		if($(document).scrollTop()>=800){
			$("#ayd").css({"margin-right": "0"});
		}else{
			$("#ayd").css({"margin-right": "-120px"});
		}
		if($(document).scrollTop()>=950){
			$(".detail_ul").appendTo(".xd_con");
			$(".detail_ul").css({"top":"20px","z-index":"101"});
		}else{
			$(".detail_ul").css({"top":"20px","z-index":"99"});
			$(".detail_ul").appendTo(".xd");
		}
	})
}
//手机信息切换
function djsj(){
	for(let i=0;i<$(".ysfl").find("a").length;i++){
		$(".vm_sale_img").eq(i).click(function(){
			$(this).addClass("selected").siblings().removeClass("selected");
			$("#J_quantity").val(1);
			json($(this).attr("fl"));//换颜色
		})
	}
	for(let i=0;i<$(".ncrl").find("a").length;i++){
		$(".ncrl").find("a").eq(i).click(function(){
			$(this).addClass("selected").siblings().removeClass("selected");
			if($(this).find("span").html()=="3GB+32GB"){
				$(".price").find("em").html("899.00");
			}else{
				$(".price").find("em").html("699.00");
			}
			$("#J_quantity").val(1);
			$(".tc").find("a").eq(0).addClass("selected").siblings().removeClass("selected");
		})
	}
	for(let i=0;i<$(".tc").find("a").length;i++){
		$(".tc").find("a").eq(i).click(function(){
			$(this).addClass("selected").siblings().removeClass("selected");
			if($(".ncrl a").eq(0).attr("class")=="selected"&&$(".tc").find("a").eq(0).attr("class")=="selected"){
				$(".price").find("em").html("899.00");
			}else if($(".ncrl a").eq(0).attr("class")=="selected"&&$(".tc").find("a").eq(0).attr("class")!="selected"){
				$(".price").find("em").html("999.00");
			}else if($(".ncrl a").eq(1).attr("class")=="selected"&&$(".tc").find("a").eq(0).attr("class")=="selected"){
				$(".price").find("em").html("699.00");
			}else{
				$(".price").find("em").html("799.00");
			}
			$("#J_quantity").val(1);
		})
	}
}
//放大镜效果
function fdj(){
	$(".phoneShow_con").delegate(".imgBig","mouseenter",function(e){
		for(var i=0;i<$(".imgUl li").length;i++){
			if($(".imgUl li").eq(i).attr("class")=="current"){
				for(var j=0;j<$(".ysfl a").length;j++){
					if($(".ysfl a").eq(j).attr("class")=="vm_sale_img selected"){
						$(".fdimg").attr("src","images/"+$(".ysfl a").eq(j).attr("fl")+"-dt"+(i+1)+".jpg");
						break;
					}
				}	
			}
		}
		$("#fdj").css("display","block");
		var minx=$(".phoneShow_con").offset().left;
		var maxx=$(".phoneShow_con").offset().left+$(".imgBig").width();
		var miny=$(".phoneShow_con").offset().top;
		var maxy=$(".phoneShow_con").offset().top+$(".imgBig").height();
		var bl=$(".fdimg").width()/$(".imgBig").width();
		$(document).bind({"mousemove" : function(e){
				var e=e||event;
				$x=Math.max(minx,Math.min(e.pageX,maxx))-minx;
				$y=Math.max(miny,Math.min(e.pageY,maxy))-miny;
				$(".fdimg").css({"left":-$x*bl+250+"px","top":-$y*bl+250+"px"});
			}
		})	
		
	})
	$(".phoneShow_con").delegate(".imgBig","mouseleave",function(){
		$("#fdj").css("display","none");
	})
}


//回到顶部
function scrolltop(){
	$(".backtop").click(function(){
		$("#backtop").css("opacity","0");
		$("html,body").animate({"scrollTop":0},1000);
	})
}
