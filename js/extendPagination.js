/**
 * Created by Hope on 2014/12/28.
 */

$.fn.extend({
	extendPagination:function (options) {
        var defaults = {
            totalCount: '',//总共的个数
            limit: '5',//显示的页面
            current : 1,//当前的页数
            callback: function () {
                return false;
            }
        };
        
        $.extend(defaults, options || {});
        if (defaults.totalCount == '') {
            //alert('总数不能为空!');
            $(this).empty();
            return false;
        } else if (Number(defaults.totalCount) <= 0) {
            //alert('总数要大于0!');
            $(this).empty();
            return false;
        }
      
        if (defaults.limit == '') {
            defaults.limit = '5';
        } else if (Number(defaults.limit) <= 0)defaults.limit = '5';
        
        var totalCount = Number(defaults.totalCount), 
            limit = Number(defaults.limit), 
            totalPage = Math.ceil(totalCount / limit);
        if (totalPage > 0) {
            var html = [];
            //前进
            html.push('<span class="page_nav_area"><a href="javascript:void(0);" class="btn page_prev" style="display:'+(defaults.current===1?"none":"inline-block")+'"><span class="glyphicon glyphicon-chevron-left"></span></a>');
            //页数
            html.push('<span class="page_num"><label>'+defaults.current+'</label><span>/</span><label>'+totalPage+'</label></span>');
            //后退
            html.push('<a href="javascript:void(0);" class="btn page_next" style="display:'+(defaults.current===totalPage?"none":"inline-block")+'"><span class="glyphicon glyphicon-chevron-right"></span></a></span>');
            //输入框
            html.push('<span class="goto_area"><input type="text"/>');
            //跳转
            html.push('<a class="btn page_go">跳转</a></span>')
            
            $(this).html(html.join(''));
            
            
            var $pageObj = $(this);
            var $preObj = $(this).find('.page_prev');           
            var $nextObj = $(this).find('.page_next');
            var $goObj = $(this).find('.page_go');
            var $navAreaObj = $(this).find('.page_nav_area');
            
           	//后退
            $preObj.click(function(){
            	//如果后退完   当前下标为1，则隐藏
            	
            	defaults.current--;
            	refreshPage(defaults.current)
            	defaults.callback('',defaults.current)
            })
            //前进
            $nextObj.click(function(){
            	//如果前进完，当前下表为最大页数，则隐藏
            	defaults.current++;
            	refreshPage(defaults.current)
            	defaults.callback('',defaults.current)
            })
            
            $goObj.click(function(){
            	//获取input里面的值
            	var $val = $(this).parent().find('input'),val = Number($val.val())
            	
            	if(isNaN(val)){
            		//非数字
            		defaults.callback("数字非法",defaults.current);
            		return false;
            	}else if(val>totalPage||val<1){
            		defaults.callback("超出范围",defaults.current);
            		return false;
            	}else{
					defaults.current = val;
					refreshPage(defaults.current)
					defaults.callback("",defaults.current);
            	}
            })
            
            function refreshPage(current){
            	//更新第一个元素
            	$navAreaObj.find('.page_num>label:first-child').html(current);
				//检查按钮是否需要隐藏
				$nextObj.show(),$preObj.show()
            	if(current===1 || current < 0){
            		$navAreaObj.find('.page_num>label:first-child').html(1);
            		$preObj.hide();
            	}
            		
            	if(current === totalPage || current > totalPage){
            		$navAreaObj.find('.page_num>label:first-child').html(totalPage);
            		$nextObj.hide(); 
            	}
            		       			
            }	

            return ;
			

        }
    }
	
})

//  $.fn.extendPagination = function (options) {
//      var defaults = {
//          totalCount: '',//总共的个数
//          limit: '5',//显示的页面
//          current : 1,//当前的页数
//          callback: function () {
//              return false;
//          }
//      };
//      
//      $.extend(defaults, options || {});
//      if (defaults.totalCount == '') {
//          //alert('总数不能为空!');
//          $(this).empty();
//          return false;
//      } else if (Number(defaults.totalCount) <= 0) {
//          //alert('总数要大于0!');
//          $(this).empty();
//          return false;
//      }
//    
//      if (defaults.limit == '') {
//          defaults.limit = '5';
//      } else if (Number(defaults.limit) <= 0)defaults.limit = '5';
//      
//      var totalCount = Number(defaults.totalCount), 
//          limit = Number(defaults.limit), 
//          totalPage = Math.ceil(totalCount / limit);
//      if (totalPage > 0) {
//          var html = [];
//          //前进
//          html.push('<span class="page_nav_area"><a href="javascript:void(0);" class="btn page_prev" style="display:'+(defaults.current===1?"none":"inline-block")+'"><i class="arrow"></i></a>');
//          //页数
//          html.push('<span class="page_num"><label>'+defaults.current+'</label><span>/</span><label>'+totalPage+'</label></span>');
//          //后退
//          html.push('<a href="javascript:void(0);" class="btn page_next" style="display:'+(defaults.current===totalPage?"none":"inline-block")+'"><i class="arrow"></i></a></span>');
//          //输入框
//          html.push('<span class="goto_area"><input type="text"/>');
//          //跳转
//          html.push('<a class="btn page_go">跳转</a></span>')
//          
//          $(this).html(html.join(''));
//          
//          
//          var $pageObj = $(this);
//          var $preObj = $(this).find('.page_prev');           
//          var $nextObj = $(this).find('.page_next');
//          var $goObj = $(this).find('.page_go');
//          var $navAreaObj = $(this).find('.page_nav_area');
//          
//         	//后退
//          $preObj.click(function(){
//          	//如果后退完   当前下标为1，则隐藏
//          	
//          	defaults.current--;
//          	refreshPage(defaults.current)
//          	defaults.callback('',defaults.current)
//          })
//          //前进
//          $nextObj.click(function(){
//          	//如果前进完，当前下表为最大页数，则隐藏
//          	defaults.current++;
//          	refreshPage(defaults.current)
//          	defaults.callback('',defaults.current)
//          })
//          
//          $goObj.click(function(){
//          	//获取input里面的值
//          	var $val = $(this).parent().find('input'),val = Number($val.val())
//          	
//          	if(isNaN(val)){
//          		//非数字
//          		defaults.callback("数字非法",defaults.current);
//          		return false;
//          	}else if(val>totalPage||val<1){
//          		defaults.callback("超出范围",defaults.current);
//          		return false;
//          	}else{
//					defaults.current = val;
//					refreshPage(defaults.current)
//					defaults.callback("",defaults.current);
//          	}
//          })
//          
//          function refreshPage(current){
//          	//更新第一个元素
//          	$navAreaObj.find('.page_num>label:first-child').html(current);
//				//检查按钮是否需要隐藏
//				$nextObj.show(),$preObj.show()
//          	if(current===1 || current < 0){
//          		$navAreaObj.find('.page_num>label:first-child').html(1);
//          		$preObj.hide();
//          	}
//          		
//          	if(current === totalPage || current > totalPage){
//          		$navAreaObj.find('.page_num>label:first-child').html(totalPage);
//          		$nextObj.hide(); 
//          	}
//          		       			
//          }	
//
//          return ;
//			
//
//      }
//  };

