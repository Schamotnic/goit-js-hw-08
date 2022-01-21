// Add imports above this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line
const galleryItemEl = galleryItems.map(galleryItem =>{
   
   return  `
   <a class="gallery__item" href="${galleryItem.original}">
   <img
   class="gallery__image"
   src="${galleryItem.preview}" 
   alt="${galleryItem.description}"
   />
    </a>
    ` }).join("");
    document.querySelector('.gallery').innerHTML = galleryItemEl;
    
  
    
    const gallery = new SimpleLightbox('.gallery a',  {
       captionsData: 'alt',
       captionDelay: 250,
       captionPosition: 'bottom',
      });
     
console.log(galleryItems);
