document.addEventListener("DOMContentLoaded", () => {

  // ------------------------------------
  // GALLERY
  // ------------------------------------

  const thumbs = document.querySelectorAll(".gallery__thumb");
  const mainImage = document.querySelector(".gallery__image");

  thumbs.forEach((thumb) => {

    thumb.addEventListener("click", () => {

      const image = thumb.querySelector("img");

      if (!image) return;

      thumbs.forEach(item => {
        item.classList.remove("active");
      });

      thumb.classList.add("active");

      mainImage.style.opacity = "0";

      setTimeout(() => {

        mainImage.src = image.src;
        mainImage.alt = image.alt;

        mainImage.style.opacity = "1";

      }, 150);

    });

  });


  // ------------------------------------
  // OPTIONS / PRICE
  // ------------------------------------

  const weightInputs = document.querySelectorAll(
    'input[name="weight"]'
  );

  const priceElement = document.querySelector("#price");
  const oldPriceElement = document.querySelector("#oldPrice");

  const artElement = document.querySelector("#art");

  let currentPrice = 326.40;

  let currentOldPrice = 349.20;

  let currentArt = "01306";

  weightInputs.forEach((input) => {

    input.addEventListener("change", () => {

      currentPrice = Number(input.dataset.price);
      currentOldPrice = Number(input.dataset.oldprice);

      currentArt = input.dataset.art;

      updatePrice();
      updateArt();

    });

  });


  // ------------------------------------
  // QUANTITY
  // ------------------------------------

  const quantityElement = document.querySelector("#quantity");

  const quantityButtons = document.querySelectorAll(
    ".quantity__button"
  );

  let quantity = 1;

  quantityButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const action = button.dataset.action;

      if (action === "plus") {
        quantity++;
      }

      if (action === "minus" && quantity > 1) {
        quantity--;
      }

      quantityElement.textContent = quantity;

      updatePrice();

    });

  });


  function updatePrice() {

    const total = currentPrice * quantity;
    const oldTotal = currentOldPrice * quantity;

    priceElement.textContent =
      total.toLocaleString("ru-RU");

    oldPriceElement.textContent =
      oldTotal.toLocaleString("ru-RU");

  }

  function updateArt() {
    artElement.textContent = currentArt;
  }


  // ------------------------------------
  // FAVORITE
  // ------------------------------------

  const favorite = document.querySelector("#favorite");

  favorite.addEventListener("click", () => {

    favorite.classList.toggle("active");

    favorite.textContent =
      favorite.classList.contains("active")
        ? "♥"
        : "♡";

  });


  // ------------------------------------
  // ADD TO CART
  // ------------------------------------

  const addToCart = document.querySelector("#addToCart");

  addToCart.addEventListener("click", () => {

    const selectedWeight =
      document.querySelector(
        'input[name="weight"]:checked'
      );

    const weight = selectedWeight.value;

    console.log({
      product: "Ананасовый улун",
      weight: `${weight} г`,
      quantity,
      price: currentPrice * quantity
    });

    const originalText = addToCart.textContent;

    addToCart.textContent = "Добавлено ✓";

    setTimeout(() => {
      addToCart.textContent = originalText;
    }, 1500);

  });


  // ------------------------------------
  // ACCORDIONS
  // ------------------------------------

  const accordions =
    document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {

    const header =
      accordion.querySelector(".accordion__header");

    const icon =
      accordion.querySelector(".accordion__icon");

    header.addEventListener("click", () => {

      const isActive =
        accordion.classList.contains("active");

      accordion.classList.toggle("active");

      icon.textContent =
        !isActive ? "−" : "+";

    });

  });

});
