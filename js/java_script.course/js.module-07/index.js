function createPostCard({ imgk, title, text, likes, dislikes, fav}) {
    
    const post = document.createElement('div');
    post.classList.add('post');
    
    const img = document.createElement('img');
    img.classList.add('post__image');
    img.src = imgk;
    img.alt = 'post image';
    
    const h2 = document.createElement('h2');
    h2.classList.add('post__title');
    h2.textContent = title;
    
    const p = document.createElement('p');
    p.classList.add('post__text');
    p.textContent = text;
  
    const ul = document.createElement('ul');
    ul.classList.add('actions', 'post__actions');
    
    const li_1 = document.createElement('li');
    li_1.classList.add('actions__item')
    
    const li_2 = document.createElement('li');
    li_2.classList.add('actions__item')
    
    const li_3 = document.createElement('li');
    li_3.classList.add('actions__item')
    
    const button_1 = document.createElement('button');
    button_1.classList.add('actions__btn');
    
    const button_2 = document.createElement('button');
    button_2.classList.add('actions__btn');
    
    const button_3 = document.createElement('button');
    button_3.classList.add('actions__btn');
    
    const span_1 = document.createElement('span');
    span_1.classList.add('actions__icon', 'actions__icon--like');
    
    const span_2 = document.createElement('span');
    span_2.classList.add('actions__icon', 'actions__icon--dislike');
    
    const span_3 = document.createElement('span');
    span_3.classList.add('actions__icon', 'actions__icon--fav');
    
    const spanA = document.createElement('span');
    spanA.classList.add('actions__count');
    spanA.textContent = likes;
    
    const spanB = document.createElement('span');
    spanB.classList.add('actions__count');
    spanB.textContent = dislikes;
    
    const spanC = document.createElement('span');
    spanC.classList.add('actions__count');
    spanC.textContent = fav;
    
    post.append(img, h2, p, ul);
    ul.append(li_1, li_2, li_3);
    li_1.append(button_1);
    li_2.append(button_2);
    li_3.append(button_3);
    button_1.append(span_1, spanA);
    button_2.append(span_2, spanB);
    button_3.append(span_3, spanC);
  
    const base = document.querySelector('.xyz')
    base.append(post);
    
    return post;

    const card = createPostCard({
        imgk: '',
        title: '',
        text: '',
        likes: 0,
        dislikes: 0,
        fav: 0
      });
  };
  
  const cardList = [
    {
        imgk: 'https://placeimg.com/400/150/arch',
     title: 'Post title 1', 
     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!', 
     likes: 6, 
     dislikes: 2,
      fav: 3
    },
      {
          imgk: "https://placeimg.com/400/150/nature",
     title: "Post title 2",
     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
     likes: 124,
     dislikes: 8,
     fav: 36
    },
     {
        imgk: "https://placeimg.com/400/150/arch",
        title: "Post title 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        likes: 800,
        dislikes: 36,
        fav: 147 
     }
        
  ]
  
  const elements = [];
  
  cardList.forEach(card => {
    const el = createPostCard(card);
    elements.push(el);
  });
  