RadarChart ={
	defaultConfig:{
		width:600,
		height:600,
		radius:200,

	},
	chart:function (options, num){
		// 将配置的属性和默认属性合并
		// 先复制 原来的配置
	 	var cfg = Object.create(RadarChart.defaultConfig);
		 d3.entries(options || {}).forEach(function(option){
		 	// 生成新的 配置
		 		cfg[option.key] = option.value;
		 });
		function radar(){
			
		 	var n = num;
		 	var x0 = 200, y0 = 200;
		 	// 点数据准备完成
		 	var pointsData = [];
		 	for (var i = 0 ; i <n ;i ++){
		 		var point = [];
		 		var delta = i * (2 * Math.PI/n);
		 		var r = cfg.radius;
		 		var newX = x0 + r*Math.cos(Math.PI/2 + delta);
		 		var newY = y0 - r*Math.sin(Math.PI/2+ delta);
		 		point.push(newX);
		 		point.push(newY);
		 		pointsData.push(point);
		 	}
		 /*	pointsData.push([2*x0,y0]);*/
		 	console.log(pointsData);
		 	// 利用d3画折现
		 	var svg = d3.select(".container")
		 				.append("svg")
		 				.attr("width",600)
		 				.attr("height",600);
		 	var linePath = d3.svg.line();

		 	svg.append("path")
		 		.attr("d",linePath(pointsData))
		 		.attr("stroke","black")
		 		.attr("stroke-width","3px")
		 		.attr("fill","none");


		}
		return radar;
	}
}