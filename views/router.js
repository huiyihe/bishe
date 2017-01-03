$(function(){

	
	var router = new Router({
		container:'#container'
	});
	
	require("./common/contentlist.js");
	router.setDefault("/").init();
});
