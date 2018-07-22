'use strict'

function createFulliew (src, alt) {
const fullview = document.createElement('div');

fullview.classList.add('fullview');

const img = document.createElement('img');
img.setAttribute('src', src);
img.setAttribute('alt', alt);

fullview.append(img);


return fullview;
}

 

function createPreview (pictures) {
  const preview = document.createElement('ul');
  preview.classList.add('preview');
  
  const previewElements = pictures.map(picture => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.setAttribute('src', picture.preview);
    img.setAttribute('data-fullview', picture.fullview);
    img.setAttribute('alt', picture.alt);
  
    li.append(img);
  
    return li;
  })
  
   preview.append(...previewElements);

   return preview;
}

const galleryItems = [
  { preview: 'images/preview-1.jpeg', fullview: 'images/fullview-1.jpeg', alt: "alt text 1" },
  { preview: 'images/preview-2.jpeg', fullview: 'images/fullview-2.jpeg', alt: "alt text 2" },
  { preview: 'images/preview-3.jpeg', fullview: 'images/fullview-3.jpeg', alt: "alt text 3" },
  { preview: 'images/preview-4.jpeg', fullview: 'images/fullview-4.jpeg', alt: "alt text 4" },
  { preview: 'images/preview-5.jpeg', fullview: 'images/fullview-5.jpeg', alt: "alt text 5" },
  { preview: 'images/preview-6.jpeg', fullview: 'images/fullview-6.jpeg', alt: "alt text 6" },
];
 
const galery = document.querySelector('.js-image-gallery');

const src = galleryItems[0].fullview;
const alt = galleryItems[0].alt;
const fullview = createFulliew(src, alt);
const preview = createPreview(galleryItems);

galery.append(fullview, preview);

console.log(galery);







galery.addEventListener('click', img => {
  const xz = document.querySelector('.fullview > img');
	const imgUrl = img.target.dataset.fullview;
	
fullview.setAttribute('src', imgUrl);
});


const xz = document.querySelector('.fullview > img');
console.log(xz);


