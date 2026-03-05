const box = document.querySelector(".cookie-list");

document.querySelector(".left").onclick = () => {
    console.log("jdkahdka");
    box.scrollBy({ left: -300, behavior: "smooth"});
};

document.querySelector(".right").onclick = () => {
    box.scrollBy({ left: 300, behavior: "smooth"});
}