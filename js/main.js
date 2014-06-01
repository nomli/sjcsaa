(function($){
	({
		plugins:function(){
			$('.carousel').carousel({
				interval:3000
			});
            
            function getsrc(){
                var thumbs = $('[data-type="gallery"]'),
                    src = [];    
                thumbs.each(function(i,ele){
                    var self = $(ele),
                        img = self.data("src");
                        src.push(img);  
                });
                return src;
            };           
			$(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function () {
				var $this   = $(this),
                    index = $this.index(),
                    imgs = getsrc(),
					h4title = $(".store-photos").find("h4.modal-title"),
					dataTitle = $this.attr('data-title'),
                    imgTarget = $(".imgContainer").find("img"),
					items = $(".modal-item");
                    
                    imgTarget.attr({
                        "src":imgs[index],
                        "data-index":index
                    })
                    
					h4title.text(dataTitle);
			});
            !function(){
                var controls = $(".controls")
                    i = 0,
                    imgs = getsrc(),
                    imgTarget = $(".imgContainer").find("img"),
					h4title = $(".store-photos").find("h4.modal-title");
                    
                controls.on("click",function(e){
                    var self = $(this),
                        arrayIndex = imgTarget.attr("data-index"),
                        index = parseInt(arrayIndex,10);
                    imgTarget.attr({
                        "src":function(){
                            if(self.hasClass("right") && index <= imgs.length-1){
                                if(index == imgs.length-1){
                                    index = -1;
                                }
                                return imgs[index+1]
                            }else{
                                if(index == 0){
                                    index = imgs.length;
                                }
                                return imgs[index-1]
                            }
                            if(imgs.length-1 < index  && self.hasClass("right")){
                                imgs[index+1]
                            }else{
                                imgs[index-1]
                            }
                        },
                        "data-index":function(){
                            if(self.hasClass("right") && index <= imgs.length-1){
                                if(index == imgs.length-1){
                                    index = -1;
                                }
                                return index+1
                            }else{
                                if(index == 0){
                                    index = imgs.length;
                                }
                                return index-1
                            }
                        }
                    })
					h4title.text($('[data-toggle="modal"]').eq(imgTarget.attr("data-index")).attr("data-title"));		
                    e.preventDefault();
                });
            }();
			
		},
		/*gmap:function(){
			//API KEY http://maps.googleapis.com/maps/api/js?key=AIzaSyDY0kkJiTPVd2U7aTOAwhc9ySH6oHxOIYM&sensor=false
			function initialize() {
			   var mapOptions = {
					   zoom: 16,
					   center: new google.maps.LatLng(14.423789, 121.029784),  
					   mapTypeId: google.maps.MapTypeId.ROADMAP
				   };
			 
			   var map = new google.maps.Map(document.getElementById('gmap'),mapOptions);					  
			   var marker = new google.maps.Marker({
							   map: map,
							   draggable: false,
							   position: new google.maps.LatLng(14.423789, 121.029784)
				   });
			}						
			google.maps.event.addDomListener(window, 'resize', initialize);
			google.maps.event.addDomListener(window, 'load', initialize);
		},*/
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
