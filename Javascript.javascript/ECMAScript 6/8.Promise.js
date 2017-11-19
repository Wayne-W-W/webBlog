Promise



Promise.all()
//实例
{
	//所有图片加载完再添加到页面
	function loadImg(scr){
		return new Promise(( resolve , reject ) => {
			let img = document.createElement('img');
			img.src = src;
			img.onloading = function (){
				resolve(img);
			};
			img.onerror = function(err){
				reject(err);
			}
		})
	};
	function showImgs(Imgs){
		imgs.forEach(function(img){
			document.body.appendChild(img);
		})
	};
	Promise.all([
		loadImg('www.xxxx.com/xxx.png')
	],[
		loadImg('www.xxxx.com/xxx.png')
	],[
		loadImg('www.xxxx.com/xxx.png')
	],).then(showImgs);
}

Promise.race()
{
	//有一个图片加载完就添加到页面
	function loadImg(scr){
		return new Promise(( resolve , reject ) => {
			let img = document.createElement('img');
			img.src = src;
			img.onloading = function (){
				resolve(img);
			};
			img.onerror = function(err){
				reject(err);
			}
		})
	};
	function showImgs(img){
		let p =document.createElement('p');
		p.appendChild(img)
		document.body.appendChild(p);
	};
	Promise.race([
		loadImg('www.xxxx.com/xxx.png')
	],[
		loadImg('www.xxxx.com/xxx.png')
	],[
		loadImg('www.xxxx.com/xxx.png')
	],).then(showImgs);
}