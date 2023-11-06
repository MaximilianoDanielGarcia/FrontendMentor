const menuMobile = document.getElementsByClassName('header-nav-mobile-ul')[0];
const hamburgerButton = document.getElementById('icon-hamburger');
const closeButton = document.getElementById('icon-close');


hamburgerButton.addEventListener('click', () => {

    hamburgerButton.classList.add('hide');
    closeButton.classList.remove('hide');

    menuMobile.classList.remove('hide');
});

closeButton.addEventListener('click', () => {

    closeButton.classList.add('hide');
    hamburgerButton.classList.remove('hide');
    menuMobile.classList.add('hide');
});

const headerMenuItems = document.getElementsByClassName('header-menuitem');

for (let index = 0; index < headerMenuItems.length; index++) {
    const menuItem = headerMenuItems[index];

    menuItem.addEventListener('mouseover', (e) => {
        
        removeClassShowOfDropdowns();

        const menu = e.currentTarget.querySelector('.header-submenu');
        
        menu.classList.add("show");
    })
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.parentElement.matches('.header-menuitem')) {
        removeClassShowOfDropdowns();
    }
}

function removeClassShowOfDropdowns() {
    var dropdowns = document.getElementsByClassName("header-submenu");
      
    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
}

//ACCORDION MOBILE MENU

const acc = document.getElementsByClassName("accordion");
const paddingBottom = 14;

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
    
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
           
            for (let index = 0; index < acc.length; index++) {
           
                let accordion = acc[index];
                let panelNext = accordion.nextElementSibling;

                accordion.classList.remove("active");
                panelNext.style.maxHeight = null;   
            }

            this.classList.add("active");
            panel.style.maxHeight = panel.scrollHeight + paddingBottom + "px";
        }
    });
}