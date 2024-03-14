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
document.getElementById('getQuoteButton').addEventListener('click', function() {
    if (typeOfInsurance) {
        // Here you can handle the product selection (e.g., showing a modal related to the selected product)
        console.log('Selected product:', typeOfInsurance); 
    } else {
        alert('Please select a product first.');
    }
});
