			
			
	var oBox = document.getElementById('Carousel'); //大盒子
	var list = document.getElementById('Ca_list'); // ul
	
	var aBtn =document.getElementById('Ca_btn').getElementsByTagName('a');	  // 左右按钮
	var aLi = document.getElementById('Ca_list').getElementsByTagName('li');	  // 图片
	var aSpan = document.getElementById('Ca_tab').getElementsByTagName('span'); // 小圆点
	
	//小圆点
	var num = 0;
	var conut = 0;
	var nowTime = 0;
	
	aSpan[num].className = 'on';
			for (var i=0;i<aSpan.length;i++ )
			{
				aSpan[i].index = i;
				aSpan[i].onclick = function(){
					for (var i=0;i<aSpan.length;i++ )
					{
						aSpan[i].className = '';
					}
					num = this.index;
					conut = this.index;
					this.className = 'on';
					move( list , {left:-1440*this.index} , 1000 , 'bounceOut' );
				};
			};
	//根据索引值来判断左右按钮
	for ( var i=0;i<aBtn.length;i++ )
	{
		aBtn[i].xyz = i;
		aBtn[i].onclick = function(){
			if ( new Date() - nowTime > 1200 )
			{
				nowTime = new Date();
				if( this.xyz ){ //右按钮
					play();
				}else{ // 左按钮
					if ( num == 0 )
					{	
						// 让最后一li移到第一的位置上
						aLi[aSpan-1].style.position = 'relative';
						aLi[aSpan-1].style.left = -1440*aSpan.length + 'px';
						num = aSpan.length-1;
						
					}else{
						num--;
					};

					// 小圆点
					for (var i=0;i<aSpan.length;i++ ) // 小圆点
					{
						aSpan[i].className = '';
					};
					aSpan[num].className = 'on';
					conut--;
					move( list , {left:-1440*conut} , 1000 , 'bounceOut' , function(){
						if ( num == aSpan.length-1 )
						{
							list.style.left = -1440 *(aSpan.length-1) + 'px';
							aLi[aSpan-1].style.position = 'static';
							conut = aSpan.length-1;
						}
					} );
				};
			}
		};
	};
	
	var timer = setInterval(play,3500);
			
	oBox.onmouseover = function(){
		clearInterval(timer);
	};
	oBox.onmouseout = function(){
		timer = setInterval(play,3500);
	};


	function play(){
		if ( num == aSpan.length-1  ) // 先判断
		{
			// 把第一个li放到最后的位置上
			aLi[0].style.position = 'relative';
			aLi[0].style.left = 1440*aSpan.length + 'px';
			num=0;
		}else{
			num++;
		};
		for (var i=0;i<aSpan.length;i++ ) // 小圆点
		{
			aSpan[i].className = '';
		};
		aSpan[num].className = 'on';

		conut ++; // conut 来控制 list运动
		move( list , {left:-1440*conut} , 1000 , 'bounceOut' , function(){
			if( num == 0)
			{
				aLi[0].style.position = 'static';
				list.style.left = 0;  // 让ul 的left =0
				conut = 0;
			}
		} );
	};

function move( obj , json , times , M , fn ){
	var n={};
	times = times || 400;
	M = M || 'linear';
	for (var attr in json )
	{
		n[attr]=0;
		if ( attr == 'opacity' )
		{	
			n[attr] = Math.round(css( obj,attr )*100);
		}else{
			n[attr] = parseInt(css( obj,attr ));
		}
	};
	var startTime = new Date().getTime(); //在运动之前获取当前时间
	
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var onOff = true;

		var cTime = new Date().getTime(); // 运动时的时间
		var t =times- Math.max(0,(startTime-cTime+times)); //0~2000
		for ( var attr in json )
		{
			var target = json[attr];
			var s = Tween[M]( t, n[attr] , json[attr] - n[attr] , times );
			
			if ( attr == 'opacity' )
			{
				obj.style.opacity = ( s )/100;
				obj.style.filter = 'alpha(opacity='+s+')';
			}else{
				obj.style[attr] = s +'px';
			};
		};
		if ( t == times)
		{
			clearInterval( obj.timer );
			fn && fn.call(obj);
		}
	},13);
};

// T 是当前时间 可变的
// B startVal 初始值 不可变 固定值
// C 变化量 固定值 endVal[key] - b 结束-开始 一共要移动的距离 固定值
// D time运动持续的时间 就是传进来的总时间 固定值 
var Tween = {
	linear: function (t, b, c, d){  //匀速
		return c*t/d + b;
	},
	easeIn: function(t, b, c, d){  //加速曲线
		return c*(t/=d)*t + b;
	},
	easeOut: function(t, b, c, d){  //减速曲线
		return -c *(t/=d)*(t-2) + b;
	},
	easeBoth: function(t, b, c, d){  //加速减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t + b;
		}
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInStrong: function(t, b, c, d){  //加加速曲线
		return c*(t/=d)*t*t*t + b;
	},
	easeOutStrong: function(t, b, c, d){  //减减速曲线
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t*t*t + b;
		}
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
		if (t === 0) { 
			return b; 
		}
		if ( (t /= d) == 1 ) {
			return b+c; 
		}
		if (!p) {
			p=d*0.3; 
		}
		if (!a || a < Math.abs(c)) {
			a = c; 
			var s = p/4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	elasticOut: function(t, b, c, d, a, p){    //正弦增强曲线（弹动渐出）
		if (t === 0) {
			return b;
		}
		if ( (t /= d) == 1 ) {
			return b+c;
		}
		if (!p) {
			p=d*0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},    
	elasticBoth: function(t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d/2) == 2 ) {
			return b+c;
		}
		if (!p) {
			p = d*(0.3*1.5);
		}
		if ( !a || a < Math.abs(c) ) {
			a = c; 
			var s = p/4;
		}
		else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		if (t < 1) {
			return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
					Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		}
		return a*Math.pow(2,-10*(t-=1)) * 
				Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
	},
	backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
		if (typeof s == 'undefined') {
		   s = 1.70158;
		}
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	backOut: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 3.70158;  //回缩的距离
		}
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	}, 
	backBoth: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 1.70158; 
		}
		if ((t /= d/2 ) < 1) {
			return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		}
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
		return c - Tween['bounceOut'](d-t, 0, c, d) + b;
	},       
	bounceOut: function(t, b, c, d){  //弹簧
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		}
		return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	},      
	bounceBoth: function(t, b, c, d){
		if (t < d/2) {
			return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
		}
		return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
	}
};

function css( obj,attr ){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
};
