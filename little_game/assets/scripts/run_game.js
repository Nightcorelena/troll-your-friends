let page1 = document.getElementById("start_screen");
let page2 = document.getElementById("option_screen");
let page3 = document.getElementById("game_screen");
document.getElementById("music").src = "https://www.youtube.com/embed/LqVXs4enyG4?&autoplay=1&loop=1";

document.getElementById("start").addEventListener("click", function() {
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "block";
    document.getElementById("music").src = "";
    setTimeout(function() {
       document.getElementById("video").muted = !document.getElementById("video").muted;
    }, 600)
})
document.getElementById("option").addEventListener("click", function() {
   page1.style.display = "none";
   page2.style.display = "block";
   page3.style.display = "none";
})
document.getElementById("close").addEventListener("click", function() {

})

document.getElementById("close_option").addEventListener("click", function() {
    page1.style.display = "Block";
    page2.style.display = "none";
    page3.style.display = "none";
})