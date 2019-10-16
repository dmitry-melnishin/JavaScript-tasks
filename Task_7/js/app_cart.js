const items = JSON.parse(localStorage.getItem("arrCartItems"));

const updateCartNumber = () => {
  const cartCounter = document.getElementsByClassName("cart__counter")[0];
  const cartNumber = localStorage.getItem("cartNumber");
  cartCounter.textContent = cartNumber;
};
updateCartNumber();

const createItem = el => `
<article class="item item_flex">
  <img class="item__img item__img_width_s" src="${el.src}" />
  <div class="item__text">
  <span class="item__title">${el.name}</span>, ${el.desc}, 
  $<span class="item__price">${el.price}</span>, 
  </div>
</article>`;

const createItems = items => {
  return items.reduce((acum, el) => acum + createItem(el), "");
};

const addCartItems = () => {
  const main = document.getElementsByClassName("main")[0];
  main.insertAdjacentHTML("beforeend", createItems(items));
};
addCartItems();
