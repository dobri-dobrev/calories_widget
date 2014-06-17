
function CaloriesWidget(wrapper, width, height){
	this.wrapper = wrapper;
	wrapper.width(width);
	wrapper.height(height);
}

CaloriesWidget.prototype.render = function(data){
	var parsed_data = this.parseData(data);
	$.plot("#"+this.wrapper.attr("id"), [parsed_data], 
	{
		xaxis: {
				mode: "categories",
				tickLength: 0
			},
		yaxis:  {
				min: 0,
				max: 100
			}
	});
}

//TO DO: data parsing function to be overwritten for whatever format is finally settled
CaloriesWidget.prototype.parseData = function(data){
	var parsed_data = [];
	for(var i = 0; i< data.by_day_data.length; i++){
		var temp_pair = [];
		temp_pair.push(data.by_day_data[i].date.getDate()+ "/" + (data.by_day_data[i].date.getMonth()+1));
		temp_pair.push(data.by_day_data[i].calories*100);
		parsed_data.push(temp_pair);
		
	}
	console.log("borec");
	return parsed_data;
}



