const prevButton = document.querySelector('.prev-btn'),
      nextButton = document.querySelector('.next-btn'),
      sliderLine = document.querySelector('.slider-line');
const n = 7,  width = 62.5;
let offset = 0;

function updateButtonState() {
    nextButton.disabled = offset >= (n - 1) * width;
    prevButton.disabled = offset === 0;
}

function clickButton(isNext) {
    offset = isNext ? Math.min(offset + width, (n - 1) * width) : Math.max(offset - width, 0);
    sliderLine.style.left = -offset + 'rem';
    updateButtonState();
}

nextButton.addEventListener('click', () => clickButton(true));
prevButton.addEventListener('click', () => clickButton(false));