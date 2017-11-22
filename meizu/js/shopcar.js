window.onload=function(){
	if(getCookie("userInfo").uname&&getCookie("userInfo").ztz!=1){
		$(".dl").css("display","none");
		$(".zc").css("display","none");
		$(".yh").css("display","block");
		$(".tc").css("display","block");
		$(".yh").html(getCookie("userInfo").uname+"的购物车");
		$("#wdl").css("display","none");
	}
	$("#bottom").load("bottom.html",function(){
		acolor();
	})
	user();
	//未登录且购物车为空时提示用户登录
	if(document.cookie.indexOf("shopCar=")!=-1){
		$(".shopcar_con").css("display","block");
		$(".cal").css("display","block");
		$(".cart-empty").css("display","none");
		tjsp();
	}else if(document.cookie.indexOf("shopCar=")==-1&&getCookie("shopCar").length==0&&(document.cookie.indexOf("userInfo=")!=-1)&&getCookie("userInfo").ztz!=1){
		$(".login").css("display","table");
		$(".unlogin").css("display","none");
		$(".shopcar_con").css("display","none");
		$(".cal").css("display","none");
	}else if(document.cookie.indexOf("shopCar=")==-1&&getCookie("shopCar").length==0&&(document.cookie.indexOf("userInfo=")==-1||getCookie("userInfo").ztz==1)){
		$(".unlogin").css("display","table");
		$(".login").css("display","none");
		$(".shopcar_con").css("display","none");
		$(".cal").css("display","none");
	}
	del();
	if(getCookie("shopCar").length==0&&(document.cookie.indexOf("userInfo=")==-1||getCookie("userInfo").ztz==1)){
		$(".unlogin").css("display","table");
		$(".login").css("display","none");
		$(".shopcar_con").css("display","none");
		$(".cal").css("display","none");
	}else if(getCookie("shopCar").length==0&&(document.cookie.indexOf("userInfo=")!=-1)&&getCookie("userInfo").ztz!=1){
		$(".login").css("display","table");
		$(".unlogin").css("display","none");
		$(".shopcar_con").css("display","none");
		$(".cal").css("display","none");
	}
	wdlck();	
	sl();
	xzsp();
}
//跳转到登陆页面
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
		location.reload();
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
						<input type="checkbox" class="sjxz" checked="checked" style="display: none;"/>
						<a href="details.html">
							<img src="images/${shopcar.ys}.png" alt="" class="sjt"/>
						</a></td>
					<td class="cart-col-name">
						<p style="display:none;">${shopcar.id}</p>	
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
								<div class="mz-adder-num"><input type="text" class="mz-adder-input" disabled="disabled" value=${shopcar.count}></div>
								<div class="mz-adder-add">+</div>
							</div>
						</div>
					</td>
					<td class="cart-col-total" zj="${xj}">￥${xj}.00</td>
					<td class="cart-col-ctrl">
						<img src="images/remove.png" alt="" class="del"/>
					</td>
				</tr>`;
		
	}
	$(".cart-product").append(str);
}
//加减数量	
function sl(){
	$(".mz-adder-reduce").click(function(){
		//确定操作的商品编号
		var id = $(this).parent().parent().parent().parent().find(".cart-col-name p").html();
		var arr=getCookie("shopCar");
		var arr1=getCookie("gwc");
		var sign = $(".mz-adder-reduce").html();
		var shopnum = $(this).parent().find(".mz-adder-input").val();
		if( shopnum == 1 && sign == "-" ){ //如果商品数量为1  并且是 - 不在执行后面代码 
			return;
		}
		for( var i = 0 ; i < arr.length ; i++ ){
			if( id == arr[i].id){
				arr[i].count--;
				arr1.total=arr1.total-1;
				//重新改写cookie数据
				setCookie("shopCar",JSON.stringify(arr));
				setCookie("gwc",JSON.stringify(arr1));
				//操作页面
				$(this).parent().find(".mz-adder-input").val( arr[i].count );
				$(this).parent().parent().parent().next().html("￥"+arr[i].count*arr[i].jg+".00");				
				$(".count").find("i").html( arr1.total );
				//结算
				jiesuan();
				location.reload();
				break;
			}
		}		
	})
	$(".mz-adder-add").click(function(){
		//确定操作的商品编号
		var id = $(this).parent().parent().parent().parent().find(".cart-col-name p").html();
		var arr=getCookie("shopCar");
		var arr1=getCookie("gwc");
		var sign = $(".mz-adder-add").html();
		var shopnum = $(this).parent().find(".mz-adder-input").val();
		for( var i = 0 ; i < arr.length ; i++ ){
			if( id == arr[i].id){
				arr[i].count++;
				console.log(arr[i].jg)
 				arr1.total=Number(arr1.total)+1;
				//重新改写cookie数据
				setCookie("shopCar",JSON.stringify(arr));
				setCookie("gwc",JSON.stringify(arr1));
				//操作页面
				$(this).parent().find(".mz-adder-input").val( arr[i].count );
				$(this).parent().parent().parent().next().html("￥"+arr[i].count*arr[i].jg+".00");				
				//结算
				jiesuan();
				location.reload();
				break;
			}
		}		
	})
}
//选择商品
function xzsp(){
	$(".calL .count").find("i").html(getCookie("gwc").total)
	//全选
	var flag=true;
	var flag1=true;
	$(".selectAll").click(function(){
		if(flag){
			$(".selectAll").attr("src","images/kjzmm.png");
			$(".selectAll").next().removeProp("checked");
			$(".sjxz").removeProp("checked");
			$(".flxzimg").attr("src","images/kjzmm.png");
			$(".xz").attr("src","images/kjzmm.png");
			flag=false;
			jiesuan();
		}else{
			$(".selectAll").attr("src","images/jzmm.png");
			$(".selectAll").next().prop("checked","checked");
			$(".sjxz").prop("checked","checked");
			$(".flxzimg").attr("src","images/jzmm.png");
			$(".xz").attr("src","images/jzmm.png");
			flag=true;
			jiesuan();
		}
	})
	$(".flxzimg").click(function(){
		if(flag1){
			$(".selectAll").attr("src","images/kjzmm.png");
			$(".selectAll").next().removeProp("checked");
			$(".sjxz").removeProp("checked");
			$(".flxzimg").attr("src","images/kjzmm.png");
			$(".xz").attr("src","images/kjzmm.png");
			flag=false;
			flag1=false;
			jiesuan();
		}else{
			$(".selectAll").attr("src","images/jzmm.png");
			$(".selectAll").next().prop("checked","checked");
			$(".sjxz").prop("checked","checked");
			$(".flxzimg").attr("src","images/jzmm.png");
			$(".xz").attr("src","images/jzmm.png");
			flag=true;
			flag1=true;
			jiesuan();
		}
	})
	var flag2=true;
	var flag3=false;
	$(".xz").click(function(){
		if($(this).attr("src")=="images/kjzmm.png"){
			$(this).attr("src","images/jzmm.png");
			$(this).next().prop("checked","checked");
			flag=false;
			flag1=true;
			jiesuan();
		}else{
			$(".selectAll").attr("src","images/kjzmm.png");
			$(this).attr("src","images/kjzmm.png");
			$(this).next().removeProp("checked");
			flag=false;
			flag1=true;
			jiesuan();
		}
		for(var i=0;i<$(".sjxz").length;i++){
			if(!$(".sjxz").eq(i).prop("checked")){
				flag2=false;
				break;
			}
			flag2=true;
		}
		for(var i=0;i<$(".sjxz").length;i++){
			if($(".sjxz").eq(i).prop("checked")){
				flag3=true;
				break;
			}
			flag3=false;
		}
		if(flag2){
			$(".selectAll").attr("src","images/jzmm.png");
			flag=false;
		}
		if(!flag3){
			$(".flxzimg").attr("src","images/kjzmm.png");
			flag1=true;
		}else{
			$(".flxzimg").attr("src","images/jzmm.png");
			flag1=false;
		}
	})
	jiesuan();
}
//结算
function jiesuan(){
	var proCount = 0;
	var proMoney = 0;
	$(".sjxz:checked").each(function(){
		proCount += Number($(this).parent().parent().find(".mz-adder-input").val());
		proMoney += Number($(this).parent().parent().find(".cart-col-total").attr("zj"));
	})
	$(".count").find("em").html( proCount );
	$(".price").find("strong").html( "￥"+proMoney+".00" );
}
//删除
function del(){
	$(".del").click(function(){
		var arr=getCookie("shopCar");
		var id=$(this).parent().parent().find(".cart-col-name p").html();
		for( var i = 0 ; i < arr.length ; i++ ){
			if( id == arr[i].id){
				if( confirm("确定要删除么？") ){
					arr.splice(i,1);
					setCookie("shopCar",JSON.stringify(arr));
					$(this).parent().parent().remove();
				}
				location.reload();
				break;
			}
		}
	})
}
