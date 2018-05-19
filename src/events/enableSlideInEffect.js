const enableSlideInEffect = () => {
  const contentElem = document.querySelector('.App .content');
  const featurePhotoElems = document.querySelectorAll('.Feature .feature-photo img');

  contentElem.addEventListener('scroll', (e) => {
    console.log(e);
  });
};

export default enableSlideInEffect;
