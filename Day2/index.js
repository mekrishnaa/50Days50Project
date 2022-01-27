const circles = document.querySelectorAll('.circle');
const line = document.querySelector('.progress');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev')
var activeCircle  = 1;

function next() {
    activeCircle++;
    if(activeCircle>=circles.length)
        activeCircle=circles.length;
    updateDom();
}

function prev(){
    activeCircle--;
    if(activeCircle<=1)
        activeCircle= 1;
    updateDom();
}

function updateDom(){
    circles.forEach((circle,index)=>{
        if(index < activeCircle)
            circle.classList.add('active');
        else    
            circle.classList.remove('active');
    });
    if(activeCircle===1){
        prevBtn.disabled = true;
    }
    else if(activeCircle===circles.length){
        nextBtn.disabled = true;
    }
    else{
        prevBtn.disabled=false;
        nextBtn.disabled = false;
    }
    line.style.width = ((activeCircle-1)/(circles.length-1))*100 + '%';
}


// function prev() {
//     nextBtn.disabled = false;
//     currentLineWidth-=33;
//     line.style.width =currentLineWidth+'%'
//     currentCircleCount-=1;
//     circle[currentCircleCount].classList.remove('active');
//     if(currentLineWidth<30){
//         prevBtn.disabled = true;
//     }

// }
// function next() {
//     prevBtn.disabled = false;
//     currentLineWidth+=33;
//     line.style.width = currentLineWidth+"%";
//     circle[currentCircleCount].classList.add('active');
//     currentCircleCount+=1;
//     if(currentLineWidth>66){
//         nextBtn.disabled = true;
//     }
// }