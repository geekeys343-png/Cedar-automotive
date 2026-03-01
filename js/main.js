/* ==========================================================================
   Cedar Automotive — Main JavaScript
   Minimal JS: sticky header shadow + mobile menu toggle
   No framework dependencies
   ========================================================================== */

(function () {
  'use strict';

  // --- Sticky header scroll shadow ---
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // --- Mobile menu toggle ---
  var menuToggle = document.querySelector('.menu-toggle');
  var mobileNav = document.querySelector('.mobile-nav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isOpen);
      mobileNav.classList.toggle('open');
    });

    // Close menu when a link is clicked
    var mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('open');
      });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('open');
        menuToggle.focus();
      }
    });
  }
})();
