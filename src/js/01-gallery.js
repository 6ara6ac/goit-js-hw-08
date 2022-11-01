// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';


// Change code below this line

const galleryContainer = document.querySelector ('.gallery');
const galleryMarkup = onCreateGalleryItem(galleryItems);


galleryContainer.addEventListener ('click', onClickImg)
galleryContainer.insertAdjacentHTML ('beforeend', galleryMarkup);





function onCreateGalleryItem (galleryItems) {
    return galleryItems
        .map (({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
      `;
    })
    .join('');
}


function onClickImg(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }

}

new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: "alt",
    overlay: true, 
});







