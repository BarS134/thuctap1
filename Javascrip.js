var index=1;//Trỏ vào slice đàu tiên 
		show(index);
		function next(n){
			show(index+=n);
				function show(n){
			var x= document.getElementsByClassName("img-slide");
			if(n>x.length)//khi quá số slice nó sẽ quay về ảnh đầu tiên 
				index=1;
			if(n<1)
				index=x.length;
			for (var i = 0; i <x.length; i++) {
				x[i].style.display="none"
						x[index-1].style.display="block";
				setInterval(function(){
			next(1);
		},10000);


