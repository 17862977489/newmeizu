function getKey(){
	var str="0123456789QWERTYUIOPASDFGHJKLZXCVBNMmnbvcxzlkjhgfdsaqwertyuiop";
	var key="";
	for(var i=0;i<6;i++){
		key+=str.charAt(getRand(0,61));
	}	
	return key;
}
function getRand(min,max){
	return Math.round( Math.random()*(max-min) + min );
}