var aUl = document.getElementById("head_list");
		var A = aUl.getElementsByTagName('li');
		for (var i=0;i<A.length;i++ )
		{
			A[i].onclick = function(){
				for (var i=0;i<A.length;i++ ){
					A[i].className='';
				}
				this.className='alist';
			}
		}