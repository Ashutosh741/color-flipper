let arr = [  "#000000" ,"#0000FF" ,"#8A2BE2", "#A52A2A" ,"#7FFF00", "#FF1493" ,"#4B0082" ,"#FF0000" ,"#FFFF00"]
let index=0;
let cham = document.querySelector(".chameleon");
let colorChange = document.querySelector(".text")
let buttons = document.querySelector("#color-flipper");
buttons.addEventListener("click", function onClick(){
    console.log(arr[index]);
    cham.innerHTML=arr[index];
 
    document.body.style.backgroundColor = arr[index];
    index=(index+1)%arr.length;
})














const handleHover = function(e,opacity){
    if (e.target.classList.contains('nav__link')){
      const link =e.target;
      const siblings =link.closest('.nav').querySelectorAll('.nav__link');
      const logo =link.closest('.nav').querySelector('img');
      siblings.forEach(el=>{
        if (el !==link)el.style.opacity =this;
      });
      logo.style.opacity=this;
  
    }
  }