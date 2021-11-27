/* ========================================================================
 * Copyright 2021
 * University of Copenhagen, FA Communications
 * ========================================================================*/

document.addEventListener('DOMContentLoaded', (event) => {
  'use strict';

  const footerHeading = document.querySelectorAll('.frame-header');

  const isMobile = function () {
    return window.matchMedia('(max-width: 767px)').matches;
  };

  const setAriaAttr = function () {
    // Set accessible attributes
    footerHeading.forEach(el => {
      el.setAttribute('aria-expanded', isMobile() ? 'false' : 'true');
    });
  };

  const resetFooter = function () {
    // Reset styling
    footerHeading.forEach(el => {
      el.nextElementSibling.style.removeProperty('height');
      el.nextElementSibling.classList.remove('active');
    });
  };


  const toggleFooter = () => {
    footerHeading.forEach(el => {
      el.addEventListener('click', (e) => {

        let that = e.currentTarget;
        let list = that.nextElementSibling;

        // Slide down
        if (!list.classList.contains('active')) {
          list.classList.add('active');
          list.style.height = 'auto';

          let height = list.clientHeight + 'px';
          list.style.height = '0';
          setTimeout(() => {
            list.style.height = height;
          }, 0);
          that.setAttribute('aria-expanded', 'true');

        } else {
          // Slide up
          list.style.height = '0';
          that.setAttribute('aria-expanded', 'false');

          // Remove the `active` class when the animation ends
          list.addEventListener('transitionend', () => {
            list.classList.remove('active');
          }, {
            once: true
          });
        }
      });
    });

  }

  setAriaAttr();
  if (isMobile()) {
    toggleFooter();
  }

  window.addEventListener('resize', debounce(() => {
    resetFooter();
    setAriaAttr();
  }, 150));

  window.addEventListener('orientationchange', debounce(() => {
    resetFooter();
    setAriaAttr();
  }, 150));

});
