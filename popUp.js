(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),

    modal: document.querySelector("[data-modal]"),
    form: document.querySelector(".modal__form"),
  };

  [...refs.openModalBtn].map((elem) =>
    elem.addEventListener("click", toggleModal)
  );

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    if (refs.modal.classList.contains("is-hidden")) {
      refs.form.reset();
    }
  }
})();


