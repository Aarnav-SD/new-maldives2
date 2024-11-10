const thumbsUpButtons = document.querySelectorAll(".thumbs-up");
const thumbsDownButtons = document.querySelectorAll(".thumbs-down");

function updateDisplay() {
  thumbsUpButtons.forEach((button, index) => {
    const countSpan = button.querySelector(".count");
    const storedCount = localStorage.getItem(`thumbsUpCount${index}`) || 0;
    countSpan.textContent = storedCount;
  });

  thumbsDownButtons.forEach((button, index) => {
    const countSpan = button.querySelector(".count");
    const storedCount = localStorage.getItem(`thumbsDownCount${index}`) || 0;
    countSpan.textContent = storedCount;
  });
}

thumbsUpButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    let countSpan = button.querySelector(".count");
    let currentCount = parseInt(countSpan.textContent);
    currentCount++;
    countSpan.textContent = currentCount;

    localStorage.setItem(`thumbsUpCount${index}`, currentCount);
  });
});

thumbsDownButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    let countSpan = button.querySelector(".count");
    let currentCount = parseInt(countSpan.textContent);
    currentCount++;
    countSpan.textContent = currentCount;
    localStorage.setItem(`thumbsDownCount${index}`, currentCount);
  });
});

updateDisplay();
