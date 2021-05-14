let menuItems = document.querySelectorAll(".has-sub-menu");
let burgerMenuBtn = document.querySelector(".meny-bild");
let subMenus = document.querySelectorAll(".submenu");

burgerMenuBtn.addEventListener("click", oppnaMeny);

function oppnaMeny() {
  console.log("hej");
  document.getElementById("myDropdown").classList.toggle("show");
  subMenus.forEach((item) => {
    item.classList.remove("show");
  })
}

menuItems.forEach((item) => {
  item.addEventListener("click", showSubMenu);
})

function showSubMenu(event) {
  subMenus.forEach((item) => {
    item.classList.remove("show");
  })
  console.log(event.target);
  console.log(event.target.getAttribute("data-linked-menu"));
  let targetMenu = "#" + event.target.getAttribute("data-linked-menu");
  document.querySelector(targetMenu).classList.toggle("show");
}


