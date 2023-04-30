function createTitle() {
  const title = document.createElement('h1');
  title.className = 'title';
  title.innerHTML=('Virtual keyboard by Kate Goncharick')
  document.appendChild(title);
}

const keyboard = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
  ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', ' /n ', 'del'],
  ['caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '&#59;', '&#39;', 'enter'],
  ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '&#44;', '.', '/', '⯅', 'shift'],
  ['ctrl', 'win', 'alt', ' ', 'alt', 'ctrl', '⯇', '⯆', '⯈'],

  // "sixthRow": ["f1","f2","f3","f4","f5","f6","f7","f8","f9","f10","f11","f12",],
];
function addElement() {
  const textarea = document.createElement('textarea');
  textarea.setAttribute('autofocus', 'autofocus');
  document.onclick = () => {
    textarea.focus();
  };
  document.body.insertAdjacentElement('beforeBegin', textarea);

  keyboard.forEach((keysArr) => {
    const row = document.createElement('div');
    row.className = 'row';
    document.body.appendChild(row);

    keysArr.forEach((key) => {
      const buttonDiv = document.createElement('div');// create div
      buttonDiv.className = 'key'; // make it look like a button
      buttonDiv.innerHTML = ([key]); // put in into the row --- create row for each line

      row.insertAdjacentElement('beforeEnd', buttonDiv);
    });

    // debugger
  });

}

document.body.onload = addElement;

// function createButton (size, )

// win - prevent default
// по клику на кнопку - класс active - визуально меняется

// сначала нагенерить каждую строку отдельно из разных кнопок,
//  потом сложить получившиеся строки в клавиатуру

// функция, которая принимает - размер, поведение,
//  содержание (выполнить для каждой кнопки - объект со свойствами?)

// textarea.value = textarea.value.slice(0, textarea.value.length - 1)
// для backspace

// document.addEventListener('keydown', (event) => {
//    <textarea>.innerText = event.key;
// })

// key code
// отдельные классы для кнопок?
