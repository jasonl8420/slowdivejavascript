
// For the green dot to show up after each nav element has been clicked
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
          e.preventDefault(); // Prevent the default link behavior

          // Hide the dot on all navigation items
          navLinks.forEach((otherLink) => {
              const dot = otherLink.querySelector(".dot");
              dot.style.display = "none";
          });

          // Show the dot next to the clicked navigation item
          const dot = link.querySelector(".dot");
          dot.style.display = "inline-block";
      });
  });
});

// This function displays the content that has been linked to the corresponding nav element that has been clicked 
// and hides the rest
document.addEventListener("DOMContentLoaded", function () {
  const contentSections = document.querySelectorAll(".page-content");
  const navLinks = document.querySelectorAll(".navbar a");

  // Function to show the selected content and hide others
  function showContent(contentId) {
      contentSections.forEach((section) => {
          section.style.display = "none";
      });
      const selectedContent = document.getElementById(contentId);
      if (selectedContent) {
          selectedContent.style.display = "block";
      }
  }

  // Event listener for navigation clicks
  navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
          e.preventDefault(); // Prevent the default link behavior
          const itemId = link.id + "-content"; // Create the corresponding content ID
          showContent(itemId);
      });
  });
});

// This function reveals the hover box with term that require further explanation
const hoverWords = document.querySelectorAll('.hover-word');
const hoverBoxes = document.querySelectorAll('.hover-box');

// Add event listeners to each hoverWord element
hoverWords.forEach((hoverWord, index) => {
hoverWord.addEventListener('mouseover', () => {
  hoverBoxes[index].style.display = 'block';
});

hoverWord.addEventListener('mouseout', () => {
  hoverBoxes[index].style.display = 'none';
});
});


// This functionality allows the 'details' box to open and collapse, providing more detailed info for the examples 
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
});
};


// Trial and error javascript codes

// const links = document.querySelectorAll('.nav-link');
    
// if (links.length) {
//   links.forEach((link) => {
//     link.addEventListener('click', (e) => {
//       links.forEach((link) => {
//           link.classList.remove('active');
//       });
//       e.preventDefault();
//       link.classList.add('active');
//     });
//   });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const navLinks = document.querySelectorAll("nav a");

//   navLinks.forEach((link) => {
//       link.addEventListener("click", function (e) {
//           e.preventDefault(); // Prevent the default link behavior

//           // Hide the dot on all navigation items
//           navLinks.forEach((otherLink) => {
//               const dot = otherLink.querySelector(".dot");
//               dot.style.display = "none";
//           });

//           // Show the dot next to the clicked navigation item
//           const dot = link.querySelector(".dot");
//           dot.style.display = "inline-block";
//       });
//   });
// });


  // Add click event listeners to update the active item and store it in localStorage
  // navItems.forEach((item) => {
  //   item.addEventListener('click', (e) => {
  //     // Prevent the default link behavior
  //     e.preventDefault();

  //     // Remove "active" class from all items
  //     navItems.forEach((navItem) => {
  //       navItem.classList.remove('active');
  //     });

  //     // Add "active" class to the clicked item
  //     item.classList.add('active');

  //     // Store the active item's ID in localStorage
  //     localStorage.setItem('activeItemID', item.id);

  //     // Navigate to the clicked page (assuming the href attribute contains the page URL)
  //     const pageUrl = item.querySelector('a').getAttribute('href');
  //     window.location.href = pageUrl;
  //   });
  // });

