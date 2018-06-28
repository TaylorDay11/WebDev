/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "Menu") {
        x.className += " responsive";
    } else {
        x.className = "Menu";
    }

    var y = document.getElementById("section");
    if (y.className === "sectionheader") {
        y.className += " responsive";
    } else {
        y.className = "sectionheader";
    }
}