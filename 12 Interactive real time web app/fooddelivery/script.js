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