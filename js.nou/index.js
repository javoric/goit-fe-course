'use strict'

const sybAssorti = 'субассорти';
const rubec = 'рубец';
const vimya = 'вымя';
const myaso = 'мясо';


const sybAssortiPrais = '25грн';
const rubecPrais = '30грн';
const vimyaPrais = '40грн';
const myasoPrais = '70грн';

let summa;

const vvodTovara = prompt(`введите название товара из списка - ${sybAssorti}, ${rubec}, ${vimya}, ${myaso}`);
const vvodVesa = 'введите необходимое количество килограммов';
let itog;
const invalidVvod = 'ну и ладно';

let tovar;
let ves = Number(prompt(vvodVesa));
let nalichka;
let zdacha;


if (vvodTovara !== null) {
    switch (vvodTovara) {
       case tovar = sybAssorti:
           ves;
           break;

           case tovar = rubec :
            ves;
           break;

           case tovar = vimya:
            ves;
           break;

           case tovar = myaso:
            ves;
           break;

           default:
            console.log('такого товара нет');
    }
      
    if (ves !== null && !Number.isNaN(ves) && ves !== 0) {
        if (vvodTovara === sybAssorti) {
            let resSub = (ves * parseInt(sybAssortiPrais));
            nalichka = prompt(`вы должны ${resSub}, дайте денег`);
              if (nalichka >= resSub) {
                  zdacha = nalichka - resSub;
                  console.log(`Ваш товар ${vvodTovara}, в количестве ${ves}кг готов к отправке. Здача - ${zdacha}грн`)

              }
        }
    } else {
        console.log('34');
    }


} else {
    console.log(invalidVvod);
}


