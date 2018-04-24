const sharm = 1;
const hurgada = 2;
const taba = 3;

let sharmPlaces = 15;
let hurgadaPlaces = 25;
let tabaPlaces = 6;

const choice = prompt('1 - sharm, 2 - hurgada, 3 -taba');
const hotelChoice = Number(choice);
const isValidInput = choice !== null && !Number.isNaN(hotelChoice);
  if (isValidInput) {

//let numberPlacesGroups;//свободные номера
//let numberPlacesEnteredUser;//колво мест введённых пользователем

   switch (hotelChoice) {
       case taba:
       let numberPlacesEnteredUser = Number(prompt('Введите колличество необходимы мест'));
         let freePlaces = numberPlacesGroups <= tabaPlaces;
       //numberPlacesGroups <= tabaPlaces;
       //console.log(messege);

       let freePlaces = confirm('Есть место в группе Таба. Согласны ли вы отдохнуть в этой группе?')

       //numberPlacesGroups = tabaPlaces;
       //numberPlacesEnteredUser = 
   }

  } else {
      alert('Ошибка ввода')
  }