/**
 * AI DISHA — Main Application Script
 * Navigation Spy, Sticky Glass Header, Multi-Step Intake Modal, Countdown, Toast Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation & Scroll Spy
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Scroll Spy active states
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 2. Mobile Drawer Navigation
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileBackdrop = document.querySelector('.mobile-drawer-backdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const closeDrawerBtn = document.querySelector('.mobile-drawer-close');

  function toggleDrawer() {
    mobileDrawer?.classList.toggle('open');
    mobileBackdrop?.classList.toggle('open');
    document.body.style.overflow = mobileDrawer?.classList.contains('open') ? 'hidden' : '';
  }

  function closeDrawer() {
    mobileDrawer?.classList.remove('open');
    mobileBackdrop?.classList.remove('open');
    document.body.style.overflow = '';
  }

  mobileToggle?.addEventListener('click', toggleDrawer);
  mobileBackdrop?.addEventListener('click', closeDrawer);
  closeDrawerBtn?.addEventListener('click', closeDrawer);

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  // 3. Reveal on Scroll Observer
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // 4. Hackathon Countdown Clock Simulator
  function initHackathonTimer() {
    const daysEl = document.getElementById('hackathon-days');
    const hoursEl = document.getElementById('hackathon-hours');
    const minsEl = document.getElementById('hackathon-mins');
    const secsEl = document.getElementById('hackathon-secs');

    if (!daysEl) return;

    // Set target date 18 days in future
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 18);
    targetDate.setHours(targetDate.getHours() + 14);

    function updateTimer() {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) return;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
      if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
      if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
      if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }
  initHackathonTimer();

  // 5. Toast Notification System
  window.showToast = function (message, title = 'Notification') {
    let toast = document.getElementById('global-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'global-toast';
      toast.className = 'toast-notification';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <div style="width: 20px; height: 20px; background: #dfdfdf; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #101010; flex-shrink: 0;">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div>
        <div style="font-weight: 600; color: #ffffff; font-size: 0.85rem;">${title}</div>
        <div style="color: var(--text-secondary); font-size: 0.8rem;">${message}</div>
      </div>
    `;

    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  };

  // 6. Application Modal Controller & Multi-Step Intake
  const applyModal = document.getElementById('apply-modal');
  const openApplyBtns = document.querySelectorAll('.open-apply-modal-btn');
  const applyModalClose = applyModal?.querySelector('.modal-close-btn');
  const applyForm = document.getElementById('ai-disha-apply-form');
  const formStep1 = document.getElementById('form-step-1');
  const formStep2 = document.getElementById('form-step-2');
  const formSuccess = document.getElementById('form-success-state');

  function openApply() {
    if (!applyModal) return;
    applyModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeApply() {
    if (!applyModal) return;
    applyModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openApplyBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openApply();
    });
  });

  applyModalClose?.addEventListener('click', closeApply);
  applyModal?.addEventListener('click', (e) => {
    if (e.target === applyModal) closeApply();
  });

  // Next Step in Intake Form
  const nextStepBtn = document.getElementById('form-next-step-btn');
  const prevStepBtn = document.getElementById('form-prev-step-btn');

  nextStepBtn?.addEventListener('click', () => {
    const nameInput = document.getElementById('applicant-name');
    const emailInput = document.getElementById('applicant-email');

    if (!nameInput?.value.trim() || !emailInput?.value.trim()) {
      window.showToast('Please provide your name and email to proceed.', 'Required Fields');
      return;
    }

    if (formStep1 && formStep2) {
      formStep1.style.display = 'none';
      formStep2.style.display = 'block';
    }
  });

  prevStepBtn?.addEventListener('click', () => {
    if (formStep1 && formStep2) {
      formStep2.style.display = 'none';
      formStep1.style.display = 'block';
    }
  });

  // Form Submit
  applyForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('form-submit-final-btn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Verifying Candidate Aptitude...</span>';
    }

    setTimeout(() => {
      if (formStep2 && formSuccess) {
        formStep2.style.display = 'none';
        formSuccess.style.display = 'block';
        window.showToast(
          'Application submitted successfully! Our admissions committee will reach out.',
          'Application Received'
        );
      }
    }, 1200);
  });

  // 7. Contact Form Handler
  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    if (btn) {
      const origText = btn.innerHTML;
      btn.innerHTML = '<span>Transmitting...</span>';
      setTimeout(() => {
        btn.innerHTML = '<span>Message Transmitted ✓</span>';
        contactForm.reset();
        window.showToast('Our technical advisory team will respond within 4 hours.', 'Message Dispatched');
        setTimeout(() => {
          btn.innerHTML = origText;
        }, 3000);
      }, 900);
    }
  });

  // 8. FAQ Search & Accordion
  const faqSearchInput = document.getElementById('faq-search-input');
  const faqItems = document.querySelectorAll('.faq-accordion-item');

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    trigger?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach((i) => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  faqSearchInput?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    faqItems.forEach((item) => {
      const question = item.querySelector('.faq-question')?.textContent.toLowerCase() || '';
      const answer = item.querySelector('.faq-answer')?.textContent.toLowerCase() || '';
      if (question.includes(query) || answer.includes(query)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });

  // 9. Newsletter Subscription
  const newsletterForm = document.getElementById('newsletter-form');
  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input[type="email"]');
    if (input && input.value.trim()) {
      window.showToast('You are now subscribed to the AI DISHA Frontier Intelligence Briefing.', 'Subscription Confirmed');
      input.value = '';
    }
  });
});
