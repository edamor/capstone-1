
let mainBody = document.querySelector('#first');
let contactSection = document.querySelector('#contactUs');

let navPos = document.querySelector('#myNavbar').offsetTop;
let contactPos = document.querySelector('#contactUs').offsetTop;

window.addEventListener('scroll', e => {
   let scroll = window.scrollY;
   let navbar = document.querySelector('#myNavbar');
   let navHeight = parseFloat(window.getComputedStyle(navbar).getPropertyValue('height'));
   
   if (scroll <= navPos) {
      navbar.style.position = 'relative';
      navbar.style.top = '0px';
      mainBody.style.marginTop = '10px';
   } else if (scroll > navPos) {
      navbar.style.width = '100%';
      mainBody.style.position = 'relative';
      mainBody.style.marginTop =  74 + 'px';
      navbar.style.zIndex = '999';
      navbar.style.position = 'fixed';
   }

   if (scroll <= contactPos) {
      navbar.firstElementChild.lastElementChild.firstElementChild.firstElementChild.className = "nav-item active";
      navbar.firstElementChild.lastElementChild.firstElementChild.lastElementChild.className = "nav-item";
   } else if (scroll > contactPos) {
      navbar.firstElementChild.lastElementChild.firstElementChild.firstElementChild.className = "nav-item";
      navbar.firstElementChild.lastElementChild.firstElementChild.lastElementChild.className = "nav-item active";
   }
})




let scrollToFirst = () => {
   mainBody.scrollIntoView({behavior: 'smooth'});
}


let scrollToContact = () => {
   contactSection.scrollIntoView({behavior: 'smooth'})
}