const panels= document.querySelectorAll('.panel');
const dots = document.querySelectorAll('.dot');
const heading = document.querySelector('h1');
const colors = ["aqua","mediumaquamarine","skyblue","deepskyblue"];
let currentColor = 0;
const selectedIdx = 0;
console.log(panels);
console.log(heading)

panels.forEach((panel,index)=>{
    panel.addEventListener('click',()=>{
        addActiveClasses(panel,dots[index]);
    })
})

dots.forEach((dot,index)=>{
    dot.addEventListener('click',()=>{
        addActiveClasses(panels[index],dot);
    })
})

function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
    dots.forEach(dot=>{
        dot.classList.remove('active');
    })
}

function addActiveClasses(panel,dot){
    removeActiveClasses();
    panel.classList.add('active');
    dot.classList.add('active');
}

function changeColor(){
    --currentColor;
    if (currentColor < 0) currentColor = colors.length -1
    for(let i = 0;i<colors.length;i++){
        heading.style.color = colors[(currentColor +i) % colors.length]
    }
}

setInterval(changeColor,200);





