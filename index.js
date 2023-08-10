const prevButton=document.querySelector('.prev-btn'),
nextButton=document.querySelector('.next-btn'),
sliderLine=document.querySelector('.slider-line');
let offset=0, n=7, width=43.75;
nextButton.addEventListener('click',()=>{
    (offset<n*width)?offset+=width:offset=n*width;
    sliderLine.style.left=-offset+'rem';
})

prevButton.addEventListener('click',()=>{
    (offset>0)?offset-=width:offset=0;
    sliderLine.style.left=-offset+'rem';
})

