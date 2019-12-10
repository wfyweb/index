window.onload = function(){
        var oList = document.getElementById('platforms');
        var oImg = oList.getElementsByClassName('pla-house');
        var n = -3;
        var timer = null;
        oList.innerHTML += oList.innerHTML;
        oList.style.width = oImg.length*12+oImg.length*oImg[0].offsetWidth+'px';
        oList.onmouseenter = function(){
          clearInterval(timer);
        };
        oList.onmouseleave = function(){
          auto();
        };
        auto();
        function auto(){
          timer = setInterval(function(){
            if ( oList.offsetLeft>=0 )
            {
              oList.style.left = -oList.offsetWidth/2+'px';
            }else if( oList.offsetLeft<=-oList.offsetWidth/2 ){
              oList.style.left = 0;
            }
            oList.style.left = oList.offsetLeft+n+'px';
          },30)
        };
      };
