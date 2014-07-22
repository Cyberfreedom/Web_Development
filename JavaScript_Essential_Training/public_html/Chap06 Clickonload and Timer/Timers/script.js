var mainImage = document.getElementById("mainImage");
var imageArray = ["_images/overlook.jpg", "_images/winery_sign.jpg", "_images/lunch.jpg","_images/bigSur.jpg", "_images/flag_photo.jpg", "_images/mission_look.jpg"];
var ImageIndex = 0;
function changeImage(){
    mainImage.setAttribute("src",imageArray[ImageIndex]);
    ImageIndex++;
    if (ImageIndex>= imageArray.length){
        ImageIndex = 0;
    }
    
}
var stopSlide = setInterval(changeImage,1000);

mainImage.onclick = function(){
    clearInterval(stopSlide);
    console.log("Stop Slide show");
};

