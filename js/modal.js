(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    // Додавання обробника подій для відкриття модального вікна
    refs.openModalBtn.addEventListener("click", () => {
        refs.modal.classList.remove("is-hidden");
    });

    // Додавання обробника подій для закриття модального вікна
    refs.closeModalBtn.addEventListener("click", () => {
        refs.modal.classList.add("is-hidden");
    });
   
    
})();
