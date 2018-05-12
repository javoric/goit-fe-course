'use strict'


/*
  Есть массив logins с логинами пользователей.
  Написать функцию, addLogin(logins, login) которая:
    1) Получает новый логин и массив всех логинов как аргументы
  
    2) Проверяет валидность логина используя вспомогательную 
       функцию checkLoginValidity(login), которая проверяет 
       количество символов логина и возвращает true если логин 
       подходит под условие длины от 4-х до 16-ти символов 
       включительно, и false если не подходит
    3) Если логин не валиден, прекратить исполнение функции addLogin 
       и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
    4) Если логин валиден, функция addLogin проверяеть уникальность 
       логина с помощью функции checkIfLoginExists(logins, login), 
       которая проверяет наличие логина в массиве logins, возвращая 
       false если такого логина в массиве еще нет, и true если есть
     
    5) Если checkIfLoginExists вернет false, addLogin добавляет новый логин 
       в logins и возвращает строку 'Логин успешно добавлен!'
    
    6) Если checkIfLoginExists вернет true, тогда addLogin не добавляет 
       логин в массив и возвращает строку 'Такой логин уже используется!'
       
    Принцип единственной ответственности функции:
    - checkIfLoginExists только проверяет есть ли такой логин и возвращает true или false. Больше ничего не делает.
    - checkLoginValidity только проверяет  валидный ли логин и возвращает true или false. Больше ничего не делает.
    - addLogin вызывает обе функции и по результату их работы или добавляет логин в logins или нет, 
      возвращая строки указанные в пунктах 5 и 6. Больше ничего не делает.
*/

const checkLoginValidity = function(login) {
    
   
     if (login.length < 4 || login.length > 16) {
       return false;
       
    } else {
       return true;
    }
      
   };
   
   const checkIfLoginExists = (logins, login) => logins.includes(login);

      const addLogin = function(logins, login,) {
        
        return logins;
    };
         const x = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
         const y = prompt('введите логин');
        const result = addLogin(x, y,);
                                console.log(result);
    
       //===========================================================================
            
              /*if (login.length < 4 || login.length > 16) {
                 alert('Ошибка! Логин должен быть от 4 до 16 символов');
             } else {
                logins.push(login);
             }*/

             //===================================================
            
            /* const checkLoginValidity = function(login) {
                 //let number = login.length;
                
                  if (login.length < 4 || login.length > 16) {
                    return false;
                 } else {
                    return true;
                 }
                   //return number;
                };*/
                
                /*let tyu = 'gfdsa';
            
                console.log(checkLoginValidity(tyu));*/
       //======================================================================
            
//============================================================
    //const checkIfLoginExists = (logins, login) => logins.includes(login);
   /*return logins.includes(login);


const arre = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
console.log(checkIfLoginExists(arre, "AjsBozz"));*/

            /*const checkIfLoginExists = function(logins, login) {
                const num = logins.includes(login);
                console.log(num);
          };

              const arre = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
              checkIfLoginExists(arre, "Mngo");*/

//==================================================================

          /*const checkLoginValidity = function(login) {
            
              if (login.length < 4 || login.length > 16) {
                 false;
             } else {
                 true;
             }
             return boolean;
            };*/


            /*if (num) {
                logins.push(login);
               } else {
                   console.log(false);
               }
               return num;*/