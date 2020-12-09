const navbar = document.getElementById("navbar");/*  gets navbar using ID */
const navbarToggle = navbar.querySelector(".navbar-toggle"); 

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-label", "Close navigation menu.");
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-label", "Open navigation menu.");
} /* We apply a different aria-label depending on the current state of the button.
If the navigation menu is open, the user’s screen reader will indicate that clicking the button again 
will close the menu. And vice versa. */

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});
/* when we click on it, it either opens or closes */

const navbarMenu = navbar.querySelector(".navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);
/* this lets the user close the navigation menu when they click 
on .navbar-menu. But we need to stop click propagation so that any clicks 
on .navbar-links don’t bubble up and trigger a close. */
/* -------------------*/

const games = document.querySelector('.games'); /*create constant games*/
const panels = document.querySelectorAll('.panel'); /* create constant panels */
games.addEventListener('click', function(e){ 
  if(e.target.tagName == "LI"){   /*check if we choose li tag*/
    const targetPanel = document.querySelector(e.target.dataset.target); /* create constant targetPanel */
    panels.forEach(function(panel){
      if (panel == targetPanel){   /* check if panel equals target panel and if yes then add active property to tag and not we remove it */
        panel.classList.add('active'); /* we now just add active parameter to class panel */
      } else {
        panel.classList.remove('active');
      }
    })
  }
})

