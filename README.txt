LITTLE FLAME STUDIO — STATIC CANDLE SHOP
========================================

Files
-----
index.html   Main website structure
style.css    Responsive design and styling
script.js    Product catalogue, filters, cart, totals, WhatsApp order message

IMPORTANT BEFORE PUBLISHING
---------------------------
1. Open script.js in a text editor.
2. Find:
       const WHATSAPP_NUMBER = "16135551234";
   Replace it with your WhatsApp number including country code, digits only.
   Example format for a Canadian number: 16135551234 (this is only an example).
3. In script.js, edit the price: value for each product in the PRODUCTS list.
   The prices currently in the demo are starter/sample prices, not confirmed prices.
4. Replace the Facebook and Instagram links in index.html with your real profile URLs.
5. You can change "Little Flame Studio" to your real business name in index.html.

ORDER FLOW
----------
Customers choose products and options, add them to the cart, and see item prices,
quantities, line totals, and the estimated cart total. "Order now on WhatsApp"
opens WhatsApp with a pre-filled message containing those selections and prices.
No payment is taken on the website. You confirm availability, delivery/pickup,
customization, and payment with the customer in WhatsApp.

GITHUB PAGES
------------
1. Create a new GitHub repository (for example: candle-shop).
2. Upload index.html, style.css, script.js, and this README.
3. Open repository Settings > Pages.
4. Under Build and deployment, choose "Deploy from a branch".
5. Select the main branch and /(root), then Save.
6. Wait for GitHub Pages to publish and open the website URL shown there.

NOTES
-----
- This is a static site; it does not need a database or server.
- Product illustrations are CSS-based placeholders so the site works without image files.
  Replace them with real product photos later for the best customer experience.
- The social links are generic placeholders until replaced.
- Google Fonts is used for typography; if it is unavailable, fallback fonts are used.
