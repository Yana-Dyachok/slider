const prevButton=document.querySelector('.prev-btn'),
nextButton=document.querySelector('.next-btn'),
sliderLine=document.querySelector('.slider-line');
let offset=0, n=7, width=62.5;

function clickButtons() {
    nextButton.addEventListener('click',()=>{
        (offset<(n-1)*width)?offset+=width:offset=(n-1)*width;
        sliderLine.style.left=-offset+'rem';
    //nextButton.disabled=(offset===(n-1)*width&&prevButton.disabled===false)?true:false;
    })
   
    prevButton.addEventListener('click',()=>{
        (offset>0)?offset-=width:offset=0;
        sliderLine.style.left=-offset+'rem';
       // prevButton.disabled=(offset===0)?true:false;
    })
}
clickButtons()