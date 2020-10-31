/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function() {
    let firsth2 = document.getElementsByClassName("overview-hero-text")[0].id = "h21";

    document.getElementsByTagName("img")[0].height = 250;
    document.getElementsByTagName("img")[0].width = 300;
    document.getElementsByTagName("img")[1].height = 150;
    document.getElementsByTagName("img")[1].width = 200;
    document.getElementsByTagName("img")[2].height = 150;
    document.getElementsByTagName("img")[2].width = 200;
    document.getElementsByTagName("img")[3].height = 150;
    document.getElementsByTagName("img")[3].width = 200;




    /* document.getElementsByClassName("btn")[1].onclick = function() { myFunction() };

    function myFunction() {

        var x = document.getElementById("email").value
        if (x.length == 0) {
            document.getElementsByClassName("message")[0].innerHTML = "Please enter a valid email address"
        } else {
            document.getElementsByClassName("message")[0].innerHTML = "Thank You! Your email address" + x + "has been added to our mailing list!";
        }
    } */

    var form = document.getElementsByTagName('form')[0];
    form.onsubmit = "myFunction(); return false"

    form.onsubmit = function() { myFucntion() }

    function myFucntion() {
        var x = document.getElementById("email").value
        if (x.length == 0) {
            document.getElementsByClassName("message")[0].innerHTML = "Please enter a valid email address"
        } else {
            document.getElementsByClassName("message")[0].innerHTML = "Thank You! Your email address" + x + "has been added to our mailing list!";
        }
    }
});