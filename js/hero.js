const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".controls i");
const carouselChildren = [...carousel.children];
const popupContainer = document.getElementById('popupContainer');
const card = document.querySelector('.card');


// pre: list param to represent an array of student objects,
//       page param to represent the requested page number
// post: dom elements inserted
// */
function showPage(list) {
  let i;
  carousel.innerHTML = "";
  //loop through objects in list param
  for (i = 0; i < list.length; i++) {
    insertDomElements(
      list[i].picture.thumbnail,
      list[i].name.first,
      list[i].name.last,
      list[i].email,
      list[i].registered.date
    );
  }
}

// //pre: take all the necessary elements from the data
// //post: people's pictures and info displayed
function insertDomElements(imgSrc, firstName, lastName, email) {
  const li = document.createElement("li");
  li.setAttribute("class", "card");
  carousel.appendChild(li);
  const div = document.createElement("div");
  div.setAttribute("class", "img");
  li.appendChild(div);
  const img = document.createElement("img");
  img.setAttribute("class", "draggable");
  img.setAttribute("src", imgSrc);
  img.setAttribute("alt", "Profile Picture");
  img.addEventListener('click', () => showImagePopup(imgSrc, `${firstName} ${lastName} - ${email}`));
  div.appendChild(img);
  const h2 = document.createElement("h2");
  h2.innerHTML = `${firstName} ${lastName}`;
  div.appendChild(h2);
  carousel.appendChild(li);
}
showPage(data);

//POPUP
// Function to show the image popup with description
function showImagePopup(imgSrc, description) {
  console.log('inside showImagePopup');
  const popup = document.getElementById('imagePopup');
  popup.innerHTML = `<img src="${imgSrc}" alt="Popup Image"><p>${description}</p>`;
  popup.style.display = 'block';

  // Close the popup when clicking outside of it
  document.addEventListener('click', closeImagePopup);
}

// Function to close the image popup
function closeImagePopup(event) {
  const popup = document.getElementById('imagePopup');

  // Check if the click is outside the popup
  if (!popup.contains(event.target)) {
    popup.style.display = 'none';
    document.removeEventListener('click', closeImagePopup);
  }
}

// Hide popup when clicking outside the popup
window.addEventListener('click', (event) => {
  if (event.target === popupContainer) {
      popupContainer.style.display = 'none';
  }
});



const firstCardWidth = carousel.querySelector(".card").offsetWidth;
let isDragging = false,
  startX,
  startScrolleft,
  timeoutId;
//get number of cards that can fit at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
//insert copies of last few card to beginning of carousel
//for infinite scrolling
carouselChildren
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

carouselChildren.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

//Arrow Buttons event listener
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("click", carousel.scrollLeft, btn.id, firstCardWidth);
    //carousel.scrollLeft = btn.id === "left" ? -firstCardWidth : firstCardWidth;
    if (btn.id === "left") {
      carousel.scrollLeft = carousel.scrollLeft - firstCardWidth;
    } else {
      carousel.scrollLeft = carousel.scrollLeft + firstCardWidth;
    }
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrolleft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrolleft - (e.pageX - e.startX);
};
const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};
const autoPlay = () => {
  // if(window.innerWidth < 800)return;
  // timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 3500);
};
autoPlay();
const infiniteScroll = () => {
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  } else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
  //clear existing timeout and start autoplay if
  // the mouse isn't over the carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
