
const WHATSAPP_NUMBER = "16135551234"; // REPLACE with your real WhatsApp business number

const PRODUCTS = [
  {id:"bubble-mini",name:"Bubble Candle — Mini",category:"Bubble",price:8.00,tag:"A little favourite",shape:"bubble",wax:"#f0c9b6",bg:"#f2e4d8",emoji:"◉",sizes:["Mini","Cube"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"bubble-large",name:"Bubble Candle — Large",category:"Bubble",price:14.00,tag:"Statement shape",shape:"bubble",wax:"#d7a1a0",bg:"#f3e4df",emoji:"◉",sizes:["Large"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"heart-bubble",name:"Heart Bubble Candle",category:"Bubble",price:12.00,tag:"Gift-ready",shape:"bubble",wax:"#d88b8d",bg:"#f1e1e0",emoji:"♡",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"rose-flower",name:"Rose Flower Candle",category:"Flowers",price:13.00,tag:"Floral favourite",shape:"flower",wax:"#d58a80",bg:"#f3e4de",emoji:"✿",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"peony",name:"Peony Candle",category:"Flowers",price:13.00,shape:"flower",wax:"#e0a2b3",bg:"#f3e6e9",emoji:"✿",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"daisy",name:"Daisy Candle",category:"Flowers",price:11.00,shape:"daisy",wax:"#e8c85d",bg:"#f5eed9",emoji:"✿",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"lotus",name:"Lotus Candle",category:"Flowers",price:12.00,shape:"petal",wax:"#dba6a0",bg:"#f0e3dc",emoji:"❀",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"heart",name:"Heart Candle",category:"Hearts",price:9.00,shape:"heart",wax:"#d9878d",bg:"#f3e2e0",emoji:"♡",sizes:["Small","Big"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"hands-heart",name:"Heart Held in Hands",category:"Hearts",price:15.00,shape:"heart",wax:"#d4a18f",bg:"#f1e5da",emoji:"♡",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"heart-rose",name:"Heart Rose Candle",category:"Hearts",price:14.00,shape:"flower",wax:"#c96d75",bg:"#f0dedc",emoji:"♡",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"hugging-couple",name:"Hugging Couple Candle",category:"Hearts",price:18.00,tag:"Keepsake gift",shape:"figure",wax:"#c79d83",bg:"#eee0d2",emoji:"♡",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"teddy",name:"Teddy Bear Candle",category:"Figures",price:12.00,shape:"bear",wax:"#c5a087",bg:"#eee2d6",emoji:"ʕ•ᴥ•ʔ",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"baby-teddy",name:"Small Teddy Bear Candle",category:"Figures",price:8.00,shape:"bear",wax:"#d8b9a1",bg:"#f0e5da",emoji:"ʕ•ᴥ•ʔ",sizes:["Small"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"dog",name:"Dog Candle",category:"Figures",price:13.00,shape:"dog",wax:"#c2a18a",bg:"#eee2d7",emoji:"♧",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"twisted-spiral",name:"Twisted Spiral Candle",category:"Sculptural",price:10.00,shape:"twist",wax:"#d4a17d",bg:"#f0e4d6",emoji:"〰",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"tulip-bouquet",name:"Tulip Bouquet Candle",category:"Flowers",price:17.00,tag:"Bouquet style",shape:"petal",wax:"#e4a5a0",bg:"#f2e4dd",emoji:"❀",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"twisted-wave",name:"Twisted Wave Candle",category:"Sculptural",price:11.00,shape:"twist",wax:"#b4bfa8",bg:"#e9eee5",emoji:"〰",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"rose-bouquet",name:"Rose Bouquet Candle",category:"Flowers",price:18.00,shape:"flower",wax:"#d68b83",bg:"#f1e2dc",emoji:"✿",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"shell",name:"Shell Candle",category:"Sculptural",price:10.00,shape:"shell",wax:"#e2c6ad",bg:"#f1e7dc",emoji:"♧",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"pumpkin",name:"Pumpkin Candle",category:"Seasonal",price:12.00,tag:"Seasonal",shape:"pumpkin",wax:"#d99050",bg:"#f3e5d6",emoji:"✿",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"spooky",name:"Spooky Candle",category:"Seasonal",price:13.00,tag:"Seasonal",shape:"pumpkin",wax:"#8a7b91",bg:"#e9e2eb",emoji:"☾",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"butterfly",name:"Butterfly Candle",category:"Sculptural",price:10.00,shape:"butterfly",wax:"#d4a5c4",bg:"#f0e3ed",emoji:"🦋",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"baby",name:"Baby Candle",category:"Figures",price:12.00,shape:"baby",wax:"#e7c5b2",bg:"#f2e5dc",emoji:"♡",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"christmas-tree",name:"Christmas Tree Candle",category:"Seasonal",price:14.00,shape:"tree",wax:"#71866e",bg:"#e4e9df",emoji:"♧",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"reindeer",name:"Reindeer Candle",category:"Seasonal",price:14.00,shape:"figure",wax:"#bd987e",bg:"#eee2d4",emoji:"♧",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"snowflake",name:"Snowflake Candle",category:"Seasonal",price:9.00,shape:"snow",wax:"#b8c9cb",bg:"#e7eff0",emoji:"❄",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"christmas-glove",name:"Christmas Glove Candle",category:"Seasonal",price:10.00,shape:"figure",wax:"#b96c63",bg:"#f1e2dc",emoji:"♡",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"snowman",name:"Snowman Candle",category:"Seasonal",price:12.00,shape:"figure",wax:"#e5e5dc",bg:"#ebeeee",emoji:"☃",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"christmas-bell",name:"Christmas Bell Candle",category:"Seasonal",price:10.00,shape:"figure",wax:"#c8a56b",bg:"#f0e7d6",emoji:"♧",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]},
  {id:"christmas-stocking",name:"Christmas Stocking Candle",category:"Seasonal",price:10.00,shape:"figure",wax:"#bc6d64",bg:"#f2e3dd",emoji:"♡",sizes:["Standard"],colors:["White","Yellow","Green","Blue","Pink","Purple","Red","Orange"],fragrances:["Unscented","Lavender","Vanilla"]}
];

const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];
const money = n => new Intl.NumberFormat("en-CA",{style:"currency",currency:"CAD"}).format(n);
let activeFilter = "All";
let cart = [];
let toastTimer;

function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function shapeMarkup(p){
  const shapes={bubble:`<div class="product-shape shape-bubble"></div>`,flower:`<div class="product-shape shape-flower">✿</div>`,heart:`<div class="product-shape shape-heart"><span>♥</span></div>`,figure:`<div class="product-shape shape-figure">${p.emoji}</div>`,twist:`<div class="product-shape shape-twist"></div>`,shell:`<div class="product-shape shape-shell">⌁</div>`,petal:`<div class="product-shape shape-petal">❀</div>`,pumpkin:`<div class="product-shape shape-pumpkin">✿</div>`,butterfly:`<div class="product-shape shape-butterfly">🦋</div>`,baby:`<div class="product-shape shape-baby">♡</div>`,tree:`<div class="product-shape shape-tree"></div>`,snow:`<div class="product-shape shape-snow">❄</div>`,daisy:`<div class="product-shape shape-daisy">✿</div>`,dog:`<div class="product-shape shape-dog">${p.emoji}</div>`,bear:`<div class="product-shape shape-bear">ʕ•ᴥ•ʔ</div>`};
  return shapes[p.shape]||shapes.figure;
}
function productCard(p){
  const sizes=p.sizes.map(s=>`<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join("");
  const colors=p.colors.map(c=>`<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");
  const scents=p.fragrances.map(c=>`<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");
  return `<article class="product-card" data-id="${p.id}">
    <div class="product-visual" style="--product-bg:${p.bg};--wax:${p.wax}">
      ${p.tag?`<span class="product-tag">${escapeHtml(p.tag)}</span>`:""}
      ${shapeMarkup(p)}
      <button class="quick-add" data-add="${p.id}">Add to bag +</button>
    </div>
    <div class="product-meta"><div><h3>${escapeHtml(p.name)}</h3><span class="product-category">${escapeHtml(p.category)}</span></div><span class="product-price">${money(p.price)}</span></div>
    <div class="product-options">
      ${p.sizes.length>1?`<label>Size <select data-option="size" aria-label="${escapeHtml(p.name)} size">${sizes}</select></label>`:`<input type="hidden" data-option="size" value="${escapeHtml(p.sizes[0])}">`}
      <label>Colour <select data-option="color" aria-label="${escapeHtml(p.name)} colour">${colors}</select></label>
      <label>Scent <select data-option="scent" aria-label="${escapeHtml(p.name)} fragrance">${scents}</select></label>
    </div></article>`;
}
function renderProducts(){
  let list=PRODUCTS.filter(p=>activeFilter==="All"||p.category===activeFilter);
  const sort=$("#sortProducts").value;
  if(sort==="low")list.sort((a,b)=>a.price-b.price);
  if(sort==="high")list.sort((a,b)=>b.price-a.price);
  if(sort==="az")list.sort((a,b)=>a.name.localeCompare(b.name));
  $("#productGrid").innerHTML=list.map(productCard).join("");
}
function showToast(message){
  const t=$("#toast");t.textContent=message;t.classList.add("show");
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),2200);
}
function getProduct(id){return PRODUCTS.find(p=>p.id===id);}
function addToCart(id){
  const card=$(`.product-card[data-id="${id}"]`);
  const p=getProduct(id);
  const options={size:$('[data-option="size"]',card).value,color:$('[data-option="color"]',card).value,scent:$('[data-option="scent"]',card).value};
  const key=[id,options.size,options.color,options.scent].join("|");
  const existing=cart.find(i=>i.key===key);
  if(existing)existing.qty++;else cart.push({key,id,...options,qty:1});
  renderCart();showToast(`${p.name} added to your bag`);
}
function cartQty(){return cart.reduce((n,i)=>n+i.qty,0);}
function cartTotal(){return cart.reduce((n,i)=>n+getProduct(i.id).price*i.qty,0);}
function renderCart(){
  $("#cartCount").textContent=cartQty();$("#drawerCount").textContent=`(${cartQty()})`;
  $("#cartTotal").textContent=money(cartTotal());
  if(!cart.length){$("#cartItems").innerHTML='<p class="empty-cart">Your bag is waiting for something lovely.<br>Browse the collection and add a candle to begin.</p>';$("#orderNow").disabled=true;$("#orderNow").style.opacity=".5";return;}
  $("#orderNow").disabled=false;$("#orderNow").style.opacity="1";
  $("#cartItems").innerHTML=cart.map(i=>{
    const p=getProduct(i.id);
    return `<div class="cart-item"><div class="cart-thumb" style="--product-bg:${p.bg};color:${p.wax}">${p.emoji}</div><div><h3>${escapeHtml(p.name)}</h3><small>Size: ${escapeHtml(i.size)} · Colour: ${escapeHtml(i.color)}<br>Fragrance: ${escapeHtml(i.scent)}</small><div class="qty-control"><button data-qty="${i.key}" data-delta="-1" aria-label="Decrease quantity">−</button><span>${i.qty}</span><button data-qty="${i.key}" data-delta="1" aria-label="Increase quantity">+</button><button class="remove-item" data-remove="${i.key}">Remove</button></div></div><div class="cart-item-price">${money(p.price*i.qty)}</div></div>`;
  }).join("");
}
function openCart(){ $("#cartDrawer").classList.add("open");$("#cartBackdrop").classList.add("show");$("#cartDrawer").setAttribute("aria-hidden","false");document.body.style.overflow="hidden"; }
function closeCart(){ $("#cartDrawer").classList.remove("open");$("#cartBackdrop").classList.remove("show");$("#cartDrawer").setAttribute("aria-hidden","true");document.body.style.overflow=""; }
function whatsappUrl(message){return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;}
function orderMessage(){
  const lines=cart.map(i=>{const p=getProduct(i.id);return `• ${p.name}\n  Size: ${i.size} | Colour: ${i.color} | Fragrance: ${i.scent}\n  Qty: ${i.qty} × ${money(p.price)} = ${money(p.price*i.qty)}`;});
  return `Hello! I'd like to place an order:\n\n${lines.join("\n\n")}\n\nEstimated total: ${money(cartTotal())}\n\nPlease confirm availability and let me know the delivery/pickup and payment options. Thank you!`;
}
$("#filters").addEventListener("click",e=>{
  const b=e.target.closest("[data-filter]");if(!b)return;
  activeFilter=b.dataset.filter;$$(".filter").forEach(x=>x.classList.toggle("active",x===b));renderProducts();
});
document.addEventListener("click",e=>{
  const add=e.target.closest("[data-add]");if(add){addToCart(add.dataset.add);return;}
  const qty=e.target.closest("[data-qty]");if(qty){const item=cart.find(i=>i.key===qty.dataset.qty);if(item){item.qty+=Number(qty.dataset.delta);if(item.qty<1)cart=cart.filter(i=>i.key!==item.key);renderCart();}return;}
  const remove=e.target.closest("[data-remove]");if(remove){cart=cart.filter(i=>i.key!==remove.dataset.remove);renderCart();}
});
$$("[data-filter-link]").forEach(a=>a.addEventListener("click",()=>{activeFilter=a.dataset.filterLink;$$(".filter").forEach(x=>x.classList.toggle("active",x.dataset.filter===activeFilter));renderProducts();}));
$("#sortProducts").addEventListener("change",renderProducts);
$("#openCart").addEventListener("click",openCart);
$("#closeCart").addEventListener("click",closeCart);
$("#cartBackdrop").addEventListener("click",closeCart);
$("#continueShopping").addEventListener("click",closeCart);
$("#orderNow").addEventListener("click",()=>{
  if(!cart.length)return;
  if(!/^\d{8,15}$/.test(WHATSAPP_NUMBER)||WHATSAPP_NUMBER==="16135551234"){showToast("Add your real WhatsApp number in script.js first.");return;}
  window.open(whatsappUrl(orderMessage()),"_blank","noopener,noreferrer");
});
$("#customWhatsApp").addEventListener("click",e=>{e.preventDefault();if(WHATSAPP_NUMBER==="16135551234"){showToast("Add your real WhatsApp number in script.js first.");return;}window.open(whatsappUrl("Hello! I'd like to discuss a custom candle order. I have an idea I'd love to share."),"_blank","noopener,noreferrer");});
$("#footerWhatsApp").addEventListener("click",e=>{e.preventDefault();if(WHATSAPP_NUMBER==="16135551234"){showToast("Add your real WhatsApp number in script.js first.");return;}window.open(whatsappUrl("Hello! I'd like to ask about your candles."),"_blank","noopener,noreferrer");});
$("#mobileMenuButton").addEventListener("click",()=>$("#mobileNav").classList.toggle("open"));
$$(".mobile-nav a").forEach(a=>a.addEventListener("click",()=>$("#mobileNav").classList.remove("open")));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeCart();});
$("#year").textContent=new Date().getFullYear();
renderProducts();renderCart();
