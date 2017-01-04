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