const items = [
  {
    src: "img/Aloe-Vera5_3.jpg",
    name: "Aloe Vera",
    desc:
      "Aloe vera, a succulent species, produces gel and latex, plays a therapeutic role in health management through antioxidant, antitumor, and anti-inflammatory activities, and also offers a suitable alternative approach for the treatment of various types of diseases. In this review, we summarize the possible mechanism of action and the therapeutic implications of Aloe vera in health maintenance based on its modulation of various biological activities.",
    size: "Mini",
    price: "28"
  },
  {
    src: "img/airplant3.jpg",
    name: "Air Plant Trio",
    desc:
      "Three assorted air plants are paired with our Tillandz, American-made powder coated metal stands measuring 2 tall and 2 wide. These malleable stands can sit upright on a flat surface, or be attached to a wall with a screw. As a set you save $7.",
    size: "Mini",
    price: "50"
  },
  {
    src: "img/cactus-1.jpg",
    name: "Cactus",
    desc:
      "Echinocactus grusonii is a magnificent barrel cactus, often called Mother-in-Law's Pillow or Mother-in-Law's Cushion. It is deeply ribbed, each of which is covered in creamy yellow spines. Woolly white hairs grow on the crown and cup-shaped, vivid yellow flowers may form on mature plants. An all round spiky ball of fun.",
    size: "Mini",
    price: "28"
  },
  {
    src: "img/gorshok-1.jpg",
    name: "Flowerpot",
    desc:
      "A flowerpot, flower pot, or plant pot is a container in which flowers and other plants are cultivated and displayed. Historically, and still to a significant extent today, they are made from terracotta. Flowerpots are now often also made from plastic, wood, stone, or sometimes biodegradable material. An example of biodegradable pots are ones made of heavy brown paper, cardboard, or peat moss in which young plants for transplanting are grown.",
    size: "Mini",
    price: "50"
  },
  {
    src: "img/is3.jpg",
    name: "Orchid flower",
    desc:
      "Phalaenopsis, also called moth orchids. Flowers are usually white, purple or pink, or some combination thereof. Dendrobium, also called cane orchids. They have smaller flowers that grow in rows on stalks that arise from thick canes, often with several flower clusters per plant. Flowers are typically white or purple.",
    size: "Mini",
    price: "28"
  },
  {
    src: "img/th4.jpg",
    name: "Monstera",
    desc:
      "Monstera deliciosa, the ceriman, is a species of flowering plant native to tropical forests of southern Mexico, south to Panama.[1] It has been introduced to many tropical areas, and has become a mildly invasive species in Hawaii, Seychelles, Ascension Island and the Society Islands.",
    size: "Mini",
    price: "50"
  },
  {
    src: "img/the-sill_1.jpg",
    name: "Hoya Heart",
    desc:
      "The Hoya Heart is paired with our Ezra Planter, a ceramic pot measuring 2 tall and 2.5 wide. Your plant height may vary slightly. The heart is a rooted leaf cutting from the Hoya kerrii plant. It comes potted in our potting mix to increase plant health, longevity, and growth. The Ezra features a drainage hole and saucer. *Want to add a Message Pop? To add a ceramic Message Pop to your order, first add your plant to your cart below, then choose your Pop via the pop up for $5.",
    size: "Mini",
    price: "21"
  },
  {
    src: "img/the-sill_2.jpg",
    name: "Philodendron Green",
    desc:
      "The Philodendron Green is paired with our Small Terracotta Grant Planter, an earthenware pot measuring 4.25 tall and 5 wide. Your plant height may vary slightly. It comes potted in our soil mix to increase plant health, longevity, and growth. The Grant does not have a drainage hole. It has a layer of porous lava rocks lining the bottom to ensure proper drainage. The Grant is named after Chicago’s Grant Park.",
    size: "Mini",
    price: "32"
  }
];

const createHtmlGridItem = el => `<article class="item item_width_s">
<div class="item__img-wrap">
  <img class="item__img item__img_width_full" src="${el.src}" />
</div>
<div class="item__text-wrap">
  <div class="item__text-left">
    <h4 class="item__title">${el.name}</h4>
    <p class="item__desc">${el.desc}</p>
    <span class="item__size">${el.size}</span>
  </div>
  <div class="item__text-right">
    <span>$</span>${el.price}
  </div>
</div>
</article>`;

const createHtmlListItem = el => `<article class="item item_flex">
<img class="item__img item__img_width_s" src="${el.src}" />
<div class="item__text">${el.name}, ${el.desc}, $${el.price}</div>
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
  const gridVisible = document.querySelector(".container-grid_visible");
  const listVisible = document.querySelector(".container-list_visible");
  const containerGrid = document.querySelector(".container-grid");
  const containerList = document.querySelector(".container-list");

  if (view === "grid") {
    if (gridVisible) {
      addItems(containerGrid, containerList);
    } else if (listVisible) {
      containerList.classList.remove("container-list_visible");
      containerList.classList.add("container-list_invis");
      containerGrid.classList.add("container-grid_visible");
    } else {
      containerGrid.classList.remove("container-grid_invis");
      containerGrid.classList.add("container-grid_visible");
    }
  } else if (view === "list") {
    if (listVisible) {
      addItems(containerGrid, containerList);
    } else if (gridVisible) {
      containerGrid.classList.remove("container-grid_visible");
      containerGrid.classList.add("container-grid_invis");
      containerList.classList.add("container-list_visible");
    } else {
      containerList.classList.remove("container-list_invis");
      containerList.classList.add("container-list_visible");
    }
  }
};

const fullHtml = `<button class="btn btn_grid" onclick="displayItems('grid')">grid</button>
<button class="btn btn_list" onclick="displayItems('list')">list</button>
<div class="container-grid container-grid_invis">
${createHtmlGridItems(items)}</div>
<div class="container-list container-list_invis">
${createHtmlListItems(items)}</div>`;
document.body.insertAdjacentHTML("afterbegin", fullHtml);
