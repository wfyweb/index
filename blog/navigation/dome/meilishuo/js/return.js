var oR = document.getElementById('return');
			window.onscroll = function(){
				var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
				//oR.style.display = scrollTop?'block':'none';
				if ( scrollTop )
				{
					oR.style.display = 'block';
				}else{
					oR.style.display = 'none';
				}
			};

			oR.onclick = function(){
				var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

				//Ê±¼ä°æ
				var startTime = new Date();
				var timer = setInterval(function(){
					var newTime = new Date();
					var porp = newTime-startTime/500;
					var s = scrollTop-scrollTop*porp;
					if ( porp>=1 )
					{
						porp=1;
						clearInterval(timer);
					}
					document.body.scrollTop = s;
					document.documentElement.scrollTop = s;
				},13)
			};