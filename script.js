let hamburger = document.querySelectorAll(".hamburger");

let closeButton = document.querySelector("#close");
let sidebar = document.querySelector("#sidebar-menu");

for (let h of hamburger) {
  console.log(h);
  h.addEventListener("click", () => {
    sidebar.classList.add("show");
    console.log('here in contact')
  });
}

closeButton.addEventListener("click", () => {
  sidebar.classList.remove("show");
});


let typeOfInsurance = '';

// Add click event listeners to dropdown items
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        typeOfInsurance = this.getAttribute('data-value'); // Update the typeOfInsurance variable
        // Optionally, update the button text or perform other UI updates
        document.getElementById('dropdownMenuButton').textContent = this.textContent;
    });
});

// Add click event listener to the "Get a Quote" button
document.getElementById('getQuoteButton').addEventListener('click', function() {
    if (typeOfInsurance) {
        // Here you can handle the product selection (e.g., showing a modal related to the selected product)
        console.log('Selected product:', typeOfInsurance); // Example action
        // You can show a modal here based on the typeOfInsurance value
    } else {
        alert('Please select a product first.');
    }
});
