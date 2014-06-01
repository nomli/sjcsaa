(function($){
	({
		plugins:function(){
			
		},
		init:function(){
            var self = this;
            $.each(self,function(i,ele){
                if(i !== "init"){
                    setTimeout(ele,0);
                }
            });
        }
	}).init();
})(jQuery);