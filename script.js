let hamburger = document.querySelectorAll(".hamburger");

let closeButton = document.querySelector("#close");
let sidebar = document.querySelector("#sidebar-menu");

for (let h of hamburger) {
  h.addEventListener("click", () => {
    sidebar.classList.remove("close");
    sidebar.classList.add("show");
  });
}

closeButton.addEventListener("click", () => {
  console.log("click");
  sidebar.classList.remove("show");
  sidebar.classList.add("close");
});

sidebar.addEventListener("animationend", (event) => {
  sidebar.classList.remove("close");
});
