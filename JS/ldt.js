// JavaScript Document
window.onload=function(){
	var current_index=0;
	var button_li=document.getElementById("button").getElementsByTagName("li");
	var pic_div=document.getElementById("header_pic").getElementsByTagName("div");
	var timer=window.setInterval(autoChange,4000);
	function autoChange(){
		++current_index;
		for(var i=0;i<pic_div.length;i++){
			if(i==current_index){
				button_li[i].className="current";
				pic_div[i].className="current";
				}
			else{
				button_li[i].className="but";
				pic_div[i].className="pic";
				}
			if(current_index==pic_div.length){
				current_index=0;
				i=-1;
				}
			}
		for(var i=0;i<button_li.length;i++){
			button_li[i].onmouseover=function(){
				if(timer){
					clearInterval(timer);
					}
				for(var j=0;j<pic_div.length;j++){
					if(button_li[j] == this){
						current_index=j;
						button_li[j].className="current";
						pic_div[j].className="current";
						}
					else{
						button_li[j].className="but";
						pic_div[j].className="pic";
						}
					}
				}
			button_li[i].onmouseout=function(){
				timer=setInterval(autoChange,4000);
				}
			
			}
		}
	}