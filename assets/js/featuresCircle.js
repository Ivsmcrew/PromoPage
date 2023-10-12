export default function rotateFeatures() {
  let width = $(window).width();
  const isDesktop = (width > 1010);

  // main function part
  if (isDesktop) {
    const featsArray = $('.features').children('.feat').get();
    const quantityOfFeats = featsArray.length;
    const stepOfRotate = 360 / quantityOfFeats;

    featsArray.map((item, index) => {
      const rotationAngle = index * stepOfRotate;
      $(item).css('transform', `translateX(-50%) translateY(-50%) rotate(${rotationAngle}deg)`);
      $(item).children('.feat__link').css('transform', `rotate(-${rotationAngle}deg)`);
    });
  }

  // watch resize and reload
  $(window).on('resize', () => {
    width = $(window).width();
    if (width < 1011 && isDesktop || width > 1010 && !isDesktop) {
      location.reload();
    }
  });
}
