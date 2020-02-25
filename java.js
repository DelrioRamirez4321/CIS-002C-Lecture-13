function buttonClick() {
    alert("Button Was Clicked");
};

let button = document.querySelector("button");
button.addEventListener("click", buttonClick);
button.removeEventListener("click", buttonClick);

let link = document.querySelector("a");
link.addEventListener("click", event => {
    alert("You Are DOOM");
    event.preventDefault();
});