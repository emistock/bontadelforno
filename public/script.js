/*
Author: Emily Stockenbojer
Date: 3/4/18
Description: function to make the buttons of the accordion dropdown on click
from https://www.w3schools.com/howto/howto_js_accordion.asp*/

var acc = document.getElementsByClassName("accordion");
var i;

/*for the length of the accordion, bind buttons to change between active or not based
on click, and change the panel display style from block to none (show the inner block or not)*/
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
