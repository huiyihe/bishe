router.push({
	url : "/editor",
	render : function() {
		return $("#tpl_editor").html();
	},
	bind(){
		$('.dropify').dropify();	
	}
});