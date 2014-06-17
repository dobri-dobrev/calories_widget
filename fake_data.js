var FAKE_DATA=  {};
FAKE_DATA.by_day_data = [];
var today_date = new Date();
for(var i = 0; i<10; i++){
	var temp_date = new Date();
	temp_date.setDate(today_date.getDate()-i);
	var temp_entry = {};
	temp_entry.date = temp_date;
	temp_entry.calories = Math.random();
	FAKE_DATA.by_day_data.push(temp_entry);
}

