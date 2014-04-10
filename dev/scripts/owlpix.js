function Owlpix() {
    var owl = document.getElementById('owlpix'),
        branch = document.getElementById('branch'),
        owlPos = owl.offsetTop,
        owlHeight = owl.offsetHeight,
        branchFloor = branch.offsetTop + branch.offsetHeight / 2,
        scrollPos;


    owl.style.top = (window.pageYOffset + owlPos)/0.84 + 'px';    // Init

    window.onscroll = function (event) {
        renderNewPos();
    }

    window.onresize = function (event) {
        owlHeight = owl.offsetHeight,
        branchFloor = branch.offsetTop + branch.offsetHeight / 2;

        renderNewPos();
    }

    function renderNewPos () {
        owl.style.top = (window.pageYOffset + owlPos)/0.84 + 'px';

        if((owl.offsetTop + owlHeight) > branchFloor)
            owl.style.top = branchFloor - owlHeight + 'px';
    }

};