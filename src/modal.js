const refs = {
  openModalBtn: document.querySelectorAll("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
};

refs.openModalBtn.forEach((el) => {
  el.addEventListener("click", toggleModal);
});

refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  console.log('11111 :>> ', 11111);
  refs.modal.classList.toggle("is-hidden");
}