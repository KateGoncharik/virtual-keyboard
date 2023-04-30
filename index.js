const lowerCase = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
  'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', ' \\ ', 'del',
  'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '&#59;', '&#39;', 'enter',
  'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '&#44;', '.', '/', '⯅', 'shift',
  'ctrl', 'win', 'alt', ' ', 'alt', 'ctrl', '⯇', '⯆', '⯈'];

// const upperCase = [//redo - make objects ? put them into the arr
// ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace'],
// ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'i', 'o', 'p', '{', '}', ' | ', 'del'],
// ['caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'enter'],
// ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '⯅', 'shift'],
// ['ctrl', 'win', 'alt', ' ', 'alt', 'ctrl', '⯇', '⯆', '⯈'],
// ];

function createTextarea() {
  const textarea = document.createElement('textarea');
  textarea.setAttribute('autofocus', 'autofocus');
  textarea.className = ('textarea');
  document.onclick = () => {
    textarea.focus();
  };
  document.body.insertAdjacentElement('beforeBegin', textarea);
}

document.body.onload = createTextarea;

// вывести значения по атрибутам
function Button(value) {
  this.value = value;
  this.className = 'key';
}

function createKeys(keysArr) {
  // let arrOfNewbuttons = []; //массив новых кнопок

  const keyBoard = document.createElement('div'); // блок клавы
  keyBoard.className = 'keyboard'; // стиль клавы
  document.body.insertAdjacentElement('afterEnd', keyBoard);
  // debugger
  keysArr.forEach((key) => { // цикл для значений lowCase
    const button = new Button(key);
    const { value } = button;
    const newDiv = document.createElement('div');
    newDiv.className = 'key';
    newDiv.innerHTML = (`<button class = "key-button">${key}</button>`); // ---? add to document
    keyBoard.insertAdjacentElement('beforeEnd', newDiv);
    newDiv.addEventListener('click', () => { // почему оно не находит значение?
      const textarea = document.querySelector('.textarea');
      textarea.innerHTML += value;// соответствие значения (value) тому, что нужно вывести
    });
    // arrOfNewbuttons.push(button);
  });

  // console.log(arrOfNewbuttons)
  document.body.appendChild(keyBoard);
  // keyBoard.appendChild()
}

createKeys(lowerCase);

//   document.addEventListener('keydown', (event) => {
//     textarea.innerText += event.key;//???
//  });

// document.addEventListener('keydown', (event) => {
//   textarea.value += event.code; // переделать для виртуальных кнопок !
// });

// keyboard.forEach((keysArr) => {//добавляем строки и кнопки в клавиатуру
//   const row = document.createElement('div');
//   row.className = 'row';
//   document.body.appendChild(row);

//   keysArr.forEach((key) => {
//     const buttonDiv = document.createElement('div');// create div
//     buttonDiv.className = 'key'; // make it look like a button
//     buttonDiv.innerHTML = key; // put in into the row --- create row for each line

//     row.insertAdjacentElement('beforeEnd', buttonDiv);
//   });

// debugger
// });

function createTitle() {
  const title = document.createElement('p');
  title.className = 'title';
  title.innerHTML = 'Virtual keyboard by Kate Goncharick';
  document.body.insertAdjacentElement('afterBegin', title);
}
createTitle();

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
// отдельные классы для кнопок? один?
