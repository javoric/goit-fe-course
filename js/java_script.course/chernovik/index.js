

/*
  Создайте менеджер управления данными аккаунтов пользователей соцсети SocialBook.
  
  ОБЯЗАТЕЛЬНО ПРИ ВЫПОЛНЕНИИ: 
    - написать функцию-конструктор создающую объект со свойствами и методами
    - при работе с коллекциями данных использовать функциональные методы массивов, никаких for и т. п.
  
  Для создания объекта используйте функцию-конструктор, принимающую следующие параметры:
    - users - массив пользователей. Каждый пользователь это объект с полями:
        id - уникальный идентификатор
        login - почта
        password - пароль
        isActive - статус активности
    - posts - объект с ключами равными id пользователя соцсети SocialBook. Значениями свойств 
      являются массивы постов пользователя. Каждый пост состоит из:
        id - уникальный идентификатор
        text - текст поста
        likes - количество лайков поста
*/


const initialUsers = [
    { id: "-s19a6hqce", login: "mangozedog@mail.com", password: "qwe123zv", isActive: true },
    { id: "-qkpzenjxe", login: "polysweet@skynet.ze", password: "123zxc78", isActive: true },
    { id: "-e51cpd4di", login: "ajax2k@change.ua", password: "ert234qw", isActive: false }
  ];
  
  /*
    Используйте следующий объект постов пользователей при создании экземпляра SocialBook
  */
  const initialPosts = {
    "-s19a6hqce": [
      { id: "-5sgljaskg", text: "post #1", likes: 3 },
      { id: "-199hb6igr", text: "post #2", likes: 5 },
      { id: "-hy0eyw5qo", text: "post #3", likes: 13 }
    ],
    "-qkpzenjxe": [
      { id: "-5tu69g5rf", text: "post #1", likes: 8 },
      { id: "-bje766393", text: "post #2", likes: 15 }
    ],
    "-e51cpd4di": [
      { id: "-9y6nkmlj4", text: "post #1", likes: 18 },
      { id: "-i03pbhy3s", text: "post #2", likes: 45 }
    ],
  };
  const getId = () => "-" + Math.random().toString(36).substr(2, 9);

 

 


function SocialBook (users = [], posts = {}) { 
   this.users = users,
   this.posts = posts
   this.user = { id: getId(), login: "mango@mail.com", password: "kwe654zv", isActive: true };
   this.getAllUsers = () => initialUsers.map(user => user.id);
   this.getUserByLogin = (user, login) => initialUsers.find(user => user.login === initialUsers.login);
   this.getUserStatus = (user, id) => initialUsers.filter(user => user.isActive);
  
 };

 const Petya = new SocialBook(initialUsers, initialPosts);
 Petya.getAllUsers();
 Petya.getUserByLogin(initialUsers, "polysweet@skynet.ze");
 Petya.getUserStatus(initialUsers, "-s19a6hqce");
 console.log(Petya);

 //const getUsersByName = (arr, name) => arr.find(x => x.name === name);
 
 //const user = getUsersByName(usersDb, 'Ajax');
 //console.log(user);

 
/*
  Добавьте в SocialBook следующие методы для работы с пользователями:
    - getAllUsers() - возвращает массив всех пользователей
    
    - getUserByLogin(login) - ищет и возвращает объект пользователя с совпадающим логином
    
    - getUserStatus(userId) - ищет пользователя по id и возвращает 'active' 
      если isActive true, в противном случае возвращает 'inactive'.
      
    - addUser(user) - принимает объект user с полями email и password и добавляет 
      ему поля id(используя функцию getId) и isActive (false). Затем добавляет пользователя в 
      свойство users самого экземпляра.
          
    - removeUserById(userId) - удаляет пользователя из массива пользователей по полю id
    
    - getUsersCount() - возвращает общее количество пользователей
*/