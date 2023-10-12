export default function mobileMenuHandler() {
  $('.burger, .backLayer').click(() => {
    $('.nav').toggleClass('main__nav_hidden');
    $('.backLayer').toggleClass('backLayer_active');
    $('.burger').toggleClass('header__burgerIcon_active');
    $('body').toggleClass('body_inactive');
  });
}
