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
