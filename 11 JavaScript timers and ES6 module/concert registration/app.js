/**
 * AFTERHOURS — Feel the Sound. Live the Moment.
 * Official Client Script (Pure Vanilla JavaScript)
 * India Edition 2026 (INR ₹ Pricing)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- Pricing Configuration (Indian Rupees ₹) ---
  const PRICING = {
    general: { 
      name: 'General Admission Pass', 
      price: 2499, 
      badge: 'GENERAL ADMISSION PASS' 
    },
    vip: { 
      name: 'VIP All-Access Pass', 
      price: 5999, 
      badge: 'VIP ALL-ACCESS PASS' 
    }
  };
  const ECO_FEE = 150; // INR flat fee

  // State
  let selectedPassType = 'general';
  let passQuantity = 1;

  // Format INR Helper (e.g. 2,499, 12,148)
  const formatINR = (val) => {
    return '₹' + Math.round(val).toLocaleString('en-IN');
  };

  // --- DOM Elements ---
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerCloseBtn = document.getElementById('drawer-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-cta');

  // Pricing Card Elements
  const cardGeneral = document.getElementById('card-general');
  const cardVip = document.getElementById('card-vip');
  const passTypeSelect = document.getElementById('pass-type-select');
  const passCountInput = document.getElementById('pass-count');
  const btnDecrease = document.getElementById('btn-decrease');
  const btnIncrease = document.getElementById('btn-increase');

  // Summary Elements
  const summaryTierName = document.getElementById('summary-tier-name');
  const summaryQty = document.getElementById('summary-qty');
  const summarySubtotal = document.getElementById('summary-subtotal');
  const summaryFee = document.getElementById('summary-fee');
  const summaryTotal = document.getElementById('summary-total');

  // Form Elements
  const regForm = document.getElementById('concert-registration-form');
  const fullNameInput = document.getElementById('fullname');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const ageInput = document.getElementById('age');
  const cityInput = document.getElementById('city');
  const termsCheckbox = document.getElementById('terms-agree');

  // Schedule Filter Buttons & Rows
  const filterTabs = document.querySelectorAll('.filter-tab');
  const timelineRows = document.querySelectorAll('.timeline-row');

  // FAQ Items
  const faqItems = document.querySelectorAll('.faq-item');

  // Modal Elements
  const successModal = document.getElementById('success-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const btnDoneModal = document.getElementById('btn-done-modal');
  const btnPrintPass = document.getElementById('btn-print-pass');
  const modalAttendeeName = document.getElementById('modal-attendee-name');
  const modalAttendeeEmail = document.getElementById('modal-attendee-email');
  const modalTierBadge = document.getElementById('modal-tier-badge');
  const modalRefCode = document.getElementById('modal-ref-code');
  const modalPassQty = document.getElementById('modal-pass-qty');
  const modalTotalPrice = document.getElementById('modal-total-price');

  // ==========================================================================
  // 1. Header Scroll Behavior
  // ==========================================================================
  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ==========================================================================
  // 2. Mobile Menu Navigation
  // ==========================================================================
  const toggleMobileMenu = () => {
    const isOpen = mobileDrawer.classList.toggle('open');
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    mobileDrawer.classList.remove('open');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeMobileMenu);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close drawer if user presses Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileDrawer.classList.contains('open')) {
        closeMobileMenu();
      }
      if (successModal.classList.contains('open')) {
        closeModal();
      }
    }
  });

  // ==========================================================================
  // 3. Dynamic INR Price Calculation & Synchronization
  // ==========================================================================
  const updatePriceCalculation = () => {
    const tier = PRICING[selectedPassType] || PRICING.general;
    const subtotal = tier.price * passQuantity;
    const total = subtotal + ECO_FEE;

    // Update Summary Card in INR
    if (summaryTierName) summaryTierName.textContent = `${tier.name} (${formatINR(tier.price)} ea)`;
    if (summaryQty) summaryQty.textContent = `${passQuantity} ${passQuantity > 1 ? 'Passes' : 'Pass'}`;
    if (summarySubtotal) summarySubtotal.textContent = formatINR(subtotal);
    if (summaryFee) summaryFee.textContent = formatINR(ECO_FEE);
    if (summaryTotal) summaryTotal.textContent = formatINR(total);

    // Sync visual active state on pricing cards
    if (cardGeneral && cardVip) {
      if (selectedPassType === 'general') {
        cardGeneral.classList.add('active');
        cardGeneral.setAttribute('aria-pressed', 'true');
        cardVip.classList.remove('active');
        cardVip.setAttribute('aria-pressed', 'false');
      } else {
        cardVip.classList.add('active');
        cardVip.setAttribute('aria-pressed', 'true');
        cardGeneral.classList.remove('active');
        cardGeneral.setAttribute('aria-pressed', 'false');
      }
    }

    // Sync form select
    if (passTypeSelect && passTypeSelect.value !== selectedPassType) {
      passTypeSelect.value = selectedPassType;
    }

    // Sync input count
    if (passCountInput && parseInt(passCountInput.value, 10) !== passQuantity) {
      passCountInput.value = passQuantity;
    }
  };

  // Card click handlers
  if (cardGeneral) {
    cardGeneral.addEventListener('click', () => {
      selectedPassType = 'general';
      updatePriceCalculation();
    });
    cardGeneral.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectedPassType = 'general';
        updatePriceCalculation();
      }
    });
  }

  if (cardVip) {
    cardVip.addEventListener('click', () => {
      selectedPassType = 'vip';
      updatePriceCalculation();
    });
    cardVip.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectedPassType = 'vip';
        updatePriceCalculation();
      }
    });
  }

  // Pass Type dropdown change
  if (passTypeSelect) {
    passTypeSelect.addEventListener('change', (e) => {
      selectedPassType = e.target.value;
      updatePriceCalculation();
    });
  }

  // Stepper controls
  const setQuantity = (qty) => {
    let validQty = parseInt(qty, 10);
    if (isNaN(validQty) || validQty < 1) validQty = 1;
    if (validQty > 10) validQty = 10;
    passQuantity = validQty;
    updatePriceCalculation();
  };

  if (btnDecrease) {
    btnDecrease.addEventListener('click', () => {
      setQuantity(passQuantity - 1);
    });
  }

  if (btnIncrease) {
    btnIncrease.addEventListener('click', () => {
      setQuantity(passQuantity + 1);
    });
  }

  if (passCountInput) {
    passCountInput.addEventListener('input', (e) => {
      setQuantity(e.target.value);
    });
    passCountInput.addEventListener('blur', (e) => {
      if (!e.target.value || parseInt(e.target.value, 10) < 1) {
        setQuantity(1);
      }
    });
  }

  // Initial calculation run
  updatePriceCalculation();

  // ==========================================================================
  // 4. Schedule Stage Filtering
  // ==========================================================================
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filterValue = tab.getAttribute('data-filter');

      timelineRows.forEach(row => {
        const stage = row.getAttribute('data-stage');
        if (filterValue === 'all') {
          row.classList.remove('hidden');
        } else if (stage === filterValue || stage === 'all') {
          row.classList.remove('hidden');
        } else {
          row.classList.add('hidden');
        }
      });
    });
  });

  // ==========================================================================
  // 5. FAQ Accordion
  // ==========================================================================
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isCurrentlyActive = item.classList.contains('active');
        
        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const btn = otherItem.querySelector('.faq-question');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle this item
        if (isCurrentlyActive) {
          item.classList.remove('active');
          questionBtn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // ==========================================================================
  // 6. Form Validation & Submission
  // ==========================================================================
  const clearFieldError = (element, groupSelector) => {
    const group = element.closest(groupSelector);
    if (group) group.classList.remove('has-error');
  };

  const setFieldError = (element, groupSelector) => {
    const group = element.closest(groupSelector);
    if (group) group.classList.add('has-error');
  };

  // Real-time error removal
  if (fullNameInput) {
    fullNameInput.addEventListener('input', () => {
      if (fullNameInput.value.trim().length >= 2) {
        clearFieldError(fullNameInput, '.form-group');
      }
    });
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(emailInput.value.trim())) {
        clearFieldError(emailInput, '.form-group');
      }
    });
  }

  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      const digitsOnly = phoneInput.value.replace(/\D/g, '');
      if (digitsOnly.length >= 10) {
        clearFieldError(phoneInput, '.form-group');
      }
    });
  }

  if (ageInput) {
    ageInput.addEventListener('input', () => {
      const val = parseInt(ageInput.value, 10);
      if (!isNaN(val) && val >= 18 && val <= 100) {
        clearFieldError(ageInput, '.form-group');
      }
    });
  }

  if (cityInput) {
    cityInput.addEventListener('input', () => {
      if (cityInput.value.trim().length >= 2) {
        clearFieldError(cityInput, '.form-group');
      }
    });
  }

  if (termsCheckbox) {
    termsCheckbox.addEventListener('change', () => {
      if (termsCheckbox.checked) {
        clearFieldError(termsCheckbox, '.form-agreement');
      }
    });
  }

  const validateForm = () => {
    let isValid = true;
    let firstErrorField = null;

    // 1. Full Name
    if (!fullNameInput || fullNameInput.value.trim().length < 2) {
      setFieldError(fullNameInput, '.form-group');
      isValid = false;
      if (!firstErrorField) firstErrorField = fullNameInput;
    } else {
      clearFieldError(fullNameInput, '.form-group');
    }

    // 2. Email Address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput || !emailRegex.test(emailInput.value.trim())) {
      setFieldError(emailInput, '.form-group');
      isValid = false;
      if (!firstErrorField) firstErrorField = emailInput;
    } else {
      clearFieldError(emailInput, '.form-group');
    }

    // 3. Indian Mobile Number (at least 10 digits)
    const phoneDigits = phoneInput ? phoneInput.value.replace(/\D/g, '') : '';
    if (!phoneInput || phoneDigits.length < 10) {
      setFieldError(phoneInput, '.form-group');
      isValid = false;
      if (!firstErrorField) firstErrorField = phoneInput;
    } else {
      clearFieldError(phoneInput, '.form-group');
    }

    // 4. Age Check (18+)
    const ageVal = ageInput ? parseInt(ageInput.value, 10) : 0;
    if (!ageInput || isNaN(ageVal) || ageVal < 18 || ageVal > 100) {
      setFieldError(ageInput, '.form-group');
      isValid = false;
      if (!firstErrorField) firstErrorField = ageInput;
    } else {
      clearFieldError(ageInput, '.form-group');
    }

    // 5. City
    if (!cityInput || cityInput.value.trim().length < 2) {
      setFieldError(cityInput, '.form-group');
      isValid = false;
      if (!firstErrorField) firstErrorField = cityInput;
    } else {
      clearFieldError(cityInput, '.form-group');
    }

    // 6. Number of Passes
    if (!passCountInput || passQuantity < 1 || passQuantity > 10) {
      setFieldError(passCountInput, '.form-group');
      isValid = false;
      if (!firstErrorField) firstErrorField = passCountInput;
    } else {
      clearFieldError(passCountInput, '.form-group');
    }

    // 7. Terms Agreement
    if (!termsCheckbox || !termsCheckbox.checked) {
      setFieldError(termsCheckbox, '.form-agreement');
      isValid = false;
      if (!firstErrorField) firstErrorField = termsCheckbox;
    } else {
      clearFieldError(termsCheckbox, '.form-agreement');
    }

    if (!isValid && firstErrorField) {
      firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstErrorField.focus();
    }

    return isValid;
  };

  // Generate unique Indian reservation reference code
  const generateBookingReference = (tierCode) => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const prefix = tierCode === 'vip' ? 'VIP' : 'GEN';
    return `AFH-IND-${prefix}-${code}`;
  };

  // Submit Handler
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      // Collect values
      const attendeeName = fullNameInput.value.trim();
      const attendeeEmail = emailInput.value.trim();
      const tierInfo = PRICING[selectedPassType] || PRICING.general;
      const subtotal = tierInfo.price * passQuantity;
      const totalAmount = subtotal + ECO_FEE;
      const bookingRef = generateBookingReference(selectedPassType);

      // Populate Digital Pass Modal
      if (modalAttendeeName) modalAttendeeName.textContent = attendeeName;
      if (modalAttendeeEmail) modalAttendeeEmail.textContent = attendeeEmail;
      if (modalTierBadge) modalTierBadge.textContent = tierInfo.badge;
      if (modalRefCode) modalRefCode.textContent = bookingRef;
      if (modalPassQty) modalPassQty.textContent = `${passQuantity} ${passQuantity > 1 ? 'Passes' : 'Pass'}`;
      if (modalTotalPrice) modalTotalPrice.textContent = formatINR(totalAmount);

      // Open Modal
      openModal();
    });
  }

  // ==========================================================================
  // 7. Modal Handlers
  // ==========================================================================
  const openModal = () => {
    if (successModal) {
      successModal.classList.add('open');
      successModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (modalCloseBtn) modalCloseBtn.focus();
    }
  };

  const closeModal = () => {
    if (successModal) {
      successModal.classList.remove('open');
      successModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (btnDoneModal) {
    btnDoneModal.addEventListener('click', () => {
      closeModal();
      if (regForm) regForm.reset();
      selectedPassType = 'general';
      passQuantity = 1;
      updatePriceCalculation();
    });
  }

  if (btnPrintPass) {
    btnPrintPass.addEventListener('click', () => {
      window.print();
    });
  }

  // Click outside modal card to close
  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        closeModal();
      }
    });
  }

  // Smooth anchor scrolling offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerHeight = header ? header.offsetHeight : 0;
          const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - (headerHeight + 10);

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

});
