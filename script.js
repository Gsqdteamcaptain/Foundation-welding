// Hero video source (avoids unreliable <source media> support on iOS Safari)
document.addEventListener('DOMContentLoaded', function () {
  var heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    var isMobile = window.matchMedia('(max-width: 768px)').matches;
    heroVideo.src = isMobile ? 'video/hero-mobile.mp4' : 'video/hero-desktop.mp4';
    heroVideo.load();
    heroVideo.play().catch(function () {});
  }
});

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('mainNav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('nav-open');
      toggle.classList.toggle('active', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close the mobile menu once a link is actually tapped, so it doesn't
    // stay open and cover the section you just navigated to.
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('nav-open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Tapping "Services" / "Service Areas" expands the submenu in place,
  // at any screen size, since the whole nav lives behind the hamburger now.
  document.querySelectorAll('.nav-dropdown > span').forEach(function (span) {
    span.addEventListener('click', function () {
      span.parentElement.classList.toggle('open');
    });
  });
});
