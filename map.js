document.addEventListener('DOMContentLoaded', function() {
  const mapLinks = document.querySelectorAll(".map-link");
  const mapList = document.querySelectorAll(".map");

  function hideAllMaps() {
      mapList.forEach(map => {
          map.style.display = "none";
      });
  }

  mapLinks.forEach(link => {
      link.addEventListener("click", function(e) {
          // Prevent default if necessary
          e.preventDefault();

          console.log("Click on:", e.currentTarget.getAttribute("data-map"));
          let target = e.currentTarget.getAttribute("data-map"); // Use currentTarget for reliability
          hideAllMaps();
          document.querySelector("#" + target).style.display = "block";
      });
  });

  function loadPage() {
      // Get the parameter value from the URL
      const urlParams = new URLSearchParams(window.location.search);
      const paramValue = urlParams.get('param1'); // Ensure 'param1' is the correct parameter name

      // Simulate a click on the corresponding map link
      if (paramValue) {
          executeFunction(paramValue);
      }
  }

  function executeFunction(param) {
      // Simulate click on the map link with the ID passed as a parameter
      const linkToClick = document.querySelector(`.map-link[data-map="${param}"]`);
      if (linkToClick) {
          linkToClick.click();
      }
  }

  // Call loadPage to check URL parameters and potentially simulate a click
  loadPage();
});
