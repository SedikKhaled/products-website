
let slide=[...document.querySelectorAll("#sl")]

let next=[...document.querySelectorAll("#n")]

let behind=[...document.querySelectorAll("#p")]

slide.forEach((item,i)=>{
    let get=item.getBoundingClientRect()
    let width=get.width

    next[i].addEventListener("click",()=>{
        item.scrollLeft+=width
    })

    behind[i].addEventListener("click",()=>{
        item.scrollLeft-=width
    })
})

console.log(slide)

console.log("hello")

let heart=document.querySelectorAll(".he")


heart.forEach((item,i)=>{
    heart[i].addEventListener("click",()=>{
        item.style.color="rgba(236, 72, 12, 0.856)"
    })
    
})


