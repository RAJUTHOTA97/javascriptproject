
let scrollcontainer=document.querySelector(".gallery")
let backbtn=document.getElementById("backbtn")
let frontbtn=document.getElementById("frontbtn")
let searchbar=document.getElementById("searchbarr")
let srchbtn=document.getElementById("srcbtn")

scrollcontainer.addEventListener("wheel",(evt)=>{

evt.preventDefault()

scrollcontainer.scrollLeft+=evt.deltaY;

});

backbtn.addEventListener("click",()=>{
    scrollcontainer.style.scrollBehavior="soomth"
    scrollcontainer.scrollLeft-=300;
});
frontbtn.addEventListener("click",()=>{
    scrollcontainer.style.scrollBehavior="soomth"
    scrollcontainer.scrollLeft+=300;
});

searchbar.addEventListener("change",(e)=>{
    e.preventDefault()
      
    console.log(e)
      


});

