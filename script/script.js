let popup = document.querySelector (".popup")
let editButton = document.querySelector (".profile__edit-button")
let closeButton = document.querySelector (".popup__close-btn")

let formElement = document.querySelector (".popup__content")
let inputName = document.querySelector (".popup__input_type_name")
let inputJob = document.querySelector (".popup__input_type_job")
let profileTitle = document.querySelector (".profile__title")
let profileJob = document.querySelector (".profile__subtitle")


function openPopup () {
    popup.classList.add("popup_opened")
    inputName.value = profileTitle.textContent;
    inputJob.value = profileJob.textContent;
}

function closePopup () {
    popup.classList.remove("popup_opened")
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileTitle.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    closePopup()
}



closeButton.addEventListener ("click", closePopup)
editButton.addEventListener ("click", openPopup)
formElement.addEventListener("submit", handleFormSubmit)


const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

  const itemPhotoWrapper = document.querySelector(".elements")