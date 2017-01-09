$(function(){
	
	
	var router = new Router({
		container:'#container'
	});
	
	require("./common/contentlist.js");
	require("./more_activity/more_activity.js");
	require("./activity_detail/activity_detail.js");
	require("./personal/personal.js");
	require("./editor/editor.js");
	router.setDefault("/").init();
});
