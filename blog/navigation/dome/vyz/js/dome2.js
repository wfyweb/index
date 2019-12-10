      (function(){
        var oLi = document.querySelectorAll('.l-ul-title');
        var oA = document.querySelectorAll('.title-a');
        for( var i=0;i<oA.length;i++){
          oLi[i].index = i;
          oLi[i].onmouseover = function(){
            oA[this.index].style.bottom = '48%';
          };
          oLi[i].onmouseout = function(){
            oA[this.index].style.bottom = '30px';
          };
        }
      })();
      var oBox = document.getElementById('main-box');
      var aImg = document.getElementById('main-banner').getElementsByTagName('li');
      var aInput = document.getElementById('main-btn').getElementsByTagName('span');
      var n = 0;
      var nowTime = 0;
      var time = null;
      aInput[n].className = 'ative';
      aImg[n].style.opacity = 1;
      aImg[n].style.filter = 'alpha(opacity=100)';
      for ( var i=0;i<aInput.length;i++ )
      {
        aInput[i].index=i;
        aInput[i].onclick = function(){
          n=this.index;
          Block();
        };

      }
      function Block(){
        for (var i=0;i<aInput.length;i++ )
          {
            aImg[i].style.opacity = 0;
            aImg[i].style.filter = 'alpha(opacity=0)';
            aInput[i].className = '';
          }
          aInput[n].className = 'ative';
          move( aImg[n],'opacity',100,2 );
      };

      oBox.onmouseenter = function(){
        clearInterval(time);
      };
      oBox.onmouseleave = function(){
        auto();
      };
      auto();
      function auto(){
        time = setInterval(function(){
          n++;
          n%=aInput.length;
          Block();
        },4000)
      };

      // 插件 move淡入淡出
      function move( obj,attr,target,speed ){
        clearInterval(obj.timer);
        var n=0;
        obj.timer=setInterval(function(){
          if( attr =='opacity' ){
            n = Math.round(css( obj,'opacity')*100);
          }else{
            n= parseInt(css( obj,attr ));
          }
          if ( n == target)
          {
            clearInterval(obj.timer);
          }else{
            if ( attr =='opacity' )
            {
              obj.style.opacity = ( n+speed )/100;
              obj.style.filter = 'alpha(opacity='+(n+speed)+')';
            }else{
              obj.style[attr] = n+speed+'px';
            }
          }
        },13);
      };

      function css( obj,attr){
        return obj.currentStyle? obj.currentStyle[attr]:getComputedStyle(obj)[attr];
      };
