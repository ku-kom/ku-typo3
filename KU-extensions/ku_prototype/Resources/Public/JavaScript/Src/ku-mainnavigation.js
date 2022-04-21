/* ========================================================================
 * Copyright 2022
 * University of Copenhagen, FA Communications
 * ========================================================================*/

(function () {
  'use strict'

  window.addEventListener('DOMContentLoaded', function () {

    /**
     * Solution to set appropiate aria-axpanded states in menus.
     * 
     */

    function navbarPointerOver(element) {
      let toggle = document.querySelector('.navbar-toggler');
      if (window.getComputedStyle(toggle).display === 'none' && element.classList.contains('open') === false) {
        element.querySelector('.menu_arrow').setAttribute('aria-expanded', 'true');
      }
    }

    function navbarPointerLeave(element) {
      let toggle = document.querySelector('.navbar-toggler');
      if (window.getComputedStyle(toggle).display === 'none') {
        element.querySelector('.menu_arrow').setAttribute('aria-expanded', 'false');
      }
    }

    // Array.from(document.querySelectorAll('li.has-children')).forEach(function (element) {
    //   element.addEventListener('pointerover', (e) => {
    //     if (e.pointerType === "mouse") {
    //       navbarPointerOver(element);
    //     }
    //   });
    //   element.addEventListener('mouseenter', () => {
    //     if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    //       navbarPointerOver(element);
    //     }
    //   });
    //   element.addEventListener('pointerleave', (e) => {
    //     if (e.pointerType === "mouse") {
    //       navbarPointerLeave(element);
    //     }
    //   });
    //   element.addEventListener('mouseleave', () => {
    //     if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    //       navbarPointerLeave(element);
    //     }
    //   });
    // });

    // Array.from(document.querySelectorAll('.menubar li')).forEach(function (element) {
    //   element.addEventListener('click', (e) => {
    //     let listElement = element.parentElement;
    //     if (listElement.classList.contains('has-children')) {
    //       let listElementSiblings = listElement.parentElement.querySelectorAll('.menu_arrow');
    //       Array.from(listElementSiblings).forEach(function (listElementsSibling) {
    //         listElementsSibling.setAttribute('aria-expanded', 'false')
    //       });
    //       listElement.setAttribute('aria-expanded', 'true')
    //       listElement.querySelector('.menu_arrow').setAttribute('aria-expanded', 'true');
    //       e.stopImmediatePropagation();
    //       e.preventDefault();
    //       return false;
    //     }
    //   });
    // });

    // Toggle aria states for hamburger icon
    document.getElementById('navbarSideCollapse').addEventListener('click', (e) => {
      const btn = e.currentTarget;
      btn.setAttribute('aria-expanded', btn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
    });

  });

})()
