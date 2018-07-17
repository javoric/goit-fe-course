/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/



const getAllUsers = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(users => console.log(users));
};

getAllUsers();
//==============================

     const getUserById = id => 
     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())

        getUserById(8).then(userName => console.log(userName));

        //================

        const addUser = {
            name: 'siroga',
            age: 25,
            body: 'gfhf yjhvfkmysw'
          };
          
          fetch('https://jsonplaceholder.typicode.com/users/4', {
              method: 'PUT',
              name: JSON.stringify(addUser),
              age: JSON.stringify(addUser),
              body: JSON.stringify(addUser),
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log('ERROR' + error));

            //addUser().then(userName => console.log(userName));

//=======================

const removeUser = id => 
            
fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE'
  }).then(() => console.log('success'))
  .catch(error => console.log('ERROR' + error));

  removeUser(7).then(userName => console.log(userName));