// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";


const imgContainer = document.querySelector(".gallery");
const items = [];

galleryItems.forEach(item => {
    const galleryLink = document.createElement('a');
    galleryLink.className = 'gallery__link';
    galleryLink.href = item.original;
    const galleryImg = document.createElement('img');
    galleryImg.className = 'gallery__image';
    galleryImg.src = item.preview;
    galleryImg.setAttribute ('title', item.description);
    galleryImg.alt = item.description;

    galleryLink.append(galleryImg);
    items.push(galleryLink);
});

imgContainer.append(...items);

new SimpleLightbox('.gallery a', { captionDelay: 250});


