function go() {
    var main = document.getElementById("main_wrap"),
        nav = document.getElementById("nav_wrap"),
        obj = document.getElementById("shadowtxt").getElementsByTagName("h1"),
        about_btn = document.getElementById("about_btn"),
        work_btn = document.getElementById("work_btn"),
        contact_btn = document.getElementById("contact_btn"),
        about_ref = document.getElementById("intro"),
        work_ref = document.getElementById("work"),
        contact_ref = document.getElementById("contact"),
        xmaster = obj[0].offsetLeft,
        ymaster = obj[0].offsetTop,
        objAbsPos = position(obj[0]),
        xcenter = objAbsPos[0] + obj[0].offsetWidth / 2,
        ycenter = objAbsPos[1] + obj[0].offsetHeight / 2,
        steps = obj.length,
        xmouse = ymouse = 0;

    (function scrollNav() {
        var nav = document.getElementById("nav"),
            initialPos = nav.offsetTop,
            scrollPos,
            SCROLL_CHANGE_FREQ = 400,
            SCROLL_ANIM_STEPS = 20,
            counter = SCROLL_CHANGE_FREQ / SCROLL_ANIM_STEPS;

        about_btn.onclick=function(){window.scroll(0,position(about_ref)[1]);};
        work_btn.onclick=function(){window.scroll(0,position(work_ref)[1]);};
        contact_btn.onclick=function(){window.scroll(0,position(contact_ref)[1]);};

        // checks window scroll position every SCROLL_CHANGE_FREQ (ms).
        setInterval(function() {
            var i = counter;
            scrollPos = ((window.pageYOffset + initialPos) - nav.offsetTop) / counter;
            
            // animates nav position with SCROLL_ANIM_STEPS steps.
            var navScroll = setInterval(function() {
                (i-=1 > 0) ? nav.style.top = nav.offsetTop + scrollPos + "px" : clearInterval(navScroll);
            },SCROLL_ANIM_STEPS)
        },SCROLL_CHANGE_FREQ)
    })();

    (window.onresize = function() {
        nav.style.height = main.offsetHeight + "px";
        objAbsPos = position(obj[0]);
        xcenter = objAbsPos[0] + obj[0].offsetWidth / 2;
        ycenter = objAbsPos[1] + obj[0].offsetHeight / 2;
        xmaster = obj[0].offsetLeft;
        ymaster = obj[0].offsetTop;

        for(var i=1; i < steps; i+=1) {
            obj[i].style.left = xmaster + "px";
            obj[i].style.top = ymaster + "px";
        }
    })();

    (function shadow() {
        var xdist, ydist,
            MAXDIST = 300;

        for(var i=1; i < steps; i+=1) {
            obj[i].style.top = ymaster + "px";
            obj[i].style.left = xmaster + "px";
            obj[i].style.display = "block";
        }

        window.onmousemove = function (event) {
            xmouse = event.pageX;
            ymouse = event.pageY;
        }

        function castShadow() {
            xdist = xcenter - xmouse;
            ydist = ycenter - ymouse;

            if (xdist > MAXDIST) xdist = MAXDIST; else if (xdist < -MAXDIST) xdist = -MAXDIST;
            if (ydist > MAXDIST) ydist = MAXDIST; else if (ydist < -MAXDIST) ydist = -MAXDIST;
            xdist = xdist / MAXDIST;
            ydist = ydist / MAXDIST;

            for(var i=1; i < steps; i+=1) {
                obj[i].style.left = xmaster + xdist*i + "px";
                obj[i].style.top = ymaster + ydist*i + "px";
            }
        }
        setInterval(function(){castShadow()},20);
    })();

    function position(elem) {
        var left = 0,
            top = 0;
        do {
            left += elem.offsetLeft;
            top += elem.offsetTop;
        } while ( elem = elem.offsetParent );
        return [ left, top ];
    }
}
