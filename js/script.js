// Get the button
let topbutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var mixButtons = document.querySelectorAll('.mixbutton');

mixButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Remove active class from all mix buttons
        mixButtons.forEach(function (btn) {
            btn.classList.remove('active');
        });

        // Add active class to the clicked button
        button.classList.add('active');
    });
});

// Simulate click on "All" button to set it as active on page load
var allButton = document.querySelector('.mixbutton[data-filter="all"]');
allButton.click();

// Fip Card on Focus
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('focus', function() {
      this.classList.add('is-flipped');
  });
  card.addEventListener('blur', function() {
      this.classList.remove('is-flipped');
  });
});