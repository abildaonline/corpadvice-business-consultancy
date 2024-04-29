let signInModal = document.querySelector("#signInModal");
let createAccountModal = document.querySelector("#createAccountModal");
let body = document.getElementsByTagName("body");
let popup_back = document.querySelector(".popup-back");
let header = document.querySelector(".header");
let header_2 = document.querySelector(".header__2");



function openSignInModal() {
    signInModal.style.display = "block";
    popup_back.classList.add("page-mask");
    header.classList.add("header-mask");
    body[0].style.overflow = "hidden"; // Запрет прокрутки страницы
    header_2.style.backgroundColor = "rgb(0, 0, 0, 0)";
    return false;
}

function closeSignInModal() {
    signInModal.style.display = "none";
    popup_back.classList.remove("page-mask");
    header.classList.remove("header-mask");
    body[0].style.overflow = ""; // Восстановление прокрутки страницы
    header_2.style.backgroundColor = ""; // Возвращаем стандартный цвет фона
    return false;
}

function openCreateAccountModal() {
    createAccountModal.style.display = "block";
    popup_back.classList.add("page-mask");
    header.classList.add("header-mask");
    body[0].style.overflow = "hidden"; // Запрет прокрутки страницы
    header_2.style.backgroundColor = "rgb(0, 0, 0, 0)";
    return false;
}

function closeCreateAccountModal() {
    createAccountModal.style.display = "none";
    popup_back.classList.remove("page-mask");
    header.classList.remove("header-mask");
    body[0].style.overflow = ""; // Восстановление прокрутки страницы
    header_2.style.backgroundColor = ""; // Возвращаем стандартный цвет фона
    return false;
}
