export default function parallaxHandler() {
    let  sceneOne = $(`.leftParallaxScene`).get(0);
    let  parallaxInstance1 = new Parallax(sceneOne);

    let sceneTwo = $(`.rightParallaxScene`).get(0);
    let  parallaxInstance2 = new Parallax(sceneTwo);
}