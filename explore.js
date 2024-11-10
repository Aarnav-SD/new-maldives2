function filterCards(category) {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const cardContent = card.querySelector(".card-content");
    if (category === "all") {
      card.style.display = "block";
    } else {
      if (cardContent.classList.contains(category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  });
}
