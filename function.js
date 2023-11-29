/*

function toggleStyleSheet(){

    var styleElement = document.getElementById("mainStyleSheet");


    var fileName = styleElement.getAttribute("href");

    var newFileName = "dark.css"



}
*/


function change_theme(){
    page_style = localStorage.getItem("page_stylesheet_name");
    
    if (page_style === "style.css"){
        dark_mode();
    } else{
        light_mode();
    }

}





function load_style()
{
    page_style = localStorage.getItem("page_stylesheet_name");
    marqueeTheme = localStorage.getItem("marqueeThemeName");
    iconID = localStorage.getItem("iconTheme");

    if (page_style === null)
    {
     page_style = "style.css";
     marqueeTheme = "https://media.moddb.com/images/games/1/63/62622/Rocket_Ship_moving_1.gif";
     iconID ="https://www.iconpacks.net/icons/2/free-rocket-icon-3432-thumb.png";
    }
    document.getElementById('page_style').setAttribute("href", page_style);
    document.getElementById('iconID').setAttribute("href", iconID);
    document.getElementById('marqueeTheme').setAttribute("src", marqueeTheme);
   
   
}
function light_mode()
{
    localStorage.setItem("page_stylesheet_name", "style.css");
    localStorage.setItem("marqueeThemeName", "https://media.moddb.com/images/games/1/63/62622/Rocket_Ship_moving_1.gif");
    localStorage.setItem("iconTheme", "https://www.iconpacks.net/icons/2/free-rocket-icon-3432-thumb.png");
    load_style();
}   
function dark_mode()
{
    localStorage.setItem("page_stylesheet_name", "dark.css");
    localStorage.setItem("marqueeThemeName", "https://static.myfigurecollection.net/upload/pictures/2023/02/16/3467542.gif");
    localStorage.setItem("iconTheme", "https://cdn-icons-png.flaticon.com/512/2622/2622150.png");
  
    load_style();
}
// load style on window reload
window.onload = function(){
    load_style();
}
 
