RadarChart ={
	defaultConfig:{
		width:600,
		height:600,
		radius:200,
		level:1
	},
	chart:function (options){
		// 将配置的属性和默认属性合并
		// 先复制 原来的配置
	 	var cfg = Object.create(RadarChart.defaultConfig);
		 d3.entries(options || {}).forEach(function(option){
		 	// 生成新的 配置
		 		cfg[option.key] = option.value;
		 });
		var svg = d3.select(".container")
 				.append("svg")
 				.attr("width",600)
 				.attr("height",600);
		function radar(){
				drawLevel(svg,200);
		
		}
		function drawLevel(target,radius){
			console.log(target);
			var n = cfg.polygon;
		 	var x0 = 200, y0 = 200;
			for (var i =  0 ;i <n;i++){
				var x1 = x0+ cfg.radius*Math.cos(i*Math.PI*2/n);
				var y1 = y0- cfg.radius*Math.sin(i*Math.PI*2/n);
				var x2 = x0+ cfg.radius*Math.cos((i+1)*Math.PI*2/n);
				var y2 = y0- cfg.radius*Math.sin((i+1)*Math.PI*2/n);
				target.append("line")
					.attr("x1",x1)
					.attr("y1",y1)
					.attr("x2",x2)
					.attr("y2",y2)
					.attr("stroke","black")
					.attr("stroke-width","3px")
					.attr("fill","none");
				console.log(x1+","+y1+","+x2+","+y2);

			}
		 	
		 	
		}
		
		return radar;
	}
}