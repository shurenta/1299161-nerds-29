const modalOpen = document.querySelector(".write-us-button");
const modal = document.querySelector(".modal-write-us");
const modalClose = document.querySelector(".modal-close");
const modalForm = document.querySelector(".form-write-us");
const modalName = document.querySelector(".form-input-1");
const modalEmail = document.querySelector(".form-input-2");
const modalTextarea = document.querySelector(".textarea-write-us");
const storageName = localStorage.getItem("name");
const storageEmail = localStorage.getItem("email");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}


modalOpen.addEventListener("click", function (evt) {
	evt.preventDefault();	
	modal.classList.add("modal-write-us-show");
	if (storageName) {
		modalName.value = storageName;
		modalEmail.focus();
	} else {
		modalName.focus();
	}
	if (storageEmail) {
		modalEmail.value = storageEmail;
		modalTextarea.focus();
	}	else {
		modalEmail.focus();
	}
});


modalClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal.classList.remove("modal-write-us-show");
	modalName.classList.remove("modal-write-us-error");
	modalEmail.classList.remove("modal-write-us-error");
	modalTextarea.classList.remove("modal-write-us-error");
});


modalForm.addEventListener("submit", function (evt) {
	if (!modalName.value || !modalEmail.value || !modalTextarea.value) {
		evt.preventDefault();
		modalName.classList.remove("modal-write-us-error");
		modalName.offsetWidth = modalName.offsetWidth;
		modalName.classList.add("modal-write-us-error");
		modalEmail.classList.remove("modal-write-us-error");
		modalEmail.offsetWidth = modalEmail.offsetWidth;
		modalEmail.classList.add("modal-write-us-error");
		modalTextarea.classList.remove("modal-write-us-error");
		modalTextarea.offsetWidth = modalTextarea.offsetWidth;
		modalTextarea.classList.add("modal-write-us-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("name", modalName.value);
			localStorage.setItem("email", modalEmail.value);
		}
	}
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-write-us-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-write-us-show");
      modalName.classList.remove("modal-write-us-error");
			modalEmail.classList.remove("modal-write-us-error");
			modalTextarea.classList.remove("modal-write-us-error");
    }
  }
});