window.onload = function() {
	'use strict';
	var owlFrames = ['owl1','owl2','owl3','owl4'],
		owlAnim = [1,1,2,2,3,3,2,1,0],
		owlLength = owlFrames.length,
		counter = 0,
		owlState = true,
		chance = 0.011,
		owl = document.getElementById('owl');

	var toggle = function(cl) {
		owl.className = cl;
	}

	Term();
	Project();
	Owlpix();

	setInterval(function() {
		if(counter < owlAnim.length-1) {
			counter += 1;
			toggle(owlFrames[owlAnim[counter]]);
		}
		else {
			if(Math.random() < chance) {
				counter = 0;
			}
		}
	}, 30);
};