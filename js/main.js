/**
 * Burger.IO - Main Application Script
 * Gerencia a listagem de produtos na página principal
 */

// Configuração dos produtos disponíveis
const products = [
    {
        name: "X-Burger",
        price: "12.90",
        image: "x-burger.jpg",
        description: "Hambúrguer clássico com queijo"
    },
    {
        name: "X-Bacon",
        price: "12.90",
        image: "x-bacon.jpg",
        description: "Hambúrguer com bacon crocante"
    },
    {
        name: "Double X",
        price: "14.90",
        image: "double-x.jpg",
        description: "Dois hambúrgueres, dobro de sabor"
    },
    {
        name: "O Burger X",
        price: "16.90",
        image: "o-burger-x.jpg",
        description: "Nosso hambúrguer especial"
    },
    {
        name: "X-Futuro",
        price: "17.50",
        image: "x-futuro.jpg",
        description: "Hambúrguer vegano delicioso"
    },
    {
        name: "X-Salada",
        price: "22.99",
        image: "x-salada.jpg",
        description: "Hambúrguer completo com salada"
    },
];

/**
 * Formata o preço para o padrão brasileiro
 * @param {string} price - Preço no formato "00.00"
 * @returns {string} Preço formatado "00,00"
 */
function formatPrice(price) {
    return price.replace(".", ",");
}

/**
 * Cria o HTML de um card de produto
 * @param {Object} product - Objeto com dados do produto
 * @returns {string} HTML do card
 */
function createProductCard({ name, price, image, description }) {
    return `
    <div class="item-card">
      <img class="item-image" src="assets/${image}" alt="${name}" loading="lazy">
      
      <div class="card-content">
        <h2>${name}</h2>
        
        <p class="iten-price">
          <span class="less-price">R$</span> ${formatPrice(price)}
        </p>
        
        <div class="iten-raiting">
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star'></i>
          <i class='bx bxs-star-half'></i>
        </div>
        
        <div class="iten-option">
          <a href="item_details.html?name=${encodeURIComponent(name)}&price=${price}&image=${image}" 
             class="option-detail">
            Ver Detalhes
          </a>
          <div class="icon-option" title="Chat">
            <i class='bx bx-chat'></i>
          </div>
          <div class="icon-option" title="Favoritar">
            <i class='bx bx-heart'></i>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Renderiza a lista de produtos na página
 */
function renderProducts() {
    const container = document.querySelector(".itens-list");

    if (!container) {
        console.error("Container .itens-list não encontrado!");
        return;
    }

    const productsHTML = products.map(createProductCard).join("");
    container.innerHTML = productsHTML;
}

/**
 * Registra o Service Worker para funcionalidade PWA
 */
function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", async () => {
            try {
                const registration = await navigator.serviceWorker.register("/serviceWorker.js");
                console.log("✅ Service Worker registrado com sucesso:", registration.scope);
            } catch (error) {
                console.error("❌ Erro ao registrar Service Worker:", error);
            }
        });
    }
}

// Inicialização quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    registerServiceWorker();
});
