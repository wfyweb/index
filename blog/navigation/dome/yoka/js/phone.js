/*phone 动画*/
//jquery
$(function(){//当文档加载完毕后执行的代码
	//alert($('#phoneWrap li').length);
	//mouseover(function(){}) 鼠标滑入
	
	$('#phoneWrap li').hover(function(){
		//$(this) 当前滑入的li
		//find('') 在当前li下面去查找 class名字是 phone
		//然后改变css中的bottom属性的值为0;
		//animate()
		//json {aaa:222,bbb:333}
		//animate({},500,function(){})
		//animate({要改变的css},时间,回调函数)
		//回调函数 动画执行完成只有才执行的函数
		

		$(this).find('.phone').animate({bottom:0},500);
		$(this).find('.phone-bg').animate({opacity:0.2},500);
		$(this).find('.mark').css({'display':'block'});
	
	},function(){//鼠标滑出
		$(this).find('.phone').animate({bottom:'-20px'},500);
		$(this).find('.phone-bg').animate({opacity:1},500);
		$(this).find('.mark').css({'display':'none'});
	
	})


})