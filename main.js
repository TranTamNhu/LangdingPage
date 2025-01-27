var cards = document.querySelectorAll(".card-1");
var texts = document.querySelectorAll(".texts");
var currentCard = cards[0];
const contactForm = document.getElementById("contact-us");
const confirmation = document.getElementById("contact-success");
var form = document.getElementById("trial-form");
var confirmationMessage = document.getElementById("confirmation-message");
var iconTags = document.querySelectorAll(".ic");
var img = document.querySelector("#image");
const listImg = [
  "https://demo.epic-webdesign.com/tf-launchpage/v1/images/about2.jpg",
  "https://demo.epic-webdesign.com/tf-launchpage/v1/images/about5.jpg",
  "https://demo.epic-webdesign.com/tf-launchpage/v1/images/about1.jpg",
];
iconTags.forEach((iconTag, index) => {
  iconTag.addEventListener("click", () => {
    iconTags.forEach((icon) => {
      icon.classList.remove("show");
    });
    iconTag.classList.add("show");
    img.src = listImg[index];
  });
});

cards.forEach((card) => {
  card.addEventListener("click", () => {
    var show = card.querySelector(".texts");
    if (card == currentCard) {
      show.classList.remove("show");
    } else {
      texts.forEach((text) => {
        text.classList.remove("show");
      });

      show.classList.add("show");
      currentCard = card;
    }
  });
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const company = document.getElementById("company").value;
  const email = document.getElementById("email").value;
  const launch = document.getElementById("launch").value;

  if (company && email && launch) {
    confirmationMessage.style.display = "block";

    form.style.display = "none";
  }
});

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const launch = document.getElementById("launch").value;
  const message = document.getElementById("message").value;

  if (name && phone && email && launch && message) {
    confirmation.style.display = "block";
    contactForm.style.display = "none";
  }
});
