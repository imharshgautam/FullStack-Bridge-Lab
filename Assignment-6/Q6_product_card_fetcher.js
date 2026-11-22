// Q6 – E-Commerce Dashboard: Product Card Fetcher
// Run in Node.js 18+ (which includes global fetch) or in a modern browser.

const API_URL = "https://fakestoreapi.com/products";

async function fetchAndDisplayProducts() {
    try {
        const response = await fetch(API_URL);

        // fetch() rejects for network errors, but not for HTTP 4xx/5xx.
        // Check response.ok explicitly to handle unsuccessful HTTP statuses.
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const products = await response.json();

        products.forEach(product => {
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${Number(product.price).toFixed(2)}`);
            console.log(`Image: ${product.image}`);
            console.log("------------------------------");
        });

        // Optional browser-only bonus: create product cards on the page.
        // This block is skipped in Node.js because document is not available.
        if (typeof document !== "undefined") {
            const productContainer = document.createElement("div");
            productContainer.style.display = "grid";
            productContainer.style.gridTemplateColumns =
                "repeat(auto-fit, minmax(220px, 1fr))";
            productContainer.style.gap = "16px";

            products.forEach(product => {
                const card = document.createElement("article");
                const image = document.createElement("img");
                const title = document.createElement("h3");
                const price = document.createElement("p");

                image.src = product.image;
                image.alt = product.title;
                image.style.width = "120px";
                image.style.height = "120px";
                image.style.objectFit = "contain";

                title.textContent = product.title;
                price.textContent = `$${Number(product.price).toFixed(2)}`;

                card.append(image, title, price);
                card.style.border = "1px solid #ddd";
                card.style.borderRadius = "8px";
                card.style.padding = "12px";
                productContainer.appendChild(card);
            });

            document.body.appendChild(productContainer);
        }
    } catch (error) {
        console.error("Failed to load products. Please try again.", error);
    }
}

fetchAndDisplayProducts();
