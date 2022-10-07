var scrolls = document.getElementsByClassName('scroll');
var mathjax_scale = 0.9;

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
        if (parent.tagName == "LI") {
            parent = parent.parentElement;
        }
        if (div.scrollWidth / mathjax_scale > parent.clientWidth) {
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
    }   
    console.log("Scanning and Converting Formula-Divs.");
    console.log("Numbers of indented Formulas " + k.toString());
}

window.onload = function() {
    color_scroll_divs(scrolls);
}

var delay;
window.onresize = function() {
    // Optimizing with Debouncing: Run color_scroll_divs only when resize ended 
    clearTimeout(delay);
    delay = setTimeout(function() {
        color_scroll_divs(scrolls);
    }, 1000);
}

