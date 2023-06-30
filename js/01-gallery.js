import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerRef = document.querySelector('.gallery');
const previewPhotosMarkup = createPreviewPhotosMarkup(galleryItems);
galleryContainerRef.insertAdjacentHTML('beforeend', previewPhotosMarkup);


function createPreviewPhotosMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<li class="gallery__item">
                        <a class="gallery__link" href="${original}">
                            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
                        </a>
                    </li>`;
        })
        .join('');
}
const instance = basicLightbox.create(
    `<img />`,
    {
        onShow: () => {
            window.addEventListener('keydown', onEscPress);
        },
        onClose: () => {
            window.removeEventListener('keydown', onEscPress);
        },
    }
);

const onClickPreviewImage = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    instance.element().querySelector('img').src = event.target.dataset.source;
    instance.show();
};

function onEscPress(event) {
    if (event.code !== 'Escape') return;
    instance.close();
}

console.log(galleryItems);

