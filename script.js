let popup = document.querySelector (".popup")
let editButton = document.querySelector (".profile__edit-button")
let closeButton = document.querySelector (".popup__close-btn")

let formElement = document.querySelector (".popup__content")
let inputName = document.querySelector (".popup__input-name")
let inputJob = document.querySelector (".popup__input-job")
let profileTitle = document.querySelector (".profile__title")
let profileJob = document.querySelector (".profile__subtitle")
let saveButton = document.querySelector (".popup__save")


function openPopup () {
    popup.classList.add("popup__opened")
    inputName.value = profileTitle.textContent;
    inputJob.value = profileJob.textContent;
}

function closePopup () {
    popup.classList.remove("popup__opened")
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