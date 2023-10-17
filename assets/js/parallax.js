export default function parallaxHandler() {
  const sceneOne = $('.leftParallaxScene').get(0);
  const parallaxInstance1 = new Parallax(sceneOne);

  const sceneTwo = $('.rightParallaxScene').get(0);
  const parallaxInstance2 = new Parallax(sceneTwo);
}
