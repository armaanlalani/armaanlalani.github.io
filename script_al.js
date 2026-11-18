(function () {
  'use strict';

  const root = document.documentElement;

  /* ---------- Theme toggle ---------- */
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function currentTheme() {
    return root.getAttribute('data-theme') || (prefersDark.matches ? 'dark' : 'light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
    });
  }

  /* ---------- Mobile navigation ---------- */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  function setMenu(open) {
    navMenu.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    const icon = navToggle.querySelector('i');
    if (icon) icon.className = open ? 'fas fa-xmark' : 'fas fa-bars';
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      setMenu(!navMenu.classList.contains('is-open'));
    });
    navMenu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) setMenu(false);
    });
  }

  /* ---------- Header border, back-to-top ---------- */
  const header = document.querySelector('.site-header');
  const toTop = document.getElementById('to-top');

  function onScroll() {
    const y = window.scrollY;
    if (header) header.classList.toggle('is-scrolled', y > 8);
    if (toTop) toTop.classList.toggle('is-visible', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Active nav link on scroll ---------- */
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const sections = navLinks
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const id = '#' + entry.target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle('is-active', link.getAttribute('href') === id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    revealEls.forEach(function (el) { revealer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- Course chips: one open panel per group ---------- */
  document.querySelectorAll('[data-course-group]').forEach(function (group) {
    const buttons = group.querySelectorAll('.chip-btn');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const wasOpen = btn.getAttribute('aria-expanded') === 'true';
        buttons.forEach(function (b) {
          b.setAttribute('aria-expanded', 'false');
          const panel = document.getElementById(b.getAttribute('aria-controls'));
          if (panel) panel.hidden = true;
        });
        if (!wasOpen) {
          btn.setAttribute('aria-expanded', 'true');
          const panel = document.getElementById(btn.getAttribute('aria-controls'));
          if (panel) panel.hidden = false;
        }
      });
    });
  });

  /* ---------- Project details dialog ---------- */
  const dialog = document.getElementById('project-dialog');
  const dialogBody = document.getElementById('dialog-body');
  let lastTrigger = null;

  function closeDialog() {
    if (!dialog || !dialog.open) return;
    dialog.close();
  }

  if (dialog && dialogBody && typeof dialog.showModal === 'function') {
    document.querySelectorAll('[data-open-project]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const tpl = document.getElementById(btn.getAttribute('data-open-project'));
        if (!tpl) return;
        lastTrigger = btn;
        dialogBody.replaceChildren(tpl.content.cloneNode(true));
        const heading = dialogBody.querySelector('h3');
        if (heading) heading.id = 'dialog-title';
        document.body.classList.add('dialog-open');
        dialog.showModal();
        dialog.querySelector('.dialog-inner').scrollTop = 0;
      });
    });

    dialog.querySelector('[data-close-dialog]').addEventListener('click', closeDialog);

    // Close when clicking the backdrop
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) closeDialog();
    });

    dialog.addEventListener('close', function () {
      document.body.classList.remove('dialog-open');
      dialogBody.querySelectorAll('video').forEach(function (v) { v.pause(); });
      dialogBody.replaceChildren();
      if (lastTrigger) lastTrigger.focus();
    });
  } else {
    // Very old browsers: hide the Details buttons; Report/Code links remain
    document.querySelectorAll('[data-open-project]').forEach(function (btn) { btn.hidden = true; });
  }

  /* ---------- Footer year ---------- */
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- Contact form (Google Sheets via Apps Script) ---------- */
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxql4Ce8NkX6M2T1U2aKwhMbVIg7PhPI-JfO7geZ9PxFL2US7TmAms5Oebkkp4DJaRPcg/exec';

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  let statusTimer = null;

  function showStatus(kind, message) {
    clearTimeout(statusTimer);
    status.hidden = false;
    status.className = 'form-status ' + (kind === 'success' ? 'is-success' : 'is-error');
    status.textContent = message;
    if (kind === 'success') {
      statusTimer = setTimeout(function () { status.hidden = true; }, 6000);
    }
  }

  function validate() {
    let ok = true;
    form.querySelectorAll('input, textarea').forEach(function (field) {
      const valid = field.checkValidity() && field.value.trim() !== '';
      field.closest('.field').classList.toggle('has-error', !valid);
      if (!valid && ok) { field.focus(); ok = false; }
    });
    return ok;
  }

  if (form && status) {
    form.addEventListener('submit', async function (event) {
      event.preventDefault();
      if (!validate()) {
        showStatus('error', 'Please fill in your name, a valid email, and a message.');
        return;
      }

      const submitButton = form.querySelector('button[type="submit"]');
      const originalLabel = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = 'Sending…';

      const formData = {
        name: form.elements.name.value.trim(),
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
        timestamp: new Date().toISOString()
      };

      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        // With no-cors the response is opaque, so a resolved request is treated as success
        showStatus('success', "Message received! Thank you for reaching out. I'll review your message soon.");
        form.reset();
      } catch (error) {
        showStatus('error', 'Failed to submit message. Please try again later.');
        console.error('Form Error:', error);
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalLabel;
      }
    });

    form.addEventListener('input', function (e) {
      const field = e.target.closest('.field');
      if (field) field.classList.remove('has-error');
    });
  }
})();
