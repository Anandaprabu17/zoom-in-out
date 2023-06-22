
var plus = document.getElementById("zoom-in");

var minus = document.getElementById("zoom-out");

var image = document.getElementById("image");


plus.addEventListener("click", function () {
    var imgWidth = image.width;

    if (imgWidth == 580) {
        alert("max level reached");
    }
    else {
        image.style.width = (imgWidth + 20) + "px";
    }

})


minus.addEventListener("click", function () {
    var imgWidth = image.width;
    if (imgWidth == 500) {
        alert("minimum level reached");
    }
    else {
        image.style.width = (imgWidth - 20) + "px";
    }
})



