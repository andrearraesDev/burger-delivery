/**
 * Burger.IO - Order Confirmation Script
 * Gerencia a confirmação e envio do pedido via WhatsApp
 */

// Configuração do WhatsApp
const WHATSAPP_CONFIG = {
    // ⚠️ IMPORTANTE: Substitua pelo número real do estabelecimento
    phoneNumber: "5511999999999", // Formato: Código do país + DDD + Número
    messageTemplate: "Olá! Gostaria de fazer o pedido:\n\n📦 *{name}*\n💰 Valor: *{price}*\n\nPor favor, confirme a disponibilidade!"
};

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
 * Atualiza os elementos da página com os dados do pedido
 */
function updateOrderDetails() {
    const urlParams = getURLParams();

    const itemName = urlParams.get("name");
    const itemPrice = urlParams.get("price");
    const itemImage = urlParams.get("image");

    // Elementos do DOM
    const elementPrice = document.querySelector("#item-price");
    const elementName = document.querySelector("#item-name");
    const elementImage = document.querySelector("#item-image");

    // Atualiza os elementos se existirem
    if (elementName && itemName) {
        elementName.textContent = itemName;
    }

    if (elementPrice && itemPrice) {
        elementPrice.textContent = formatPrice(itemPrice);
    }

    if (elementImage && itemImage) {
        elementImage.src = "assets/" + itemImage;
        elementImage.alt = itemName || "Hambúrguer";
    }

    // Validação: redireciona se não houver dados
    if (!itemName || !itemPrice || !itemImage) {
        console.warn("⚠️ Dados do pedido incompletos. Redirecionando...");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    }
}

/**
 * Cria a mensagem formatada para o WhatsApp
 * @param {string} name - Nome do produto
 * @param {string} price - Preço do produto
 * @returns {string} Mensagem formatada
 */
function createWhatsAppMessage(name, price) {
    return WHATSAPP_CONFIG.messageTemplate
        .replace("{name}", name)
        .replace("{price}", formatPrice(price));
}

/**
 * Abre o WhatsApp com a mensagem do pedido
 */
function openWhatsApp() {
    const urlParams = getURLParams();

    const itemName = urlParams.get("name");
    const itemPrice = urlParams.get("price");

    if (!itemName || !itemPrice) {
        alert("❌ Erro ao processar o pedido. Dados incompletos.");
        return;
    }

    const message = createWhatsAppMessage(itemName, itemPrice);
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`;

    // Abre o WhatsApp em uma nova aba
    window.open(whatsappURL, "_blank");

    // Feedback visual
    console.log("✅ Pedido enviado para o WhatsApp!");
}

// Inicialização quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", updateOrderDetails);
