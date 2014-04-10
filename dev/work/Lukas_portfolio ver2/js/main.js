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
	
	
	$('#model_btn').click(function() {
		if ($('.model').is(':visible'))
		{
			$('.model').hide();
				TweenMax.to('#model_btn', 0.2, {
				textShadow:"3px 3px 3px rgba(0, 0, 0, 0.3)",
				color:"white"
			});			
		}
		else
		{
			$('.model').show();
				TweenMax.to('#model_btn', 0.2, {
				textShadow:"0px 0px 0px black",
				color:"none"
			});
		}
	});
 
//-------------------------------------------------------------------------------------------- 
	
	var thumbnail = function(id,thumb_src){	
			var pos_in_table = id;
			id = 'thumb'+id;
			
			init = function(){
				switch (true){
					case (thumb_src.search('ext') > 0):var cls = 'exterior';break;
					case (thumb_src.search('int') > 0):var cls = 'interior';break;
					case (thumb_src.search('mod') > 0):var cls = 'model';break;
					case (thumb_src.search('log') > 0):var cls = 'logo';break;
				}
				$div = $('<div>',{id: id, class: cls}).appendTo("#thumb_wrapper");
				$('<img>',{src: thumb_src}).appendTo($div);			
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
				presentation_field.execute(pos_in_table);
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
				case ('exterior'):$("#img_wrap").css('borderBottomColor','#7bd8d8');
				TweenLite.to("#img_wrap", 0.3, {borderBottomWidth: 30, ease:"Power2.easeOut"});break;
				case ('interior'):$("#img_wrap").css('borderBottomColor','#fff39b');
				TweenLite.to("#img_wrap", 0.3, {borderBottomWidth: 30, ease:"Power2.easeOut"});break;
				case ('model'):$("#img_wrap").css('borderBottomColor','#ffd6a0');
				TweenLite.to("#img_wrap", 0.3, {borderBottomWidth: 30, ease:"Power2.easeOut"});break;
				case ('logo'):$("#img_wrap").css('borderBottomColor','#abeab3');
				TweenLite.to("#img_wrap", 0.3, {borderBottomWidth: 30, ease:"Power2.easeOut"});break;
			}
		},
		hide: function(objclass){
				TweenLite.to("#img_wrap", 0.6, {borderBottomWidth: 0, ease:"Power1.easeIn"});
		},
		execute: function(i){
			showProject(projects[i][1], projects[i][2], projects[i][3]);
		}
	};

//--------------------------------------------------------------------------------------------
    
    function showProject(capt, img1, img2) {
        
        function renderBack() {
            $("#img1").attr("src", 'img/' + img1);
            
            $("#img_wrap").mousemove(function(event) {
                var clip = event.pageX - $("#img_wrap").offset().left -0.5;   
                
                switch (true) {
                case (clip < 20):
                    $("#img2").css('clip', 'rect(0px, 900px , 600px, 0px)');
                    break;
                case (clip > 880):
                    $("#img2").css('clip', 'rect(0px, 900px , 600px, 900px)');
                    break;
                default:
                    $("#img2").css('clip', 'rect(0px, 900px , 600px, '+clip+'px)');
                } 
            });
        }
        
        $("#caption").text(capt);
        $("#img2").attr("src", 'img/' + img2);
        $("#img2").css('clip', 'rect(0px, 900px , 600px, 0px)');
        if(img1 === "") $('#img_wrap').off('mousemove');
        else renderBack();
    }

//-------------------------------------------------------------------------------------------- 
	
var projects = [    ["ext1.png", "exterior project description", "ext1_back.png", "test.png"], 
                    ["int1.png", "interior project description", "int1_back.png", "int1_front.png"], 
                    ["mod1.png", "3d model description", "mod1_back.png", "mod1_front.png"], 
                    ["log1.png", "logo description", "", "log1_front.png"],
                    ["int1.png", "interior project description", "int1_back.png", "int1_front.png"], 
                    ["mod1.png", "3d model description", "mod1_back.png", "mod1_front.png"],
                    ["ext1.png", "exterior project description", "ext1_back.png", "ext1_front.png"], 
                    ["ext1.png", "exterior project description", "ext1_back.png", "ext1_front.png"],
                    ["ext1.png", "exterior project description", "ext1_back.png", "ext1_front.png"], 
                    ["int1.png", "interior project description", "int1_back.png", "int1_front.png"], 
                    ["mod1.png", "3d model description", "mod1_back.png", "mod1_front.png"], 
                    ["log1.png", "logo description", "", "log1_front.png"],
                    ["int1.png", "interior project description", "int1_back.png", "int1_front.png"], 
                    ["mod1.png", "3d model description", "mod1_back.png", "mod1_front.png"],
                    ["ext1.png", "exterior project description", "ext1_back.png", "ext1_front.png"], 
                    ["ext1.png", "exterior project description", "ext1_back.png", "ext1_front.png"],
                    ["int1.png", "interior project description", "int1_back.png", "int1_front.png"], 
                    ["int1.png", "interior project description", "int1_back.png", "int1_front.png"], 
                    ["int1.png", "interior project description", "int1_back.png", "int1_front.png"],
                    ["ext1.png", "exterior project description", "ext1_back.png", "ext1_front.png"], 
                    ["int1.png", "interior project description", "int1_back.png", "int1_front.png"], 
                    ["mod1.png", "3d model description", "mod1_back.png", "mod1_front.png"], 
                    ["log1.png", "logo description", "", "log1_front.png"],
                    ["ext1.png", "exterior project description", "ext1_back.png", "ext1_front.png"], 
                    ["ext1.png", "exterior project description", "ext1_back.png", "ext1_front.png"],
                    ["ext1.png", "exterior project description", "ext1_back.png", "ext1_front.png"], 
                    ["int1.png", "interior project description", "int1_back.png", "int1_front.png"], 
                    ["mod1.png", "3d model description", "mod1_back.png", "mod1_front.png"], 
                    ["log1.png", "logo description", "", "log1_front.png"],
                    ["int1.png", "interior project description", "int1_back.png", "int1_front.png"],
                    ["int1.png", "interior project description", "int1_back.png", "int1_front.png"], 
                    ["int1.png", "interior project description", "int1_back.png", "int1_front.png"],
                    ["ext1.png", "exterior project description", "ext1_back.png", "ext1_front.png"], 
                    ["int1.png", "interior project description", "int1_back.png", "int1_front.png"], 
                    ["mod1.png", "3d model description", "mod1_back.png", "mod1_front.png"]
                ];


for(var i=0; i<projects.length;i++)
    new thumbnail(i, 'img/' + projects[i][0]);

showProject(projects[0][1], projects[0][2], projects[0][3]);

});




