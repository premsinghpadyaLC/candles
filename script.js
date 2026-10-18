
/*
  LITTLE FLAME STUDIO
*/

const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER";

const PRODUCTS = [
  { id: "bubble-candle", name: "Bubble Candle", category: "Bubble", price: 12, color: "cream", symbol: "◉", description: "A playful little statement." },
  { id: "flower-candle", name: "Bloom Flower Candle", category: "Flowers", price: 14, color: "pink", symbol: "✿", description: "A bloom that lasts a little longer." },
  { id: "heart-candle", name: "Little Heart Candle", category: "Hearts", price: 10, color: "rose", symbol: "♡", description: "A thoughtful gift from the heart." },
  { id: "teddy-candle", name: "Teddy Bear Candle", category: "Figures", price: 16, color: "sand", symbol: "♧", description: "A cute companion for gifting." },
  { id: "twist-candle", name: "Twist Sculptural Candle", category: "Sculptural", price: 15, color: "lavender", symbol: "〰", description: "A modern touch for your space." },
  { id: "flower-bouquet", name: "Flower Bouquet Candle", category: "Flowers", price: 18, color: "peach", symbol: "❀", description: "A little bouquet for any occasion." },
  { id: "mini-heart-set", name: "Mini Heart Set", category: "Hearts", price: 20, color: "rose", symbol: "♥", description: "A set of tiny heartfelt details." },
  { id: "seasonal-candle", name: "Seasonal Glow Candle", category: "Seasonal", price: 17, color: "sage", symbol: "✳", description: "A seasonal favourite for gifting." },
  { id: "sculptural-arch", name: "Sculptural Arch Candle", category: "Sculptural", price: 16, color: "sand", symbol: "∩", description: "Simple shapes with a little character." }
];

// The bag stores quantities by product ID.
const cart = {};

let activeFilter = "All";
let activeSort = "featured";
let toastTimer;

const $ = (selector) => document.querySelector(selector);

const productGrid = $("#productGrid");
const cartCount = $("#cartCount");
const drawerCount = $("#drawerCount");
const cartItems = $("#cartItems");
const cartTotal = $("#cartTotal");
const cartDrawer = $("#cartDrawer");
const cartBackdrop = $("#cartBackdrop");
const toast = $("#toast");

const money = (amount) =>
  new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD"
  }).format(amount);

function getQuantity(id) {
  return cart[id] || 0;
}

function getTotalQuantity() {
  return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
}

function getSubtotal() {
  return PRODUCTS.reduce(
    (sum, product) => sum + product.price * getQuantity(product.id),
    0
  );
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function renderProducts() {
  let visibleProducts = PRODUCTS.filter((product) => {
    return activeFilter === "All" || product.category === activeFilter;
  });

  if (activeSort === "low") {
    visibleProducts.sort((a, b) => a.price - b.price);
  } else if (activeSort === "high") {
    visibleProducts.sort((a, b) => b.price - a.price);
  } else if (activeSort === "az") {
    visibleProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (!visibleProducts.length) {
    productGrid.innerHTML = "<p>No candles found in this category.</p>";
    return;
  }

  productGrid.innerHTML = visibleProducts.map((product) => {
    const quantity = getQuantity(product.id);

    return `
      <article class="product-card">
        <div class="product-image product-image-${product.color}">
          <span class="product-symbol" aria-hidden="true">${product.symbol}</span>
          <span class="product-category">${product.category}</span>
        </div>

        <div class="product-info">
          <div class="product-title-row">
            <h3>${product.name}</h3>
            <span class="product-price">${money(product.price)}</span>
          </div>

          <p class="product-description">${product.description}</p>

          <div class="product-actions" data-product-id="${product.id}">
            ${
              quantity === 0
                ? `<button class="add-to-bag" data-action="add" data-id="${product.id}">
                     Add to Bag <span aria-hidden="true">＋</span>
                   </button>`
                : `<div class="quantity-control" aria-label="Quantity for ${product.name}">
                     <button type="button" data-action="minus" data-id="${product.id}" aria-label="Decrease ${product.name} quantity">−</button>
                     <span class="quantity-value" aria-live="polite">${quantity}</span>
                     <button type="button" data-action="plus" data-id="${product.id}" aria-label="Increase ${product.name} quantity">+</button>
                   </div>`
            }
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderCart() {
  const totalQuantity = getTotalQuantity();
  const subtotal = getSubtotal();

  cartCount.textContent = totalQuantity;
  drawerCount.textContent = `(${totalQuantity})`;
  cartTotal.textContent = money(subtotal);

  if (totalQuantity === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <span aria-hidden="true">♡</span>
        <h3>Your bag is waiting</h3>
        <p>Add a little something lovely to get started.</p>
        <button type="button" class="button button-dark" id="emptyCartShop">Explore candles</button>
      </div>
    `;
    return;
  }

  cartItems.innerHTML = PRODUCTS
    .filter((product) => getQuantity(product.id) > 0)
    .map((product) => {
      const quantity = getQuantity(product.id);

      return `
        <div class="cart-item">
          <div class="cart-item-art product-image-${product.color}">
            <span aria-hidden="true">${product.symbol}</span>
          </div>

          <div class="cart-item-details">
            <h3>${product.name}</h3>
            <p>${money(product.price)} each</p>

            <div class="cart-quantity">
              <button type="button" data-action="minus" data-id="${product.id}" aria-label="Decrease ${product.name} quantity">−</button>
              <span>${quantity}</span>
              <button type="button" data-action="plus" data-id="${product.id}" aria-label="Increase ${product.name} quantity">+</button>
              <button type="button" class="remove-item" data-action="remove" data-id="${product.id}">Remove</button>
            </div>
          </div>

          <strong class="cart-line-total">${money(product.price * quantity)}</strong>
        </div>
      `;
    }).join("");
}

function refreshShop() {
  renderProducts();
  renderCart();
}

function addProduct(id) {
  cart[id] = getQuantity(id) + 1;
  refreshShop();

  const product = PRODUCTS.find((item) => item.id === id);
  if (product) showToast(`${product.name} added to your bag`);
}

function decreaseProduct(id) {
  const quantity = getQuantity(id);

  if (quantity <= 1) {
    delete cart[id];
  } else {
    cart[id] = quantity - 1;
  }

  refreshShop();
}

function increaseProduct(id) {
  cart[id] = getQuantity(id) + 1;
  refreshShop();
}

function removeProduct(id) {
  delete cart[id];
  refreshShop();
  showToast("Item removed from your bag");
}

// Delegated events keep working when product cards are re-rendered.
document.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-action]");

  if (actionButton) {
    const { action, id } = actionButton.dataset;
    if (!PRODUCTS.some((product) => product.id === id)) return;

    if (action === "add" || action === "plus") {
      action === "add" ? addProduct(id) : increaseProduct(id);
    } else if (action === "minus") {
      decreaseProduct(id);
    } else if (action === "remove") {
      removeProduct(id);
    }

    return;
  }

  if (event.target.closest("#emptyCartShop")) {
    closeCart();
    $("#shop").scrollIntoView({ behavior: "smooth" });
  }
});

// Category filters.
$("#filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  activeFilter = button.dataset.filter;

  $("#filters").querySelectorAll(".filter").forEach((filterButton) => {
    filterButton.classList.toggle("active", filterButton === button);
  });

  renderProducts();
});

document.querySelectorAll("[data-filter-link]").forEach((link) => {
  link.addEventListener("click", () => {
    activeFilter = link.dataset.filterLink;

    $("#filters").querySelectorAll(".filter").forEach((button) => {
      button.classList.toggle("active", button.dataset.filter === activeFilter);
    });

    renderProducts();
  });
});

// Sorting.
$("#sortProducts").addEventListener("change", (event) => {
  activeSort = event.target.value;
  renderProducts();
});

// Shopping bag drawer.
function openCart() {
  cartDrawer.classList.add("open");
  cartBackdrop.classList.add("show");
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("cart-open");
  $("#closeCart").focus();
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartBackdrop.classList.remove("show");
  cartDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("cart-open");
  $("#openCart").focus();
}

$("#openCart").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
$("#continueShopping").addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", closeCart);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && cartDrawer.classList.contains("open")) {
    closeCart();
  }
});

// WhatsApp helpers.
function openWhatsApp(message) {
  const phone = WHATSAPP_NUMBER.replace(/\D/g, "");

  if (!phone || phone === "YOUR_WHATSAPP_NUMBER") {
    showToast("Please set your WhatsApp number in script.js first.");
    return;
  }

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

$("#orderNow").addEventListener("click", () => {
  const selectedProducts = PRODUCTS.filter((product) => getQuantity(product.id) > 0);

  if (selectedProducts.length === 0) {
    showToast("Your bag is empty. Add a candle first.");
    return;
  }

  const lines = selectedProducts.map((product) => {
    const quantity = getQuantity(product.id);
    return `• ${product.name} × ${quantity} — ${money(product.price * quantity)} (${money(product.price)} each)`;
  });

  const message = [
    "Hello Little Flame Studio! I'd like to place an order:",
    "",
    ...lines,
    "",
    `Estimated total: ${money(getSubtotal())}`,
    "",
    "Please confirm availability, delivery options, and payment details. Thank you!"
  ].join("\n");

  openWhatsApp(message);
});

function openCustomOrder() {
  openWhatsApp("Hello Little Flame Studio! I'd like to ask about a custom candle order. Could you please share the available styles, colours, prices, and options?");
}

$("#customWhatsApp").addEventListener("click", (event) => {
  event.preventDefault();
  openCustomOrder();
});

$("#footerWhatsApp").addEventListener("click", (event) => {
  event.preventDefault();
  openCustomOrder();
});

// Mobile navigation.
const mobileMenuButton = $("#mobileMenuButton");
const mobileNav = $("#mobileNav");

mobileMenuButton.addEventListener("click", () => {
  const isOpen = !mobileNav.hidden;
  mobileNav.hidden = isOpen;
  mobileMenuButton.setAttribute("aria-expanded", String(!isOpen));
  mobileMenuButton.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
  mobileMenuButton.textContent = isOpen ? "☰" : "×";
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.hidden = true;
    mobileMenuButton.setAttribute("aria-expanded", "false");
    mobileMenuButton.setAttribute("aria-label", "Open menu");
    mobileMenuButton.textContent = "☰";
  });
});

$("#year").textContent = new Date().getFullYear();

// Initial render.
refreshShop();
