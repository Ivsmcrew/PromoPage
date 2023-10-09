import sliderHandler from "./assets/js/slider.js";
import mobileMenuHandler from "./assets/js/mobileMenu.js";
import rotateFeatures from "./assets/js/featuresCircle.js";
import parallaxHandler from "./assets/js/parallax.js";
import timerHandler from "./assets/js/timer.js";

$(document).ready(function(){
    //slider
    sliderHandler();

    //mobile-menu
    mobileMenuHandler();

    //circle of features
    rotateFeatures();

    //parallax
    parallaxHandler();

    //timer
    timerHandler();
});