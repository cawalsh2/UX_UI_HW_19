document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll('.nav-list li');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            const section = document.getElementById(tabName);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

//Scroll Back to the top button//

let mybutton = document.getElementById("myBtn");
window.onscroll= function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; //safari//
    document.documentElement.scrollTop = 0; //chrome//
}