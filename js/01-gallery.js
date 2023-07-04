import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) =>
    `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
  )
  .join("");

galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryContainer.addEventListener("click", previewPhotosMarkup);

function previewPhotosMarkup(event) {
  event.preventDefault();
  if (event.target.classList.contains("gallery__item")) {
    return;
  }

  const instance = basicLightbox.create(
    `<img
      src="${event.target.dataset.source}"
      alt="${event.target.alt}"
      data-source="${event.target.dataset.source}"
      width="800"
      height="600"
    />`,
    {
      onShow: () => {
        document.addEventListener("keydown", ModalCloser);
      },
      onClose: () => {
        document.removeEventListener("keydown", ModalCloser);
      },
    }
  );
  instance.show();

  function ModalCloser(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}

console.log(galleryItems);
