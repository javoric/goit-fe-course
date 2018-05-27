'use strict';

/*
  Создайте объект кассира, который получает список продуктов и деньги, 
  подсчитывает общую стоимость продуктов, и в зависимости от того
  хватает денег или нет, уведомляет покупателя о результате.
*/

/*
  Есть заранее известная база данных товаров, 
  в формате "имя-товара":"цена за одну единицу"
*/ 
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
  
  /* 
    Необходимо создать функцию-конструктор Cashier для объектов кассира,
    чтобы можно было создать сколько угодно кассиров.
    
    Поля объекта кассира: 
      - name - строка, имя, передается при вызове конструктора
      
      - products - объект база данных продуктов, передается при вызове конструктора
      
      - totalPrice - число, общая стоимость покупок текущего покупателя, всегда начинается с 0 
      
      - customerMoney - число, сумма введенная пользователем в prompt при запросе денег, всегда начинается с 0 
      
      - changeAmount - число, сдача, всегда начинается с 0
      
//??      - countTotalPrice(order) - метод, получает список покупок, считает общую сумму исходя из поля products
        
 //?     - getCustomerMoney() - метод, при вызове показывает prompt, в котором указана общая сумма покупок из поля totalPrice. 
          Ожидает ввода пользователя и записывает результат ввода в поле customerMoney. Проверить что результат ввода 
          пользователя не меньше чем значения поля totalPrice. Просит покупателя ввести сумму до тех пор, пока не будет 
          введена корректная сумма - равная или больше чем totalPrice. Если пользователь нажмет Cancel, 
          то функция возвращает null.
          
      - countChange() - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.
      
      - reset() - метод, сбрасывает поля totalPrice, customerMoney и changeAmount в 0.
      
      - serve(order) - метод, вызывается при обслуживании пользователя. Получает order - список покупок пользователя, 
          вызывает метод countTotalPrice для подсчета общей суммы, getCustomerMoney для запроса денег покупателя, 
          countChange для подсчета сдачи при успешном вводе пользователя. При успешном обслуживании возвращает 
          строку `Спасибо за покупку, ваша сдача ${сдача}`, при неудачном 'Очень жаль, что-то пошло не так, приходите еще'.
          Вызывает метод reset при любом исходе обслуживания.
  */
  
  function Cashier(name, products) {
    // код
    // не забывайте о this при обращении к свойствам и методам будущего объекта
  }
  
  /*
    В метод serve будут передаваться объекты следующего формата. "имя-продукта": "количество-единиц"
  */
  const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
  };
  
  /*
    Ниже приведен пример использования.
  */
  
  //const cashier = new Cashier('Mango', products);
  
  //cashier.serve(order);
  /*
    При вызове cashier.serve, countTotalPrice посчитает общую сумму равную 20+30+20+60, итого 130
    Далее выполнение идет по вышеописанному алгоритму.
  */
//                          ==========================
  

   

  function Cashier(name, products) {
    this.name = name,
    this.products = products,
    
    this.totalPrice = 0,
    this.customerMoney = 0,
    this.changeAmount = 0
    
   /* this.countTotalPrice = function() {
      const total = Object.keys(order);
      let x = Object.values(order);
      for (let i = 0; i < x.length; i += 1) {
        let a = x[i];    
      for (const value of total) {
        const tota = Object.keys(this.products);
        let y = Object.values(this.products);
        for (let i = 0; i < y.length; i += 1) {
          let c = y[i];      
        for (const valu of tota) {
          if (value === valu) {
             let z = 0;
             z = a * c;
             console.log(Number(z));
          } 
          
        }
      }
    }
  }*/
     
     };
     
     
  
  // const mango = new Cashier ('mango', products);
     
   
   
   //console.log(mango);
  
   //console.log(mango.products);

   //console.log(mango.countTotalPrice());


   /*- getCustomerMoney() - метод, при вызове показывает prompt, в котором указана общая сумма покупок из поля totalPrice. 
   Ожидает ввода пользователя и записывает результат ввода в поле customerMoney. Проверить что результат ввода 
   пользователя не меньше чем значения поля totalPrice. Просит покупателя ввести сумму до тех пор, пока не будет 
   введена корректная сумма - равная или больше чем totalPrice. Если пользователь нажмет Cancel, 
   то функция возвращает null.*/

   const getCustomerMoney = function () {
    let price = 245;
    do {
     const customerMoney = prompt(`Сумма к оплате - ${price}, введите чек`);
      let surrender = customerMoney - price;
      if (customerMoney >= price) {
        alert (`Спасибо за покупку, ваша сдача ${surrender}`); 
       let changeAmount = `Сдача ${surrender}`;
       console.log(changeAmount);
        return;
    } if (customerMoney === null) {
      break;
    }
  } 
    while (true); 
};
 //console.log(getCustomerMoney());
   

const countTotalPrice = function () {
    const total = Object.keys(order);
    let x = Object.values(order);
    const tota = Object.keys(products);
    let y = Object.values(products);
    for (let i = 0; i < x.length; i += 1) {
      for (const value of total) {
      let a = x[i]; 
    for (const value of total) {
      const tota = Object.keys(products);
      console.log(tota);
      let y = Object.values(products);
      console.log(y);
      for (let i = 0; i < y.length; i += 1) {
        let c = y[i];  
        console.log(c);
      for (const valu of tota) {
        if (value === valu) {
           let z;
           z = a * c;
           console.log(z);
        } break;
        
      } break;
    }
  }
  }
  }//break;
} 
 
  
  //- reset() - метод, сбрасывает поля totalPrice, customerMoney и changeAmount в 0.


  const reset = function () {
    this.totalPrice = 0,
    this.customerMoney = 0,
    this.changeAmount = 0
  }


/*- serve(order) - метод, вызывается при обслуживании пользователя. Получает order - список покупок пользователя, 
    вызывает метод countTotalPrice для подсчета общей суммы, getCustomerMoney для запроса денег покупателя, 
    countChange для подсчета сдачи при успешном вводе пользователя. При успешном обслуживании возвращает 
    строку `Спасибо за покупку, ваша сдача ${сдача}`, при неудачном 'Очень жаль, что-то пошло не так, приходите еще'.
    Вызывает метод reset при любом исходе обслуживания.*/


    const serve = function () {
      let user = order;
      countTotalPrice(order);
      getCustomerMoney();
      
     };
    console.log(serve());
    
    
    
    
   

  /*let suma;

  let x = Object.entries(order);
  
   let y = Object.entries(products);
   for (const ax of x) {
    const [ key, value ] = ax;
     
    let conjunction = Number('ax');
    console.log(conjunction);
  }
  
   console.log(x);
   console.log(y);
  console.log(suma);


   //- countTotalPrice(order) - метод, получает список покупок, считает общую сумму исходя из поля products

   const countTotalPrice = function(order) {
    const total = Object.values(order);
    let sum = 0;
    for (let i = 0; i < total.length; i += 1) { 
     let conjunction = Number(total[i]);
     sum = sum + conjunction;
     
    }
    return sum;
   };

   /*console.log(
    countTotalPrice({
      bread: 2,
      milk: 2,
      apples: 1,
      cheese: 1
    }));*/




    //- countChange() - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.
  
   
    
    
   

    /*const getCustomerMoney = function () {
      let price = 100;
      do {
        customerMoney = prompt(`Сумма к оплате - ${price}, введите чек`);
        let sdacha = customerMoney - price;
        if (customerMoney >= price) {
          alert (`Сдача ${sdacha}`); 
          return;
      } 
    } 
      while (true); 
  };
    console.log(getCustomerMoney());*/



    



    


 



  












    /*function Pokupatel (products = 'product', order = 'order') {
      this.products = products,
      this.order = order
  };

  const pokupatel = new Pokupatel (products, order);

  console.log(pokupatel);

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
  };*/