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
  }

  // On mobile, tapping "Services" / "Service Areas" expands the submenu
  // instead of navigating (desktop still uses CSS :hover).
  document.querySelectorAll('.nav-dropdown > span').forEach(function (span) {
    span.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        span.parentElement.classList.toggle('open');
      }
    });
  });
});
