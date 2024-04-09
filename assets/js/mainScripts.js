// DATE
function updateDate() {
  let todayDate = new Date();
  const todayMonth = new Date();
  // Getting full month name (e.g. "September")
  const month = todayMonth.toLocaleString('default', { month: 'long' });

  // return number
  let year = todayDate.getFullYear();
  document.getElementById("year").innerHTML = (month,', ', year);
  document.getElementById("year1").innerHTML =  (month,', ', year);
}
updateDate();
// OFFCANVAS
(() => {
  'use strict'

  let navbarToggler = document.querySelectorAll('.navbar-toggler');
  for (let i = 0; i< navbarToggler.length; i++){
    navbarToggler[i].addEventListener("click",function(){
      document.querySelector('.offcanvas-collapse').classList.toggle('open');
      document.querySelector('html').classList.toggle('overflowHidden');
      document.querySelector('body').classList.toggle('overflowHidden');
    })
  }

  /* VIEW JOBS */
  let viewJob = document.querySelectorAll('.viewJob');
  let btnClose = document.querySelectorAll('.btn-close');
  for (let j = 0; j< viewJob.length; j++){
    viewJob[j].addEventListener("click",function(){
    document.querySelector('html').classList.toggle('overflowHidden');
    document.querySelector('body').classList.toggle('overflowHidden');
    })
  }
  for (let k = 0; k< btnClose.length; k++){
    btnClose[k].addEventListener("click",function(){
    document.querySelector('html').classList.toggle('overflowHidden');
    document.querySelector('body').classList.toggle('overflowHidden');
    })
  }
})()

// OBSERVER
const navBar = document.querySelector("#navBar");
const sectionOne = document.querySelector("#myCarousel");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      navBar.classList.add("nav-scrolled");
    } else {
      navBar.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
