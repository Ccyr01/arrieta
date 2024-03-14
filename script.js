let hamburger = document.querySelectorAll(".hamburger");

let closeButton = document.querySelector("#close");
let sidebar = document.querySelector("#sidebar-menu");
let quoteButton = document.querySelector('#getQuoteButton')
let heroButton = document.querySelector('#nominate-a-hero-button')

for (let h of hamburger) {
  h.addEventListener("click", () => {
    sidebar.classList.add("show");
    console.log('here in contact')
  });
}

closeButton.addEventListener("click", () => {
  sidebar.classList.remove("show");
});


let typeOfInsurance = '';

document.querySelectorAll('.dropdown-item2').forEach(item => {
  item.addEventListener('click', function(e) {
      e.preventDefault();
      typeOfInsurance = this.getAttribute('data-value'); // Update the typeOfInsurance variable
      document.getElementById('dropdownMenuButton').textContent = this.textContent;

      // Update the data-bs-target attribute of the Get a Quote button
      let modalId = `#myModal${typeOfInsurance.charAt(0).toUpperCase() + typeOfInsurance.slice(1)}`;
      document.getElementById('getQuoteButton').setAttribute('data-bs-target', modalId);
  });
});


// Add click event listener to the "Get a Quote" button
if(quoteButton){
quoteButton.addEventListener('click', function() {
    console.log('click logged')
    if (typeOfInsurance) {
        // Here you can handle the product selection (e.g., showing a modal related to the selected product)
        console.log('Selected product:', typeOfInsurance); 
    } else {
        alert('Please select a product first.');
    }
});
}

// //THis is the click event listener for the hero nomination
// if(heroButton){
//   heroButton.addEventListener('click', function() {
//   console.log('click logged')
// });
// }
