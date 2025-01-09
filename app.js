document
  .querySelectorAll(".iten-price")
  .forEach((el) => (el.textContent = el.textContent.replace(".", ",")));

const urlParams = new URLSearchParams(window.location.search);

const itemName = urlParams.get("name");
const itemPrice = urlParams.get("price").replace(".", ",");
const itemImage = urlParams.get("image");

const imageDetail = document.querySelector(".image-item");
const nameDetail = document.querySelector(".name-item");
const priceDetail = document.querySelector(".price-iten");

nameDetail.textContent = itemName;
priceDetail.textContent = "R$ " + itemPrice;
imageDetail.src = "assets/" + itemImage;

function openOrderConfirm() {
  window.open(
    "confirm_order.html?name=" +
      itemName +
      "&price=" +
      itemPrice +
      "&image=" +
      itemImage,
    "_self"
  );
}
