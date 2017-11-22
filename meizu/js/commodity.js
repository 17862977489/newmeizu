window.onload=function(){
	$("#bottom").load("bottom.html",function(){
		acolor();
	})
	$("#header").load("top.html",function(){
		navC();
		ul1();
		user();
		if(document.cookie.indexOf("gwc=")!=-1){
			$("#shopcar").find("em").html(getCookie("gwc").total);
		}
	})
	
}
$.ajax({
	type:"get",
	url:"sc.json",
	success : function(res){
		var index=0;
		var str1=`<span class="p-prev disabled p-elem iconfont"><</span>`;
		var page=Math.ceil(res.length/4);
		for(var i=0;i<page;i++){
			if(i==0){
				str1+=`<span class="p-item p-elem current">1</span>`;
			}else{
				str1+=`<span class="p-item p-elem">${i+1}</span>`;			
			}
		}
		str1+=`<span class="p-next p-elem iconfont">></span>`;
		$(".ui-paginate").append(str1)
		show(res,1);
		$(".ui-paginate").delegate(".p-item","click",function(){				
			if($(this).html()!=1){
				$(".p-prev").removeClass("disabled");
			}else{
				$(".p-prev").addClass("disabled");
			}
			if($(this).html()==page){
				$(".p-next").addClass("disabled");
			}else{
				$(".p-next").removeClass("disabled");
			}
			$(this).addClass("current").siblings().removeClass("current")
			show(res,$(this).html());
			for(let i=0;i<page;i++){
				if($(".ui-paginate .p-item").eq(i).attr("class")=="p-item p-elem current"){
					index=$(".p-item").eq(i).html();	
				}
			}
		})		
		$(".ui-paginate").delegate(".p-prev","click",function(){
			index--;
			if(index<=1){
				index=1;
			}
			$(".p-item").eq(index-1).addClass("current").siblings().removeClass("current")
			show(res,index);
		})
		$(".ui-paginate").delegate(".p-next","click",function(){
			index++;
			if(index>=page){
				index=page;
			}
			$(".p-item").eq(index-1).addClass("current").siblings().removeClass("current")
			show(res,index);
		})
	}
})
function show(res,index){
	var str="";
	for (var i=(index-1)*4 ; i < index*4; i++) {
		if( i < res.length ){
			var arr=res[i];
			if(i%4==3){
				str+=`<li class="gl-item mr0">`;
			}else{
				str+=`<li class="gl-item">`;
			}
					str+=`<a href="parameter.html">
								<div class="mod-pic">
              						<img width="220" height="220" class="j-modProduct" src="images/${arr.src}" alt="">
            					</div>
								<h2>${arr.name}</h2>
								<h3 class="red" >${arr.tit}</h3>
								<div class="mod-price">                    
                        			<em>￥</em>
                        			<span class="vm-price">${arr.price}</span>
                        			<span class="vm-start">起</span>                          
                  				</div>
							</a>
						</li>`;
		}
	}
	$(".goods-list-wrap").html(str);
}