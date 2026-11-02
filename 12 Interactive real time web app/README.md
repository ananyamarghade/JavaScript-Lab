# Experiment No. 12
**Student Name:** Ananya Marghade

**PRN:** 24070521004

**BATCH:** A1

**System File Path:** `"D:\Ananya\JavaScript LAB\EXP12\fooddelivery\index.html"` | `"D:\Ananya\JavaScript LAB\EXP12\fooddelivery\script.js"` | `"D:\Ananya\JavaScript LAB\EXP12\fooddelivery\style.css"` | `"D:\Ananya\JavaScript LAB\EXP12\fooddelivery\menu.json"` | `"D:\Ananya\JavaScript LAB\EXP12\TechNova Workshop Booking.html"` | `"D:\Ananya\JavaScript LAB\EXP12\sih-site\index.html"` | `"D:\Ananya\JavaScript LAB\EXP12\sih-site\js\data.js"` | `"D:\Ananya\JavaScript LAB\EXP12\sih-site\js\app.js"` | `"D:\Ananya\JavaScript LAB\EXP12\sih-site\css\styles.css"`

**GITHUB File Path:** `12 Interactive real time web app/fooddelivery/index.html` | `12 Interactive real time web app/fooddelivery/script.js` | `12 Interactive real time web app/fooddelivery/style.css` | `12 Interactive real time web app/fooddelivery/menu.json` | `12 Interactive real time web app/TechNova Workshop Booking.html` | `12 Interactive real time web app/sih-site/index.html` | `12 Interactive real time web app/sih-site/js/data.js` | `12 Interactive real time web app/sih-site/js/app.js` | `12 Interactive real time web app/sih-site/css/styles.css`

---

## Experiment Title
Develop an Interactive, Real-Time Web Application Using jQuery, AJAX and Web Storage

## Software / Tools Required
1. Visual Studio Code (with the Live Server extension)
2. Google Chrome
3. HTML5
4. CSS3
5. JavaScript (ES6)
6. jQuery 3.7.1 (CDN)
7. Google Fonts (CDN)

---

## Experiment Program Code

### FoodieGo — Food Delivery Web App — `fooddelivery/`
A complete single-page food ordering application (**"FoodieGo — Fresh food. Happy mood."**) with a home page and menu, a sliding cart drawer, a checkout form, an order confirmation page and a *My Profile & Orders* page with delivery tracking. The page is built with HTML, the menu is loaded from a JSON file with **jQuery AJAX**, and the interface switches between views (home, checkout, confirmation, orders) without ever reloading the page.

#### `12 Interactive real time web app/fooddelivery/index.html`
Markup for all views of the app — header with search, cart and profile buttons, hero section, category tabs, filters, product grid, offers, about section, checkout form, confirmation, orders list and the cart drawer. jQuery 3.7.1 is loaded from the CDN, followed by `script.js`.

#### `12 Interactive real time web app/fooddelivery/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>FoodieGo – Fresh food. Happy mood.</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
<script>var FALLBACK = "data:image/svg+xml;utf8," + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='500' height='340'><rect width='100%' height='100%' fill='#EAF5EE'/><text x='50%' y='54%' font-size='90' text-anchor='middle'>🍽️</text></svg>");</script>
</head>
<body>
<header class="nav">
  <a class="logo" href="#home" data-go="home"><span class="logo-mark" aria-hidden="true"><img class="mascot" src="data:...BASE64..." alt="FoodieGo chef cat mascot" width="110" height="132"></span><span><b>FoodieGo</b><small>Fresh food. Happy mood.</small></span></a>
  <nav class="links" id="links">
    <a href="#home" data-go="home" class="active">Home</a>
    <a href="#menu" data-go="menu">Explore Menu</a>
    <a href="#offers" data-go="offers">Offers</a>
    <a href="#about" data-go="about">About Us</a>
  </nav>
  <div class="nav-right">
    <label class="search"><span aria-hidden="true">🔍</span><input id="searchInput" type="search" placeholder="Search for delicious food..." aria-label="Search food"></label>
    <button class="icon-btn" id="openCart" aria-label="Open cart">🛒<span class="badge" id="cartCount">0</span></button>
    <button class="icon-btn" id="openProfile" aria-label="Profile and orders">👤</button>
    <button class="icon-btn menu-toggle" id="menuToggle" aria-label="Toggle menu">☰</button>
  </div>
</header>

<main id="homeView">
  <section class="hero" id="home">
    <div class="hero-text">
      <h1>Good Food,<br>Great Mood.</h1>
      <p>Discover delicious meals made fresh and delivered straight to your doorstep.</p>
      <div class="cta"><button class="btn" data-go="menu">Explore Menu →</button><button class="btn outline" id="orderNow">Order Now</button></div>
      <p class="meta">⏱ 30 min delivery &nbsp;|&nbsp; ⭐ 4.5+ rating</p>
    </div>
    <div class="hero-img">
      <img src="data:...BASE64..." alt="Paneer Butter Masala, featured dish">
      <div class="stamp">Special Offer<b>10% OFF</b></div>
      <div class="featured">Featured · Paneer Butter Masala <b>₹249</b></div>
    </div>
  </section>

  <section class="wrap" id="menu">
    <div class="cats" id="cats" role="tablist"></div>
    <div class="menu-head">
      <h2 id="menuTitle">Popular Dishes</h2>
      <div class="toolbar">
        <div class="chips" id="dietChips">
          <button class="chip active" data-diet="all">All</button>
          <button class="chip" data-diet="veg">🟢 Veg</button>
          <button class="chip" data-diet="non">🔴 Non-Veg</button>
        </div>
        <label>Sort by:
          <select id="sortSel"><option value="popular">Popular</option><option value="low">Price: Low to High</option><option value="high">Price: High to Low</option><option value="rating">Highest Rated</option></select>
        </label>
        <button class="btn small outline" id="resetFilters">Reset filters</button>
      </div>
    </div>
    <p class="count" id="resultCount" aria-live="polite"></p>
    <div id="grid" class="grid"><div class="state"><div class="spinner"></div>Loading delicious menu…</div></div>
  </section>

  <section class="wrap reveal" id="offers">
    <h2>Offers for you</h2>
    <div class="offers">
      <div class="offer o1"><div><h3>FOODIE10</h3><p>Get 10% OFF<br><small>Max ₹100</small></p></div><button class="btn small copy" data-code="FOODIE10">Copy Code</button></div>
      <div class="offer o2"><div><h3>WELCOME50</h3><p>Flat ₹50 OFF<br><small>On orders above ₹299</small></p></div><button class="btn small copy" data-code="WELCOME50">Copy Code</button></div>
      <div class="offer o3"><div><h3>FREESHIP</h3><p>Free Delivery<br><small>Apply in cart</small></p></div><button class="btn small copy" data-code="FREESHIP">Copy Code</button></div>
    </div>
  </section>

  <section class="wrap about reveal" id="about">
    <h2>About FoodieGo</h2>
    <p>FoodieGo brings your favourite Indian dishes — from creamy North Indian curries and crisp South Indian dosas to street-food chaat, biryani and desserts — cooked fresh and delivered to your door. This is a college demo project: payments and delivery tracking are simulated.</p>
  </section>
</main>

<main id="checkoutView" class="wrap view" hidden>
  <button class="link-btn" data-go="home">← Back to menu</button>
  <h2>Checkout</h2>
  <div class="co-layout">
    <form id="checkoutForm" novalidate>
      <fieldset><legend>Delivery details</legend>
        <label>Full name<input name="name" id="fName" autocomplete="name"><em class="err"></em></label>
        <label>Mobile number<input name="mobile" id="fMobile" inputmode="numeric" maxlength="10" placeholder="10-digit number"><em class="err"></em></label>
        <label>Delivery address<textarea name="address" id="fAddress" rows="2"></textarea><em class="err"></em></label>
        <div class="two"><label>City<input name="city" id="fCity"><em class="err"></em></label>
        <label>PIN code<input name="pin" id="fPin" inputmode="numeric" maxlength="6"><em class="err"></em></label></div>
      </fieldset>
      <fieldset><legend>Payment method</legend>
        <label class="radio"><input type="radio" name="pay" value="Cash on Delivery"> Cash on Delivery</label>
        <label class="radio"><input type="radio" name="pay" value="UPI (simulated)"> UPI (simulation)</label>
        <label class="radio"><input type="radio" name="pay" value="Card (simulated)"> Card (simulation)</label>
        <em class="err" id="payErr"></em>
        <p class="note">No real payment is processed. Do not enter card or UPI credentials.</p>
      </fieldset>
      <button class="btn block" type="submit">Place Order</button>
    </form>
    <aside class="panel"><h3>Order summary</h3><div id="coItems"></div><div id="coBill"></div></aside>
  </div>
</main>

<main id="confirmView" class="wrap view center" hidden>
  <div class="check">✓</div><h2>Order placed!</h2>
  <p>Your order <b id="confId"></b> has been confirmed.<br>Estimated delivery: 30–40 minutes.</p>
  <div class="cta"><button class="btn" id="trackNow">Track Order</button><button class="btn outline" data-go="menu">Order more</button></div>
</main>

<main id="ordersView" class="wrap view" hidden>
  <button class="link-btn" data-go="home">← Back to menu</button>
  <h2>My Profile &amp; Orders</h2>
  <div class="panel" id="profileBox"></div>
  <p class="note">Order tracking is simulated – statuses advance automatically while this page is open.</p>
  <div id="ordersList"></div>
</main>

<footer class="footer">
  <p class="by">Designed By</p>
  <h3>Ananya Marghade</h3>
  <p>PRN 24070521004</p>
  <p>Batch A1</p>
</footer>

<div class="overlay" id="overlay"></div>
<aside class="drawer" id="drawer" aria-label="Shopping cart" aria-hidden="true">
  <div class="drawer-head"><h3>🛒 Your Cart (<span id="drawerCount">0</span>)</h3><button class="icon-btn" id="closeCart" aria-label="Close cart">✕</button></div>
  <div class="drawer-body" id="cartItems"></div>
  <div class="drawer-foot" id="cartFoot">
    <form id="couponForm" class="coupon"><input id="couponInput" placeholder="Enter Coupon Code" aria-label="Coupon code"><button class="btn small" type="submit">Apply</button></form>
    <p id="couponMsg" class="cmsg" aria-live="polite"></p>
    <div id="cartBill"></div>
    <button class="btn block" id="toCheckout">Proceed to Checkout →</button>
    <button class="link-btn" id="clearCart">Clear cart</button>
  </div>
</aside>
<div id="toasts" aria-live="polite"></div>
<button id="toTop" aria-label="Scroll to top" hidden>↑</button>

<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="script.js"></script>
</body>
</html>
```

> **Note:** long Base64-encoded image data embedded in this file is shortened to `data:...BASE64...` here for readability. The complete file is in the folder.

### App Logic — `script.js`
All behaviour of the app is written with jQuery and plain ES5/ES6 JavaScript.

- **AJAX:** `$.ajax({ url: "menu.json", dataType: "json" })` loads the products. A spinner is shown while loading, and the `error` callback shows a retry state if the request fails.
- **Rendering and filtering:** the product grid is built from the loaded array. Dishes can be filtered by category, by *Veg / Non-Veg* and by a live search box (name, description and category), and sorted by popularity, price (low to high / high to low) or rating. The result count is updated on every change.
- **Cart and bill:** `bill()` calculates the item subtotal, the delivery fee (₹30, free above ₹499), a ₹5 platform fee, 5% GST and the coupon discount. Coupons `FOODIE10` (10% off, max ₹100), `WELCOME50` (₹50 off above ₹299) and `FREESHIP` are validated, and only one coupon can be used per order.
- **Web Storage:** the cart, the applied coupon, the saved customer details and all placed orders are stored in `localStorage` (`fg_cart`, `fg_coupon`, `fg_customer`, `fg_orders`) with `JSON.stringify()` / `JSON.parse()`, so they survive a refresh.
- **Checkout validation:** name, 10-digit Indian mobile number (`/^[6-9]\d{9}$/`), address, city, 6-digit PIN code (`/^[1-9]\d{5}$/`) and payment method are validated with inline error messages, and the mobile and PIN fields accept digits only.
- **Real-time order tracking:** `setInterval()` advances every active order through *Order Placed → Preparing → Out for Delivery → Delivered* every 10 seconds, saves the new status and re-renders the orders page if it is open.
- **Other interactions:** event delegation with `$(document).on()` for dynamically created buttons, toast notifications with `setTimeout()` and `fadeOut()`, a copy-to-clipboard button for offer codes, `Escape` to close the cart, an `IntersectionObserver` reveal animation, a scroll-to-top button and a responsive mobile menu.

#### `12 Interactive real time web app/fooddelivery/script.js`
```js
/* FoodieGo – jQuery + LocalStorage + AJAX */
var CATS = [["All Items","🍽️"],["North Indian","🍛"],["South Indian","🥞"],["Street Food","🥟"],["Pizza & Burgers","🍔"],["Biryani & Rice","🍚"],["Desserts","🍰"],["Beverages","🥤"]];
var STEPS = ["Order Placed","Preparing","Out for Delivery","Delivered"];
var COUPONS = {
  FOODIE10: { label: "10% off (max ₹100)", calc: function (s) { return Math.min(s * 0.10, 100); } },
  WELCOME50: { label: "₹50 off", min: 299, calc: function () { return 50; } },
  FREESHIP: { label: "free delivery", calc: function () { return 0; }, freeShip: true }
};
var products = [];
var filters = { cat: "All Items", diet: "all", q: "", sort: "popular" };

/* ---------- storage helpers ---------- */
function load(key, def) {
  try { var v = JSON.parse(localStorage.getItem(key)); return (v === null || v === undefined) ? def : v; }
  catch (e) { return def; }
}
function save(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }
var cart = load("fg_cart", []);            // [{id, qty}]
var coupon = load("fg_coupon", null);
var orders = load("fg_orders", []);
var customer = load("fg_customer", {});
if (!Array.isArray(cart)) cart = [];
if (!Array.isArray(orders)) orders = [];
if (typeof coupon !== "string" || !COUPONS[coupon]) coupon = null;

/* ---------- utils ---------- */
function money(n) { return "₹" + (Math.round(n * 100) / 100).toFixed(2).replace(/\.00$/, ""); }
function esc(s) { return $("<div>").text(s == null ? "" : s).html(); }
function byId(id) { return products.filter(function (p) { return p.id === id; })[0]; }
function toast(msg, isErr) {
  var $t = $("<div class='toast'>").toggleClass("err", !!isErr).text(msg).appendTo("#toasts");
  setTimeout(function () { $t.fadeOut(250, function () { $t.remove(); }); }, 2200);
}

/* ---------- AJAX: load menu ---------- */
function loadMenu() {
  $("#grid").html("<div class='state'><div class='spinner'></div>Loading delicious menu…</div>");
  $.ajax({
    url: "menu.json", method: "GET", dataType: "json",
    success: function (response) {
      products = response;
      cart = cart.filter(function (c) { return byId(c.id); });
      renderGrid(); renderCart();
    },
    error: function (xhr, status, error) {
      $("#grid").html("<div class='state'><div class='big'>⚠️</div><p>Couldn't load the menu (" + esc(error || status) + ").<br>Run the site with a local server such as VS Code Live Server, not file://.</p><button class='btn small' id='retryMenu'>Retry</button></div>");
    }
  });
}

/* ---------- categories & product grid ---------- */
function renderCats() {
  $("#cats").empty();
  CATS.forEach(function (c) {
    $("#cats").append("<button class='cat" + (c[0] === filters.cat ? " active" : "") + "' data-cat='" + esc(c[0]) + "'><span>" + c[1] + "</span>" + esc(c[0]) + "</button>");
  });
}
function filtered() {
  var q = filters.q.toLowerCase().trim();
  var list = products.filter(function (p) {
    if (filters.cat !== "All Items" && p.category !== filters.cat) return false;
    if (filters.diet === "veg" && !p.veg) return false;
    if (filters.diet === "non" && p.veg) return false;
    if (q && (p.name + " " + p.description + " " + p.category + (p.veg ? " veg vegetarian" : " non-veg chicken egg")).toLowerCase().indexOf(q) < 0) return false;
    return true;
  });
  var s = filters.sort;
  list.sort(function (a, b) {
    if (s === "low") return a.price - b.price;
    if (s === "high") return b.price - a.price;
    if (s === "rating") return b.rating - a.rating || b.reviews - a.reviews;
    return b.reviews - a.reviews;
  });
  return list;
}
function renderGrid() {
  var list = filtered();
  $("#menuTitle").text(filters.cat === "All Items" ? "Popular Dishes" : filters.cat);
  $("#resultCount").text(list.length + " of " + products.length + " dishes");
  if (!list.length) {
    $("#grid").html("<div class='state'><div class='big'>🔍</div><p>No dishes match your search or filters.</p><button class='btn small' id='emptyReset'>Reset filters</button></div>");
    return;
  }
  var html = "";
  list.forEach(function (p, i) {
    html += "<article class='card' style='--i:" + (i % 12) + "'><div class='ph'><img loading='lazy' src='" + esc(p.image) + "' alt='" + esc(p.name) + "' onerror=\"this.onerror=null;this.src=FALLBACK\">" +
      (p.bestseller ? "<span class='tag'>Bestseller</span>" : "") +
      "<span class='dot " + (p.veg ? "" : "non") + "' title='" + (p.veg ? "Vegetarian" : "Non-vegetarian") + "'></span></div>" +
      "<div class='body'><h3>" + esc(p.name) + "</h3><p class='desc'>" + esc(p.description) + "</p>" +
      "<div class='info'><span>⭐ " + p.rating + " (" + (p.reviews / 1000).toFixed(1) + "k)</span><span>⏱ " + p.prepTime + " min</span></div>" +
      "<div class='row'><span class='price'>₹" + p.price + "</span><button class='btn small add-to-cart' data-id='" + p.id + "'>Add to Cart</button></div></div></article>";
  });
  $("#grid").html(html);
}

/* ---------- bill ---------- */
function bill() {
  var sub = 0, count = 0;
  cart.forEach(function (c) { var p = byId(c.id); if (p) { sub += p.price * c.qty; count += c.qty; } });
  var def = coupon ? COUPONS[coupon] : null;
  var eligible = def && (!def.min || sub > def.min);
  var freeShip = sub > 499 || (eligible && def.freeShip);
  var delivery = sub === 0 ? 0 : (freeShip ? 0 : 30);
  var fee = sub === 0 ? 0 : 5;
  var gst = Math.round(sub * 5) / 100;
  var disc = eligible ? Math.round(def.calc(sub) * 100) / 100 : 0;
  var total = Math.max(0, sub + delivery + fee + gst - disc);
  return { sub: sub, count: count, delivery: delivery, fee: fee, gst: gst, disc: disc, total: total, eligible: eligible };
}
function billHtml(b) {
  return "<div class='line'><span>Item Subtotal</span><span>" + money(b.sub) + "</span></div>" +
    "<div class='line'><span>Delivery Fee</span><span>" + (b.delivery ? money(b.delivery) : "FREE") + "</span></div>" +
    "<div class='line'><span>Platform Fee</span><span>" + money(b.fee) + "</span></div>" +
    "<div class='line'><span>GST (5%)</span><span>" + money(b.gst) + "</span></div>" +
    "<div class='line disc'><span>Discount" + (coupon ? " (" + coupon + ")" : "") + "</span><span>-" + money(b.disc) + "</span></div>" +
    "<div class='line total'><span>Total Amount</span><span>" + money(b.total) + "</span></div>";
}

/* ---------- cart ---------- */
function renderCart() {
  var b = bill();
  save("fg_cart", cart); save("fg_coupon", coupon);
  var prev = $("#cartCount").text();
  $("#cartCount, #drawerCount").text(b.count);
  if (String(b.count) !== prev) $("#cartCount").removeClass("bump").width(), $("#cartCount").addClass("bump");
  $("#cartCount").toggle(b.count > 0);
  if (!cart.length) {
    $("#cartItems").html("<div class='empty'><div class='big'>🛒</div><h3>Your cart is empty</h3><p>Add something tasty from the menu.</p><br><button class='btn small' data-go='menu'>Browse menu</button></div>");
    $("#cartFoot").hide(); return;
  }
  $("#cartFoot").show();
  $("#cartItems").empty();
  cart.forEach(function (c) {
    var p = byId(c.id); if (!p) return;
    $("#cartItems").append("<div class='ci'><img src='" + esc(p.image) + "' alt='' onerror=\"this.onerror=null;this.src=FALLBACK\"><div><h4>" + esc(p.name) + "</h4><small>" + money(p.price) + " each</small>" +
      "<div class='r'><div class='qty'><button class='dec' data-id='" + p.id + "' aria-label='Decrease quantity'>−</button><span>" + c.qty + "</span><button class='inc' data-id='" + p.id + "' aria-label='Increase quantity'>+</button></div>" +
      "<span>" + money(p.price * c.qty) + "<button class='rm' data-id='" + p.id + "' aria-label='Remove " + esc(p.name) + "'>🗑️</button></span></div></div></div>");
  });
  $("#cartBill").html(billHtml(b));
  if (coupon && !b.eligible) $("#couponMsg").attr("class", "cmsg no").text(coupon + " needs an order above ₹" + COUPONS[coupon].min + ".");
  else if (coupon) $("#couponMsg").attr("class", "cmsg ok").text(coupon + " applied – " + COUPONS[coupon].label + ".");
  else $("#couponMsg").attr("class", "cmsg").text("");
}
function addToCart(id) {
  var item = cart.filter(function (c) { return c.id === id; })[0];
  if (item) item.qty++; else cart.push({ id: id, qty: 1 });
  renderCart();
}
function openCart() { $("#drawer").addClass("open").attr("aria-hidden", "false"); $("#overlay").addClass("show"); }
function closeCart() { $("#drawer").removeClass("open").attr("aria-hidden", "true"); $("#overlay").removeClass("show"); }
function applyCoupon(code) {
  code = (code || "").trim().toUpperCase();
  var $m = $("#couponMsg");
  if (!code) return $m.attr("class", "cmsg no").text("Enter a coupon code.");
  if (!COUPONS[code]) return $m.attr("class", "cmsg no").text("Invalid coupon code.");
  if (coupon === code) return $m.attr("class", "cmsg no").text(code + " is already applied.");
  if (coupon) return $m.attr("class", "cmsg no").text("A coupon is already applied. Only one can be used per order.");
  var s = bill().sub;
  if (COUPONS[code].min && s <= COUPONS[code].min) return $m.attr("class", "cmsg no").text(code + " needs an order above ₹" + COUPONS[code].min + ".");
  coupon = code; $("#couponInput").val(""); renderCart(); toast("Coupon " + code + " applied");
}

/* ---------- views ---------- */
function showView(v) {
  $(".view").prop("hidden", true);
  $("#homeView").prop("hidden", v !== "home");
  if (v !== "home") $("#" + v + "View").prop("hidden", false);
  window.scrollTo(0, 0);
}
function goTo(target) {
  if (["checkout", "confirm", "orders"].indexOf(target) >= 0) { showView(target); return; }
  if ($("#homeView").prop("hidden")) showView("home");
  closeCart(); $("#links").removeClass("open");
  var el = document.getElementById(target); if (el) el.scrollIntoView({ behavior: "smooth" });
  $("#links a").removeClass("active").filter("[data-go='" + target + "']").addClass("active");
}

/* ---------- checkout ---------- */
function openCheckout() {
  if (!cart.length) return toast("Your cart is empty", true);
  closeCart();
  $("#fName").val(customer.name || ""); $("#fMobile").val(customer.mobile || ""); $("#fAddress").val(customer.address || "");
  $("#fCity").val(customer.city || ""); $("#fPin").val(customer.pin || "");
  var items = "";
  cart.forEach(function (c) { var p = byId(c.id); items += "<div class='line'><span>" + esc(p.name) + " × " + c.qty + "</span><span>" + money(p.price * c.qty) + "</span></div>"; });
  $("#coItems").html(items + "<hr style='border:0;border-top:1px solid var(--bd);margin:8px 0'>");
  $("#coBill").html(billHtml(bill()));
  showView("checkout");
}
function validate() {
  var ok = true, v = {
    name: $.trim($("#fName").val()), mobile: $.trim($("#fMobile").val()), address: $.trim($("#fAddress").val()),
    city: $.trim($("#fCity").val()), pin: $.trim($("#fPin").val()), pay: $("input[name=pay]:checked").val()
  };
  function bad(sel, msg) { $(sel).addClass("bad").next(".err").text(msg); ok = false; }
  $("#checkoutForm .bad").removeClass("bad"); $(".err").text("");
  if (v.name.length < 2) bad("#fName", "Enter your full name.");
  if (!/^[6-9]\d{9}$/.test(v.mobile)) bad("#fMobile", "Enter a valid 10-digit Indian mobile number.");
  if (v.address.length < 5) bad("#fAddress", "Enter your delivery address.");
  if (v.city.length < 2) bad("#fCity", "Enter your city.");
  if (!/^[1-9]\d{5}$/.test(v.pin)) bad("#fPin", "Enter a valid 6-digit PIN code.");
  if (!v.pay) { $("#payErr").text("Select a payment method."); ok = false; }
  return ok ? v : null;
}
function placeOrder(v) {
  if (!cart.length) return toast("Your cart is empty", true);
  var b = bill(), id = "FG" + Date.now().toString().slice(-7) + Math.floor(Math.random() * 90 + 10);
  var items = cart.map(function (c) { var p = byId(c.id); return { name: p.name, qty: c.qty, price: p.price, image: p.image }; });
  customer = { name: v.name, mobile: v.mobile, address: v.address, city: v.city, pin: v.pin };
  orders.unshift({ id: id, items: items, bill: b, coupon: coupon, customer: customer, payment: v.pay, placedAt: new Date().toISOString(), status: 0 });
  save("fg_orders", orders); save("fg_customer", customer);
  cart = []; coupon = null; renderCart();
  $("#confId").text(id); showView("confirm");
}

/* ---------- orders & simulated tracking ---------- */
function renderOrders() {
  var c = customer;
  $("#profileBox").html(c.name ? "<b>" + esc(c.name) + "</b><br>📱 " + esc(c.mobile) + "<br>📍 " + esc(c.address) + ", " + esc(c.city) + " – " + esc(c.pin) : "No saved details yet. They are saved when you place your first order.");
  if (!orders.length) { $("#ordersList").html("<div class='empty'><div class='big'>📦</div><h3>No orders yet</h3><p>Your placed orders will show up here.</p></div>"); return; }
  var html = "";
  orders.forEach(function (o) {
    html += "<div class='panel order'><div class='order-top'><b>Order " + esc(o.id) + "</b><span>" + new Date(o.placedAt).toLocaleString("en-IN") + "</span></div><ol class='steps'>";
    STEPS.forEach(function (s, i) { html += "<li class='" + (i <= o.status ? "done" : "") + "'>" + s + "</li>"; });
    html += "</ol>";
    o.items.forEach(function (i) { html += "<div class='line'><span>" + esc(i.name) + " × " + i.qty + "</span><span>" + money(i.price * i.qty) + "</span></div>"; });
    html += "<div class='line total'><span>Total (" + esc(o.payment) + ")</span><span>" + money(o.bill.total) + "</span></div><p class='note'>📍 " + esc(o.customer.address) + ", " + esc(o.customer.city) + " – " + esc(o.customer.pin) + "</p></div>";
  });
  $("#ordersList").html(html);
}
setInterval(function () {            // simulated progression every 10 s
  var changed = false;
  orders.forEach(function (o) { if (o.status < 3) { o.status++; changed = true; } });
  if (changed) { save("fg_orders", orders); if (!$("#ordersView").prop("hidden")) renderOrders(); }
}, 10000);

/* ---------- events ---------- */
$(function () {
  renderCats(); renderCart(); loadMenu();

  $(document).on("click", "[data-go]", function (e) { e.preventDefault(); goTo($(this).data("go")); });
  $(document).on("click", "#orderNow", function () { goTo("menu"); toast("Pick your dishes and add them to the cart"); });
  $(document).on("click", ".add-to-cart", function () {
    var p = byId(parseInt($(this).data("id"), 10)); if (!p) return;
    addToCart(p.id); toast(p.name + " added to cart ✓");
  });
  $(document).on("click", "#retryMenu", loadMenu);
  $(document).on("click", ".cat", function () { filters.cat = $(this).data("cat"); renderCats(); renderGrid(); });
  $(document).on("click", ".chip", function () { filters.diet = $(this).data("diet"); $(".chip").removeClass("active"); $(this).addClass("active"); renderGrid(); });
  $("#sortSel").on("change", function () { filters.sort = $(this).val(); renderGrid(); });
  $("#searchInput").on("input", function () {
    filters.q = $(this).val();
    if ($("#homeView").prop("hidden")) showView("home");
    renderGrid();
  }).on("keydown", function (e) { if (e.key === "Enter") goTo("menu"); });
  $(document).on("click", "#resetFilters, #emptyReset", function () {
    filters = { cat: "All Items", diet: "all", q: "", sort: "popular" };
    $("#searchInput").val(""); $("#sortSel").val("popular"); $(".chip").removeClass("active").first().addClass("active");
    renderCats(); renderGrid();
  });

  $("#openCart").on("click", openCart);
  $("#closeCart, #overlay").on("click", closeCart);
  $(document).on("keydown", function (e) { if (e.key === "Escape") closeCart(); });
  $(document).on("click", ".inc", function () { addToCart(parseInt($(this).data("id"), 10)); });
  $(document).on("click", ".dec", function () {
    var id = parseInt($(this).data("id"), 10);
    cart = cart.map(function (c) { if (c.id === id) c.qty--; return c; }).filter(function (c) { return c.qty > 0; });
    renderCart();
  });
  $(document).on("click", ".rm", function () {
    var id = parseInt($(this).data("id"), 10);
    cart = cart.filter(function (c) { return c.id !== id; }); renderCart(); toast("Item removed");
  });
  $("#clearCart").on("click", function () { cart = []; coupon = null; renderCart(); toast("Cart cleared"); });
  $("#couponForm").on("submit", function (e) { e.preventDefault(); applyCoupon($("#couponInput").val()); });
  $("#toCheckout").on("click", openCheckout);

  $(document).on("click", ".copy", function () {
    var code = $(this).data("code"), $b = $(this);
    function done() { $b.text("Copied!"); toast(code + " copied"); setTimeout(function () { $b.text("Copy Code"); }, 1500); }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(code).then(done, done);
    else { var t = $("<input>").val(code).appendTo("body").select(); try { document.execCommand("copy"); } catch (e) {} t.remove(); done(); }
  });

  $("#checkoutForm").on("submit", function (e) { e.preventDefault(); var v = validate(); if (v) placeOrder(v); else toast("Please fix the highlighted fields", true); });
  $("#fMobile, #fPin").on("input", function () { this.value = this.value.replace(/\D/g, ""); });
  $("#trackNow, #openProfile").on("click", function () { renderOrders(); showView("orders"); });

  $("#menuToggle").on("click", function () { $("#links").toggleClass("open"); });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { $(e.target).addClass("in"); io.unobserve(e.target); } }); }, { threshold: 0.15 });
    $(".reveal").each(function () { io.observe(this); });
  } else { $(".reveal").addClass("in"); }
  $(window).on("scroll", function () { $("#toTop").prop("hidden", $(this).scrollTop() < 400); });
  $("#toTop").on("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
});
```

### Menu Data — `menu.json`
The JSON file read by the AJAX call: 42 dishes, six in each of seven categories (North Indian, South Indian, Street Food, Pizza & Burgers, Biryani & Rice, Desserts, Beverages). Every record has an `id`, `name`, `category`, `description`, `price`, `veg` flag, `image`, `rating`, `reviews`, `prepTime` and `bestseller` flag.

#### `12 Interactive real time web app/fooddelivery/menu.json`
```json
[
    {"id": 1, "name": "Paneer Butter Masala", "category": "North Indian", "description": "Rich, creamy tomato gravy with soft paneer", "price": 249, "veg": true, "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.6, "reviews": 3070, "prepTime": 25, "bestseller": true},
    {"id": 2, "name": "Dal Makhani", "category": "North Indian", "description": "Slow-cooked black lentils finished with butter", "price": 199, "veg": true, "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.5, "reviews": 2840, "prepTime": 30, "bestseller": false},
    {"id": 3, "name": "Kadai Paneer", "category": "North Indian", "description": "Paneer tossed with peppers in spicy kadai masala", "price": 229, "veg": true, "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.4, "reviews": 2610, "prepTime": 25, "bestseller": false},
    {"id": 4, "name": "Chole Bhature", "category": "North Indian", "description": "Spiced chickpeas with two fluffy bhature", "price": 149, "veg": true, "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.6, "reviews": 2380, "prepTime": 20, "bestseller": true},
    {"id": 5, "name": "Butter Naan", "category": "North Indian", "description": "Soft tandoor-baked bread brushed with butter", "price": 45, "veg": true, "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.3, "reviews": 2150, "prepTime": 10, "bestseller": false},
    {"id": 6, "name": "Chicken Butter Masala", "category": "North Indian", "description": "Tender chicken in smooth buttery tomato gravy", "price": 279, "veg": false, "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.5, "reviews": 1920, "prepTime": 30, "bestseller": true},
    {"id": 7, "name": "Masala Dosa", "category": "South Indian", "description": "Crisp dosa with spiced potato and chutneys", "price": 119, "veg": true, "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.7, "reviews": 1690, "prepTime": 20, "bestseller": true},
    {"id": 8, "name": "Mysore Masala Dosa", "category": "South Indian", "description": "Dosa layered with fiery red chutney and potato", "price": 149, "veg": true, "image": "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.5, "reviews": 1460, "prepTime": 22, "bestseller": false},
    {"id": 9, "name": "Idli Sambhar (3 pcs)", "category": "South Indian", "description": "Steamed rice cakes with sambhar and chutney", "price": 79, "veg": true, "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.4, "reviews": 1230, "prepTime": 15, "bestseller": false},
    {"id": 10, "name": "Medu Vada", "category": "South Indian", "description": "Golden lentil donuts, crisp outside, soft inside", "price": 89, "veg": true, "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.3, "reviews": 1000, "prepTime": 15, "bestseller": false},
    {"id": 11, "name": "Rava Dosa", "category": "South Indian", "description": "Lacy semolina dosa with onions and cashews", "price": 139, "veg": true, "image": "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.4, "reviews": 9770, "prepTime": 20, "bestseller": false},
    {"id": 12, "name": "Chicken 65", "category": "South Indian", "description": "Spicy fried chicken bites with curry leaves", "price": 199, "veg": false, "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.6, "reviews": 9540, "prepTime": 25, "bestseller": true},
    {"id": 13, "name": "Mumbai Pav Bhaji", "category": "Street Food", "description": "Buttery mashed vegetable bhaji with toasted pav", "price": 129, "veg": true, "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.6, "reviews": 9310, "prepTime": 20, "bestseller": true},
    {"id": 14, "name": "Vada Pav", "category": "Street Food", "description": "Mumbai's famous spiced potato fritter in a bun", "price": 35, "veg": true, "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.5, "reviews": 9080, "prepTime": 10, "bestseller": true},
    {"id": 15, "name": "Pani Puri", "category": "Street Food", "description": "Crisp puris filled with tangy mint water", "price": 60, "veg": true, "image": "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.6, "reviews": 8850, "prepTime": 10, "bestseller": false},
    {"id": 16, "name": "Dahi Puri", "category": "Street Food", "description": "Puris topped with curd, chutneys and sev", "price": 89, "veg": true, "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.4, "reviews": 8620, "prepTime": 12, "bestseller": false},
    {"id": 17, "name": "Samosa (2 pcs)", "category": "Street Food", "description": "Flaky pastry stuffed with spiced potato and peas", "price": 40, "veg": true, "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.3, "reviews": 8390, "prepTime": 10, "bestseller": false},
    {"id": 18, "name": "Chicken Kathi Roll", "category": "Street Food", "description": "Smoky chicken wrapped in a flaky paratha", "price": 159, "veg": false, "image": "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.5, "reviews": 8160, "prepTime": 20, "bestseller": false},
    {"id": 19, "name": "Margherita Pizza", "category": "Pizza & Burgers", "description": "Classic tomato, mozzarella and fresh basil", "price": 179, "veg": true, "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.4, "reviews": 7930, "prepTime": 25, "bestseller": true},
    {"id": 20, "name": "Farmhouse Pizza", "category": "Pizza & Burgers", "description": "Loaded with capsicum, onion, mushroom and corn", "price": 279, "veg": true, "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.5, "reviews": 7700, "prepTime": 28, "bestseller": false},
    {"id": 21, "name": "Peri Peri Paneer Pizza", "category": "Pizza & Burgers", "description": "Spicy peri peri paneer with melted cheese", "price": 299, "veg": true, "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.6, "reviews": 7470, "prepTime": 28, "bestseller": false},
    {"id": 22, "name": "Classic Veg Burger", "category": "Pizza & Burgers", "description": "Crunchy veg patty with fresh lettuce and mayo", "price": 99, "veg": true, "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.2, "reviews": 7240, "prepTime": 15, "bestseller": false},
    {"id": 23, "name": "Cheese Burger", "category": "Pizza & Burgers", "description": "Double cheese slice over a juicy veg patty", "price": 149, "veg": true, "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.4, "reviews": 7010, "prepTime": 18, "bestseller": false},
    {"id": 24, "name": "Chicken Zinger Burger", "category": "Pizza & Burgers", "description": "Crispy spicy chicken fillet with creamy sauce", "price": 179, "veg": false, "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.5, "reviews": 6780, "prepTime": 20, "bestseller": true},
    {"id": 25, "name": "Veg Dum Biryani", "category": "Biryani & Rice", "description": "Fragrant basmati layered with vegetables", "price": 189, "veg": true, "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.6, "reviews": 6550, "prepTime": 30, "bestseller": true},
    {"id": 26, "name": "Paneer Biryani", "category": "Biryani & Rice", "description": "Dum-cooked basmati with marinated paneer", "price": 219, "veg": true, "image": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.5, "reviews": 6320, "prepTime": 30, "bestseller": false},
    {"id": 27, "name": "Chicken Dum Biryani", "category": "Biryani & Rice", "description": "Hyderabadi style biryani with tender chicken", "price": 249, "veg": false, "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.8, "reviews": 6090, "prepTime": 35, "bestseller": true},
    {"id": 28, "name": "Chicken Fried Rice", "category": "Biryani & Rice", "description": "Wok-tossed rice with chicken and vegetables", "price": 189, "veg": false, "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.3, "reviews": 5860, "prepTime": 20, "bestseller": false},
    {"id": 29, "name": "Veg Fried Rice", "category": "Biryani & Rice", "description": "Wok-tossed rice with crunchy vegetables", "price": 149, "veg": true, "image": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.2, "reviews": 5630, "prepTime": 18, "bestseller": false},
    {"id": 30, "name": "Egg Fried Rice", "category": "Biryani & Rice", "description": "Fluffy fried rice with scrambled egg", "price": 169, "veg": false, "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.3, "reviews": 5400, "prepTime": 18, "bestseller": false},
    {"id": 31, "name": "Gulab Jamun (2 pcs)", "category": "Desserts", "description": "Soft milk dumplings soaked in rose syrup", "price": 59, "veg": true, "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.7, "reviews": 5170, "prepTime": 10, "bestseller": true},
    {"id": 32, "name": "Rasmalai (2 pcs)", "category": "Desserts", "description": "Spongy paneer discs in saffron cream", "price": 89, "veg": true, "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.6, "reviews": 4940, "prepTime": 10, "bestseller": false},
    {"id": 33, "name": "Chocolate Brownie", "category": "Desserts", "description": "Fudgy chocolate brownie with walnuts", "price": 99, "veg": true, "image": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.5, "reviews": 4710, "prepTime": 10, "bestseller": false},
    {"id": 34, "name": "Choco Lava Cake", "category": "Desserts", "description": "Warm cake with a molten chocolate centre", "price": 109, "veg": true, "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.6, "reviews": 4480, "prepTime": 12, "bestseller": true},
    {"id": 35, "name": "Kulfi", "category": "Desserts", "description": "Dense, creamy pistachio kulfi on a stick", "price": 49, "veg": true, "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.4, "reviews": 4250, "prepTime": 5, "bestseller": false},
    {"id": 36, "name": "Gajar Ka Halwa", "category": "Desserts", "description": "Slow-cooked carrot pudding with ghee and nuts", "price": 99, "veg": true, "image": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.5, "reviews": 4020, "prepTime": 10, "bestseller": false},
    {"id": 37, "name": "Masala Chai", "category": "Beverages", "description": "Hot ginger and cardamom tea", "price": 25, "veg": true, "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.5, "reviews": 3790, "prepTime": 5, "bestseller": true},
    {"id": 38, "name": "Cold Coffee", "category": "Beverages", "description": "Thick, chilled coffee blended with ice cream", "price": 99, "veg": true, "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.4, "reviews": 3560, "prepTime": 8, "bestseller": false},
    {"id": 39, "name": "Mango Lassi", "category": "Beverages", "description": "Chilled yoghurt drink with Alphonso mango", "price": 79, "veg": true, "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.7, "reviews": 3330, "prepTime": 6, "bestseller": true},
    {"id": 40, "name": "Fresh Lime Soda", "category": "Beverages", "description": "Sweet or salted lime with sparkling soda", "price": 59, "veg": true, "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.2, "reviews": 3100, "prepTime": 5, "bestseller": false},
    {"id": 41, "name": "Oreo Shake", "category": "Beverages", "description": "Thick milkshake blended with Oreo cookies", "price": 119, "veg": true, "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.5, "reviews": 2870, "prepTime": 8, "bestseller": false},
    {"id": 42, "name": "Masala Chaas", "category": "Beverages", "description": "Spiced buttermilk with cumin and mint", "price": 39, "veg": true, "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=500&h=340&q=70", "rating": 4.3, "reviews": 2640, "prepTime": 5, "bestseller": false}
    ]
```

### Stylesheet — `style.css`
Responsive styling for the whole application: navigation bar, hero, category tabs, product cards, cart drawer, checkout layout, order tracker steps, toasts and mobile breakpoints.

#### `12 Interactive real time web app/fooddelivery/style.css`
```css
:root{--g:#238B57;--gd:#176B45;--gl:#EAF5EE;--bg:#F7FAF8;--tx:#202923;--tx2:#78847C;--bd:#E7EEE9;--w:#fff;--sh:0 4px 16px rgba(32,41,35,.07)}
*{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth;scroll-padding-top:84px}
body{font-family:Poppins,system-ui,sans-serif;background:var(--bg);color:var(--tx);line-height:1.5;overflow-x:hidden}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
button,input,select,textarea{font:inherit;color:inherit}
[hidden]{display:none!important}
:focus-visible{outline:2px solid var(--g);outline-offset:2px}
h1,h2,h3{line-height:1.2}
h2{font-size:1.7rem;margin-bottom:14px}
.wrap{max-width:1200px;margin:0 auto;padding:28px 20px}
.btn{background:var(--g);color:#fff;border:2px solid var(--g);border-radius:999px;padding:11px 24px;font-weight:600;cursor:pointer;transition:.2s}
.btn:hover{background:var(--gd);border-color:var(--gd);transform:translateY(-1px)}
.btn.outline{background:transparent;color:var(--g)}.btn.outline:hover{background:var(--gl);color:var(--gd)}
.btn.small{padding:6px 16px;font-size:.85rem}.btn.block{width:100%;border-radius:10px;margin-top:10px}
.link-btn{background:none;border:0;color:var(--g);font-weight:500;cursor:pointer;padding:6px 0}
.icon-btn{position:relative;background:var(--w);border:1px solid var(--bd);width:42px;height:42px;border-radius:50%;cursor:pointer;font-size:1.1rem;transition:.2s}
.icon-btn:hover{background:var(--gl)}
.badge{position:absolute;top:-5px;right:-5px;background:#E03B3B;color:#fff;font-size:.7rem;min-width:19px;height:19px;border-radius:99px;display:grid;place-items:center;font-weight:600}
/* nav */
.nav{position:sticky;top:0;z-index:50;background:var(--w);display:flex;align-items:center;justify-content:space-between;gap:18px;padding:10px 28px;box-shadow:0 2px 10px rgba(0,0,0,.05)}
.logo{display:flex;align-items:center;gap:10px}.logo b{display:block;font-size:1.45rem;color:var(--gd);line-height:1.1}.logo small{display:block;color:var(--tx2);font-size:.72rem}
.logo-mark{display:block;line-height:0}.mascot{height:58px;width:auto;animation:bob 2.6s ease-in-out infinite;transition:transform .3s}.logo:hover .mascot{animation:wiggle .6s}.mascot .eyes{transform-origin:40px 42px;animation:blink 4s infinite}
.mascot .spark{transform-origin:70px 13px;animation:twinkle 2.2s ease-in-out infinite}@keyframes twinkle{50%{transform:scale(.4) rotate(40deg);opacity:.5}}
@keyframes bob{50%{transform:translateY(-4px)}}@keyframes wiggle{25%{transform:rotate(-12deg) scale(1.1)}75%{transform:rotate(12deg) scale(1.1)}}@keyframes blink{0%,94%,100%{transform:scaleY(1)}97%{transform:scaleY(.1)}}
.links{display:flex;gap:6px}.links a{padding:8px 18px;border-radius:99px;font-weight:500}.links a:hover{background:var(--gl)}.links a.active{background:var(--g);color:#fff}
.nav-right{display:flex;align-items:center;gap:12px}
.search{display:flex;align-items:center;gap:8px;background:var(--bg);border:1px solid var(--bd);border-radius:99px;padding:0 16px;width:270px}
.search input{border:0;background:none;padding:10px 0;width:100%;outline:none}
.menu-toggle{display:none}
/* hero */
.hero{display:grid;grid-template-columns:1fr 1.1fr;align-items:center;gap:20px;padding:34px max(28px,calc((100% - 1200px)/2));background:linear-gradient(100deg,var(--gl),var(--bg))}
.hero h1{font-size:clamp(2.2rem,5vw,3.5rem);color:var(--gd);margin-bottom:14px}
.hero p{color:var(--tx);max-width:420px}
.cta{display:flex;gap:12px;margin:22px 0 16px;flex-wrap:wrap}
.hero .meta{color:var(--tx2);font-size:.92rem}
.hero-img{position:relative}.hero-img img{border-radius:28px;aspect-ratio:3/2;object-fit:cover;width:100%;box-shadow:0 16px 40px rgba(23,107,69,.2)}
.stamp{position:absolute;top:-10px;right:-6px;background:var(--g);color:#fff;border-radius:50%;width:116px;height:116px;display:grid;place-content:center;text-align:center;font-weight:600;font-size:.8rem;transform:rotate(12deg);box-shadow:var(--sh)}
.stamp b{font-size:1.3rem}
.featured{position:absolute;left:14px;bottom:14px;background:var(--w);border-radius:99px;padding:7px 16px;font-size:.82rem;box-shadow:var(--sh)}.featured b{color:var(--g);margin-left:6px}
/* categories */
.cats{display:grid;grid-template-columns:repeat(8,1fr);gap:12px;margin-bottom:26px}
.cat{background:var(--w);border:1px solid var(--bd);border-radius:12px;padding:12px 6px;cursor:pointer;text-align:center;font-size:.82rem;font-weight:500;transition:.2s;display:flex;flex-direction:column;align-items:center;gap:4px}
.cat span{font-size:1.9rem}.cat:hover{box-shadow:var(--sh);transform:translateY(-2px)}
.cat.active{background:var(--g);color:#fff;border-color:var(--g)}
.menu-head{display:flex;justify-content:space-between;align-items:flex-end;gap:14px;flex-wrap:wrap;margin-bottom:6px}
.menu-head h2{margin:0;padding-bottom:6px;border-bottom:3px solid var(--g)}
.toolbar{display:flex;align-items:center;gap:12px;flex-wrap:wrap;font-size:.9rem}
.chips{display:flex;gap:6px}.chip{border:1px solid var(--bd);background:var(--w);border-radius:99px;padding:6px 14px;cursor:pointer}.chip.active{background:var(--gl);border-color:var(--g);color:var(--gd);font-weight:600}
select{border:1px solid var(--bd);border-radius:8px;padding:7px 10px;background:var(--w)}
.count{color:var(--tx2);font-size:.85rem;margin:8px 0 14px}
/* cards */
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.card{background:var(--w);border:1px solid var(--bd);border-radius:14px;overflow:hidden;box-shadow:var(--sh);display:flex;flex-direction:column;transition:.2s}
.card:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(32,41,35,.12)}
.card .ph{position:relative}.card img{width:100%;aspect-ratio:3/2;object-fit:cover;background:var(--gl)}
.tag{position:absolute;top:10px;left:10px;background:var(--g);color:#fff;font-size:.72rem;font-weight:600;padding:2px 10px;border-radius:99px}
.dot{position:absolute;left:10px;bottom:10px;width:18px;height:18px;border:2px solid var(--g);background:#fff;border-radius:3px;display:grid;place-items:center}
.dot::after{content:"";width:8px;height:8px;border-radius:50%;background:var(--g)}.dot.non{border-color:#D33}.dot.non::after{background:#D33}
.card .body{padding:12px 14px 14px;display:flex;flex-direction:column;gap:3px;flex:1}
.card h3{font-size:1rem}.card .desc{color:var(--tx2);font-size:.82rem;flex:1}
.card .info{font-size:.78rem;color:var(--tx2);display:flex;gap:12px}
.card .row{display:flex;justify-content:space-between;align-items:center;margin-top:8px}.price{font-size:1.2rem;font-weight:700}
.state{grid-column:1/-1;text-align:center;padding:50px 20px;color:var(--tx2)}.state .big{font-size:2.6rem}
.spinner{width:36px;height:36px;border:4px solid var(--gl);border-top-color:var(--g);border-radius:50%;margin:0 auto 12px;animation:spin .8s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
/* offers */
.offers{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.offer{border-radius:14px;padding:22px;display:flex;justify-content:space-between;align-items:flex-end;gap:10px;border:1px solid var(--bd);min-height:130px}
.offer h3{font-size:1.4rem}.offer small{color:var(--tx2)}.o1,.o3{background:var(--gl)}.o2{background:#FFF4DC}
.about p{max-width:700px;color:var(--tx2)}
/* views */
.panel{background:var(--w);border:1px solid var(--bd);border-radius:14px;padding:20px;box-shadow:var(--sh);margin-bottom:16px}
.co-layout{display:grid;grid-template-columns:1.4fr 1fr;gap:22px;align-items:start}
fieldset{border:1px solid var(--bd);border-radius:14px;background:var(--w);padding:18px;margin-bottom:16px;display:grid;gap:12px}
legend{font-weight:600;padding:0 8px}
label{display:grid;gap:4px;font-size:.88rem;font-weight:500}
fieldset input:not([type=radio]),textarea{border:1px solid var(--bd);border-radius:8px;padding:10px 12px;background:var(--bg);width:100%}
input.bad,textarea.bad{border-color:#D33}.err{color:#D33;font-size:.78rem;font-style:normal;min-height:0}
.two{display:grid;grid-template-columns:1fr 1fr;gap:12px}.radio{display:flex;gap:10px;align-items:center;border:1px solid var(--bd);border-radius:8px;padding:10px;cursor:pointer}
.note{color:var(--tx2);font-size:.8rem;margin:6px 0}
.center{text-align:center;padding-top:60px}.check{width:84px;height:84px;margin:0 auto 14px;border-radius:50%;background:var(--g);color:#fff;font-size:2.6rem;display:grid;place-items:center;animation:pop .5s}
@keyframes pop{from{transform:scale(.3);opacity:0}}
.center .cta{justify-content:center}
.order{margin-bottom:16px}.order-top{display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;margin-bottom:8px}
.steps{display:flex;margin:16px 0;list-style:none;padding:0}.steps li{flex:1;text-align:center;font-size:.78rem;color:var(--tx2);position:relative}
.steps li::before{content:"";display:block;width:22px;height:22px;border-radius:50%;background:var(--bd);margin:0 auto 4px;position:relative;z-index:1}
.steps li::after{content:"";position:absolute;top:10px;left:-50%;width:100%;height:3px;background:var(--bd)}.steps li:first-child::after{display:none}
.steps li.done{color:var(--gd);font-weight:600}.steps li.done::before,.steps li.done::after{background:var(--g)}
.line{display:flex;justify-content:space-between;font-size:.9rem;padding:3px 0}.line.total{font-weight:700;font-size:1.05rem;border-top:1px dashed var(--bd);margin-top:6px;padding-top:8px;color:var(--gd)}.line.disc{color:var(--g)}
/* drawer */
.overlay{position:fixed;inset:0;background:rgba(0,0,0,.4);opacity:0;pointer-events:none;transition:.25s;z-index:90}.overlay.show{opacity:1;pointer-events:auto}
.drawer{position:fixed;top:0;right:0;height:100%;width:min(420px,100%);background:var(--w);z-index:100;transform:translateX(100%);transition:transform .3s;display:flex;flex-direction:column;box-shadow:-8px 0 30px rgba(0,0,0,.15)}
.drawer.open{transform:none}
.drawer-head{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;border-bottom:1px solid var(--bd)}
.drawer-body{flex:1;overflow-y:auto;padding:12px 20px}
.drawer-foot{padding:14px 20px;border-top:1px solid var(--bd);background:var(--bg)}
.ci{display:grid;grid-template-columns:64px 1fr;gap:12px;padding:10px 0;border-bottom:1px solid var(--bd)}.ci img{width:64px;height:64px;object-fit:cover;border-radius:8px}
.ci h4{font-size:.9rem}.ci small{color:var(--tx2)}.ci .r{display:flex;justify-content:space-between;align-items:center;margin-top:4px;font-weight:600}
.qty{display:inline-flex;align-items:center;border:1px solid var(--bd);border-radius:8px}.qty button{width:28px;height:28px;border:0;background:none;cursor:pointer;font-size:1rem}.qty span{min-width:24px;text-align:center}
.rm{border:0;background:none;cursor:pointer;margin-left:8px}
.coupon{display:flex;gap:8px}.coupon input{flex:1;border:1px solid var(--bd);border-radius:99px;padding:8px 14px;text-transform:uppercase}
.cmsg{font-size:.8rem;min-height:18px;margin:4px 0 6px}.cmsg.ok{color:var(--g)}.cmsg.no{color:#D33}
.empty{text-align:center;padding:60px 10px;color:var(--tx2)}.empty .big{font-size:3rem}
#toasts{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:200;display:grid;gap:8px}
.toast{background:var(--tx);color:#fff;padding:10px 20px;border-radius:10px;box-shadow:var(--sh);animation:pop .25s;font-size:.9rem}.toast.err{background:#C33}
#toTop{position:fixed;right:20px;bottom:20px;width:44px;height:44px;border-radius:50%;border:0;background:var(--g);color:#fff;font-size:1.2rem;cursor:pointer;z-index:40;box-shadow:var(--sh)}
/* responsive */
@media(max-width:1024px){.grid{grid-template-columns:repeat(3,1fr)}.cats{grid-template-columns:repeat(4,1fr)}.search{width:190px}}
@media(max-width:820px){
 .menu-toggle{display:block}.links{display:none;position:absolute;top:100%;left:0;right:0;background:var(--w);flex-direction:column;padding:10px 20px;box-shadow:0 8px 14px rgba(0,0,0,.08)}.links.open{display:flex}
 .hero{grid-template-columns:1fr}.grid{grid-template-columns:repeat(2,1fr)}.offers,.co-layout{grid-template-columns:1fr}.nav{flex-wrap:wrap}.nav-right{flex:1;justify-content:flex-end}.search{flex:1;width:auto;min-width:0}.logo small{display:none}}
@media(max-width:520px){.nav{padding:10px 14px}.grid{gap:12px}.card .desc{display:none}.card .row{flex-direction:column;align-items:stretch;gap:6px}.card .btn{padding:8px}.cats{grid-template-columns:repeat(4,1fr);gap:8px}.cat{font-size:.7rem}.two{grid-template-columns:1fr}.stamp{width:90px;height:90px;font-size:.65rem}.footer{flex-direction:column;text-align:center}.footer nav{flex-wrap:wrap;justify-content:center}.wrap{padding:20px 14px}}
.footer{background:var(--gd);color:#fff;text-align:center;padding:30px 20px;margin-top:30px;display:grid;gap:2px}
.footer .by{opacity:.75;font-size:.85rem}.footer h3{font-size:1.35rem;margin-bottom:4px}
/* animations */
@keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@keyframes slideIn{from{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:none}}
@keyframes zoomIn{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:none}}
@keyframes floaty{0%,100%{transform:rotate(12deg) translateY(0)}50%{transform:rotate(8deg) translateY(-9px)}}
@keyframes bump{0%,100%{transform:scale(1)}40%{transform:scale(1.5)}}
@keyframes slideR{from{opacity:0;transform:translateX(24px)}to{opacity:1;transform:none}}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(35,139,87,.5)}100%{box-shadow:0 0 0 14px rgba(35,139,87,0)}}
.nav{animation:slideDown .5s}@keyframes slideDown{from{transform:translateY(-100%)}}
.hero-text h1{animation:slideIn .7s both}.hero-text p,.hero .cta{animation:fadeUp .7s .25s both}.hero-img{animation:zoomIn .8s .15s both}
.stamp{animation:floaty 3.5s ease-in-out infinite}.featured{animation:fadeUp .6s .8s both}
.hero .btn:first-child{animation:pulse 2s 1.2s 3}
.card{animation:fadeUp .5s calc(var(--i,0)*60ms) both}
.card img{transition:transform .5s}.card:hover img{transform:scale(1.07)}.card .ph{overflow:hidden}
.btn:active,.chip:active,.cat:active{transform:scale(.95)}
.cat:hover span{animation:floaty2 .5s}@keyframes floaty2{50%{transform:translateY(-6px) scale(1.15)}}
.cat{animation:zoomIn .5s both}.cat:nth-child(2){animation-delay:.05s}.cat:nth-child(3){animation-delay:.1s}.cat:nth-child(4){animation-delay:.15s}.cat:nth-child(5){animation-delay:.2s}.cat:nth-child(6){animation-delay:.25s}.cat:nth-child(7){animation-delay:.3s}.cat:nth-child(8){animation-delay:.35s}
.badge.bump{animation:bump .4s}
.ci{animation:slideR .35s both}.icon-btn:hover{transform:translateY(-2px) rotate(-6deg)}
.links a{transition:.2s}
.reveal{opacity:0;transform:translateY(30px);transition:opacity .7s,transform .7s}.reveal.in{opacity:1;transform:none}
.offer{transition:.25s}.offer:hover{transform:translateY(-5px) scale(1.02);box-shadow:var(--sh)}
.view{animation:fadeUp .45s both}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
```

---

## Output (FoodieGo)
- On load, a spinner with **"Loading delicious menu…"** is shown while `menu.json` is requested with AJAX; then the dish cards appear with the image, veg / non-veg marker, *Bestseller* tag, rating, preparation time, price and an **Add to Cart** button. If the file cannot be loaded (for example when the page is opened from `file://`), an error message with a **Retry** button is displayed.
- The category tabs, the **All / Veg / Non-Veg** chips, the **Sort by** dropdown and the search box filter the menu instantly, and a line such as *"12 of 42 dishes"* shows the number of matches. **Reset filters** restores the defaults.
- **Add to Cart** shows a toast message and updates the badge on the cart icon. In the cart drawer the quantity can be increased, decreased or removed, a coupon code can be applied, and the bill (subtotal, delivery fee, platform fee, GST, discount and total) is recalculated live. The **Copy Code** buttons in the *Offers for you* section copy a coupon code.
- **Proceed to Checkout** opens the delivery-details form with an order summary. Invalid fields are marked with messages; a valid form with a payment method (Cash on Delivery, UPI or Card — all simulated) places the order and shows **"Order placed!"** with the order ID.
- **Track Order** (or the profile icon) opens *My Profile & Orders*, where the saved customer details and every order are listed with a four-step tracker that moves forward automatically every 10 seconds while the page is open.
- The cart, applied coupon, customer details and orders remain after refreshing the page because they are kept in `localStorage`. The page must be served through **VS Code Live Server** for `menu.json` to load.

> **Screenshot:**
> ![FoodieGo food delivery output](<fooddelivery/food delivery.png>)

---

## Case Study Title
Interactive Web Pages with Real-Time Feedback — TechNova Workshop Booking and Smart India Hackathon 2026 Portal

## Case Study Program Code

### 1. TechNova Workshop Booking — `TechNova Workshop Booking.html`
A single-file ticket booking page for a technical workshop held on 20 November 2026 in the Main Auditorium. The left side shows the event details and *Why Attend?* points; the right side holds a three-section booking form — **Student Information** (name, roll number, college email, mobile number, branch, year), **Workshop Preferences** (workshop track, preferred session, experience level, special requirements) and **Ticket Details** (₹299 student pass and payment method) — followed by a terms checkbox. HTML5 validation attributes (`required`, `pattern`) check the fields, and a small script listens to the form's `submit` event (calling `preventDefault()` and showing a confirmation message with a smooth scroll) and to the `reset` event (hiding the message again).

#### `12 Interactive real time web app/TechNova Workshop Booking.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TechNova | Workshop Booking</title>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
}

body {
    background: #030a20;
    color: white;
}

/* NAVBAR */
nav {
    height: 85px;
    padding: 0 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #07112c;
    border-bottom: 1px solid #293c72;
}

.logo {
    display: flex;
    align-items: center;
    gap: 15px;
}

.logo-icon {
    font-size: 45px;
    color: #75b8ff;
    font-weight: bold;
}

.logo h2 {
    font-size: 25px;
}

.logo p {
    color: #b9c6e5;
    font-size: 14px;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 45px;
}

.nav-links a {
    color: #d9d9ff;
    text-decoration: none;
    font-size: 15px;
}

.nav-links .book {
    border: 1px solid #47a8ff;
    padding: 12px 25px;
    border-radius: 30px;
}

/* MAIN LAYOUT */
.main {
    display: grid;
    grid-template-columns: 0.8fr 1.55fr;
    gap: 35px;
    padding: 30px 4.7%;
    align-items: stretch;
}

/* LEFT SECTION */
.left {
    padding-top: 25px;
}

.tag {
    display: inline-block;
    border: 1px solid #ba78ff;
    border-radius: 30px;
    padding: 10px 20px;
    color: white;
    background: #171039;
    font-size: 17px;
}

.left h1 {
    font-size: clamp(48px, 5.5vw, 82px);
    line-height: 0.98;
    margin-top: 25px;
    font-weight: 750;
    letter-spacing: -2px;
}

.left h1 span {
    color: #b77bff;
}

.subtitle {
    font-size: 25px;
    line-height: 1.4;
    margin-top: 20px;
    color: #e5e8ff;
}

.line {
    height: 4px;
    width: 100px;
    background: linear-gradient(to right, #d2a1ff, #6735ff);
    margin: 17px 0 25px;
}

.event-details {
    display: flex;
    flex-direction: column;
    gap: 14px;
    font-size: 20px;
}

.event-details div {
    display: flex;
    align-items: center;
    gap: 15px;
}

.event-details span {
    color: #bd9cff;
    font-size: 23px;
}

/* LAPTOP VISUAL */
.laptop-area {
    height: 220px;
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: radial-gradient(
        ellipse at bottom, #172f83 0%, transparent 70%
    );
}

.laptop {
    width: 230px;
    height: 145px;
    background: linear-gradient(140deg, #182c58, #02091d);
    border: 3px solid #6baaff;
    border-radius: 9px;
    transform: perspective(500px) rotateY(-12deg) rotateX(5deg);
    box-shadow: 0 0 35px #284aff88;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    color: #438cff;
    position: relative;
}

.laptop::after {
    content: "";
    position: absolute;
    width: 265px;
    height: 10px;
    bottom: -17px;
    left: -20px;
    background: linear-gradient(
        90deg, #263c82, #a4b9ff, #273b83
    );
    border-radius: 50%;
    transform: perspective(100px) rotateX(15deg);
}

/* WHY ATTEND */
.why {
    margin-top: 15px;
    padding: 17px 25px;
    border: 1px solid #344d9d;
    border-radius: 25px;
    background: linear-gradient(130deg, #101e45, #0b1431);
}

.why h3 {
    font-size: 20px;
    margin-bottom: 10px;
}

.why p {
    margin: 9px 0;
    font-size: 15px;
}

.why span {
    color: #27e9b0;
    font-weight: bold;
    margin-right: 12px;
    font-size: 20px;
}

/* FORM CARD */
.form-card {
    background: linear-gradient(
        140deg, #111a39, #080f26 65%, #151b50
    );
    border: 1px solid #7668bd;
    border-radius: 23px;
    padding: 25px 35px;
    box-shadow: 0 10px 40px #0005;
}

.form-heading {
    display: flex;
    align-items: center;
    gap: 25px;
    padding-bottom: 18px;
    border-bottom: 1px solid #6456a7;
}

.ticket-icon {
    font-size: 45px;
    color: #ba8aff;
}

.form-heading h2 {
    font-size: 29px;
}

.form-heading p {
    font-size: 17px;
    color: #c8cbe4;
    margin-top: 4px;
}

/* FORM SECTIONS */
.section {
    padding: 17px 0;
    border-bottom: 1px solid #34416b;
}

.section-heading {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 13px;
    font-size: 19px;
}

.number {
    height: 29px;
    width: 29px;
    border-radius: 50%;
    background: linear-gradient(135deg, #e0c4ff, #a66bff);
    color: #171039;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 17px 30px;
}

.field label {
    display: block;
    font-size: 15px;
    margin-bottom: 6px;
    font-weight: 600;
}

.required {
    color: #ff7474;
}

input:not([type="radio"]):not([type="checkbox"]),
select,
textarea {
    width: 100%;
    padding: 11px 14px;
    background: #111a35;
    border: 1px solid #53628d;
    border-radius: 7px;
    color: white;
    font-size: 14px;
    outline: none;
}

input::placeholder,
textarea::placeholder {
    color: #aab3ce;
}

select option {
    background: #111a35;
    color: white;
}

input:focus,
select:focus,
textarea:focus {
    border-color: #a875ff;
    box-shadow: 0 0 8px #9b65ff44;
}

/* RADIO OPTIONS */
.radio-options {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 18px;
    margin-top: 9px;
}

.radio-options label {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 14px;
    cursor: pointer;
    font-weight: normal;
}

input[type="radio"],
input[type="checkbox"] {
    accent-color: #b47aff;
    width: 19px;
    height: 19px;
    cursor: pointer;
}

/* TEXTAREA */
textarea {
    resize: vertical;
    min-height: 60px;
}

/* TICKET DETAILS */
.ticket-row {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 25px;
    align-items: center;
}

.ticket-box {
    border: 1px solid #82769d;
    border-radius: 8px;
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 13px;
    background: #171a30;
}

.ticket-box .icon {
    font-size: 30px;
    color: #ffca65;
}

.ticket-box h4 {
    font-size: 15px;
}

.ticket-box p {
    color: #c4c6d9;
    font-size: 12px;
    margin-top: 3px;
}

.price {
    font-size: 24px;
    font-weight: bold;
    color: #c08aff;
    margin-left: auto;
}

/* CHECKBOX */
.terms {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 13px;
    margin-top: 13px;
    color: #e6e5f5;
}

.terms a {
    color: #b77bff;
    text-decoration: none;
}

/* BUTTONS */
.buttons {
    display: flex;
    justify-content: center;
    gap: 25px;
    margin-top: 16px;
}

button {
    padding: 12px 38px;
    border-radius: 12px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
}

.submit {
    border: none;
    color: white;
    background: linear-gradient(100deg, #962fff, #414dff);
}

.submit:hover {
    box-shadow: 0 0 20px #844bff88;
    transform: translateY(-2px);
}

.reset {
    background: transparent;
    border: 1px solid white;
    color: white;
}

.reset:hover {
    background: #ffffff15;
}

/* CONFIRMATION */
#confirmation {
    display: none;
    text-align: center;
    padding: 15px;
    margin-top: 15px;
    border-radius: 10px;
    color: #75ffc0;
    background: #123d35;
}

/* FOOTER */
.footer {
    text-align: center;
    padding: 25px 15px;
    background: #07112c;
    border-top: 1px solid #51418a;
    color: #b9c6e5;
    line-height: 1.8;
}

.footer p {
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #a98aff;
}

.footer h3 {
    color: white;
    font-size: 19px;
    margin: 3px 0;
}

.footer span {
    display: block;
    font-size: 13px;
}

/* RESPONSIVE */
@media(max-width: 1000px) {
    .main {
        grid-template-columns: 1fr;
    }

    .left {
        padding-bottom: 10px;
    }

    .laptop-area {
        display: none;
    }

    .why {
        margin-bottom: 10px;
    }
}

@media(max-width: 600px) {
    nav {
        padding: 15px 5%;
        height: auto;
    }

    .nav-links {
        display: none;
    }

    .main {
        padding: 20px 4%;
    }

    .left h1 {
        font-size: 53px;
    }

    .subtitle {
        font-size: 19px;
    }

    .form-card {
        padding: 20px 16px;
    }

    .form-heading h2 {
        font-size: 22px;
    }

    .grid,
    .ticket-row {
        grid-template-columns: 1fr;
        gap: 15px;
    }

    .buttons {
        gap: 10px;
    }

    button {
        padding: 12px 20px;
    }
}
</style>
</head>

<body>

<!-- NAVIGATION -->
<nav>
    <div class="logo">
        <div class="logo-icon">&lt;/&gt;</div>
        <div>
            <h2>TechNova</h2>
            <p>Learn · Build · Grow</p>
        </div>
    </div>

    <div class="nav-links">
        <a href="#">Home</a>
        <a href="#workshops">Workshops</a>
        <a href="#details">Event Info</a>
        <a href="#booking" class="book">Book Ticket</a>
    </div>
</nav>

<div class="main">

    <!-- LEFT CONTENT -->
    <div class="left">

        <div class="tag">✦ &nbsp; Technical Workshop</div>

        <h1>Technical<br><span>Workshop</span></h1>

        <p class="subtitle">
            Explore Technology.<br>
            Build Skills. Shape the Future.
        </p>

        <div class="line"></div>

        <div class="event-details" id="details">
            <div><span>▦</span> 20 November 2026</div>
            <div><span>◷</span> 10:00 AM – 4:00 PM</div>
            <div><span>♦</span> Main Auditorium</div>
        </div>

        <div class="laptop-area">
            <div class="laptop">&lt;/&gt;</div>
        </div>

        <div class="why">
            <h3>Why Attend?</h3>
            <p><span>✓</span> Expert-Led Sessions</p>
            <p><span>✓</span> Hands-On Learning</p>
            <p><span>✓</span> Certificate of Participation</p>
        </div>

    </div>

    <!-- RIGHT FORM -->
    <div class="form-card" id="booking">

        <div class="form-heading">
            <div class="ticket-icon">🎟</div>
            <div>
                <h2>Ticket Booking Form</h2>
                <p>Register now for the Technical Workshop!</p>
            </div>
        </div>

        <form id="bookingForm">

            <!-- SECTION 1 -->
            <div class="section">

                <h3 class="section-heading">
                    <span class="number">1</span>
                    Student Information
                </h3>

                <div class="grid">

                    <div class="field">
                        <label>Full Name <span class="required">*</span></label>
                        <input type="text"
                        placeholder="Enter your full name"
                        pattern="[A-Za-z ]{2,}" required>
                    </div>

                    <div class="field">
                        <label>Roll Number <span class="required">*</span></label>
                        <input type="text"
                        placeholder="Enter roll number" required>
                    </div>

                    <div class="field">
                        <label>College Email <span class="required">*</span></label>
                        <input type="email"
                        placeholder="name@college.edu" required>
                    </div>

                    <div class="field">
                        <label>Mobile Number <span class="required">*</span></label>
                        <input type="tel"
                        placeholder="10-digit mobile number"
                        pattern="[0-9]{10}" required>
                    </div>

                    <div class="field">
                        <label>Department / Branch <span class="required">*</span></label>
                        <select required>
                            <option value="">Select Branch</option>
                            <option>Computer Science Engineering</option>
                            <option>AI & Data Science</option>
                            <option>Information Technology</option>
                            <option>Electronics Engineering</option>
                            <option>Mechanical Engineering</option>
                            <option>Civil Engineering</option>
                        </select>
                    </div>

                    <div class="field">
                        <label>Year of Study <span class="required">*</span></label>
                        <select required>
                            <option value="">Select Year</option>
                            <option>First Year</option>
                            <option>Second Year</option>
                            <option>Third Year</option>
                            <option>Final Year</option>
                        </select>
                    </div>

                </div>
            </div>

            <!-- SECTION 2 -->
            <div class="section" id="workshops">

                <h3 class="section-heading">
                    <span class="number">2</span>
                    Workshop Preferences
                </h3>

                <div class="grid">

                    <div class="field">
                        <label>Select Workshop Track <span class="required">*</span></label>
                        <select required>
                            <option value="">Choose a workshop</option>
                            <option>Artificial Intelligence & ML</option>
                            <option>Web Development</option>
                            <option>Cyber Security</option>
                            <option>Cloud Computing</option>
                            <option>Internet of Things</option>
                            <option>Data Science & Analytics</option>
                        </select>
                    </div>

                    <div class="field">
                        <label>Preferred Session <span class="required">*</span></label>

                        <div class="radio-options">
                            <label>
                                <input type="radio" name="session"
                                value="Morning" required> Morning
                            </label>

                            <label>
                                <input type="radio" name="session"
                                value="Afternoon"> Afternoon
                            </label>

                            <label>
                                <input type="radio" name="session"
                                value="Full Day"> Full Day
                            </label>
                        </div>
                    </div>

                    <div class="field">
                        <label>Previous Technical Experience</label>

                        <div class="radio-options">
                            <label>
                                <input type="radio" name="experience"
                                value="Beginner"> Beginner
                            </label>

                            <label>
                                <input type="radio" name="experience"
                                value="Intermediate"> Intermediate
                            </label>

                            <label>
                                <input type="radio" name="experience"
                                value="Advanced"> Advanced
                            </label>
                        </div>
                    </div>

                    <div class="field">
                        <label>Special Requirements / Queries</label>
                        <textarea placeholder="Any special requests..."></textarea>
                    </div>

                </div>
            </div>

            <!-- SECTION 3 -->
            <div class="section">

                <h3 class="section-heading">
                    <span class="number">3</span>
                    Ticket Details
                </h3>

                <div class="ticket-row">

                    <div class="ticket-box">
                        <div class="icon">🎫</div>

                        <div>
                            <h4>Student Workshop Pass</h4>
                            <p>
                                Workshop Access + Learning Material<br>
                                + Certificate
                            </p>
                        </div>

                        <div class="price">₹299</div>
                    </div>

                    <div class="field">
                        <label>Payment Method <span class="required">*</span></label>
                        <select required>
                            <option value="">Select Payment Method</option>
                            <option>UPI</option>
                            <option>Debit / Credit Card</option>
                            <option>Net Banking</option>
                            <option>Cash</option>
                        </select>
                    </div>

                </div>
            </div>

            <!-- TERMS -->
            <div class="terms">
                <input type="checkbox" required>
                <span>
                    I confirm that the information provided is correct
                    and agree to the event
                    <a href="#">terms & conditions.</a>
                </span>
            </div>

            <!-- BUTTONS -->
            <div class="buttons">
                <button type="submit" class="submit">
                    Book My Ticket &nbsp; →
                </button>

                <button type="reset" class="reset">
                    Reset
                </button>
            </div>

            <!-- CONFIRMATION -->
            <div id="confirmation">
                ✓ Registration form submitted successfully!
            </div>

        </form>
    </div>

</div>

<!-- FOOTER -->
<footer class="footer">
    <p>Designed By</p>
    <h3>Ananya Marghade</h3>
    <span>PRN 24070521004</span>
    <span>Batch A1</span>
</footer>

<script>
document.getElementById("bookingForm").addEventListener(
    "submit", function(event) {

        event.preventDefault();

        document.getElementById("confirmation").style.display = "block";

        document.getElementById("confirmation").scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    }
);

document.getElementById("bookingForm").addEventListener(
    "reset", function() {

        document.getElementById("confirmation").style.display = "none";
    }
);
</script>

</body>
</html>
```

#### Output
- The page shows the TechNova header, the workshop details and the booking form.
- Submitting the form with a missing or incorrectly formatted field (for example a mobile number that is not 10 digits) makes the browser highlight the field and block the submission.
- When all required fields are valid, **Book My Ticket** displays **"✓ Registration form submitted successfully!"** below the buttons; **Reset** clears the form and hides the message.

> **Screenshot:**
> ![TechNova Workshop Booking output](<TechNova Workshop Booking.png>)

---

### 2. Smart India Hackathon 2026 Portal — `sih-site/`
A data-driven information portal for the Smart India Hackathon. `index.html` contains only an empty `#root` element; `js/data.js` holds the content (announcements, 12 innovation themes, sample problem statements, process steps, statistics, example projects, skills and gallery items) and `js/app.js` renders the complete page from this data with template literals, then adds the interactivity. A scrolling **What's New** ticker, announcements list, theme cards, a **problem statement explorer** (keyword search, theme dropdown and *All / Software / Hardware* toggle with a live result count), a timeline, project case-study modals and a gallery lightbox are all created in JavaScript. Images load from a local `images/` folder first, then from the web, and finally fall back to a captioned placeholder. All announcements, problem statements and projects are sample content, not official SIH data.

#### `12 Interactive real time web app/sih-site/index.html`
```html
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Smart India Hackathon 2026</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Source+Sans+3:wght@400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/styles.css">
</head>
<body>
<div id="root"></div>
<script src="js/data.js"></script>
<script src="js/app.js"></script>
</body>
</html>
```

#### `12 Interactive real time web app/sih-site/js/data.js`
```js
const u = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`

const photos = {
  team: u('photo-1522071820081-009f0129c71c', 1400),
  meeting: u('photo-1531482615713-2afd69097998'),
  code: u('photo-1517694712202-14dd9538aa97'),
  group: u('photo-1552664730-d307ca884978'),
  laptops: u('photo-1519389950473-47ba0277781c'),
  hardware: u('photo-1581091226825-a6a2a5aee158'),
  desk: u('photo-1504384308090-c894fdcc538d'),
  screen: u('photo-1498050108023-c5249f4df085'),
  present: u('photo-1573164713714-d95e436ab8d6')
}

const nav = [
  ['Home', '#home'], ['About SIH', '#about'], ['Themes', '#themes'], ['Problem Statements', '#problems'],
  ['Timeline', '#timeline'], ['Winners', '#winners'], ['Gallery', '#gallery'], ['Contact', '#contact']
]

const announcements = [
  { date: '12 Nov 2026', tag: 'Registration', text: 'Institution nodal officer registration window opens for the internal hackathon round.' },
  { date: '08 Nov 2026', tag: 'Problem Statements', text: 'A new batch of software and hardware problem statements is added to the portal.' },
  { date: '02 Nov 2026', tag: 'Notice', text: 'Teams must have six members including at least one female participant and one mentor.' },
  { date: '28 Oct 2026', tag: 'Guidelines', text: 'Updated evaluation rubric and idea submission template are available for download.' },
  { date: '20 Oct 2026', tag: 'Update', text: 'Grand finale nodal centres and tentative schedule will be shared with shortlisted teams.' }
]

const themes = [
  { name: 'Smart Automation', icon: 'Cog', text: 'Intelligent use of resources and AI to gain valuable insights.' },
  { name: 'Fitness & Sports', icon: 'Dumbbell', text: 'Ideas that boost fitness activity and help people stay fit.' },
  { name: 'Heritage & Culture', icon: 'Landmark', text: 'Showcase India\u2019s rich cultural heritage and traditions.' },
  { name: 'MedTech / BioTech / HealthTech', icon: 'HeartPulse', text: 'Cutting-edge healthcare innovation for a growing population.' },
  { name: 'Agriculture, FoodTech & Rural Development', icon: 'Sprout', text: 'Strengthen the primary sector and process agricultural produce.' },
  { name: 'Smart Vehicles', icon: 'Car', text: 'Intelligent devices that improve the commute.' },
  { name: 'Transportation & Logistics', icon: 'Truck', text: 'Ease pressure on city resources, transport and logistics.' },
  { name: 'Robotics and Drones', icon: 'Bot', text: 'Robots and drones for emergencies, search and rescue.' },
  { name: 'Clean & Green Technology', icon: 'Leaf', text: 'Waste segregation, disposal and better sanitation.' },
  { name: 'Renewable / Sustainable Energy', icon: 'Zap', text: 'Generate and manage sustainable energy more efficiently.' },
  { name: 'Blockchain & Cybersecurity', icon: 'ShieldCheck', text: 'Distributed ledger and security ideas that can change sectors.' },
  { name: 'Miscellaneous', icon: 'Shapes', text: 'Ideas in hospitality, finance, entertainment, retail and education.' }
]

const problems = [
  { id: 'DEMO-101', title: 'Crop disease detection from smartphone photos', org: 'Department of Agriculture (sample)', theme: 'Agriculture, FoodTech & Rural Development', type: 'Software', text: 'Build an offline-capable app that identifies common crop diseases and suggests treatment.', detail: 'Expected output: a mobile prototype with a local model, a regional-language interface and a treatment advisory database.' },
  { id: 'DEMO-102', title: 'Low-cost pulse oximeter for remote clinics', org: 'Health Ministry Unit (sample)', theme: 'MedTech / BioTech / HealthTech', type: 'Hardware', text: 'Design an affordable, accurate oximeter suited for primary health centres.', detail: 'Expected output: a working device, calibration notes, a bill of materials under a defined cost ceiling and a data logging option.' },
  { id: 'DEMO-103', title: 'Adaptive learning companion for government schools', org: 'State Education Board (sample)', theme: 'Miscellaneous', type: 'Software', text: 'Create a tool that adjusts exercises to each learner using low-bandwidth delivery.', detail: 'Expected output: a web or mobile prototype, teacher dashboard and sample content for two subjects.' },
  { id: 'DEMO-104', title: 'Flood level early-warning sensor network', org: 'Disaster Authority (sample)', theme: 'Robotics and Drones', type: 'Hardware', text: 'Deploy solar-powered river sensors that send alerts to village committees.', detail: 'Expected output: sensor node prototype, communication scheme and an alert dashboard.' },
  { id: 'DEMO-105', title: 'Phishing detection for regional language messages', org: 'Cyber Cell (sample)', theme: 'Blockchain & Cybersecurity', type: 'Software', text: 'Detect fraudulent SMS and chat messages written in Indian languages.', detail: 'Expected output: a classifier, evaluation on a multilingual sample set and a browser or app integration.' },
  { id: 'DEMO-106', title: 'Last-mile freight route optimiser', org: 'Logistics Council (sample)', theme: 'Transportation & Logistics', type: 'Software', text: 'Plan delivery routes for small carriers using live traffic and load constraints.', detail: 'Expected output: a routing engine, map interface and cost saving report.' },
  { id: 'DEMO-107', title: 'Smart irrigation controller', org: 'Water Resources Dept (sample)', theme: 'Clean & Green Technology', type: 'Hardware', text: 'Reduce water use with a soil-moisture driven valve controller.', detail: 'Expected output: controller hardware, field test data and a simple farmer app.' },
  { id: 'DEMO-108', title: 'Predictive maintenance for small factories', org: 'MSME Ministry Unit (sample)', theme: 'Smart Automation', type: 'Hardware', text: 'Detect machine faults early using vibration and temperature sensing.', detail: 'Expected output: sensor kit, anomaly model and a maintenance alert interface.' },
  { id: 'DEMO-109', title: 'Waste segregation assistant for municipalities', org: 'Urban Development Dept (sample)', theme: 'Clean & Green Technology', type: 'Software', text: 'Guide households and collectors on correct waste sorting using image recognition.', detail: 'Expected output: an app, a ward-level reporting dashboard and a citizen awareness module.' }
]

const steps = [
  ['Problem Statement Launch', 'Ministries, departments and industry partners publish challenges that need technology solutions.'],
  ['Team Formation', 'Students form teams of six with a mentor and choose the problem they want to solve.'],
  ['Internal Hackathon', 'Each institution runs its own round to select the best teams for national submission.'],
  ['Idea Submission', 'Selected teams submit a structured proposal covering approach, feasibility and impact.'],
  ['Evaluation and Screening', 'Expert panels review submissions and shortlist teams for the finale.'],
  ['Grand Finale', 'Teams build and present working prototypes at nodal centres over a continuous hackathon.'],
  ['Solution Development', 'Promising solutions are supported for refinement and adoption by the sponsoring organisation.']
]

const stats = [
  ['Participating institutions', '2,500+', 'Illustrative'],
  ['Student innovators', '50,000+', 'Illustrative'],
  ['Problem statements', '600+', 'Illustrative'],
  ['Solutions developed', '1,200+', 'Illustrative']
]

const projects = [
  { name: 'KisanSense', img: 'desk', problem: 'Crop disease identification for small farmers', stack: 'React Native, TensorFlow Lite, Python', summary: 'An offline mobile app that diagnoses leaf diseases from photos and recommends local treatment.', impact: 'Cuts diagnosis time from days to seconds and reduces unnecessary pesticide use.' },
  { name: 'AarogyaBand', img: 'hardware', problem: 'Remote vital sign monitoring', stack: 'Arduino, BLE, Flutter, Firebase', summary: 'A low-cost wearable that tracks pulse and oxygen levels and alerts community health workers.', impact: 'Brings basic monitoring to clinics without specialist equipment.' },
  { name: 'JalRakshak', img: 'screen', problem: 'Flood early warning for riverside villages', stack: 'ESP32, LoRa, Node.js, Leaflet', summary: 'Solar sensor nodes relay water levels to a dashboard and send SMS alerts to residents.', impact: 'Gives communities extra hours to prepare and evacuate.' }
]

const skills = [
  ['Technical expertise', 'Work with real datasets, hardware and deployment constraints.'],
  ['Teamwork', 'Plan, divide and deliver as a six-member team under deadline.'],
  ['Industry exposure', 'Meet mentors and organisations that own the problems.'],
  ['Problem-solving', 'Break open-ended challenges into testable steps.'],
  ['Entrepreneurship', 'Turn a working prototype into a product or venture.'],
  ['Career opportunities', 'Build a portfolio recruiters and institutions notice.']
]

const gallery = [
  ['team', 'Hackathon teams', 'wide'], ['code', 'Coding sessions', 'tall'], ['hardware', 'Hardware development', ''],
  ['meeting', 'Mentoring sessions', ''], ['laptops', 'Project demonstrations', 'wide'], ['present', 'Award ceremonies', 'tall']
]
```

#### `12 Interactive real time web app/sih-site/js/app.js`
```js
const $ = (s) => document.querySelector(s)
const icons = { Cog: '⚙', Dumbbell: '🏋', Landmark: '🏛', HeartPulse: '♥', Sprout: '❦', Car: '🚗', Truck: '🚚', Bot: '🤖', Leaf: '🍃', Zap: '⚡', ShieldCheck: '🛡', Shapes: '◆' }
const state = { q: '', theme: 'All', type: 'All' }
window.fb = (el) => {
  if (el.dataset.remote && !el.dataset.tried) {
    el.dataset.tried = '1'
    el.src = el.dataset.remote
    return
  }
  const d = document.createElement('div')
  d.className = 'img-fallback ' + el.className
  d.innerHTML = '<span>' + el.alt + '</span>'
  el.replaceWith(d)
}
const img = (src, alt, cls = '') => {
  const k = Object.keys(photos).find((x) => photos[x] === src)
  return k ? `<img class="${cls}" src="images/${k}.jpg" data-remote="${src}" alt="${alt}" loading="lazy" onerror="fb(this)">` : `<img class="${cls}" src="${src}" alt="${alt}" onerror="fb(this)">`
}
const logo = '<svg class="logo" viewBox="0 0 64 64" role="img" aria-label="Smart India Hackathon logo"><circle cx="32" cy="32" r="30" fill="#0a1750" stroke="#f47b20" stroke-width="3"/><path d="M32 12a13 13 0 0 0-7 24c1.5 1 2 2.200 2 4v2h10v-2c0-1.800.5-3 2-4a13 13 0 0 0-7-24z" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/><rect x="26" y="45" width="12" height="3.500" rx="1.700" fill="#f47b20"/><rect x="28" y="50.500" width="8" height="3" rx="1.500" fill="#1a9a4a"/><path d="M27 24l5 6 5-6" fill="none" stroke="#f47b20" stroke-width="2.500" stroke-linecap="round" stroke-linejoin="round"/></svg>'
const brand = (l = '') => `<a href="#home" class="brand ${l}">${logo}<span class="brand-text"><strong>Smart India Hackathon</strong><small>Edition 2026</small></span></a>`

function problemList() {
  const list = problems.filter((p) => (state.theme === 'All' || p.theme === state.theme) && (state.type === 'All' || p.type === state.type) && (p.title + p.org + p.text).toLowerCase().includes(state.q.toLowerCase()))
  $('#count').textContent = list.length + ' problem statement' + (list.length === 1 ? '' : 's') + ' found'
  $('#ps').innerHTML = list.length ? list.map((p) => `<article class="ps-row"><div class="ps-meta"><span class="ps-id">${p.id}</span><span class="chip ${p.type.toLowerCase()}">${p.type}</span></div><div><h3>${p.title}</h3><p class="org">${p.org} · ${p.theme}</p><p>${p.text}</p></div><button class="btn btn-outline" data-ps="${p.id}">View Details</button></article>`).join('') : '<div class="empty"><p>No problem statements match these filters.</p><button class="btn btn-blue" id="reset">Clear filters</button></div>'
  document.querySelectorAll('.seg button').forEach((b) => b.classList.toggle('on', b.dataset.type === state.type))
  $('#theme').value = state.theme
}

function modal(title, body) {
  const m = document.createElement('div')
  m.className = 'modal-backdrop'
  m.innerHTML = `<div class="modal" role="dialog"><button class="modal-close" aria-label="Close">✕</button><h3>${title}</h3>${body}</div>`
  const close = () => { m.remove(); document.body.style.overflow = ''; document.removeEventListener('keydown', key) }
  const key = (e) => e.key === 'Escape' && close()
  m.onclick = (e) => (e.target === m || e.target.closest('.modal-close')) && close()
  document.addEventListener('keydown', key)
  document.body.style.overflow = 'hidden'
  document.body.appendChild(m)
}

$('#root').innerHTML = `
<header class="header"><div class="gov-strip"><div class="wrap"><span>Government of India</span><span>Ministry of Education’s Innovation Cell · AICTE</span></div></div>
<div class="logo-bar"><div class="wrap">${brand()}<div class="partners"><div class="partner"><span class="p-ic"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#0a1750" stroke-width="2" stroke-linejoin="round"><path d="M12 6c-2-1.500-5-2-9-2v14c4 0 7 .5 9 2 2-1.500 5-2 9-2V4c-4 0-7 .5-9 2zM12 6v14"/></svg></span><span><strong>Ministry of Education</strong><small>Government of India</small></span></div><div class="partner"><span class="p-ic aicte">AICTE</span><span><strong>AICTE</strong><small>Technical Education Council</small></span></div><div class="partner"><span class="p-ic"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#b84f06" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.500c.7.700 1 1.500 1 2.500h6c0-1 .3-1.800 1-2.500A6 6 0 0 0 12 3z"/></svg></span><span><strong>Innovation Cell</strong><small>Ministry of Education</small></span></div></div></div></div>
<div class="nav-bar"><div class="wrap"><nav class="nav" id="nav">${nav.map(([l, h]) => `<a href="${h}">${l}</a>`).join('')}</nav><a href="#about" class="btn btn-saffron header-cta">Explore SIH</a><button class="menu-btn" id="menu" aria-label="Toggle menu">☰</button></div></div>
<div class="ticker"><strong>What’s New</strong><div>${[...announcements, ...announcements].map((a) => `<span>${a.text}</span>`).join('')}</div></div></header>
<main>
<section id="home" class="hero"><div class="wrap hero-grid"><div><h1>Smart India Hackathon 2026</h1><p class="tagline">Innovating for a Smarter and Stronger India.</p><p>A nationwide initiative bringing together young innovators, creative thinkers and problem solvers to develop technology-driven solutions for real-world challenges.</p><div class="btn-row"><a href="#about" class="btn btn-blue">Explore SIH</a><a href="#problems" class="btn btn-outline">Explore Problem Statements</a></div></div>
<div class="hero-images">${img(photos.team, 'Student team collaborating', 'hero-main')}${img(photos.code, 'Students coding', 'hero-side')}<div class="hero-badge"><strong>36 hours</strong><span>continuous grand finale</span></div></div></div><div class="motto"><h2>No problem is too big... No idea is too small</h2><p>Open innovation for school students and higher education students alike.</p></div></section>
<section id="announcements" class="section alt"><div class="wrap"><div class="section-head"><h2>Latest Announcements</h2><p class="note">Sample announcements shown for illustration. They are not official SIH notices.</p></div><ul class="notice-list">${announcements.map((a) => `<li><time>${a.date}</time><span class="chip">${a.tag}</span><p>${a.text}</p></li>`).join('')}</ul></div></section>
<section id="about" class="section"><div class="wrap about-grid"><div class="about-images">${img(photos.group, 'Students working together', 'about-a')}${img(photos.meeting, 'Mentor guiding a team', 'about-b')}</div><div><h2>About Smart India Hackathon</h2><dl class="about-list">
<div><dt>What is SIH?</dt><dd>Smart India Hackathon is a national innovation competition where students solve problems posed by ministries, departments and industry.</dd></div>
<div><dt>Why it was introduced</dt><dd>To build a culture of product thinking and bring fresh student ideas to challenges that matter to citizens.</dd></div>
<div><dt>Objectives</dt><dd>Promote problem solving, nurture innovation, connect students with organisations and create deployable solutions.</dd></div>
<div><dt>How students participate</dt><dd>Form a team of six, pick a problem, clear your institution’s internal round and submit your idea nationally.</dd></div>
<div><dt>How organisations benefit</dt><dd>Departments gain working prototypes, new perspectives and access to a pool of young talent.</dd></div></dl><div class="age-grid"><div><h3>SIH Junior</h3><p>School students from classes 6 to 12 can present open innovation ideas.</p></div><div><h3>SIH Senior</h3><p>Graduate and post-graduate students of higher education institutions solve real problems.</p></div></div></div></div></section>
<section id="themes" class="section alt"><div class="wrap"><div class="section-head"><h2>Innovation Themes</h2><p>Select a theme to see related problem statements.</p></div><div class="theme-grid">${themes.map((t) => `<a href="#problems" class="theme" data-theme="${t.name}"><span class="ti">${icons[t.icon]}</span><h3>${t.name}</h3><p>${t.text}</p></a>`).join('')}</div></div></section>
<section id="problems" class="section"><div class="wrap"><div class="section-head"><h2>Problem Statements</h2><p class="note">Illustrative sample problems for demonstration. They are not officially released SIH problem statements.</p></div>
<div class="filters"><label class="search">🔍<input id="q" placeholder="Search by keyword"></label><select id="theme" aria-label="Filter by theme"><option>All</option>${themes.map((t) => `<option>${t.name}</option>`).join('')}</select><div class="seg">${['All', 'Software', 'Hardware'].map((t) => `<button data-type="${t}">${t}</button>`).join('')}</div></div>
<p class="count" id="count"></p><div id="ps"></div></div></section>
<section id="timeline" class="section alt"><div class="wrap"><div class="section-head"><h2>How SIH Works</h2></div><ol class="timeline">${steps.map(([t, d], i) => `<li><span class="step-no">${String(i + 1).padStart(2, '0')}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join('')}</ol></div></section>
<section class="impact"><div class="wrap"><h2>Achievements and Impact</h2><div class="stat-row">${stats.map(([l, n, g]) => `<div><strong>${n}</strong><span>${l}</span><em>${g} figure</em></div>`).join('')}</div></div></section>
<section id="winners" class="section"><div class="wrap"><div class="section-head"><h2>Winning Projects and Success Stories</h2><p class="note">Example projects for illustration. They do not represent actual SIH winners.</p></div><div class="project-grid">${projects.map((p, i) => `<article class="project">${img(photos[p.img], p.name + ' project')}<div><h3>${p.name}</h3><p class="org">${p.problem}</p><p>${p.summary}</p><button class="link-btn" data-pr="${i}">Read case study</button></div></article>`).join('')}</div></div></section>
<section class="section alt"><div class="wrap careers-grid"><div><h2>Placements and Career Opportunities</h2><p>Participation gives students more than a certificate. It builds the experience that employers and incubators look for.</p><ul class="skill-list">${skills.map(([t, d]) => `<li><strong>${t}</strong><span>${d}</span></li>`).join('')}</ul></div>${img(photos.present, 'Student presenting a project', 'careers-img')}</div></section>
<section id="gallery" class="section"><div class="wrap"><div class="section-head"><h2>Event Gallery</h2></div><div class="gallery">${gallery.map(([k, l, s]) => `<button class="shot ${s}" data-g="${k}|${l}">${img(photos[k], l)}<span>${l}</span></button>`).join('')}</div></div></section>
<section class="cta"><div class="wrap"><h2>Your idea can make a difference.</h2><p>Think. Innovate. Collaborate. Build solutions for a better India.</p><a href="#home" class="btn btn-saffron">Explore Smart India Hackathon</a></div></section>
</main>
<footer id="contact" class="footer"><div class="wrap footer-grid"><div>${brand('light')}<p>A national platform for student innovation, solving real problems for a smarter and stronger India.</p><div class="socials">${['X', 'f', 'in', 'ig', '▶'].map((s) => `<a href="https://sih.gov.in" target="_blank" rel="noreferrer">${s}</a>`).join('')}</div></div>
<div><h4>Quick Navigation</h4><ul>${nav.map(([l, h]) => `<li><a href="${h}">${l}</a></li>`).join('')}</ul></div>
<div><h4>Important Links</h4><ul><li><a href="https://www.education.gov.in" target="_blank" rel="noreferrer">Ministry of Education</a></li><li><a href="https://sih.gov.in" target="_blank" rel="noreferrer">Official SIH Portal</a></li><li><a href="https://www.aicte-india.org" target="_blank" rel="noreferrer">AICTE</a></li><li><a href="https://www.digitalindia.gov.in" target="_blank" rel="noreferrer">Digital India</a></li></ul></div>
<div><h4>Contact</h4><ul><li>contact@example.org</li><li>+91 00000 00000</li><li>Address placeholder, India</li></ul></div></div>
<div class="wrap copyright">© 2026 Smart India Hackathon portal concept. Content is illustrative and not an official publication.</div>
<div class="credit"><span>Designed By</span><strong>Ananya Marghade</strong><span>PRN 24070521004</span><span>Batch A1</span></div></footer>`

problemList()
$('#q').oninput = (e) => { state.q = e.target.value; problemList() }
$('#theme').onchange = (e) => { state.theme = e.target.value; problemList() }
$('#menu').onclick = () => $('#nav').classList.toggle('open')
$('#nav').onclick = () => $('#nav').classList.remove('open')
document.addEventListener('click', (e) => {
  const t = e.target.closest('[data-theme],[data-type],[data-ps],[data-pr],[data-g],#reset')
  if (!t) return
  if (t.dataset.theme) { state.theme = t.dataset.theme; problemList() }
  else if (t.dataset.type) { state.type = t.dataset.type; problemList() }
  else if (t.id === 'reset') { state.q = ''; state.theme = 'All'; state.type = 'All'; $('#q').value = ''; problemList() }
  else if (t.dataset.ps) { const p = problems.find((x) => x.id === t.dataset.ps); modal(p.title, `<p class="org">${p.org} · ${p.theme} · ${p.type}</p><p>${p.text}</p><p>${p.detail}</p><p class="note">Sample problem statement for illustration only.</p>`) }
  else if (t.dataset.pr) { const p = projects[t.dataset.pr]; modal(p.name, `<dl class="detail"><dt>Problem addressed</dt><dd>${p.problem}</dd><dt>Technology stack</dt><dd>${p.stack}</dd><dt>Solution summary</dt><dd>${p.summary}</dd><dt>Impact</dt><dd>${p.impact}</dd></dl><p class="note">Illustrative example project.</p>`) }
  else if (t.dataset.g) { const [k, l] = t.dataset.g.split('|'); modal(l, img(photos[k], l, 'lightbox')) }
})
```

#### `12 Interactive real time web app/sih-site/css/styles.css`
```css
:root{--navy:#0a1750;--blue:#1d3c9f;--saffron:#f47b20;--green:#1a7a3c;--bg:#fbfaf7;--alt:#f1f3f8;--ink:#1d2433;--mute:#5a6478;--line:#d9dde7}
*{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth}
body{font-family:'Source Sans 3',sans-serif;background:var(--bg);color:var(--ink);line-height:1.6;font-size:17px}
h1,h2,h3{font-family:'Merriweather',serif;color:var(--navy);line-height:1.25}
h2{font-size:clamp(1.6rem,3vw,2.2rem);margin-bottom:.6rem}
h3{font-size:1.1rem}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
ul,ol{list-style:none;padding:0}
button{font:inherit;cursor:pointer}
:focus-visible{outline:3px solid var(--saffron);outline-offset:2px}
section[id]{scroll-margin-top:110px}
.wrap{max-width:1240px;margin:0 auto;padding:0 24px}
.section{padding:72px 0}
.section.alt{background:var(--alt)}
.section-head{margin-bottom:32px;max-width:720px}
.note{font-size:.9rem;color:var(--mute);font-style:italic}
.org{color:var(--mute);font-size:.95rem}
.img-fallback{background:linear-gradient(135deg,var(--navy),var(--blue));color:#fff;display:grid;place-items:center;text-align:center;padding:16px;min-height:160px}
.btn{display:inline-block;padding:12px 24px;font-weight:700;border:2px solid transparent;border-radius:3px;transition:background .2s,color .2s}
.btn-blue{background:var(--blue);color:#fff}.btn-blue:hover{background:var(--navy)}
.btn-saffron{background:#b84f06;color:#fff}.btn-saffron:hover{background:#8f3c03}
.btn-outline{border-color:var(--blue);color:var(--blue);background:transparent}.btn-outline:hover{background:var(--blue);color:#fff}
.btn-row{display:flex;gap:14px;flex-wrap:wrap;margin-top:28px}
.header{position:sticky;top:0;z-index:50;background:#fff;border-bottom:1px solid var(--line)}
.gov-strip{background:var(--navy);color:#dbe3f5;font-size:.82rem;border-bottom:3px solid var(--saffron)}
.gov-strip .wrap{display:flex;justify-content:space-between;padding-top:5px;padding-bottom:5px}
.header-main{display:flex;align-items:center;gap:24px;padding-top:12px;padding-bottom:12px}
.brand{display:flex;align-items:center;gap:12px}
.brand-mark{background:var(--navy);color:#fff;font-family:'Merriweather',serif;font-weight:900;padding:8px 10px;border-bottom:4px solid var(--saffron)}
.brand-text{display:flex;flex-direction:column;line-height:1.2}
.brand-text strong{color:var(--navy);font-family:'Merriweather',serif;font-size:1rem}
.brand-text small{color:var(--mute)}
.brand.light .brand-text strong{color:#fff}.brand.light .brand-text small{color:#b9c4de}
.nav{display:flex;gap:20px;margin-left:auto}
.nav a{font-weight:600;font-size:.95rem;padding:6px 0;border-bottom:2px solid transparent}
.nav a:hover{border-color:var(--saffron);color:var(--blue)}
.menu-btn{display:none;background:none;border:0;color:var(--navy);margin-left:auto}
.hero{padding:56px 0 72px;background:var(--bg)}
.hero-grid{display:grid;grid-template-columns:1fr 1.15fr;gap:56px;align-items:center}
.hero h1{font-size:clamp(2.2rem,4.6vw,3.6rem);text-transform:uppercase;letter-spacing:.01em}
.tagline{font-size:1.35rem;font-weight:700;color:var(--green);margin:14px 0 12px}
.hero-images{position:relative;padding-bottom:40px}
.hero-main{width:88%;height:430px;object-fit:cover;border-radius:2px}
.hero-side{position:absolute;right:0;bottom:0;width:44%;height:200px;object-fit:cover;border:8px solid var(--bg)}
.hero-images .img-fallback.hero-main{width:88%;height:430px}
.hero-images .img-fallback.hero-side{position:absolute;right:0;bottom:0;width:44%;height:200px;border:8px solid var(--bg)}
.hero-badge{position:absolute;left:-16px;bottom:8px;background:var(--navy);color:#fff;padding:14px 18px;border-left:5px solid var(--saffron);display:flex;flex-direction:column}
.hero-badge strong{font-family:'Merriweather',serif;font-size:1.4rem}
.notice-list li{display:grid;grid-template-columns:120px 150px 1fr;gap:20px;align-items:center;padding:16px 0;border-bottom:1px solid var(--line)}
.notice-list time{font-weight:700;color:var(--navy)}
.chip{display:inline-block;font-size:.8rem;font-weight:700;padding:3px 10px;background:#e3e9f7;color:var(--blue);border-radius:2px;justify-self:start}
.chip.hardware{background:#e0f2e6;color:var(--green)}
.about-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:56px;align-items:start}
.about-images{position:relative;padding-bottom:60px}
.about-a{width:80%;height:420px;object-fit:cover}
.about-b{position:absolute;right:0;bottom:0;width:55%;height:230px;object-fit:cover;border:8px solid var(--bg)}
.about-images .img-fallback{height:420px;width:80%}
.about-images .img-fallback.about-b{position:absolute;height:230px;width:55%;border:8px solid var(--bg)}
.about-list div{padding:14px 0;border-bottom:1px solid var(--line)}
.about-list dt{font-weight:700;color:var(--blue)}
.about-list dd{margin:0}
.theme-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}
.theme{padding:26px 22px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff;transition:background .2s}
.theme svg{color:#b84f06;margin-bottom:12px}
.theme p{font-size:.95rem;color:var(--mute);margin-top:6px}
.theme:hover{background:var(--navy)}.theme:hover h3,.theme:hover p{color:#fff}
.filters{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:12px}
.search{flex:1;min-width:220px;display:flex;align-items:center;gap:8px;border:1px solid var(--line);background:#fff;padding:0 12px}
.search input{flex:1;border:0;padding:12px 0;font:inherit;background:transparent;outline:none}
.filters select{border:1px solid var(--line);padding:0 12px;font:inherit;background:#fff;min-height:46px}
.seg{display:flex;border:1px solid var(--line)}
.seg button{border:0;background:#fff;padding:0 18px;font-weight:600}
.seg .on{background:var(--blue);color:#fff}
.count{color:var(--mute);margin:8px 0 16px;font-size:.95rem}
.ps-row{display:grid;grid-template-columns:130px 1fr auto;gap:24px;align-items:center;padding:20px;background:#fff;border:1px solid var(--line);border-left:5px solid var(--blue);margin-bottom:12px}
.ps-row:hover{border-left-color:var(--saffron)}
.ps-meta{display:flex;flex-direction:column;gap:8px}
.ps-id{font-weight:700;color:var(--navy)}
.empty{padding:40px;text-align:center;background:#fff;border:1px dashed var(--line)}
.empty .btn{margin-top:14px;border:0}
.timeline{display:grid;grid-template-columns:repeat(2,1fr);gap:0 56px;counter-reset:s}
.timeline li{display:flex;gap:18px;padding:20px 0;border-bottom:1px solid var(--line)}
.step-no{font-family:'Merriweather',serif;font-weight:900;font-size:1.6rem;color:#b84f06;min-width:48px}
.timeline p{color:var(--mute)}
.impact{background:var(--navy);color:#fff;padding:60px 0}
.impact h2{color:#fff}
.stat-row{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-top:28px}
.stat-row div{border-top:3px solid var(--saffron);padding-top:14px;display:flex;flex-direction:column}
.stat-row strong{font-family:'Merriweather',serif;font-size:2.2rem}
.stat-row em{font-size:.8rem;color:#aebbdc}
.project-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
.project img,.project .img-fallback{width:100%;height:220px;object-fit:cover}
.project>div:last-child{padding:18px 0}
.project p{margin:6px 0}
.link-btn{background:none;border:0;color:var(--blue);font-weight:700;padding:0;border-bottom:2px solid var(--saffron)}
.careers-grid{display:grid;grid-template-columns:1.1fr 1fr;gap:56px;align-items:center}
.careers-grid>div>p{margin-bottom:18px}
.skill-list{display:grid;grid-template-columns:1fr 1fr;gap:16px 28px}
.skill-list li{display:flex;flex-direction:column;border-left:3px solid var(--green);padding-left:12px}
.skill-list span{font-size:.95rem;color:var(--mute)}
.careers-img{width:100%;height:520px;object-fit:cover}
.gallery{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:210px;gap:12px}
.shot{position:relative;padding:0;border:0;overflow:hidden;background:var(--navy)}
.shot.wide{grid-column:span 2}.shot.tall{grid-row:span 2}
.shot img,.shot .img-fallback{width:100%;height:100%;object-fit:cover;transition:transform .4s}
.shot:hover img{transform:scale(1.05)}
.shot span{position:absolute;left:0;bottom:0;right:0;padding:10px 14px;color:#fff;font-weight:600;text-align:left;background:linear-gradient(transparent,rgba(11,31,77,.85))}
.cta{background:var(--blue);color:#fff;text-align:center;padding:72px 0;border-top:6px solid var(--saffron);border-bottom:6px solid var(--green)}
.cta h2{color:#fff;text-transform:uppercase}
.cta p{margin:8px 0 24px;font-size:1.15rem}
.footer{background:#08163a;color:#c3cde6;padding-top:56px}
.footer-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1.2fr;gap:40px}
.footer h4{color:#fff;margin-bottom:12px;font-family:'Merriweather',serif;font-size:1rem}
.footer li{margin-bottom:8px}
.footer a:hover{color:var(--saffron)}
.footer p{margin-top:14px;font-size:.95rem}
.contact li{display:flex;align-items:center;gap:8px}
.socials{display:flex;gap:10px;margin-top:16px}
.socials a{width:36px;height:36px;display:grid;place-items:center;border:1px solid #30427a}
.copyright{margin-top:40px;padding-top:20px;padding-bottom:20px;border-top:1px solid #20336b;font-size:.9rem}
.credit{background:#050e26;text-align:center;padding:28px 16px;display:flex;flex-direction:column;gap:4px;align-items:center}
.credit strong{font-family:'Merriweather',serif;font-size:1.5rem;color:#fff;border-bottom:2px solid var(--saffron);padding-bottom:4px;margin:4px 0}
.modal-backdrop{position:fixed;inset:0;background:rgba(8,22,58,.7);display:grid;place-items:center;z-index:100;padding:16px;animation:fade .2s}
.modal{background:#fff;max-width:640px;width:100%;max-height:90vh;overflow:auto;padding:32px;position:relative;border-top:5px solid var(--saffron);animation:rise .25s}
.modal h3{margin:0 40px 12px 0;font-size:1.3rem}
.modal p{margin-top:10px}
.modal-close{position:absolute;top:12px;right:12px;border:0;background:none}
.detail dt{font-weight:700;color:var(--blue);margin-top:12px}.detail dd{margin:0}
.lightbox{width:100%;max-height:60vh;object-fit:cover}
@keyframes fade{from{opacity:0}}
@keyframes rise{from{transform:translateY(16px);opacity:0}}
@media(max-width:1000px){
.theme-grid,.stat-row{grid-template-columns:repeat(2,1fr)}
.project-grid{grid-template-columns:1fr 1fr}
.footer-grid{grid-template-columns:1fr 1fr}
.gallery{grid-template-columns:repeat(2,1fr)}
.nav{display:none;position:absolute;top:100%;left:0;right:0;background:#fff;flex-direction:column;padding:12px 24px;border-bottom:1px solid var(--line);gap:4px}
.nav.open{display:flex}
.menu-btn{display:block}
.header-cta{display:none}
}
@media(max-width:760px){
.hero-grid,.about-grid,.careers-grid,.timeline{grid-template-columns:1fr}
.hero-main,.hero-images .img-fallback.hero-main{height:280px}
.about-a,.about-images .img-fallback{height:300px}
.careers-img{height:300px}
.notice-list li{grid-template-columns:1fr;gap:6px}
.ps-row{grid-template-columns:1fr}
.project-grid,.skill-list,.footer-grid{grid-template-columns:1fr}
.gov-strip .wrap{flex-direction:column;font-size:.75rem}
.gallery{grid-auto-rows:160px}
.section{padding:52px 0}
}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{animation:none!important;transition:none!important}}
.ticker{background:var(--saffron);color:#0a1750;display:flex;overflow:hidden;font-weight:600;font-size:.92rem}
.ticker strong{background:var(--navy);color:#fff;padding:8px 18px;white-space:nowrap;z-index:1}
.ticker div{display:flex;gap:56px;padding:8px 28px;white-space:nowrap;animation:tick 45s linear infinite}
.ticker:hover div{animation-play-state:paused}
@keyframes tick{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.motto{background:var(--navy);color:#fff;text-align:center;padding:30px 24px;border-top:5px solid var(--saffron)}
.motto h2{color:#fff;margin:0;font-size:clamp(1.3rem,2.6vw,2rem)}
.motto p{color:#ffd2ab;margin-top:6px}
.age-grid{display:grid;grid-template-columns:1fr 1fr;gap:0;margin-top:28px;border:1px solid var(--line)}
.age-grid div{padding:22px;background:#fff}
.age-grid div+div{border-left:5px solid var(--saffron)}
.age-grid h3{margin-bottom:6px}
@media(max-width:760px){.age-grid{grid-template-columns:1fr}.age-grid div+div{border-left:0;border-top:5px solid var(--saffron)}}
.ti{display:block;font-size:1.7rem;color:#b84f06;margin-bottom:8px}.theme:hover .ti{color:#fff}.socials a{color:#c3cde6;font-weight:700;font-size:.8rem}
.logo{width:54px;height:54px;flex:none}
.brand-text strong{font-size:1.15rem}
.logo-bar{background:#fff}
.logo-bar .wrap{display:flex;align-items:center;justify-content:space-between;gap:24px;padding-top:12px;padding-bottom:12px}
.partners{display:flex;gap:26px;align-items:center}
.partner{display:flex;align-items:center;gap:10px;padding-left:26px;border-left:1px solid var(--line)}
.partner:first-child{border-left:0}
.partner span:last-child{display:flex;flex-direction:column;line-height:1.2}
.partner strong{font-size:.9rem;color:var(--navy)}
.partner small{font-size:.75rem;color:#4a5468}
.p-ic{width:42px;height:42px;border-radius:50%;background:#eef1fa;display:grid;place-items:center;border:1px solid var(--line)}
.p-ic.aicte{font-size:.62rem;font-weight:700;color:var(--navy)}
.nav-bar{background:var(--blue);position:relative}
.nav-bar .wrap{display:flex;align-items:center;gap:16px}
.nav{margin-left:0;gap:0;flex:1}
.nav a{color:#fff;padding:14px 16px;border-bottom:3px solid transparent}
.nav a:hover{color:#fff;background:var(--navy);border-color:var(--saffron)}
.nav-bar .header-cta{padding:8px 18px;margin:6px 0}
.menu-btn{color:#fff;font-size:1.5rem;padding:10px 0}
.cta .btn-saffron{background:#fff;color:var(--navy)}
.cta .btn-saffron:hover{background:#ffe5cc}
.brand.light .logo{background:transparent}
@media(max-width:1000px){
.partners{display:none}
.nav{display:none;position:absolute;top:100%;left:0;right:0;background:var(--blue);flex-direction:column;padding:8px 24px;z-index:60}
.nav.open{display:flex}
.nav a{padding:12px 0}
.menu-btn{display:block;margin-left:auto}
.nav-bar .header-cta{display:none}
}
```

#### Output
- The portal opens with the government header strip, the logo bar, a navigation bar and a ticker that scrolls the latest announcements, followed by the hero section for **Smart India Hackathon 2026**.
- Clicking a **theme card** jumps to the *Problem Statements* section and filters the list by that theme; typing in the search box or using the theme dropdown and the Software / Hardware buttons updates the list and the *"N problem statements found"* counter immediately. If nothing matches, a **Clear filters** button is shown.
- **View Details** opens a modal with the full problem statement, **Read case study** opens an example project (problem, technology stack, solution and impact), and gallery photos open in a lightbox. `Escape`, the close button or a click on the backdrop closes the modal.
- The menu button toggles the navigation on small screens.

> **Screenshot:**
> ![Smart India Hackathon 2026 portal output](<sih-site/Smart India Hackathon 2026.png>)

---

## Result / Conclusion
The practical was completed successfully. A real-time interactive web application, **FoodieGo**, was developed using jQuery: the menu is loaded asynchronously with `$.ajax()` from a JSON file, the interface is filtered, sorted and updated instantly in response to user events, the cart, coupons, customer details and orders are persisted with `localStorage`, forms are validated with regular expressions, and `setInterval()` simulates live order tracking. The case studies extended these ideas to a validated workshop booking form with instant confirmation, and a data-driven Smart India Hackathon portal rendered entirely from JavaScript with live search, filters, modals and responsive navigation.

