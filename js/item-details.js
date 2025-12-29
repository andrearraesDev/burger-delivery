/**
 * Burger.IO - Item Details Script
 * Gerencia a página de detalhes do produto
 */

/**
 * Obtém os parâmetros da URL
 * @returns {URLSearchParams} Parâmetros da URL
 */
function getURLParams() {
    return new URLSearchParams(window.location.search);
}

/**
 * Formata o preço para o padrão brasileiro
 * @param {string} price - Preço no formato "00.00"
 * @returns {string} Preço formatado "R$ 00,00"
 */
function formatPrice(price) {
    if (!price) return "R$ 0,00";
    return "R$ " + price.replace(".", ",");
}

/**
 * Atualiza os elementos da página com os dados do produto
 */
function updateProductDetails() {
    const urlParams = getURLParams();

    const itemName = urlParams.get("name");
    const itemPrice = urlParams.get("price");
    const itemImage = urlParams.get("image");

    // Elementos do DOM
    const imageDetail = document.querySelector(".image-item");
    const nameDetail = document.querySelector(".name-item");
    const priceDetail = document.querySelector(".price-iten");

    // Atualiza os elementos se existirem
    if (nameDetail && itemName) {
        nameDetail.textContent = itemName;
        document.title = `${itemName} - Burger.IO`;
    }

    if (priceDetail && itemPrice) {
        priceDetail.textContent = formatPrice(itemPrice);
    }

    if (imageDetail && itemImage) {
        imageDetail.src = "assets/" + itemImage;
        imageDetail.alt = itemName || "Hambúrguer";
    }

    // Validação: redireciona se não houver dados
    if (!itemName || !itemPrice || !itemImage) {
        console.warn("⚠️ Dados do produto incompletos. Redirecionando...");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    }
}

/**
 * Abre a página de confirmação de pedido
 */
function openOrderConfirm() {
    const urlParams = getURLParams();

    const itemName = urlParams.get("name");
    const itemPrice = urlParams.get("price");
    const itemImage = urlParams.get("image");

    if (itemName && itemPrice && itemImage) {
        const confirmURL = `confirm_order.html?name=${encodeURIComponent(itemName)}&price=${itemPrice}&image=${itemImage}`;
        window.location.href = confirmURL;
    } else {
        alert("❌ Erro ao processar o pedido. Tente novamente.");
    }
}

// Inicialização quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", updateProductDetails);
