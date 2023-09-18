const nextEl =  document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const ImageContainerEl = document.querySelector(".image-container");
const ImageEl = document.querySelectorAll("img")
let currentImg = 1;



 
nextEl.addEventListener("click", ()=>{
    clearTimeout(timeOut);
    currentImg++
    updateImg();
})

prevEl.addEventListener("click", ()=>{
    clearTimeout(timeOut);
    currentImg--
    updateImg();
})
updateImg();

function updateImg(){
    if(currentImg > ImageEl.length){
        currentImg = 1;
    }else if(currentImg < 1){
        currentImg = ImageEl.length;
    }
    ImageContainerEl.style.transform = `translateX(-${(currentImg - 1) *500}px)` 

    timeOut = setTimeout(() =>{
        currentImg++
        updateImg()
    }, 3000)

}
