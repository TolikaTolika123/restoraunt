let menu = []
let categoryItems = []
class MenuItem {
  constructor(title, text, price) {
    this.title = title;
    this.text = text;
    this.price = price
  }
}

class MenuCategory {
  constructor(title, items) {
    this.title = title;
    this.items = items;
  }
}

function addItemsToCategory(title, text, price) {
  categoryItems.push(new MenuItem(title, text, price));
}

function addCategoryToMenu(title, items) {
  menu.push(new MenuCategory(title, items));
  categoryItems = [];
}

addItemsToCategory('Khinkali', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit', '5.00');
addItemsToCategory('Cezar', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ', '2.00');
addItemsToCategory('Pizza', 'Lorem ipsum dolor sit, amet consectetur ', '16.99');
addItemsToCategory('Xachapuri', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam sit numquam', '4.56')

addCategoryToMenu('Salads', categoryItems)


addItemsToCategory('Khinkali', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit', '5.00');
addItemsToCategory('Cezar', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ', '2.00');
addItemsToCategory('Pizza', 'Lorem ipsum dolor sit, amet consectetur ', '16.99');
addItemsToCategory('Xachapuri', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam sit numquam', '4.56')
addItemsToCategory('Khinkali', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit', '5.00');
addItemsToCategory('Cezar', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ', '2.00');

addCategoryToMenu('Drinks', categoryItems)

addItemsToCategory('Khinkali', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit', '5.00');
addItemsToCategory('Cezar', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ', '2.00');
addItemsToCategory('Pizza', 'Lorem ipsum dolor sit, amet consectetur ', '16.99');
addItemsToCategory('Xachapuri', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam sit numquam', '4.56')

addCategoryToMenu('Salads', categoryItems)

addItemsToCategory('Khinkali', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit', '5.00');
addItemsToCategory('Cezar', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ', '2.00');
addItemsToCategory('Pizza', 'Lorem ipsum dolor sit, amet consectetur ', '16.99');

addCategoryToMenu('Salads', categoryItems)

function buildMenu() {
  let output = '';
  for (let i = 0; i < menu.length; i++) {
    let items = `<h3 class="menu__category-title">${menu[i].title}</h3>`;
    for (let j = 0; j < menu[i].items.length; j++) {
      items += `<div class="menu__item">
      <h5 class="menu__item-title">${menu[i].items[j].title}</h5>
      <p class="menu__item-text">${menu[i].items[j].text}</p>
      <span class="menu__item-price">${menu[i].items[j].price}</span>
    </div>`
    }
    output +=   `<div class="menu__category">${items}</div>`;
  }
  return output;
}


export default function () {
  const content = document.querySelector('#content');
  const homeBtn = document.querySelector('#home');
  const menuBtn = document.querySelector('#menu');
  const contactBtn = document.querySelector('#contact');

  homeBtn.classList.remove('active');
  menuBtn.classList.add('active');
  contactBtn.classList.remove('active');

  content.innerHTML = '';

  const menu = document.createElement('section');
  const container = document.createElement('div');
  const menuInner = document.createElement('div');

  menu.className = 'menu';
  container.className = 'container';
  menuInner.className = 'menu__inner';

  menuInner.innerHTML = buildMenu();
  container.appendChild(menuInner);
  menu.appendChild(container);
  content.appendChild(menu);
}