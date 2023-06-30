import { galleryItems } from './gallery-items.js';
// Change code below this line

const collection = document.querySelector('.gallery');

const imageList = galleryItems
.map(({ preview, original, description }) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${original}">
            <img 
            class="gallery-image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li> `)
    .join('');

collection.insertAdjacentHTML('afterbegin', imageList);
collection.addEventListener("click", openLargeImage);

function openLargeImage(event) {
    event.preventDefault();
    if (event.target.classList.contains("gallery-item")) {
        return;
    }

    const lightboxInstance = basicLightbox.create(
        `<img src="${event.target.dataset.source}" alt="${event.target.description}" data-source="${event.target.dataset.source}" width="800" height="600">`,
        {
            onShow: () => {
                document.addEventListener("keydown", onEscKeyPress);
            },

            onclose: () => {
                document.removeEventListener("keydown", onEscKeyPress);
            },
        }
    );
    lightboxInstance.show();

    function onEscKeyPress(event) {
        if (event.code === "Escape") {
            lightboxInstance.close();
        }
    }
}

console.log(galleryItems);
