function Term() {

	var Terminal = (function() {
		var CURSOR = String.fromCharCode(95), HIGHLIGHTFREQ = 40,
			terminal,
			content = [],
			eol = 'Ä',
			highlight = true, counter = HIGHLIGHTFREQ,
			curPosition = {
				row: 0,
				col: 0
			},
			contentSize = {
				w: 60,
				h: 100
			};
		return {
			init: function() {
				terminal = document.getElementById('terminal');
				for(var row = 0; row < contentSize.h; row+=1) {
				    content[row] = [];
				    for(var col = 0; col < contentSize.w; col+=1) {
				        content[row][col] = '';
				    }
				}
				curPosition.row = 0;
				curPosition.col = 0;
			},
			clear: function(r) {
				curPosition.row = r;
				curPosition.col = 0;
				for(; r < contentSize.h; r+=1) {
				    content[r] = [];
				    for(var col = 0; col < contentSize.w; col+=1) {
				        content[r][col] = '';
				    }
				}
			},
			feed: function(char) {
				if(char !== eol) {
					content[curPosition.row][curPosition.col] = char;
				}
				else {
					content[curPosition.row][curPosition.col] = '';
					curPosition.col = contentSize.w;
				}
				this.shiftCursor();
			},
			render: function() {
				this.highlightCursor();
				terminal.innerHTML = '';
				var render = '';
				for(var row = 0; row <= curPosition.row; row+=1) {
					render += (content[row].join('') + '<br>');
				}
				terminal.innerHTML += render;
			},
			shiftCursor: function() {
				if(curPosition.col < contentSize.w) {
					curPosition.col += 1;
				}
				else {
					curPosition.col = 0;
					curPosition.row += 1;
				}
			},
			highlightCursor: function() {
				if(highlight) {
					content[curPosition.row][curPosition.col] = CURSOR;
				}
				else {
					content[curPosition.row][curPosition.col] = '';
				}
				if(counter-- === 0) {
					highlight = !highlight;
					counter = HIGHLIGHTFREQ;
				}
			}
		};
	})();

	var Core = (function() {
		var counter = 0,
			buffer = '';
		return {
			self: function(txt) {
				if (counter < txt.length) {
					Terminal.feed(txt[counter]);
					Terminal.feed(txt[counter + 1]);
					counter += 2;
				}
				else {
					counter = 0;
					this.step();
				}
			},
			terminalController: function() {
				if(programState.io) {
					this.self(programState.choice);
				}
				Terminal.render();
			},
			user: function(e) {
				var code = e.keyCode ? e.keyCode : e.which,
					key = String.fromCharCode(code);
				if(programState.io === false) {
					if(code === 13) {
						Core.checkBuffer();
					}
					else if (programState.choice !== messages.wrong) {
						buffer += key;
						Terminal.feed(key);
					}
				}
			},
			step: function() {
				programState.io = !programState.io;
			},
			checkBuffer: function() {
				if(programState.choice === messages.wrong) {
					Terminal.clear(0);
					programState.choice = messages.menu + messages.hello + messages.ready;
					Core.step();
				}
				else if(programState.choice === messages.work + messages.ready) {
					switch (buffer) {
						case '1':
							buffer = '';
							Terminal.clear(0);
							programState.choice = messages.work + messages.ready;
							Core.step();
							break;
						case '2':
							buffer = '';
							Terminal.clear(0);
							programState.choice = messages.work + messages.ready;
							Core.step();
							break;
						case '3':
							buffer = '';
							Terminal.clear(0);
							programState.choice = messages.work + messages.ready;
							Core.step();
							break;
						case '4':
							buffer = '';
							Terminal.clear(0);
							programState.choice = messages.work + messages.ready;
							Core.step();
							break;
						case 'x':
						case 'X':
						case 'exit':
							buffer = '';
							Terminal.clear(0);
							programState.choice = messages.menu + messages.hello + messages.ready;
							Core.step();
							break;
						default:
							buffer = '';
							programState.choice = messages.wrong;
							Core.step();
							break;
					}
				}
				else {
					switch (buffer) {
						case 'a':
						case 'about':
							buffer = '';
							Terminal.clear(1);
							programState.choice = messages.about + messages.ready;
							Core.step();
							break;
						case 'c':
						case 'contact':
							buffer = '';
							Terminal.clear(2);
							programState.choice = messages.contact + messages.ready;
							Core.step();
							break;
						case 'w':
						case 'work':
							buffer = '';
							Terminal.clear(0);
							programState.choice = messages.work + messages.ready;;
							Core.step();
							break;
						case 'clear':
							buffer = '';
							Terminal.clear(0);
							programState.choice = messages.menu + messages.hello + messages.ready;
							Core.step();
							break;
						default:
							buffer = '';
							programState.choice = messages.wrong;
							Core.step();
							break;
					}
				}
			}
		};
	})();

	var messages = {
			menu: 		'[w]ork [a]bout [c]ontactÄ',
			hello: 		'ÄHello World!ÄÄ My name is Kamil and you are looking at my portfolio.' +
						'ÄPlease choose your option.',
			about: 		'ÄHi! My name is Kamil and I like to spend time taping Äon the keyboard. ' +
				   		'ÄI love front-end and all the smart things Äone can do in JavaScript.',
			ready:  	'ÄÄ.:',
			work:       'Ä1. Concept MillÄ2. TPE FxÄ3: Previous portfolioÄ4. TXT2CANVAS experiment' +
						'ÄE(x)it. Go back to main menu.',
			contact: 	'ÄÄemail: kmacinski@gmail.com',
			wrong: 		'ÄÄUnrecognized command. Press [ENTER].Ä',
			smallScr: 	'YOU HAVE SMALL SCREEN'
		},
		programState = {
			io: 1,
			choice: messages.menu + messages.hello + messages.ready
		},
		viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

	Terminal.init();

	if (viewportWidth < 650) {
		programState.choice = messages.smallScr;
	}
	else {
		document.onkeypress = Core.user;
	}

	setInterval(function() {
		Core.terminalController();
	}, 10);
};