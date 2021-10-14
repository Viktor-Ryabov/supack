const burgerMenuButton = document.querySelector("#burgerMenuButton");
const mainMenuBlock = document.querySelector(".header__list");
const logo = document.querySelector(".header__logoButton");
const colseIconHeader = document.querySelector("#colseIconHeader");
const header = document.querySelector(".header");
const firstBlockButton = document.querySelector("#firstBlockButton");

const subscribeInput = document.querySelector("#singUpInput");
const singUpButton = document.querySelector("#singUpButton");
const singUpButton1 = document.querySelector(".studyComposition__button");
const singUpButton2 = document.querySelector(".searchingOrders__button");
const singUpBlock = document.querySelectorAll(".singUp");
const listMenu = document.querySelector(".header__list");
const headerLogo = document.querySelector(".header__logoButtonLink");
const closeIcon = document.querySelector(".header__closeIcon");



function addClassList(element, newClassList) {
  element.classList.add(newClassList);
}
function removeClassList(element, removableClassList) {
  element.classList.remove(removableClassList);
}

function openHeaderMenu(button) {
  button.addEventListener("click", function () {
    addClassList(closeIcon, "header__closeIcon_open");
    addClassList(headerLogo, "header__logoButtonLink_open");
    addClassList(listMenu, "header__list_open");
    addClassList(header, "header_phoneSize");
    addClassList(burgerMenuButton, "effects_notVisible");
    addClassList(mainMenuBlock, "effects_visible");
    addClassList(colseIconHeader, "effects_visible");
  });
}
openHeaderMenu(burgerMenuButton);

function colseHeaderMenu(button) {
  button.addEventListener("click", function () {
    removeClassList(closeIcon, "header__closeIcon_open");
    removeClassList(headerLogo, "header__logoButtonLink_open");
    removeClassList(listMenu, "header__list_open");
    removeClassList(header, "header_phoneSize");
    removeClassList(burgerMenuButton, "effects_notVisible");
    removeClassList(mainMenuBlock, "effects_visible");
    removeClassList(colseIconHeader, "effects_visible");
  });
}
colseHeaderMenu(colseIconHeader);

// function addInputListener(input) {
//   input.addEventListener("click", () => (input.value = ""));
// }
// addInputListener(subscribeInput);

function sendEmailForSubscribe(button, input) {
  button.addEventListener("click", function () {
    button.textContent = "Спасибо!";
    input.value = "";
  });
}

// sendEmailForSubscribe(singUpButton, subscribeInput);

function goToBlock(button, position){
  button.addEventListener("click", function(){
    window.scrollTo( 0, position );
  });
}
goToBlock(singUpButton1, 999999999);
goToBlock(logo, 0);
goToBlock(firstBlockButton, 99999999);

const link1 = document.querySelector("#link1 ");
console.log(link1)
const link2 = document.querySelector("#link2 ");
const link3 = document.querySelector("#link3");


function closeMenu(object){
  object.addEventListener("click", function(){
    removeClassList(closeIcon, "header__closeIcon_open");
    removeClassList(headerLogo, "header__logoButtonLink_open");
    removeClassList(listMenu, "header__list_open");
    removeClassList(header, "header_phoneSize");
    removeClassList(burgerMenuButton, "effects_notVisible");
    removeClassList(mainMenuBlock, "effects_visible");
    removeClassList(colseIconHeader, "effects_visible");
  });
}
closeMenu(link1);
closeMenu(link2);
closeMenu(link3);