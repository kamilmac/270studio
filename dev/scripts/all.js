function Owlpix(){function e(){o.style.top=(window.pageYOffset+n)/.84+"px",o.offsetTop+r>c&&(o.style.top=c-r+"px")}var o=document.getElementById("owlpix"),t=document.getElementById("branch"),n=o.offsetTop,r=o.offsetHeight,c=t.offsetTop+t.offsetHeight/2;o.style.top=(window.pageYOffset+n)/.84+"px",window.onscroll=function(){e()},window.onresize=function(){r=o.offsetHeight,c=t.offsetTop+t.offsetHeight/2,e()}}function Project(){var e=document.getElementsByClassName("project-desc"),o=e.length,t=document.getElementsByClassName("desc-trigger"),n=12,r=!1;if(r="ontouchstart"in window||navigator.msMaxTouchPoints?!0:!1,function(){for(var n=0;o>n;n+=1)t[n].over=!1,e[n].desc=e[n].getAttribute("data-desc"),t[n].www=t[n].getAttribute("data-www"),e[n].counter=0,e[n].descLength=e[n].desc.length,e[n].initLength=e[n].innerHTML.length}(),r===!1){for(var c=0;o>c;c+=1)t[c].addEventListener("mouseover",function(){this.over=!0},!1),t[c].addEventListener("mouseout",function(){this.over=!1},!1),t[c].addEventListener("click",function(){window.open(this.www,"_self",!1)},!1);setInterval(function(){for(var n=0;o>n;n+=1)t[n].over===!0&&e[n].counter<e[n].descLength?(e[n].innerHTML+=e[n].desc.slice(e[n].counter,e[n].counter+2),e[n].counter+=2):t[n].over===!1&&e[n].counter>0&&(e[n].innerHTML=e[n].innerHTML.slice(0,e[n].counter+e[n].initLength),e[n].counter-=1)},n)}}function Term(){var e=function(){var e,o=String.fromCharCode(95),t=40,n=[],r="Ä",c=!0,i=t,a={row:0,col:0},s={w:60,h:100};return{init:function(){e=document.getElementById("terminal");for(var o=0;o<s.h;o+=1){n[o]=[];for(var t=0;t<s.w;t+=1)n[o][t]=""}a.row=0,a.col=0},clear:function(e){for(a.row=e,a.col=0;e<s.h;e+=1){n[e]=[];for(var o=0;o<s.w;o+=1)n[e][o]=""}},feed:function(e){e!==r?n[a.row][a.col]=e:(n[a.row][a.col]="",a.col=s.w),this.shiftCursor()},render:function(){this.highlightCursor(),e.innerHTML="";for(var o="",t=0;t<=a.row;t+=1)o+=n[t].join("")+"<br>";e.innerHTML+=o},shiftCursor:function(){a.col<s.w?a.col+=1:(a.col=0,a.row+=1)},highlightCursor:function(){n[a.row][a.col]=c?o:"",0===i--&&(c=!c,i=t)}}}(),o=function(){var r=0,c="";return{self:function(o){r<o.length?(e.feed(o[r]),e.feed(o[r+1]),r+=2):(r=0,this.step())},terminalController:function(){n.io&&this.self(n.choice),e.render()},user:function(r){var i=r.keyCode?r.keyCode:r.which,a=String.fromCharCode(i);n.io===!1&&(13===i?o.checkBuffer():n.choice!==t.wrong&&(c+=a,e.feed(a)))},step:function(){n.io=!n.io},checkBuffer:function(){if(n.choice===t.wrong)e.clear(0),n.choice=t.menu+t.hello+t.ready,o.step();else if(n.choice===t.work+t.ready)switch(c){case"1":c="",e.clear(0),n.choice=t.work+t.ready,o.step();break;case"2":c="",e.clear(0),n.choice=t.work+t.ready,o.step();break;case"3":c="",e.clear(0),n.choice=t.work+t.ready,o.step();break;case"4":c="",e.clear(0),n.choice=t.work+t.ready,o.step();break;case"x":case"X":case"exit":c="",e.clear(0),n.choice=t.menu+t.hello+t.ready,o.step();break;default:c="",n.choice=t.wrong,o.step()}else switch(c){case"a":case"about":c="",e.clear(1),n.choice=t.about+t.ready,o.step();break;case"c":case"contact":c="",e.clear(2),n.choice=t.contact+t.ready,o.step();break;case"w":case"work":c="",e.clear(0),n.choice=t.work+t.ready,o.step();break;case"clear":c="",e.clear(0),n.choice=t.menu+t.hello+t.ready,o.step();break;default:c="",n.choice=t.wrong,o.step()}}}}(),t={menu:"[w]ork [a]bout [c]ontactÄ",hello:"ÄHello World!ÄÄ My name is Kamil and you are looking at my portfolio.ÄPlease choose your option.",about:"ÄHi! My name is Kamil and I like to spend time taping Äon the keyboard. ÄI love front-end and all the smart things Äone can do in JavaScript.",ready:"ÄÄ.:",work:"Ä1. Concept MillÄ2. TPE FxÄ3: Previous portfolioÄ4. TXT2CANVAS experimentÄE(x)it. Go back to main menu.",contact:"ÄÄemail: kmacinski@gmail.com",wrong:"ÄÄUnrecognized command. Press [ENTER].Ä",smallScr:"YOU HAVE SMALL SCREEN"},n={io:1,choice:t.menu+t.hello+t.ready},r=Math.max(document.documentElement.clientWidth,window.innerWidth||0);e.init(),650>r?n.choice=t.smallScr:document.onkeypress=o.user,setInterval(function(){o.terminalController()},10)}window.onload=function(){"use strict";var e=["owl1","owl2","owl3","owl4"],o=[1,1,2,2,3,3,2,1,0],t=(e.length,0),n=.011,r=document.getElementById("owl"),c=function(e){r.className=e};Term(),Project(),Owlpix(),setInterval(function(){t<o.length-1?(t+=1,c(e[o[t]])):Math.random()<n&&(t=0)},30)};