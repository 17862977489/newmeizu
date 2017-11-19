window.onload=function(){
	navC();
	ul1();
	acolor();
	user();
	change();
	fdj();
	show();
	scrolltop();
	djsj();
	json("ml6j");
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
function change(){
	$(".imgUl").delegate("li","click",function(){
		$(".imgBig").eq($(this).index()).fadeIn(1000).siblings().fadeOut(100);
		$(this).addClass("current").siblings().removeClass("current");
	})
}
function show(){
	$(window).scroll(function(){
		if($(document).scrollTop()>=250){
			$("#xd").stop().animate({"height":"80px"},100,function(){
				$(".mod_total").css("display","block");
			});
		}else{
			$("#xd").stop().animate({"height":"0"},100,function(){
				$(".mod_total").css("display","none");
			});
		}
		if($(document).scrollTop()>=500){
			$("#backtop").stop().animate({"opacity":1},300);
		}else{
			$("#backtop").stop().animate({"opacity":0},300);
		}
		if($(document).scrollTop()>=950){
			$(".detail_ul").appendTo("#xd");
			$(".detail_ul").css({"top":"20px","z-index":"101"});
		}else{
			$(".detail_ul").css({"top":"20px","z-index":"99"});
			$(".detail_ul").appendTo(".xd");
		}
	})
}
function djsj(){
	for(let i=0;i<$(".ysfl").find("a").length;i++){
		$(".vm_sale_img").eq(i).click(function(){
			$(this).addClass("selected").siblings().removeClass("selected");
			json($(this).attr("fl"));
		})
	}
	for(let i=0;i<$(".ncrl").find("a").length;i++){
		$(".ncrl").find("a").eq(i).click(function(){
			$(this).addClass("selected").siblings().removeClass("selected");
		})
	}
	for(let i=0;i<$(".tc").find("a").length;i++){
		$(".tc").find("a").eq(i).click(function(){
			$(this).addClass("selected").siblings().removeClass("selected");
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
function user(){
	$("#denglu").mouseenter(function(){
		$("#user").css("display","block");
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
function scrolltop(){
	$(".backtop").click(function(){
		$("#backtop").css("opacity","0");
		$("html,body").animate({"scrollTop":0},1000);
	})
}
