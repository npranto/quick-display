const enableSlideInEffect = () => {
  const contentElem = document.querySelector('.App .content');
  const featurePhotoElems = document.querySelectorAll('.Feature .feature-photo img');

  contentElem.addEventListener('scroll', () => {
    console.log('dfgfgg');
  });
};

export default enableSlideInEffect;
