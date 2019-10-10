const items = [
  {
    src: "img/Aloe-Vera-pale-gray.jpg",
    title: "Aloe Vera",
    desc: "The Aloe Vera is paired with our Mini Dolores Planter.",
    price: "22",
    color: "#d3d3d3"
  }
];

const createItemDot = color => {
  return `<div class="dots-wrap__dot" style="background-color: ${color}"></div>`;
};

const createItem = (el, i = 0) => `
<div class="wrap${i}">
  <img class="item__img" src="${el.src}" alt="" />
  <div class="item__text-wrap">
    <div class="item__text-left">
      <h4 class="item__title">${el.title}</h4>
      <p class="item__desc">${el.desc}</p>
    </div>
    <div class="item__text-right">
      $${el.price}
    </div>
  </div>
</div>`;

const initialHtml = `<div class="container">
  <article class="item item_width">
    ${createItem(items[0])}
    <div class="dots-wrap">${createItemDot(items[0].color)}</div>
  </article>
</div>`;
document.body.insertAdjacentHTML("afterbegin", initialHtml);

const inpTypeFile = document.getElementById("inpField");
const form = document.getElementById("form");
const inpTitle = document.getElementById("inpTitle");
const inpDesc = document.getElementById("inpDesc");
const inpPrice = document.getElementById("inpPrice");
const inpColor = document.getElementById("inpColor");
const container = document.getElementsByClassName("container")[0];
const dotsCollection = container.getElementsByClassName("dots-wrap__dot");

dotsCollection[0].classList.add("active");

class Item {
  constructor(elem) {
    elem.addEventListener("change", this.onChange.bind(this));
  }

  setFile(e) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener("load", e => (newItem.src = e.target.result));
  }

  setTitle() {
    this.title = inpTitle.value;
  }

  setDesc() {
    this.desc = inpDesc.value;
  }

  setPrice() {
    this.price = inpPrice.value;
  }

  setColor() {
    this.color = inpColor.value;
  }

  onChange(e) {
    const text = e.target.dataset.text;

    if (text) {
      this[text](e);
    }
  }
}

const newItem = new Item(form);

const addItemDot = (lastIndex, container) => {
  const dotsWrap = container.getElementsByClassName("dots-wrap")[0];
  dotsWrap.insertAdjacentHTML(
    "beforeend",
    createItemDot(items[lastIndex].color)
  );
};

const setDisplay = (lastIndex, container) => {
  const dotsCollection = container.getElementsByClassName("dots-wrap__dot");

  for (let j = 0; j < dotsCollection.length; j++) {
    container.getElementsByClassName(`wrap${j}`)[0].style.display = "none";
    dotsCollection[j].classList.remove("active");
  }

  container.querySelector(`.wrap${lastIndex}`).style.display = "block";
  dotsCollection[lastIndex].classList.add("active");
};

const addEventForFistDot = (container, dotsCollection) => {
  dotsCollection[0].addEventListener(
    "click",
    setDisplay.bind(null, (lastIndex = 0), container)
  );
};

addEventForFistDot(container, dotsCollection);

const addEventForNextDot = (lastIndex, container) => {
  const dotsCollection = container.getElementsByClassName("dots-wrap__dot");

  dotsCollection[lastIndex].addEventListener(
    "click",
    setDisplay.bind(null, lastIndex, container)
  );
};

const addNewItem = (items, container) => {
  const lastIndex = items.length - 1;
  const firstItem = container.getElementsByClassName("item")[0];

  firstItem.insertAdjacentHTML(
    "afterbegin",
    createItem(items[lastIndex], lastIndex)
  );
  container.querySelector(`.wrap${lastIndex}`).style.display = "none";

  addItemDot(lastIndex, container);
  addEventForNextDot(lastIndex, container);
};

addButton.addEventListener("click", () => {
  items.push(newItem);
  addNewItem(items, container);
});

const resetForm = () => {
  const inputCollection = form.getElementsByTagName("input");

  for (let i = 0; i < inputCollection.length; i++) {
    if (inputCollection[i].type === "text") {
      inputCollection[i].value = "";
    }
  }
};

const reset = document.getElementById("reset");
reset.addEventListener("click", resetForm);
