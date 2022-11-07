// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const bodyEl= document.querySelector('body')
const galleryList =document.querySelector('.gallery')
const markupEl=markupElemGallery(galleryItems)

galleryList.insertAdjacentHTML('beforeend',markupEl)

function markupElemGallery(galleryItems){
    
    return galleryItems.map(({preview,original,description})=>{
    return`
    <div class="gallery">
        <a class="gallery__item" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                title="${description}"
            />
        </a>
    </div>`;   
}).join('');
}



galleryList.addEventListener('click',onDivGalleryClick)
let gallery = new SimpleLightbox('.gallery a');
console.log(gallery)

function onDivGalleryClick(event){
    event.preventDefault()


   if(event.target.nodeName!=='IMG'){
    return
   }
   gallery.options.captionDelay=250;
   gallery.options.animationSpeed=350;
   
}
