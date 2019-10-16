const items = [
  {
    src: "img/Aloe-Vera5_3.jpg",
    name: "Aloe Vera",
    desc:
      "Aloe vera, a succulent species, produces gel and latex, plays a therapeutic role in health management through antioxidant, antitumor, and anti-inflammatory activities, and also offers a suitable alternative approach for the treatment of various types of diseases. In this review, we summarize the possible mechanism of action and the therapeutic implications of Aloe vera in health maintenance based on its modulation of various biological activities.",
    size: "Mini",
    price: "28",
    quantity: 0
  },
  {
    src: "img/airplant3.jpg",
    name: "Air Plant Trio",
    desc:
      "Three assorted air plants are paired with our Tillandz, American-made powder coated metal stands measuring 2 tall and 2 wide. These malleable stands can sit upright on a flat surface, or be attached to a wall with a screw. As a set you save $7.",
    size: "Mini",
    price: "50",
    quantity: 2
  },
  {
    src: "img/cactus-1.jpg",
    name: "Cactus",
    desc:
      "Echinocactus grusonii is a magnificent barrel cactus, often called Mother-in-Law's Pillow or Mother-in-Law's Cushion. It is deeply ribbed, each of which is covered in creamy yellow spines. Woolly white hairs grow on the crown and cup-shaped, vivid yellow flowers may form on mature plants. An all round spiky ball of fun.",
    size: "Mini",
    price: "28",
    quantity: 3
  },
  {
    src: "img/gorshok-1.jpg",
    name: "Flowerpot",
    desc:
      "A flowerpot, flower pot, or plant pot is a container in which flowers and other plants are cultivated and displayed. Historically, and still to a significant extent today, they are made from terracotta. Flowerpots are now often also made from plastic, wood, stone, or sometimes biodegradable material. An example of biodegradable pots are ones made of heavy brown paper, cardboard, or peat moss in which young plants for transplanting are grown.",
    size: "Mini",
    price: "50",
    quantity: 6
  },
  {
    src: "img/is3.jpg",
    name: "Orchid flower",
    desc:
      "Phalaenopsis, also called moth orchids. Flowers are usually white, purple or pink, or some combination thereof. Dendrobium, also called cane orchids. They have smaller flowers that grow in rows on stalks that arise from thick canes, often with several flower clusters per plant. Flowers are typically white or purple.",
    size: "Mini",
    price: "28",
    quantity: 0
  },
  {
    src: "img/th4.jpg",
    name: "Monstera",
    desc:
      "Monstera deliciosa, the ceriman, is a species of flowering plant native to tropical forests of southern Mexico, south to Panama.[1] It has been introduced to many tropical areas, and has become a mildly invasive species in Hawaii, Seychelles, Ascension Island and the Society Islands.",
    size: "Mini",
    price: "50",
    quantity: 6
  },
  {
    src: "img/the-sill_1.jpg",
    name: "Hoya Heart",
    desc:
      "The Hoya Heart is paired with our Ezra Planter, a ceramic pot measuring 2 tall and 2.5 wide. Your plant height may vary slightly. The heart is a rooted leaf cutting from the Hoya kerrii plant. It comes potted in our potting mix to increase plant health, longevity, and growth. The Ezra features a drainage hole and saucer. *Want to add a Message Pop? To add a ceramic Message Pop to your order, first add your plant to your cart below, then choose your Pop via the pop up for $5.",
    size: "Mini",
    price: "21",
    quantity: 0
  },
  {
    src: "img/the-sill_2.jpg",
    name: "Philodendron Green",
    desc:
      "The Philodendron Green is paired with our Small Terracotta Grant Planter, an earthenware pot measuring 4.25 tall and 5 wide. Your plant height may vary slightly. It comes potted in our soil mix to increase plant health, longevity, and growth. The Grant does not have a drainage hole. It has a layer of porous lava rocks lining the bottom to ensure proper drainage. The Grant is named after Chicago’s Grant Park.",
    size: "Mini",
    price: "32",
    quantity: 5
  }
];

const AVAILABILITY_STATUS = {
  AVAILABLE: "Is available",
  NOT_AVAILABLE: "Not available"
};

const getAvailability = el => {
  if (el.quantity) {
    return AVAILABILITY_STATUS.AVAILABLE;
  }

  return AVAILABILITY_STATUS.NOT_AVAILABLE;
};

const createHtmlGridItem = el => `
<article class="item item_width_s">
  <div class="item__img-wrap">
    <img class="item__img item__img_width_full" src="${el.src}" />
  </div>
  <div class="item__text-wrap">
    <div class="item__text-left">
      <h4 class="item__title">${el.name}</h4>
      <p class="item__desc">${el.desc}</p>
      <span class="item__size">${el.size}</span>
      <p class="item__availability">${getAvailability(el)}</p>
      <button class="btn" data-counter>Purchase</button>
    </div>
    <div class="item__text-right">
      $<span class="item__price">${el.price}</span>
    </div>
  </div>
</article>`;

const createHtmlListItem = el => `
<article class="item item_flex">
  <img class="item__img item__img_width_s" src="${el.src}" />
  <div class="item__text">
  <span class="item__title">${el.name}</span>, ${el.desc}, 
  $<span class="item__price">${el.price}</span>, 
  <span class="item__availability">${getAvailability(el)}</span>
  <button class="btn" data-counter>Purchase</button>
  </div>
</article>`;

const createHtmlGridItems = items => {
  return items.reduce((accum, el) => accum + createHtmlGridItem(el), "");
};

const createHtmlListItems = items => {
  return items.reduce((accum, el) => accum + createHtmlListItem(el), "");
};

const addItems = (containerGrid, containerList) => {
  containerGrid.insertAdjacentHTML("beforeend", createHtmlGridItems(items));
  containerList.insertAdjacentHTML("beforeend", createHtmlListItems(items));
};

const displayItems = view => {
  const gridVisible = document.querySelector(".container_grid_visible");
  const listVisible = document.querySelector(".container_list_visible");
  const containerGrid = document.querySelector(".container_grid");
  const containerList = document.querySelector(".container_list");

  if (view === "grid") {
    if (gridVisible) {
      addItems(containerGrid, containerList);
    } else if (listVisible) {
      containerList.classList.remove("container_list_visible");
      containerList.classList.add("container_list_invis");
      containerGrid.classList.add("container_grid_visible");
    } else {
      containerGrid.classList.remove("container_grid_invis");
      containerGrid.classList.add("container_grid_visible");
    }
  } else if (view === "list") {
    if (listVisible) {
      addItems(containerGrid, containerList);
    } else if (gridVisible) {
      containerGrid.classList.remove("container_grid_visible");
      containerGrid.classList.add("container_grid_invis");
      containerList.classList.add("container_list_visible");
    } else {
      containerList.classList.remove("container_list_invis");
      containerList.classList.add("container_list_visible");
    }
  }
};

const SORT_TYPES = {
  ASC: "asc",
  DES: "des"
};

const sortFunc = (collectionItems, sortType) => {
  if (sortType === SORT_TYPES.ASC) {
    return [...collectionItems].sort(
      (a, b) =>
        Number(a.getElementsByClassName("item__price")[0].textContent) -
        Number(b.getElementsByClassName("item__price")[0].textContent)
    );
  }

  return [...collectionItems].sort(
    (a, b) =>
      Number(b.getElementsByClassName("item__price")[0].textContent) -
      Number(a.getElementsByClassName("item__price")[0].textContent)
  );
};

const sortByPrice = sortType => {
  const container = document.body.getElementsByClassName("container");

  [...container].forEach(el => {
    const collectionItems = el.getElementsByClassName("item");
    const sortedArr = sortFunc(collectionItems, sortType);
    el.textContent = "";
    el.prepend(...sortedArr);
  });
};

const filterByPrice = () => {
  const priceFilter = document.getElementsByClassName("price-filter")[0];
  const container = document.getElementsByClassName("container");

  const minPrice = priceFilter.getElementsByTagName("input")[0].value;
  const maxPrice = priceFilter.getElementsByTagName("input")[1].value;

  [...container].forEach(el => {
    const collectionItems = el.getElementsByClassName("item");

    [...collectionItems].forEach(item => {
      const price = +item.getElementsByClassName("item__price")[0].textContent;

      if (!(price >= minPrice && price <= maxPrice)) {
        item.classList.add("item_invis");
      } else {
        if (item.classList.contains("item_invis")) {
          item.classList.remove("item_invis");
        }
      }
    });
  });
};

const filterPriceButton = document.getElementById("filterPriceButton");
filterPriceButton.addEventListener("click", filterByPrice);

const filterByAvailability = () => {
  const container = document.getElementsByClassName("container");

  [...container].forEach(el => {
    const collectionItems = el.getElementsByClassName("item");

    [...collectionItems].forEach(item => {
      const countOfGoods = item.getElementsByClassName("item__availability")[0]
        .textContent;

      if (countOfGoods !== AVAILABILITY_STATUS.AVAILABLE) {
        item.classList.add("item_invis");
      }
    });
  });
};

const availabilityFilterBtn = document.getElementById("availabilityFilterBtn");
availabilityFilterBtn.addEventListener("click", filterByAvailability);

if (localStorage.getItem("cartNumber")) {
  const cartCounter = document.getElementsByClassName("cart__counter")[0];
  cartCounter.textContent = localStorage.getItem("cartNumber");
}

const cartCounter = () => {
  const cartCounter = document.getElementsByClassName("cart__counter")[0];
  const newNumber = ++cartCounter.textContent;
  document.getElementsByClassName("cart__counter")[0].textContent = newNumber;
  localStorage.setItem("cartNumber", newNumber);
};

const addItemToLocalSt = e => {
  const item = e.target.closest(".item");
  const itemTitle = item.getElementsByClassName("item__title")[0].textContent;
  const itemObj = items.find(el => el.name === itemTitle);

  if (!localStorage.getItem("arrCartItems")) {
    localStorage.setItem("arrCartItems", JSON.stringify([itemObj]));
  } else {
    const parsedCartArr = JSON.parse(localStorage.getItem("arrCartItems"));
    parsedCartArr.push(itemObj);
    localStorage.setItem("arrCartItems", JSON.stringify(parsedCartArr));
  }
};

document.addEventListener("click", e => {
  if (e.target.dataset.counter === "") {
    cartCounter();
    addItemToLocalSt(e);
  }
});

const fullHtml = `
<button class="btn btn_grid" onclick="displayItems('grid')">grid</button>
<button class="btn btn_list" onclick="displayItems('list')">list</button>
<button class="btn" onclick="sortByPrice('asc')">Sort ascending</button>
<button class="btn" onclick="sortByPrice('des')">Sort descending</button>
<div class="container container_grid container_grid_invis">
${createHtmlGridItems(items)}</div>
<div class="container container_list container_list_invis">
${createHtmlListItems(items)}</div>`;

const main = document.getElementsByClassName("main")[0];
main.insertAdjacentHTML("beforeend", fullHtml);
