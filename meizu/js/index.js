//轮播图
var pa = document.getElementsByClassName("pagination")[0];
var sp = pa.getElementsByTagName("span");
var byd = document.getElementById("banner_yd");
var time = null;
var index = 0;
sp[0].className = "visible";
timer = setInterval(autoPlay, 6000);

function autoPlay() {
	index++;
	startMove(byd, {
		"left": -index * 1920 - 339
	}, function() {
		if(index == 5 || byd.offsetLeft <= -9939) {
			byd.style.left = "-339px";
			index = 0;
		}
	});
	for(var i = 0; i < sp.length; i++) {
		sp[i].className = "";
	}
	if(index >= 5) {
		index = 0;
	}
	sp[index].className = "visible";
}
for(let i=0;i<sp.length;i++){
	sp[i].onclick=function(){
		clearInterval(timer);
		for(var j = 0; j < sp.length; j++) {
			sp[j].className = "";
		}
		startMove(byd, {"left": -i * 1920 - 339});
		sp[i].className="visible";
	}
	sp[i].onmouseleave=function(){
		clearInterval(timer);
		index=i;
		timer = setInterval(autoPlay, 6000);
	}
}

$.ajax({
	type:"get",
	url:"else.json",
	success : function(res){
		var str = "";
		var str1="";
		var str2="";
		var arr=res.con1;
		var arr1=res.product;
		var arr2=res.bbs;
		for( var i = 0 ; i < arr.length ; i++ ){
    		str += `<div class="con1_con${i+1}">
						<a href="javascript:void(0);">
							<img src="images/${arr[i].src}" alt="" />
							<h4>${arr[i].name}</h4>
							<span>${arr[i].info}</span>
						</a>
					</div>`;
    	}
		$("#ptwrapper").prepend(str);
		for( var j = 0 ; j < arr1.length ; j++ ){
			if(j%4==3){
				str1+=`<li>
							<a href="#" id="mr0">`;
			}else{
				str1+=`<li>
							<a href="#">`;
			}
			str1+=`			<div class="phone_Img">
								<img class="zm" src="images/${arr1[j].src1}" alt="" />
								<img class="bm" src="images/${arr1[j].src2}" alt="" />
							</div>
							<div class="phone_info">
								<span>${arr1[j].name}</span>
								<span>${arr1[j].info}</span>
								<em>￥${arr1[j].price}</em>
							</div>
						</a>
					</li>`;
		}
		$(".product_conUl").append(str1);
		for(var k=0;k<arr2.length;k++){
			if(k%3==0){
				str2+=`<li>
						<a href="#" class="mr0">`;
			}else{
				str2+=`<li>
						<a href="#">`;
			}
			str2+=`	<img src="images/${arr2[k].src}" alt="" />
							<div class="info">
								<img src="images/${arr2[k].head}" alt="" />
								<em>${arr2[k].name}</em>
								<i class="iconfont icon-yanjing"></i><span class="sz">${arr2[k].watch}</span>
								<i class="iconfont icon-dazhongicon04"></i><span class="sz">${arr2[k].comment}</span>
								<span class="tit">${arr2[k].title}</span>
							</div>
						</a>
					</li>`;
		}
		$(".bbs_con").append(str2);
   }
})

$.ajax({
	type:"get",
	url:"phone.json",
	success : function(res){
		var str = "";
		var str1 = "";
		var arr=res.statics.list;
		var arr1=res.find.list;
		for( var i = 0 ; i < arr.length ; i++ ){
			if(i==3){
				str+=`<li>
						<a href="javascript:void(0);" class="mr0">`
			}else{
				str+=`<li>
						<a href="javascript:void(0);">`
			}
			str+=`<div class="phone_img">
								<img class="bm" src="images/${arr[i].src1}" alt="" />
								<img class="zm" src="images/${arr[i].src2}" alt="" />
							</div>
							<div class="phone_info">
								<span>${arr[i].name}</span>
								<span>${arr[i].info}</span>
								<em>￥${arr[i].price} 起</em>
							</div>
						</a>
					</li>`;
		}
		for(var i=0;i<arr1.length;i++){
			str1+=`<div class="top${i+1}">
						<a href="#">
							<div class="phone_info">
								<div>
									<img src="images/${arr1[i][0].src}" alt="" />
								</div>
								<span>${arr1[i][0].name}</span>
								<span>${arr1[i][0].info}</span>
								<em>￥${arr1[i][0].price}起</em>
							</div>
						</a>
						<a href="#">
							<div class="phone_info">
								<div>
									<img src="images/${arr1[i][1].src}" alt="" />
								</div>
								<span>${arr1[i][1].name}</span>
								<span>${arr1[i][1].info}</span>
								<em>￥${arr1[i][1].price} 起</em>
							</div>
						</a>
						<a href="#">
							<div class="phone_info">
								<div>
									<img src="images/${arr1[i][2].src}" alt="" />
								</div>
								<span>${arr1[i][2].name}</span>
								<span>${arr1[i][2].info}</span>
								<em>￥${arr1[i][1].price}起</em>
							</div>
						</a>
						<a href="#" class="mr0">
							<div class="phone_info">
								<div>
									<img src="images/${arr1[i][3].src}" alt="" />
								</div>
								<span>${arr1[i][3].name}</span>
								<span>${arr1[i][3].info}</span>
								<em>￥${arr1[i][3].price}起</em>
							</div>
						</a>
					</div>`;
		}
		$("#staphone").append(str);
		$(".find_top_con").append(str1);
	}
})

window.onload=function(){
	var index=0;
	navC();
	ul1();
	ul2();
	ul3();
	phoneMove();
	showbtn();
	btn();
	showpro();
	acolor();
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
function ul1(){
	$(".mzsj").find(".blu").mouseenter(function(){
		$(this).css("color","#31a5e7");
		$("#logo").find("i").css("color","#31a5e7");
		$(".tit").css("background","rgba(255,255,255,1)");
		$(this).parent().siblings().find(".blu").css("color","#515151");
		$(".morepro1").css("display","block");
		$(".morepro1").animate({"height":"150px"},300);
		$(".morepro1").find(".ul1").css("display","block");
	})
	$(".mzsj").mouseleave(function(){
		$(this).find(".blu").css("color","#fff");
		$(this).siblings().find(".blu").css("color","#fff");
		$(".morepro1").css("display","none");
		$("#logo").find("i").css("color","#fff");
		$(".tit").css("background","rgba(255,255,255,0)");
		$(".morepro1").animate({"height":"0"},300);
		$(".morepro1").find(".ul1").css("display","none");
	})
}
function ul2(){
	$(".mlsj").find(".blu").mouseenter(function(){
		$(this).css("color","#31a5e7");
		$("#logo").find("i").css("color","#31a5e7");
		$(".tit").css("background","rgba(255,255,255,1)");
		$(this).parent().siblings().find(".blu").css("color","#515151");
		$(".morepro2").css("display","block");
		$(".morepro2").animate({"height":"150px"},300);
		$(".morepro2").find(".ul2").css("display","block");
	})
	$(".mlsj").mouseleave(function(){
		$(this).find(".blu").css("color","#fff");
		$(this).siblings().find(".blu").css("color","#fff");
		$(".morepro2").css("display","none");
		$("#logo").find("i").css("color","#fff");
		$(".tit").css("background","rgba(255,255,255,0)");
		$(".morepro2").animate({"height":"0"},300);
		$(".morepro2").find(".ul2").css("display","none");
	})
}
function ul3(){
	$(".znpj").find(".blu").mouseenter(function(){
		$(this).css("color","#31a5e7");
		$("#logo").find("i").css("color","#31a5e7");
		$(".tit").css("background","rgba(255,255,255,1)");
		$(this).parent().siblings().find(".blu").css("color","#515151");
		$(".morepro3").css("display","block");
		$(".morepro3").animate({"height":"150px"},300);
		$(".morepro3").find(".ul3").css("display","block");
	})
	$(".znpj").mouseleave(function(){
		$(this).find(".blu").css("color","#fff");
		$(this).siblings().find(".blu").css("color","#fff");
		$(".morepro3").css("display","none");
		$("#logo").find("i").css("color","#fff");
		$(".tit").css("background","rgba(255,255,255,0)");
		$(".morepro3").animate({"height":"0"},300);
		$(".morepro3").find(".ul3").css("display","none");
	})
}
function navC(){
	for(var i=0;i<$("#nav").find("li").length;i++){
		$("#nav").find("li").eq(i).mouseenter(function(){
			$(this).find(".blu").css("color","#31a5e7");
		})
		$("#nav").find("li").eq(i).mouseleave(function(){
			$(this).find(".blu").css("color","#fff");
		})
	}
}
function phoneMove(){
	$(".phone_img").mouseenter(function(){
		$(this).find("img").eq(0).stop().animate({"left":"-50px"},500);
		$(this).find("img").eq(1).stop().animate({"left":"50px"},500);
	})
	$(".phone_img").mouseleave(function(){
		$(this).find("img").stop().animate({"left":"0"},500);
	})
}

function showbtn(){
	$(".find_phone_con_top").mouseenter(function(){
		$(".find_phone_btnL").css("display","block");
		$(".find_phone_btnR").css("display","block");
	})
	$(".find_phone_con_top").mouseleave(function(){
		$(".find_phone_btnL").css("display","none");
		$(".find_phone_btnR").css("display","none");
	})
}
function btn(){
	$(".find_phone_btnL").click(function(){
		index--;			
		if(index<=0){
			index=0;
		}
		move(index);
	})
	$(".find_phone_btnR").click(function(){
		index++;			
		if(index>=2){
			index=2;
		}
		move(index);
	})
}

function move(index){
	$(".find_top_con").animate({"left":-1242*index},300);
	$(".find_phone_con_bottom").find("span").eq(index).addClass("show").siblings().removeClass("show");
}

function showpro(){
	for(var i=0;i<$(".product_conUl li").length;i++){
		$(".product_conUl li").eq(i).find(".phone_Img").mouseenter(function(){
			$(this).find(".zm").animate({"opacity":"0"},100);
			$(this).find(".bm").animate({"opacity":"1"},100);
		})
		$(".product_conUl li").eq(i).find(".phone_Img").mouseleave(function(){
			$(this).find(".bm").animate({"opacity":"0"},100);
			$(this).find(".zm").animate({"opacity":"1"},100);
		})
	}
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
