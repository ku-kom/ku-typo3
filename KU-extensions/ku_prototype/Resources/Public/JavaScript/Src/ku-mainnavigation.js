/* ========================================================================
 * Copyright 2022
 * University of Copenhagen, FA Communications
 * ========================================================================*/

(function () {
  'use strict'

  const menu_arrow = document.querySelectorAll('.menu_arrow');

  /**
   * Set accessible attributes to menu items
   */
  const setAriaAttr = (el) => {
    el.setAttribute(
      'aria-expanded',
      el.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );
  };

  for (const btn of menu_arrow) {
    btn.addEventListener('click', () => {
      setAriaAttr(btn);
    });
  }

})()
