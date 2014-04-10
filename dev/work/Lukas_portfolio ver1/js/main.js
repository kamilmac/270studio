$(document).ready(function() {

//-------------------------------------------------------------------------------------------- 

	$('#ext_btn').click(function() {
		if ($('.exterior').is(':visible'))
		{
			$('.exterior').hide();	
				TweenMax.to('#ext_btn', 0.2, {
				textShadow:"3px 3px 3px rgba(0, 0, 0, 0.3)",
				color:"white"
			});
		}
		else
		{
			$('.exterior').show();
				TweenMax.to('#ext_btn', 0.2, {
				textShadow:"0px 0px 0px black",
				color:"none"
			});
		}
	});
	
	
	$('#int_btn').click(function() {
		if ($('.interior').is(':visible'))
		{
			$('.interior').hide();
				TweenMax.to('#int_btn', 0.2, {
				textShadow:"3px 3px 3px rgba(0, 0, 0, 0.3)",
				color:"white"
			});
		}
		else
		{
			$('.interior').show();
				TweenMax.to('#int_btn', 0.2, {
				textShadow:"0px 0px 0px black",
				color:"none"
			});
		}
	});
	
 
 	$('#logo_btn').click(function() {
		if ($('.logo').is(':visible'))
		{
			$('.logo').hide();
				TweenMax.to('#logo_btn', 0.2, {
				textShadow:"3px 3px 3px rgba(0, 0, 0, 0.3)",
				color:"white"
			});			
		}
		else
		{
			$('.logo').show();
				TweenMax.to('#logo_btn', 0.2, {
				textShadow:"0px 0px 0px black",
				color:"none"
			});
		}
	});
 
//-------------------------------------------------------------------------------------------- 
	
	var thumbnail = function(link,id){	
			init = function(){	
				switch (true){
					case (link.search('ext') > 0):var cls = 'exterior';break;
					case (link.search('int') > 0):var cls = 'interior';break;
					case (link.search('logo') > 0):var cls = 'logo';break;
				}
				$div = $('<div>',{id: id, class: cls}).appendTo("#thumb_wrapper");
				$('<img>',{src: link}).appendTo($div);			
			}();			
				
			$(document.getElementById(id)).hover(
				function() {
				animate_on(this);
				presentation_field.show(get_objclass(this));
				},	
				function() {
				animate_off(this);
				presentation_field.hide(get_objclass(this));
				}
			);			
		
			$(document.getElementById(id)).click(function() {
			presentation_field.execute(link);
			});

			animate_on = function(obj){
				TweenLite.to(obj, 0.3, {borderBottomWidth: 15, ease:"Power2.easeOut"});
				//$(obj).stop().animate({borderBottomWidth:"10px"}, 150,"swing");
			};
			
			animate_off = function(obj){
				TweenLite.to(obj, 0.6, {borderBottomWidth: 0, ease:"Power1.easeIn"});
				//$(obj).stop().animate({borderBottomWidth:"0px"}, 600,"swing");
			};
			
			get_objclass = function(obj){
				return($(obj).attr("class"));
			};
	};		
		
//-------------------------------------------------------------------------------------------- 		
	
	var	presentation_field = {
		show: function(objclass){
			switch (objclass){
				case ('exterior'):$("#img_large").css('borderBottomColor','#7bd8d8');
				TweenLite.to("#img_large", 0.3, {borderBottomWidth: 30, ease:"Power2.easeOut"});break;
				case ('interior'):$("#img_large").css('borderBottomColor','#fff39b');
				TweenLite.to("#img_large", 0.3, {borderBottomWidth: 30, ease:"Power2.easeOut"});break;
				case ('logo'):$("#img_large").css('borderBottomColor','#abeab3');
				TweenLite.to("#img_large", 0.3, {borderBottomWidth: 30, ease:"Power2.easeOut"});break;
			}
		},
		hide: function(objclass){
			switch (objclass){
				case ('exterior'):
				TweenLite.to("#img_large", 0.6, {borderBottomWidth: 0, ease:"Power1.easeIn"});break;
				case ('interior'):
				TweenLite.to("#img_large", 0.6, {borderBottomWidth: 0, ease:"Power1.easeIn"});break;
				case ('logo'):
				TweenLite.to("#img_large", 0.6, {borderBottomWidth: 0, ease:"Power1.easeIn"});break;
			}
		},
		execute: function(link){
			alert(link+'_do_something');
		}
	};

//-------------------------------------------------------------------------------------------- 
	
var thumblist = ["ext.png", "ext.png", "int.png", "int.png", "logo.png", "ext.png", "int.png", "ext.png", "ext.png", "int.png", "logo.png", "int.png", "logo.png", "ext.png", "int.png", "ext.png", "int.png", "ext.png", "int.png", "int.png", "logo.png", "ext.png", "int.png", "ext.png", "ext.png", "int.png", "logo.png", "int.png", "logo.png", "ext.png", "int.png", "ext.png", "int.png", "ext.png", "int.png", "int.png", "logo.png", "ext.png", "int.png", "ext.png", "ext.png", "int.png", "logo.png", "int.png"];

$.each(thumblist, function(i, val) {new thumbnail('img/'+val,'thumb'+i);});	

});




