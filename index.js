const prevButton=document.querySelector('.prev-btn'),
nextButton=document.querySelector('.next-btn'),
sliderLine=document.querySelector('.slider-line');
let offset=0, n=7, width=62.5;
nextButton.addEventListener('click',()=>{
    (offset<(n-1)*width)?offset+=width:offset=(n-1)*width;
    sliderLine.style.left=-offset+'rem';
})

prevButton.addEventListener('click',()=>{
    (offset>0)?offset-=width:offset=0;
    sliderLine.style.left=-offset+'rem';
})