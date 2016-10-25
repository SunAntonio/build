// JavaScript Document
function mood(id){
		var aMid=document.getElementById(id);
		var aBtn=aMid.getElementsByTagName('a');
		var aBox=aMid.getElementsByClassName('clear')[0];
		var aImg=aBox.getElementsByTagName('img');
		var st='';
		var n=0;
		for(var i=0; i<aImg.length; i++){//自增
			//发牌照
			aBtn[i].index=i;
			
			//绑定事件
			aBtn[i].onclick=function(){
				//把所有图标none，把所有按钮上ac 去掉
				for(var j=0; j<aBtn.length; j++){
					aBtn[j].className="";
					aImg[j].style.display="none";
				}
				//让自己加上ac
				this.className="ac";
				//让指定图片显示
				aImg[this.index].style.display="block";
				clearInterval(st);	
			};
			aBtn[i].onmouseout=function(){
				clearInterval(st);
				//调用计时器
				n=this.index;
				tmd();
			};
		}
		function show(n){
			
			for(var j=0; j<aBtn.length; j++){
				aBtn[j].className="";
				aImg[j].style.display="none";
			}
			aBtn[n].className="ac";
			//让指定图片显示
			aImg[n].style.display="block";
			
		}
		
		function tmd(){
			st=setInterval(function(){
				show(n);
				//判断是不是大于3，大于n=0;
				if(n==3){
					n=-1;	
				}
				n++;	
			},1000);
		}
		tmd();
		//----------------------------------------------
		aBox.onmouseover=function(){
			//清除定时器
			clearInterval(st)	
		};
		aBox.onmouseout=function(){
			//调用计时器
			tmd();
		}
		
		
	}
