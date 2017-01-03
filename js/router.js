$(function(){

	
	var router = new Router({
		container:'#container'
	});
	
	router.push({
	url : "/contentlist",
	render : function() {
		return $("#tpl_contentlist").html();
	}
});
	router.setDefault("/").init();
});
