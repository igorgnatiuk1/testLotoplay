const arrayConcert = [
  {
    city: "Київ — Docker-G Pub",
    total: 250,
    date: `25.10.2025, 19:00`,
    id: 1,
  },
  {
    city: "Львів — !FESTrepublic",
    total: 400,
    date: `01.11.2025, 20:00`,
    id: 2,
  },
  {
    city: "Одеса — Зелен театр",
    total: 700,
    date: `01.11.2025, 20:00`,
    id: 3,
  },
  {
    city: "Харків — ArtZavod",
    total: 500,
    date: `16.11.2025, 19:00`,
    id: 4,
  },
];

const tableEl = document.querySelector(".table__box");

const backdropEl = document.querySelector("[data-table]");

tableEl.addEventListener("click", (evt) => {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }

  const elemId = Number(evt.target.id);
  const elem = arrayConcert.find((item) => item.id === elemId);

  if (!elem) {
    console.warn("Концерт з таким id не знайдено:", elemId);
    return;
  }

  const markup = `
    <div class="modal__ticket"> 
      <h2 class="modal__title">Замовлення квитка</h2>
      <div class="ticket__box">
        <h3 class="ticket">Ти обрав концерт:</h3>
        <div class="ticket__elem">
          <svg width="24px" height="16px">
            <use href="./images/sprite.svg#icon-location" aria-label="location"></use>
          </svg>
          <p>${elem.city}</p>
        </div>
        <div class="ticket__elem">
          <svg width="24px" height="16px">
            <use href="./images/sprite.svg#icon-calendar" aria-label="calendar"></use>
          </svg>
          <p>${elem.date}</p>
        </div>
        <p class="ticket__numbers">Залишилося ${elem.total} місць</p>
      </div>

      <form action="/sending" method="GET" class="modal__form">
        <label>
          Ім'я
          <input type="text" required name="username" class="modal__input">
        </label>
        <label>
          Email
          <input type="email" required name="email" class="modal__input">
        </label>

        <div class="button__box">
          <button type="submit" class="modal__button button" data-ticket-confirm>
            Підтвердити замовлення
          </button>
          <button type="button" class="modal__button button" data-ticket-cancel>
            Скасувати
          </button>
        </div>
      </form>
    </div>
  `;

  backdropEl.innerHTML = markup;
  backdropEl.classList.remove("is-hidden");
  const confirmBtn = backdropEl.querySelector("[data-ticket-confirm]");
  const cancelBtn = backdropEl.querySelector("[data-ticket-cancel]");


  function closeTicketModal() {
    backdropEl.innerHTML = "";
    backdropEl.classList.add("is-hidden");
  }

  confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();

    closeTicketModal();
  });

  cancelBtn.addEventListener("click", () => {
    closeTicketModal();
  });
});
