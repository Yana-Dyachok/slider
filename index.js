const prevButton=document.querySelector('.prev-btn'),
nextButton=document.querySelector('.next-btn'),
sliderLine=document.querySelector('.slider-line');
let offset=0;
nextButton.addEventListener('click',()=>{
    offset+=43.75;
    sliderLine.style.left=offter+'rem';
})
