
document.body.onload = addElement;
// function activeButton (element) {
//    element.className="active";
// }
// buttonDiv.addEventListener("click", activeButton);

let keyboard = [
   ["ctrl", "win","alt"," ","alt","ctrl","⯇","⯆","⯈"],
   ["shift","z","x","c","v","b","n","m","&#44;",".","/","⯅","shift"],
   ["caps","a","s","d","f","g","h","j","k","l","&#59;","&#39;","enter"],
   ["tab","q","w","e","r","t","y","u","i","o","p","[","]"," \ ", "del"],
   ["`","1","2","3","4","5","6","7","8","9","0","-","=","backspace"],
   // "sixthRow": ["f1","f2","f3","f4","f5","f6","f7","f8","f9","f10","f11","f12",],
]
function addElement() {

   let row = document.createElement("div");
   row.className="row";
   document.body.appendChild(row)
   let firstRow = ["ctrl", "win","alt"," ","alt","ctrl","⯇","⯆","⯈"];
   keyboard.forEach(function(){
      for (let button in row) { //сделать второй перебор
         let buttonDiv = document.createElement("div");
         buttonDiv.className="key";
         buttonDiv.innerHTML=([button]);
         
         row.insertAdjacentElement("beforeEnd" , buttonDiv);
     }
   }) 


   // for (let button of firstRow) {
   //     let buttonDiv = document.createElement("div");
   //     buttonDiv.className="key";
   //     buttonDiv.innerHTML=([button]);
       
   //     row.insertAdjacentElement("beforeEnd" , buttonDiv);
   // }
}


//по клику на кнопку - класс active - визуально меняется

//сначала нагенерить каждую строку отдельно из разных кнопок, потом сложить получившиеся строки в клавиатуру