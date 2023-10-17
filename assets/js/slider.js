export default function sliderHandler() {
  $('.slider').slick({
    infinite: false,
    dots: true,
    arrows: false,
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 6000,
  });
}
