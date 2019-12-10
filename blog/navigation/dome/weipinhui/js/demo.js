$(function (){
	$('#header .border,#header .h-logo .shop').bind('mouseenter',function (){
		$(this).addClass('JS-class');
		$(this).mouseleave(function (){
			$(this).removeClass('JS-class');
		});
	});
	JS_showAdHide('#header .border,#header .h-logo .shop,.nav-show','#header [class|="list"],.tool-2,.nav-active');

	$(window).scroll(function (){
		var t = $('#body-main').offset().top - $(this).scrollTop() < 0;
		var a = $('#f1').offset().top - $(this).scrollTop() < 0;
		if(t){
			$('#header .h-b-nav').addClass('fixed');
		}else{
			$('#header .h-b-nav').removeClass('fixed');
		}
		if(a){
			$('#sidebar').addClass('fixed');
		}else{
			$('#sidebar').removeClass('fixed');
		}
	});

	$('#sidebar li').click(function (){
		$(this).children('a').addClass('aaa')
		$(this).siblings().children('a').removeClass('aaa');
		var index =$(this).index();
		switch (index)
		{
		case 0:$(window).scrollTop($('#f1').offset().top);
			break;
		case 1:$(window).scrollTop($('#f2').offset().top);
			break;
		case 2:$(window).scrollTop($('#f3').offset().top);
			break;
		case 3:$(window).scrollTop($('#f4').offset().top);
			break;
		case 4:$(window).scrollTop($('#f5').offset().top);
			break;
		case 5:$(window).scrollTop($('#f6').offset().top);
			break;
		}
	});
});

function JS_showAdHide(parent,child){
	$(parent).mouseenter(function (){
		$(this).children(child).show();
		$(this).mouseleave(function (){
			$(this).children(child).hide();
		});
	});
}