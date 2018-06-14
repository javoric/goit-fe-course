'use strict';

/* 
  Сеть фастфудов предлагает несколько видов гамбургеров. 
  
  Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
	- маленькая (+30 денег, +50 калорий)
	- большая (+50 денег, +100 калорий)
	
  Гамбургер может быть с одной из нескольких видов начинок (обязательно):
	- сыром (+15 денег, +20 калорий)
	- салатом (+20 денег, +5 калорий)
	- мясом (+35 денег, +15 калорий)
	
  Дополнительно, гамбургер можно: 
	- посыпать приправой (+10 денег, +0 калорий) 
	- полить соусом (+15 денег, +5 калорий)
  Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход, 
  создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин. 
  Написанный класс должен соответствовать следующему jsDoc описанию. То есть класс должен содержать 
  указанные методы, которые принимают и возвращают данные указанного типа.
*/
 const mini = {
    money: 30,
    calories: 50
 };
 const maxi = {
    money: 50,
    calories: 100
 };
 const cheese = {
    money: 15,
    calories: 20
 };
 const salad = {
    money: 20,
    calories: 5
 };
 const meat = {
    money: 15,
    calories: 20
 };
 const seasoning = {
    money: 10,
    calories: 0 
 };
 const sauce = {
    money: 15,
    calories: 5 
 };


class Hamburger {
    constructor (size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
    }

    addTopping(topping) {
         this.seasoning = seasoning;
         this.sauce = sauce;
    }
    removeTopping(topping) {

    }

    counterMoney() {
        const sum = money.reduce((acc, money) => acc + tweet.likes, 0);
    }
}

const x = new Hamburger(mini, cheese);

console.log(x);