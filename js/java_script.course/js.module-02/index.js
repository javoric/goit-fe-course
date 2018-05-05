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








/*let tre = [];

let number = prompt('Введите числа через запятую');
let num = number.split(',');
 //tre.push(num);
 //console.log(tre);
 const isNull = number === null;
 //const isNaN = Number.isNan(number);
 const isEmpty = number === '';
if (!isNull && !isEmpty) {
  let sum = 0;
    for (let i = 0; i < num.length; i += 1) { 
     let conjunction = Number(num[i]);
     sum = sum + conjunction;
    }
    console.log(`сумма: ${sum}`);
  }*/

  let userInput = prompt('Введите числа через запятую');
  let input = userInput.split(',');
  const numbers = [];
  numbers.push(input);
  console.log(numbers);


  let total = 0;
  const isNull = userInput === null;
  //const isNaN = Number.isNan(userInput);
  const isEmpty = userInput === '';
    if (isNull && isEmpty) {
 
    for (let i = 0; i < input.length; i += 1) { 
     let sum = Number(input[i]);
     total = total + input[i];
    }
 console.log(total);
}