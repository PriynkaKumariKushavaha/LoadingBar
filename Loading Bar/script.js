
const counterEl=document.querySelector('.counter');
const barEl=document.querySelector('.loading-bar-front');

let percentageNum=0;
function upadtePercentage(){
   
        if(percentageNum<=100){
        counterEl.innerText=percentageNum+"%";
        barEl.style.width=percentageNum+"%";
        setTimeout(upadtePercentage,20);
        percentageNum++;
    }
}

upadtePercentage()