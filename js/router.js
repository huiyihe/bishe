$(function(){
	
	
	var router = new Router({
		container:'#container'
	});
	
	router.push({
	url : "/contentlist",
	render : function() {
		return $("#tpl_contentlist").html();
	},
	bind(){
		$('.carousel').carousel({
		  interval: 5000
		})		
	}
});

	router.push({
	url : "/more_activity",
	render : function() {
		return $("#tpl_more_activity").html();
	},
	bind(){
		$("#Pagination").extendPagination({
			totalCount: 20,//一共有多少条数据           
	        limit: '5',//每页多少条数据
	        current : 1,
	        callback: function (err,current) {
	    		
	    	}
		})		
	}
});
	router.push({
	url : "/activity_detail",
	render : function() {
		return $("#tpl_activity_detail").html();
	},
	bind(){
				
	}
});
	router.push({
	url : "/personal",
	render : function() {
		return $("#tpl_personal").html();
	},
	bind(){
				
	}
});
	router.push({
	url : "/editor",
	render : function() {
		return $("#tpl_editor").html();
	},
	bind(){
		$('.dropify').dropify();	
	}
});
	router.setDefault("/").init();
});
