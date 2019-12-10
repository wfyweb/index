	window.onload = function(){
		var canvas = document.getElementById("canvas");
		var context = canvas.getContext("2d");
		var w = canvas.width;
		var h = canvas.height;
		var radius = 3; //球半径
		var padd = 10; //数字之间的间隙
		var u=0.65; //碰撞能量损耗系数
		//Canvas绘制上下文
		var balls = []; //存储彩色的小球
		var currentNums = []; //屏幕显示的8个字符
		var digit =
				[
					[
						[0,0,1,1,1,0,0],
						[0,1,1,0,1,1,0],
						[1,1,0,0,0,1,1],
						[1,1,0,0,0,1,1],
						[1,1,0,0,0,1,1],
						[1,1,0,0,0,1,1],
						[1,1,0,0,0,1,1],
						[1,1,0,0,0,1,1],
						[0,1,1,0,1,1,0],
						[0,0,1,1,1,0,0]
					],//0
					[
						[0,0,0,1,1,0,0],
						[0,1,1,1,1,0,0],
						[0,0,0,1,1,0,0],
						[0,0,0,1,1,0,0],
						[0,0,0,1,1,0,0],
						[0,0,0,1,1,0,0],
						[0,0,0,1,1,0,0],
						[0,0,0,1,1,0,0],
						[0,0,0,1,1,0,0],
						[1,1,1,1,1,1,1]
					],//1
					[
						[0,1,1,1,1,1,0],
						[1,1,0,0,0,1,1],
						[0,0,0,0,0,1,1],
						[0,0,0,0,1,1,0],
						[0,0,0,1,1,0,0],
						[0,0,1,1,0,0,0],
						[0,1,1,0,0,0,0],
						[1,1,0,0,0,0,0],
						[1,1,0,0,0,1,1],
						[1,1,1,1,1,1,1]
					],//2
					[
						[1,1,1,1,1,1,1],
						[0,0,0,0,0,1,1],
						[0,0,0,0,1,1,0],
						[0,0,0,1,1,0,0],
						[0,0,1,1,1,0,0],
						[0,0,0,0,1,1,0],
						[0,0,0,0,0,1,1],
						[0,0,0,0,0,1,1],
						[1,1,0,0,0,1,1],
						[0,1,1,1,1,1,0]
					],//3
					[
						[0,0,0,0,1,1,0],
						[0,0,0,1,1,1,0],
						[0,0,1,1,1,1,0],
						[0,1,1,0,1,1,0],
						[1,1,0,0,1,1,0],
						[1,1,1,1,1,1,1],
						[0,0,0,0,1,1,0],
						[0,0,0,0,1,1,0],
						[0,0,0,0,1,1,0],
						[0,0,0,1,1,1,1]
					],//4
					[
						[1,1,1,1,1,1,1],
						[1,1,0,0,0,0,0],
						[1,1,0,0,0,0,0],
						[1,1,1,1,1,1,0],
						[0,0,0,0,0,1,1],
						[0,0,0,0,0,1,1],
						[0,0,0,0,0,1,1],
						[0,0,0,0,0,1,1],
						[1,1,0,0,0,1,1],
						[0,1,1,1,1,1,0]
					],//5
					[
						[0,0,0,0,1,1,0],
						[0,0,1,1,0,0,0],
						[0,1,1,0,0,0,0],
						[1,1,0,0,0,0,0],
						[1,1,0,1,1,1,0],
						[1,1,0,0,0,1,1],
						[1,1,0,0,0,1,1],
						[1,1,0,0,0,1,1],
						[1,1,0,0,0,1,1],
						[0,1,1,1,1,1,0]
					],//6
					[
						[1,1,1,1,1,1,1],
						[1,1,0,0,0,1,1],
						[0,0,0,0,1,1,0],
						[0,0,0,0,1,1,0],
						[0,0,0,1,1,0,0],
						[0,0,0,1,1,0,0],
						[0,0,1,1,0,0,0],
						[0,0,1,1,0,0,0],
						[0,0,1,1,0,0,0],
						[0,0,1,1,0,0,0]
					],//7
					[
						[0,1,1,1,1,1,0],
						[1,1,0,0,0,1,1],
						[1,1,0,0,0,1,1],
						[1,1,0,0,0,1,1],
						[0,1,1,1,1,1,0],
						[1,1,0,0,0,1,1],
						[1,1,0,0,0,1,1],
						[1,1,0,0,0,1,1],
						[1,1,0,0,0,1,1],
						[0,1,1,1,1,1,0]
					],//8
					[
						[0,1,1,1,1,1,0],
						[1,1,0,0,0,1,1],
						[1,1,0,0,0,1,1],
						[1,1,0,0,0,1,1],
						[0,1,1,1,0,1,1],
						[0,0,0,0,0,1,1],
						[0,0,0,0,0,1,1],
						[0,0,0,0,1,1,0],
						[0,0,0,1,1,0,0],
						[0,1,1,0,0,0,0]
					],//9
					[
						[0,0,0,0],
						[0,0,0,0],
						[0,1,1,0],
						[0,1,1,0],
						[0,0,0,0],
						[0,0,0,0],
						[0,1,1,0],
						[0,1,1,0],
						[0,0,0,0],
						[0,0,0,0]
					]//:
				];

		function drawDatetime(cxt){//绘制时间
			var nums = [];

			context.fillStyle="#6633ff";
			var date = new Date();
			var offsetX = 0, offsetY = 20;
			var hours = date.getHours();
			var num1 = Math.floor(hours/10);//小时第一位数字
			var num2 = hours%10;//小时第一位数字
			nums.push({num: num1});
			nums.push({num: num2});
			nums.push({num: 10}); //冒号
			var minutes = date.getMinutes();
			var num1 = Math.floor(minutes/10);
			var num2 = minutes%10;
			nums.push({num: num1});
			nums.push({num: num2});
			nums.push({num: 10}); //冒号
			var seconds = date.getSeconds();
			var num1 = Math.floor(seconds/10);
			var num2 = seconds%10;
			nums.push({num: num1});
			nums.push({num: num2});
			
			for(var x = 0;x<nums.length;x++){
				nums[x].offsetX = offsetX;
				offsetX = drawNumber(offsetX,offsetY, nums[x].num,cxt);
				//两个数字连一块，应该间隔一些距离
				if(x<nums.length-1){
					if((nums[x].num!=10) &&(nums[x+1].num!=10)){
						offsetX+=padd;
					}
				}
			}

			//说明这是初始化
			if(currentNums.length ==0){
				currentNums = nums;
			}else{
				//进行比较
				for(var i = 0;i<currentNums.length;i++){
					if(currentNums[i].num!=nums[i].num){
						//不一样时，添加彩色小球
						addBalls(nums[i]);
						currentNums[i].num=nums[i].num;
					}
				}
			}
			drawBalls(cxt);
			moveBalls();

			//return date;
		}

		function addBalls (item) {
			var num = item.num;
			var numMatrix = digit[num];
			for(var y = 0;y<numMatrix.length;y++){
				for(var x = 0;x<numMatrix[y].length;x++){
					if(numMatrix[y][x]==1){
						var ball={
							offsetX:item.offsetX+radius+radius*2*x,
							offsetY:30+radius+radius*2*y,
							color:sj_color(),
							g:1.5+Math.random(),

							sx:Math.pow(-1, Math.ceil(Math.random()*10))*4+Math.random(),
							sy:-5
						}
						balls.push(ball);
					}
				}
			}
		}

		function drawBalls(cxt){
			for(var i = 0;i<balls.length;i++){
				cxt.beginPath();
				cxt.fillStyle=balls[i].color;
				cxt.arc(balls[i].offsetX, balls[i].offsetY, radius, 0, 2*Math.PI);
				cxt.fill();
			}
		}

		function moveBalls () {
			var i =0;
			for(var index = 0;index<balls.length;index++){
				var ball = balls[index];
				ball.offsetX += ball.sx;
				ball.offsetY += ball.sy;
				ball.sy+=ball.g;
				if(ball.offsetY > (h-radius)){
					ball.offsetY= h-radius;
					ball.sy=-ball.sy*u;
				}
				if(ball.offsetX>radius&&ball.offsetX<(w-radius)){

					balls[i]=balls[index];
					i++;
				}
			}
			//去除出边界的球
			for(;i<balls.length;i++){
				balls.pop();
			}
		}
		//绘制数字
		function drawNumber(offsetX, offsetY, num, cxt){
			var numMatrix = digit[num];
			for(var y = 0;y<numMatrix.length;y++){
				for(var x = 0;x<numMatrix[y].length;x++){
					if(numMatrix[y][x]==1){
						cxt.beginPath();
						cxt.arc(offsetX+radius+radius*2*x,offsetY+radius+radius*2*y,radius,0,2*Math.PI);
						cxt.fill();
					}
				}
			}
			//cxt.beginPath();
			offsetX += numMatrix[0].length*radius*2;
			return offsetX;
		}


		//记录当前绘制的时刻
		var currentDate = new Date();

		setInterval(function(){
			//清空整个Canvas，重新绘制内容
			context.clearRect(0, 0, context.canvas.width, context.canvas.height);
			drawDatetime(context);
		}, 50)

		function Color(){
			return '#' + (function(h) {
			return new Array(7 - h.length).join("0") + h
			})((Math.random() * 0x1000000 << 0).toString(16))	
		}
		
		function sj_color(){
				var _color=Math.ceil(Math.random()*16777215).toString(16);
				while(_color.length<6){
					_color="0"+_color;
				}
				//console.log(_color);
				return "#"+_color;//返回他的随机颜色
				
		}
		//console.log(sj_color());
	}