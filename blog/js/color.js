	$(document).ready(function(){
		var Time = new Date();
		$("#content .html").find("li").hover(function(){
				$(this).find("span").eq(0).stop(true,true).css({"color":Color()});
				$(this).find("span").eq(1).stop(true,true).css({"background":Color()}).animate({left:0},500);
			},function(){
				$(this).find("span").eq(1).stop(true,true).css({"background":Color()}).animate({left:'100%'},500);
		})
		
		//随机色
		function Color(){
			var r =Math.floor(Math.random() * 256);
			var g =Math.floor(Math.random() * 256);
			var b =Math.floor(Math.random() * 256);
			return "rgb("+r+","+g+","+b+")";
		}
		
	
		resize_canvas();
		function resize_canvas(){
            var canvas = document.getElementById("canvas");
            if (canvas.width  < window.innerWidth)
            {
                canvas.width  = window.innerWidth;
            }
 
            if (canvas.height < window.innerHeight)
            {
                canvas.height = window.innerHeight;
            }
        }
		document.onresize = function(){
			resize_canvas();
		}
	});