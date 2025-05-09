document.addEventListener("DOMContentLoaded", function () {
  const navigationHeader = document.querySelector(".header");
  let routes = document.querySelector(".routes");

  // Define the content to replace on scroll
  const newHeaderContent = "about us";
  const newListedItemContent = `
        <div class="route">
            <h4 class="route-num">01 &nbsp; &nbsp; </h4>
            <h4 class="route-title">Narrow &nbsp;Margin</h4>
        </div>
        <div class="route">
            <h4 class="route-num">02 &nbsp; &nbsp; </h4>
            <h4 class="route-title">Contact</h4>
        </div>
        <div class="route">
            <h4 class="route-num">03 &nbsp; &nbsp; </h4>
            <h4 class="route-title">Donations&nbsp; & &nbsp;Subscriptions</h4>
        </div>
        <div class="route">
            <h4 class="route-num">04 &nbsp; &nbsp; </h4>
            <h4 class="route-title">Contributors</h4>
        </div>
  `;

  function updateContentOnScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      // Add slide-out class
      navigationHeader.classList.add("fade-out");
      routes.classList.add("slide-out");

      // Wait for slide-out to complete before updating content
      setTimeout(() => {
        navigationHeader.textContent = newHeaderContent;
        routes.innerHTML = newListedItemContent;

        // Re-select the updated routes element
        routes = document.querySelector(".routes");

        // Add slide-in class after updating content
        navigationHeader.classList.remove("fade-out");
        navigationHeader.classList.add("fade-in");
        routes.classList.remove("slide-out");
        routes.classList.add("slide-in");

        // Remove slide-in class after animation completes
        setTimeout(() => {
          navigationHeader.classList.remove("fade-in");
          routes.classList.remove("slide-in");
        }, 600); // Match the CSS transition duration
      }, 600); // Match the CSS transition duration
    } else {
      // Add slide-out class
      navigationHeader.classList.add("fade-out");
      routes.classList.add("slide-out");

      // Wait for slide-out to complete before resetting content
      setTimeout(() => {
        navigationHeader.textContent = "quarterly issues";
        const ogRoutes = `
          <div class="route">
            <h4 class="route-num">01 &nbsp; &nbsp; </h4>
            <h4 class="route-title">August, &nbsp;2025</h4>
          </div>
        `;
        routes.innerHTML = ogRoutes;

        // Re-select the updated routes element
        routes = document.querySelector(".routes");

        // Add slide-in class after resetting content
        navigationHeader.classList.remove("fade-out");
        navigationHeader.classList.add("fade-in");
        routes.classList.remove("slide-out");
        routes.classList.add("slide-in");

        // Remove slide-in class after animation completes
        setTimeout(() => {
          navigationHeader.classList.remove("fade-in");
          routes.classList.remove("slide-in");
        }, 600); // Match the CSS transition duration
      }, 600); // Match the CSS transition duration
    }
  }

  // Attach the scroll event listener
  window.addEventListener("scroll", updateContentOnScroll);
});
