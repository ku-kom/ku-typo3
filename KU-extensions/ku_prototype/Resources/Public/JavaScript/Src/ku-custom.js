/* ========================================================================
 * Copyright 2021
 * University of Copenhagen, FA Communications
 * ========================================================================*/


function debounce(func, wait, immediate) {
  // Use to delay function init, e.g. on window resizing or input autocomplete, etc..
  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing. Usage, call with time, e.g. $(window).on('resize', debounce(myFunction, 250));
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function throttle(func, wait) {
  // A note about debounce and throttle:
  // A debounce is utilized when you only care about the final state. For example, waiting until a user stops typing to // fetch typeahead search results. A throttle is best used when you want to handle all intermediate states but at a // controlled rate. For example, track the screen width as a user resizes the window and rearrange page content while // it changes instead of waiting until the user has finished.

  var waiting = false;
  return function () {
    if (!waiting) {
      func.apply(this, arguments);
      waiting = true;
      setTimeout(function () {
        waiting = false;
      }, wait);
    }
  }
}

function hasScrollbar() {
  // Check if page has scrollbar and if so add css variable. Used for full width styling.
  var body = document.body;
  if (body) {
    if (window.innerWidth > body.clientWidth) {
      body.classList.add('has-scrollbar');
      body.setAttribute('style', '--scroll-bar: ' + (window.innerWidth - body.clientWidth) + 'px');
    } else {
      body.classList.remove('has-scrollbar');
    }
  }
}
window.addEventListener('DOMContentLoaded', (event) => {
  
  hasScrollbar();

  window.addEventListener('orientationchange', debounce(function () {
    hasScrollbar();
  }, 250));

  window.addEventListener('resize', debounce(function () {
    hasScrollbar();
  }, 250));
});
