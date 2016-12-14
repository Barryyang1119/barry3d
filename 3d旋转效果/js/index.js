$(function(){
	$('body').height($(window).height())
	var box = $('#box');
	var out = $('.out');
	var dynamic = $('#dynamic');
	var x = 0;
	var y = 0;
	box.mousedown(function(ev){
		out.show();
		dynamic.html('');
		 var X = ev.clientX - y;
		 var Y = ev.clientY - x;
		 $(document).mousemove(function(ev){
		 	y = ev.clientY - Y;
		 	x = ev.clientX - X;
		 	box.css({transform:'perspective(2000px) rotateX('+ x +'deg) rotateY('+ y +'deg)'});
		 });
		 $(document).mouseup(function(){
		 	dynamic.html('@keyframes Rotate{0%{transform: perspective(2000px) rotateX('+ x +'deg) rotateY('+ y +'deg);}100%{transform: perspective(2000px) rotateX('+ (x+360) +'deg) rotateY('+ (y+360) +'deg);}}');
		 	$(document).unbind();
		 	out.hide();
		 	box.repleaseCapture&&box.repleaseCapture();

		 });
		 box.setCapture&&box.setCapture();
		 return false;
	})
})