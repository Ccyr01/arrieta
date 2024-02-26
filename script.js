let hamburger = document.querySelectorAll(".hamburger");

let closeButton = document.querySelector("#close");
let sidebar = document.querySelector("#sidebar-menu");

for (let h of hamburger) {
  console.log(h);
  h.addEventListener("click", () => {
    sidebar.classList.add("show");
  });
}

closeButton.addEventListener("click", () => {
  sidebar.classList.remove("show");
});
