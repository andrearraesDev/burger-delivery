const urlParams = new URLSearchParams(window.location.search);

const itemName = urlParams.get("name");
const itemPrice = urlParams.get("price")?.replace(".", ",");
const itemImage = urlParams.get("image");

const elementPrice = document.querySelector("#item-price");
const elementName = document.querySelector("#item-name");
const elementImage = document.querySelector("#item-image");

elementPrice.textContent = "R$" + itemPrice;
elementName.textContent = itemName;
elementImage.src = "assets/" + itemImage;

function openWhatsApp() {
  window.open(
    "https://wa.me/5500000000000?text=Quero%20fazer%20o%20pedido%20do%20item%3A%20" + itemName);
}
