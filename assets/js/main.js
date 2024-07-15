/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
        })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}



/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

/*=============== SHADOW HEADER ===============*/

const shadowheader = ()=>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowheader)


/*=============== EMAIL JS ===============*/
// Get the form and message elements
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');


const sendEmail = (e) => {
  e.preventDefault(); 

  // Send the form using emailjs
  emailjs.sendForm('service_pwrkeee', 'template_083ev1l', '#contact-form', 'z3QvG2YEeZq7nOcUG')
    .then(() => {
 
      contactMessage.textContent = 'Message sent successfully ✅';

      setTimeout(() => {
        contactMessage.textContent = '';
      }, 5000);

      contactForm.reset();
    })
    .catch(() => {
      // Display error message
      contactMessage.textContent = 'Message not sent ❌';

      // Clear the message after 5 seconds
      setTimeout(() => {
        contactMessage.textContent = '';
      }, 5000);
    });
};

// Attach the sendEmail function to the form's submit event
contactForm.addEventListener('submit', sendEmail);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up');
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 
const themebutton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const gerCurrentIcon = () =>document.body.classList.contains(iconTheme) ?'ri-moon-line' : 'ri-sun-line';

if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themebutton.classList[selectedIcon === 'ri-moon-line' ? 'add':  'remove'](iconTheme);

}

themebutton.addEventListener('click',()=>{
  document.body.classList.toggle(darkTheme);
  themebutton.classList.toggle(iconTheme);

  localStorage.setItem('selected-theme',getCurrentTheme());
  localStorage.setItem('selected-icon',gerCurrentIcon());
})




/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
  reset:true,
});

sr.reveal('.home__perfil,.about__image,.contact__mail',{origin:'right'});
sr.reveal('.home__name,.home__info,.contact__data',{origin:'left'});

sr.reveal('.about__container,.section__title-1',{origin:'left'});
sr.reveal('.timeline,.projects__card',{interval:100})