import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerRef = document.querySelector(".gallery");
let instance;

galleryContainerRef.addEventListener("click", previewPhotosMarkup);

function previewPhotosMarkup(galleryItems) {
    galleryItems.preventDefault();
  const galleryLinkEl = galleryItems.target.closest(".gallery__link");
  if (!galleryItems.target.classList.contains("gallery__image")) {
    return;
  }
  
  const galleryLinkHref = galleryItems.target.dataset.source;
  const galleryLinkAlt = galleryLinkEl.children[0].alt;
  instance = basicLightbox.create(
    `
	<img
          class="gallery__image"
          src="${galleryLinkHref}"
          alt="${galleryLinkAlt}"
        />
`,
    { closable: false }
  );
  instance.show();
  if (instance.visible()) {
    document.addEventListener("keydown", ModalCloser);
  }
}

function ModalCloser(galleryItems) {
  if (!(galleryItems.code === "Escape")) {
    return;
  }
  document.removeEventListener("keydown", ModalCloser);
  instance.close();
}

const createGalleryItemMarkup = ({ preview, original, description } = {}) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
        //   data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
};

const galleryItemsMarkup = galleryItems
  .map((item) => createGalleryItemMarkup(item))
  .join("");

  galleryContainerRef.innerHTML = galleryItemsMarkup;