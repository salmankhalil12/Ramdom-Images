const imgContainer = document.querySelector(".container")

const btnEle = document.querySelector(".btn")

btnEle.addEventListener("click",()=>{
    imgNum= 10;
    addImg()
})

function addImg() {
    for(let index= 0; index < imgNum; index++){

    let imgEle = document.createElement("img");

    imgEle.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*1000)}`;
    imgContainer.appendChild(imgEle)
}
}