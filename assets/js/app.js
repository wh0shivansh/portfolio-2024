// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.wrapper'),
//     smooth: true
// });
function swiper(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 50,
  });
}
swiper();

const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const hamDivOne = document.getElementById('ham-div-1');
const hamDivTwo = document.getElementById('ham-div-2');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('top-open');
    hamDivTwo.classList.toggle('rotate-45');
    hamDivOne.classList.toggle('rotate-45-neg');
})

const slides = document.getElementById('slides');
const lh = document.querySelectorAll('.lh');
lh.forEach((i,index)=>{
  i.addEventListener('click',()=>{
    lh.forEach((x,y)=>{x.classList.remove('design')});
    i.classList.add('design');
  })
})

let loading=document.querySelector(".loading-page");
let h1=loading.querySelector("h2");
function textChange(){
  console.log('no error')
  setTimeout(function(){
    h1.innerText="CONTENT";
  },1000);
  setTimeout(function(){
    h1.innerText="ENVIRONMENT";
  },2000)
}
textChange();
setTimeout(function(){
  loading.style.top="-100%"
},3000)
