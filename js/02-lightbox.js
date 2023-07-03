import { galleryItems } from './gallery-items.js';
// Change code below this line
const imgListRef = document.querySelector('.gallery');
const previewPhoto = createPreviewPhoto(galleryItems);


imgListRef.insertAdjacentHTML('beforeend', previewPhoto);
    

function createPreviewPhoto(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
         <a class="gallery__link" href=${original}>
            <img class="gallery__image" src=${preview} alt=${description} />
        </a>
    </li>`
    })
    .join('');
}


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '300',
});

console.log(galleryItems);
