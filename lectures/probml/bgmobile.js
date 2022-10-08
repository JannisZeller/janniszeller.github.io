var bg = $("#bg1");

function resizeBackground() {
    bg.height($(window).height());
    console.log("TestBgResize");
}

$(window).resize(resizeBackground);
resizeBackground();

$(window).on('load', function() {
    console.log("TestLoad")
    resizeBackground();
});

$(window).on('resize', function() {
    console.log("TestResize")
    resizeBackground();
});

// var background = document.getElementById('background');

// // Fix background image jump on mobile
// if ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
//   background.style.top = 'auto';
//   background.style.bottom = 0;

//   window.onresize = sizeBackground;
//   sizeBackground();
// }

// function sizeBackground() {
//   background.style.height = screen.height;
// }