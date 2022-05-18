(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    mobileButton: document.querySelector('.mobile-button'),
    menu: document.querySelector('[data-menu]'),
    modal: document.querySelector('[data-modal]'),
    modal: document.querySelector('[data-modal]'),
    mobileNav: document.querySelector('.mobile-nav'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }

  refs.mobileButton.addEventListener('click', () => {
    toggleModal();
    refs.modal.classList.toggle('is-hidden');
  });

  refs.mobileNav.addEventListener('click', e => {
    if (e.target.classList.contains('mobile-nav-list__link')) {
      toggleModal();
    }
  });
})();
