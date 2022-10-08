var scrolls = document.getElementsByClassName('scroll');
var mathjax_scale = 1;

MathJax = {
  chtml: {
    scale: mathjax_scale,
  },
  tex: {
    inlineMath: [['$', '$']]
  }
};

color_scroll_divs = function(scrolls) {
    var k = 0;
    for (let div of scrolls) {
        k++;
        var parent = div.parentElement;
        while (parent.tagName == "LI") {
            parent = parent.parentElement;
        }
        if (div.scrollWidth  > parent.clientWidth) {
            div.style.overflowX = "auto";
            div.style.overflowY = "hidden";
            div.style.background = "rgba(255,255,255,.05)";
            div.style.marginTop = "0.5em";
        }
        else {
            div.style.overflowX = "hidden";
            div.style.overflowY = "hidden";
            div.style.background = "rgba(255,255,255,.00)";
            div.style.marginTop = "0";
        }
        // Debugging
        // if (k==1) {
        //     console.log(div.scrollWidth);
        //     console.log(parent);
        //     console.log(parent.clientWidth);
        // }
    }   
    console.log("Scanning and Converting Formula-Divs.");
    console.log("Numbers of Formulas " + k.toString());
}

window.onload = function() {
    check = window.mobileCheck();
    if (check) {
        var bg1 = document.getElementById("bg1");
        bg1.style.transform = "scale(1.125, 1.125)";
        var bg2 = document.getElementById("bg2");
        bg2.style.transform = "scale(1.125, 1.125)";
        console.log("Transformed Background image to fit url-bar hiding mobile browsers.")
    }

    color_scroll_divs(scrolls);

    var bg2 = document.getElementById('bg2');
    bg2.style.opacity = 0.5;

    var content = document.getElementsByClassName('content')[0];
    content.style.visibility = 'visible';
    content.style.opacity = 0.88;

    console.log(content)
}

var delay;
window.onresize = function() {
    // Optimizing with Debouncing: Run color_scroll_divs only when resize ended 
    clearTimeout(delay);
    delay = setTimeout(function() {
        color_scroll_divs(scrolls);
    }, 1000);
}

