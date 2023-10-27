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
