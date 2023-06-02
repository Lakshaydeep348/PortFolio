const hamEl=document.querySelector(".last");
const disEl=document.querySelector(".hamburger")

function noScroll()
{
    window.addEventListener("scroll",()=>{
        window.scrollTo(0,0);
        })
}



hamEl.addEventListener("click",()=>{
     disEl.style.display="flex";
     noScroll();
})





