
'use strict';


/*
  Написать следующий скрипт:
  
    - При загрузке страницы пользователю предлагается ввести через prompt число. 
      Число введенное пользователем записывается в массив чисел.
      
    - Операция ввода числа пользователем и сохранение в массив продолжается до
      тех пор, пока пользователь не нажмет Cancel в prompt. Используйте 
      цикл while или do...while.
      
    - Делать проверку того, что пользователь ввел именно число, а не произвольный 
      набор символов, не обязательно, но желательно. В случае некорректного ввода
      просто выдайте alert с текстом 'Было введено не число, попробуйте еще раз',
      при этом результат prompt записывать в массив чисел не нужно, после чего 
      снова пользователю предлагается ввести число в prompt.
      
    - После того как пользователь прекратил ввод нажав Cancel, необходимо взять 
      массив введенных чисел, сложить общую сумму всех элементов массива и 
      записать ее в переменную. Используйте цикл for или for...of.
      
    - Вывести alert с текстом `Общая сумма чисел равна ${сумма}`
*/

/*let userInput;
const numbers = [];
let total = 0;
  
  do { userInput = prompt('Ведите число');
     if (userInput === null) {
       break;
     }
     numbers.push(userInput);  
}
  while (true);
for (let i = 0; i < numbers.length; i += 1) { 
  if (numbers > 0) {
  let conjunction = Number(numbers[i]);
  total = total + conjunction; 
   }
  alert(`сумма: ${total}`);
 }*/


 const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  pork: 80,
  cheese: 60,
  tea: 20,
  candy: 25
 };

 const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

function countTotalPrice(orderObj, productsObj) {
	const orderKeys = Object.keys(orderObj);
	let total = 0;
	
	for(const key of orderKeys) {
		total += orderObj[key] * productsObj[key];
	}
	
	return total;
}

const result = countTotalPrice(order, products);

console.log(result);