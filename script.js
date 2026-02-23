(function () {
  'use strict';

  // Widget clock + day
  function tickWidget() {
    var now = new Date();
    var h12 = now.getHours() % 12 || 12;
    var m = now.getMinutes();
    var timeEl = document.getElementById('widgetTime');
    if (timeEl) timeEl.textContent = h12 + ':' + (m < 10 ? '0' + m : m);

    var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var dayEl = document.getElementById('widgetDay');
    var dateEl = document.getElementById('widgetDate');
    if (dayEl) dayEl.textContent = days[now.getDay()];
    if (dateEl) dateEl.textContent = now.getDate();
  }

  // Scroll reveal (Intersection Observer)
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach(function (el) { el.classList.add('revealed'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });
    els.forEach(function (el) { observer.observe(el); });
  }

  // Nav: show compact sticky header when hero brand scrolls out
  function initNav() {
    var header = document.getElementById('siteHeader');
    var brand = document.getElementById('heroBrand');
    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');

    if (header && brand) {
      var obs = new IntersectionObserver(function (entries) {
        header.classList.toggle('visible', !entries[0].isIntersecting);
      }, { threshold: 0 });
      obs.observe(brand);
    }

    if (toggle && links) {
      toggle.addEventListener('click', function () {
        links.classList.toggle('open');
        toggle.classList.toggle('open');
      });
      links.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          links.classList.remove('open');
          toggle.classList.remove('open');
        });
      });
    }
  }

  // Smooth anchor scroll with offset
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          var y = target.getBoundingClientRect().top + window.scrollY - 72;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      });
    });
  }

  // Boot
  document.addEventListener('DOMContentLoaded', function () {
    tickWidget();
    setInterval(tickWidget, 1000);
    initReveal();
    initNav();
    initSmoothScroll();
  });
})();
