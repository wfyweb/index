/*window.onload=function(){}文件加载完毕执行{}中的代码*/
window.onload=function(){
	/*var 声明 oSearch变量 =赋值
		document.getElementById('search')
		去文档中，获取元素通过ID方法 ('ID名')
		ByTagName 通过标签名
	*/
	
	var oL = document.getElementById('search');
	var oForm = document.getElementById('formWrap');
	var oSBtn = document.getElementById('search-btn');
	var oA = oL.getElementsByTagName('a');
	var onoff = true;/*开关 true真 false假*/
	
	
		/*下面改oA[0] class名称*/
		oA[0].onclick= function(){
			/*下面的意思如果onoff等于1就执行{}里面代码 否则
			else后面的{}
			
			*/
			//if判断
			if(onoff){
				oA[0].className = 'hoversearch';
				oForm.style.display='block';
				//onoff = false;
			}else{
				
				oA[0].className = 'search pad-R5 dis-B';
				oForm.style.display='none'; 
				//onoff = true;
			}
			onoff = !onoff;//!onoff
		}

		//part1 轮播
			//下面获取图片
		var oImg = document.getElementById('banner-img');
		var aListImg = oImg.getElementsByTagName('img');
			//下面获取按钮
		var oBtnBox = document.getElementById('banner-btn');
		var aBtnList = oBtnBox.getElementsByTagName('li');

			//获取左右切换按钮
		var oPrev = document.getElementById('prev');
		var oNext = document.getElementById('next');

		var oBanBox = document.getElementById('m-banner');

		
		var num=0;
		var oldBtn = aBtnList[num];
		var oldImg = aListImg[num];
		var timer;
		
	
		//alert(oListImg.length); .length个数
		//for循环 (这里写条件) {这里写要执行的代码}
			//for(起始值;限制条件;步幅)
		var i=0;
		for(;i<9;i++){//i最终是9，但是不会走里面的代码
			//i++;
			//下面的意思：给9个li都绑定一个事件函数
			//onclick点击
			//onmouseover
			aBtnList[i].index = i;/*自定义属性：自定义索引*/
			aBtnList[i].onclick=function(){
				//this谁触发当前函数，this就指谁
				//aBtnList[3]
				//alert(this.index);
				num = this.index;
				run();	
			}
		}
		//alert(i);
		//run();调用run函数
		function run(){
			oldBtn.className='fl-L hov-cur';
			aBtnList[num].className='show fl-L hov-cur';//1
			oldBtn = aBtnList[num]; //对oldBtn进行更新 aBtnList[1]
			//图片
			oldImg.className = 'pos-A dis-N';
			aListImg[num].className='pos-A';
			oldImg = aListImg[num];
		}
		//左切换
		oPrev.onclick = function(){
			
			num--;//每次减一
			if(num<0){
				num=8;
			}
			run();//-
		}
		//右切换
		oNext.onclick = function(){
			num++;//每次减一
			if(num>8){
				num=0;
			}
			run();//-
		}
		
		//自动轮播
		autoplay();
		function autoplay(){
			timer = setInterval(
				function(){
					num++;
					if(num>8){
						num=0;
					}
					run();
			},1000);
		}
		
		//setInterval(fn,ms)定时器 1000ms =1s

		//滑入oBanBox
		oBanBox.onmouseover = function(){
		
			clearInterval(timer);//清除定时器
		}
		//滑出oBanBox
		oBanBox.onmouseout = function(){
			autoplay();//再次调用轮播
		
		}
}
