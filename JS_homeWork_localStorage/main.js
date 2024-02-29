let form = document.querySelector(".lib__form");
let authorInput = document.querySelector(".lib__item--author");
let nameInput = document.querySelector(".lib__item--name");
let genreInput = document.querySelector(".lib__item--genre");
let pageInput = document.querySelector(".lib__item--page");
let add = document.querySelector(".button__add");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = ()=>{
    if(authorInput.value === "" || nameInput.value === ""){
        console.log('failure');
    } else {
        console.log('success');
        acceptData();
        add.click();
    }
}

let data = [];
let acceptData = () => {
    data.push({
        author: authorInput.value,
        name: nameInput.value,
        genre: genreInput.value,
        page: pageInput.value,
    });
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
}