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

  // Tapping "Services" / "Service Areas" expands the submenu in place,
  // at any screen size, since the whole nav lives behind the hamburger now.
  document.querySelectorAll('.nav-dropdown > span').forEach(function (span) {
    span.addEventListener('click', function () {
      span.parentElement.classList.toggle('open');
    });
  });
});
