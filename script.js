// if ("scrollRestoration" in history) {
//     history.scrollRestoration = "manual";
//   }

//   window.addEventListener("load", () => {
//     window.scrollTo(0, 0);
//   });

window.addEventListener("load", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Start Training Button
const startTrainingBtn = document.getElementById("startTrainingBtn");
const contactSection = document.getElementById("contact");

startTrainingBtn.addEventListener("click", () => {
  contactSection.scrollIntoView({
    behavior: "smooth",
  });
});

// About Section
const moreText = document.getElementById("moreText");
const readMoreBtn = document.getElementById("readMoreBtn");

function readMore() {
  if (moreText.classList.contains("d-none")) {
    moreText.classList.remove("d-none");
    readMoreBtn.textContent = "Read Less";
  } else {
    moreText.classList.add("d-none");
    readMoreBtn.textContent = "Read More";
  }
}

readMoreBtn.addEventListener("click", readMore);

// Testimonials Carousel

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    mouseDrag: false,
    loop: true,
    margin: 2,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".owl-prev").click(function () {
    $active = $(".owl-item .item.show");
    $(".owl-item .item.show").removeClass("show");
    $(".owl-item .item").removeClass("next");
    $(".owl-item .item").removeClass("prev");
    $active.addClass("next");
    if ($active.is(".first")) {
      $(".owl-item .last").addClass("show");
      $(".first").addClass("next");
      $(".owl-item .last").parent().prev().children(".item").addClass("prev");
    } else {
      $active.parent().prev().children(".item").addClass("show");
      if ($active.parent().prev().children(".item").is(".first")) {
        $(".owl-item .last").addClass("prev");
      } else {
        $(".owl-item .show").parent().prev().children(".item").addClass("prev");
      }
    }
  });

  $(".owl-next").click(function () {
    $active = $(".owl-item .item.show");
    $(".owl-item .item.show").removeClass("show");
    $(".owl-item .item").removeClass("next");
    $(".owl-item .item").removeClass("prev");
    $active.addClass("prev");
    if ($active.is(".last")) {
      $(".owl-item .first").addClass("show");
      $(".owl-item .first").parent().next().children(".item").addClass("prev");
    } else {
      $active.parent().next().children(".item").addClass("show");
      if ($active.parent().next().children(".item").is(".last")) {
        $(".owl-item .first").addClass("next");
      } else {
        $(".owl-item .show").parent().next().children(".item").addClass("next");
      }
    }
  });
});

// Services
const oneOnOneItems = [
  "Personalized workout program",
  "Form and technique coaching",
  "Progress tracking",
  "Strength and conditioning focus",
  "Injury prevention guidance",
];

function fillIndividualTrainingCard(items) {
  // Get the card body
  const cardBody = document.querySelector("#individualTraining .card-body");

  // Create ordered list
  const ol = document.createElement("ol");

  // Loop through array and create list items
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ol.appendChild(li);
  });

  // Add the list to the card
  cardBody.appendChild(ol);
}

fillIndividualTrainingCard(oneOnOneItems);

// Online Coaching

const onlineCoaching = [
  "Motivation",
  "Workout anywhere",
  "Video demonstrations",
  "Customized programs",
];

function onlineTrainingCard(online) {
  const cardList = document.querySelector("#onlineCoaching .card-body");
  const ol = document.createElement("ol");

  online.forEach((online) => {
    const li = document.createElement("li");
    li.textContent = online;
    ol.appendChild(li);
  });

  cardList.appendChild(ol);
}

onlineTrainingCard(onlineCoaching);

// Nutrition Card

const nutrition = [
  "Nutrition planning",
  "Meal planning",
  "Food tracking",
  "Meal planning",
  "Customized macros",
];

function nutritionCard(nutrition) {
  const cardList = document.querySelector("#nutritionCoaching .card-body");
  const ol = document.createElement("ol");
  nutrition.forEach((nutrition) => {
    const li = document.createElement("li");
    li.textContent = nutrition;
    ol.appendChild(li);
  });
  cardList.appendChild(ol);
}

nutritionCard(nutrition);

// GET
const copyrightElement = document.getElementById('copyright');

// RESPOND
const year = new Date().getFullYear();
const companyName = "Fitlife Training";

// UPDATE - Build the entire string
copyrightElement.innerHTML = `&copy; ${year} ${companyName}. All rights reserved.`;
