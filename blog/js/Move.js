function Move(obj,attr,dir,target,endFn){
	dir=parseInt(getStyle(obj,attr))<target?dir:-dir;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var s = parseInt(getStyle(obj,attr))+ dir;
			if(s>target && dir>0 || s<target && dir<0)s=target;
			
		obj.style[attr] = s+'px';
			if (s==target)
			{
				clearInterval(obj.timer);
				//if(endFn)endFn();
				endFn && endFn();
			}
	},13);
};
function getStyle( obj,attr ){
	return obj.currentStyle? obj.currentStyle[attr]: getComputedStyle(obj,false)[attr];
};