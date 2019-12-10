        var Music = document.querySelector('.music-Bg');
        var music = document.querySelector('.music-bg');
        var audio = document.querySelector('#music-audio');
        var next = document.querySelector('.next');
        var page = document.querySelector('#page-pic');
        var nextPic = document.querySelector('.next-pic');
        var good = document.querySelector('.good');
        var firstP = document.querySelector('.first-p');
        var lastP = document.querySelector('.last-p');
        var li = document.querySelectorAll('li');
        var pic = document.querySelector('#last-pic');
        var index = 0;
        (function(){
             Music.addEventListener('click',
              function(){
                Music.classList.toggle('music-spread');
                var isPLay = music.classList.toggle('music-bg-auto');
                isPLay?audio.play():audio.pause();
            });
        })();
        (function(){
            next.addEventListener('touchend',
              function(){
                index++;
                console.log(index);
                if(index>=li.length-1){
                    nextPic.style.display = 'none';
                    firstP.className = 'firstMove';
                    lastP.className = 'lastMove';
                    pic.src = "images/10.jpg";
                    return;
                };
                page.style.transform = 'translateY(-'+index+'00%)';
            })
        })()
