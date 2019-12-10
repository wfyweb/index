/*index*/
//生成60个点
(function(){
	var $ul = $('#wrap .rou2 ul');
	var $css = $('#css');
	var str = '';
	var strStyle = '';
	for(var i=0;i<60;i++){
		str += '<li></li>';
		strStyle += '#wrap .rou2 ul li:nth-child(' + (i+1) +'){transform:rotate(' + (i*6) +'deg);}'
	}
	$ul.html(str);
	$css.html(strStyle);
	var $li = $('#wrap .rou2 ul li');
	for(var i=0;i<12;i++){
		$li.eq(5*i).addClass('max');
	}

})();
(function(){
	auto();
	setInterval(auto,1000);
	function auto(){
		var oDate = new Date();
		var iSec = oDate.getSeconds();
		var iMin = oDate.getMinutes()+iSec/60;
		var iHour = oDate.getHours()+iMin/60;
		var h = 'rotate(' + iHour*30 + 'deg)';
		var s = 'rotate(' + Math.floor(iMin)*6 + 'deg)';
		$('#hub .time').css('transform',h);
		$('#hub .minute').css('transform',s);
		$('#wrap .rou1 .rou2 ul li').eq(iSec).addClass('no').siblings().removeClass('no');
		console.log(s);
	}
})();