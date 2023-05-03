const lowerCase = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
  'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', ' \\ ', 'del',
  'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '&#59;', '&#39;', 'enter',
  'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '&#44;', '.', '/', '⯅', 'shift',
  'ctrl', 'win', 'alt', ' ', 'alt', 'ctrl', '⯇', '⯆', '⯈'];

const buttonClass = 'key-button';

function createTitle() {
  const title = document.createElement('p');
  title.className = 'title';
  title.innerHTML = 'Virtual keyboard by Kate Goncharick';
  document.body.insertAdjacentElement('beforeEnd', title);
}

function createTextarea() {
  const textarea = document.createElement('textarea');
  textarea.setAttribute('autofocus', 'autofocus');
  textarea.className = ('textarea');
  document.addEventListener('click', () => {
    textarea.focus();
  });
  document.body.insertAdjacentElement('beforeEnd', textarea);
}

function createKeys(keys) {
  const keyBoard = document.createElement('div');
  keyBoard.className = 'keyboard';
  document.body.insertAdjacentElement('beforeEnd', keyBoard);
  keys.forEach((key) => {
    const newDiv = document.createElement('div');
    newDiv.className = 'key';
    newDiv.innerHTML = `<button class = "${buttonClass}" data-value=${key}>${key}</button>`;
    keyBoard.insertAdjacentElement('beforeEnd', newDiv);
  });
}

createTitle();
createTextarea();
createKeys(lowerCase);

document.addEventListener('click', (event) => {
  if (event.target.className === buttonClass) {
    const textarea = document.querySelector('.textarea');
    textarea.value += event.target.dataset.value;
  }
});
