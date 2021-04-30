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
  console.log(event.target);
  console.log(event.target.getAttribute("data-linked-menu"));
  let targetMenu = "#" + event.target.getAttribute("data-linked-menu");
  document.querySelector(targetMenu).classList.toggle("show");
}

/*
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/
