const reviewForm = document.getElementById("reviewForm");
const reviewsContainer = document.getElementById("reviewsContainer");

function loadReviews() {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.forEach((review) => {
    displayReview(review.name, review.opinion);
  });
}

function displayReview(name, opinion) {
  const reviewCard = document.createElement("div");
  reviewCard.classList.add("card");
  reviewCard.innerHTML = `
            <div class="card-content">
                <h2>${name}</h2>
                <p>${opinion}</p>
            </div>
        `;
  reviewsContainer.appendChild(reviewCard);
}

reviewForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const opinion = document.getElementById("opinion").value;

  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.push({ name, opinion });
  localStorage.setItem("reviews", JSON.stringify(reviews));

  displayReview(name, opinion);

  reviewForm.reset();
});

window.onload = loadReviews;
