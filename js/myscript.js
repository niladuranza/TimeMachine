// Add your images in line 4

var imageIndex = 1;
var images = ["./images/therock.jpeg", "./images/denimoutfit.jpg", "./images/ashleytisdale.jpg", "./images/taylorandbruno.jpeg", "./images/michaelcera.jpeg", "./images/1.jpg",
"./images/3.JPG", "./images/2.jpg", "./images/6.JPG", "./images/7.PNG", "./images/5.JPG", "./images/crab.png", "./images/fetchimage.jpeg", "./images/jessi.jpeg",
"./images/simpson.jpeg", "./images/9.jpg", "./images/8.JPG", "./images/10.png", "./images/lazytown.png", "./images/dog.png"];

function changeImage() {
    var image = document.getElementById('myImage');
    if (imageIndex < images.length) {
        image.src = images[imageIndex];
        imageIndex++;
    } else {
        image.src = images[0];
        imageIndex = 1;
    }
}