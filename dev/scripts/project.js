function Project() {
	var	projectList = document.getElementsByClassName('project-desc'),
		projectListLength = projectList.length,
		triggerObjs = document.getElementsByClassName('desc-trigger'),
		FPS = 12,
		isTouch = false;

	if ("ontouchstart" in window || navigator.msMaxTouchPoints) {
            isTouch = true;
        }
        else {
            isTouch = false;
        }

		(function init() {
			for(var i = 0; i < projectListLength; i += 1) {
				triggerObjs[i].over = false;
				projectList[i].desc = projectList[i].getAttribute('data-desc');
				triggerObjs[i].www = triggerObjs[i].getAttribute('data-www');
				projectList[i].counter = 0;
				projectList[i].descLength = projectList[i].desc.length;
				projectList[i].initLength = projectList[i].innerHTML.length;
			}
		})();

	if (isTouch === false) {
			for(var i = 0; i < projectListLength; i += 1) {
	    		triggerObjs[i].addEventListener('mouseover', function(e) {
	    			this.over = true;
	    		}, false);
	    		triggerObjs[i].addEventListener('mouseout', function(e) {
	    			this.over = false;
	    		}, false);
	    		triggerObjs[i].addEventListener('click', function(e) {
	    			window.open(this.www,'_self',false)
	    		}, false);
	    	}

		setInterval(function() {
			for(var i = 0; i < projectListLength; i += 1) {
				if (triggerObjs[i].over === true && projectList[i].counter < projectList[i].descLength) {
					projectList[i].innerHTML += projectList[i].desc.slice(projectList[i].counter,projectList[i].counter + 2);
					projectList[i].counter += 2;
				}
				else if (triggerObjs[i].over === false && projectList[i].counter > 0) {
					projectList[i].innerHTML = projectList[i].innerHTML.slice(0,projectList[i].counter + projectList[i].initLength);
					projectList[i].counter -= 1;
				}
			}
		}, FPS);
	}
	// else if (isTouch === true) {
	// 	for(var i = 0; i < projectListLength; i += 1) {
	// 		projectList[i].innerHTML = projectList[i].desc;
	// 	}
	// }
};

