var projectRows = document.getElementsByClassName("projects-list");
var output = "";

function init(){
    addProject("Php Account System",
    "https://github.com/Victor0596647/account-system-website/",
    "projects/img/php-account-system.png",
    "I made a php application where you create an account, login, and remove the account. This isn't really interesting since it was for practice.");
    addProject("Catch The Block",
    "https://github.com/Victor0596647/CatchTheBlock",
    "projects/img/catchtheblock.png",
    "I made a game where the player has to move their mouse to the falling block to catch it. This was made using C++ and SFML.");
    addProject("Market Tycoon",
    "https://github.com/Victor0596647/PyShopTycoon",
    "projects/img/markettycoon.png",
    "I made a text-based Market Tycoon game in python which will allow you to own a store and sell items. (Under Development)");
    // addProject("Textia RPG",
    // "https://github.com/Victor0596647/Textia-RPG",
    // "/projects/img/textiarpg.png",
    // "I made a text-based RPG with C++. (Development Discontinued)");
}

function addProject(title,link,img,desc){
    output += "<div class='project'>";
    output += "<h2> "+ title +" </h2>";
    output += "<a href='" + link + "' target='_blank'><img src='" + img + "' alt='project-img'></a>";
    output += "<p>"+ desc +"</p>";
    output += "</div>";
    projectRows[0].innerHTML = output;
}