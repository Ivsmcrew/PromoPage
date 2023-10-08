export default function rotateFeatures() { 
    let width = $(window).width();
    let isDesktop = (width > 1010) ? true : false; 

    //main function part
    if ( isDesktop ) {
        let featsArray = $('.features').children('.feat').get();
        let quantityOfFeats = featsArray.length;
        let stepOfRotate = 360 / quantityOfFeats;

        featsArray.map((item, index) => {
            let rotationAngle = index * stepOfRotate;
            $(item).css(`transform`, `translateX(-50%) translateY(-50%) rotate(${rotationAngle}deg)`);
            $(item).children(`.feat__link`).css(`transform`, `rotate(-${rotationAngle}deg)`);
        })   
    }

    //watch resize and reload
    $(window).on(`resize`, function() {
        width = $(window).width();
        if ( width < 1011 && isDesktop || width > 1010 && !isDesktop ) {
            location.reload();
        } 
    })
}