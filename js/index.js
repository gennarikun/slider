((d, w) => {
  /**
    アコーディオン
  */
  const headline = d.querySelectorAll('.js-accordion_headline');
  for (let i = 0; i < headline.length; i++) {
    headline[i].addEventListener('click', (e) => {
      e.target.parentNode.classList.toggle('is-accordion_item');
    });
  }
})(document, window);