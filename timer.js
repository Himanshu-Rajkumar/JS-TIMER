let hours=document.getElementById("hours")
let minutes=document.getElementById("minutes")
let seconds=document.getElementById("seconds")
let Start=document.getElementById("Start")
let Pause=document.getElementById("Pause")
let Reset=document.getElementById("Reset")


let totalsecond;
let id;



function start(){
    
 totalsecond=Number(hours.value)*3600+
Number(minutes.value)*60+Number(seconds.value)

if(totalsecond==0){
   alert("Please Enter the Values")
    
}

id=setInterval(updatetimer,100)

}


function updatetimer(){
    if(totalsecond<=0){
        clearInterval(id);
        alert("Time up")
    }
hours.value=Math.floor(totalsecond/3600)
minutes.value=Math.floor((totalsecond%3600)/60)
seconds.value=((totalsecond%3600)%60)

totalsecond--

}

function pause(){
    clearInterval(id)

}

function reset(){
    clearInterval(id)
    hours.value=0
    minutes.value=0
    seconds.value=0


}