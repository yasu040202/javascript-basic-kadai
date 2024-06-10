const textElement = document.getElementById('text');
const buttonElement = document.getElementById('btn');

let isClicked = false;

buttonElement.addEventListener('click', () => {
  if (!isClicked) {
    setTimeout(() => {
      textElement.textContent = 'ボタンをクリックしました';
    }, 2000);
    isClicked = true;
  }
});