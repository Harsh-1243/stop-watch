let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let seconds = document.querySelector(".seconds");
let mili_seconds = document.querySelector(".mili-seconds");

let reset_btn = document.querySelector(".reset");
let stop_btn = document.querySelector(".stop");
let start_btn = document.querySelector(".start");

let ml = 0;
let sec = 0;
let min = 0;
let hr = 0;

let interval;


function count() {

    ml++;

    if (ml < 10) {

        mili_seconds.innerHTML = "0" + ml;
        
    }

    if(ml > 9){

        if(ml === 100){

            sec++;

            seconds.innerHTML = "0" + sec;
            
            ml = 0;

            mili_seconds.innerHTML = "00";

        }
        else{

            mili_seconds.innerHTML = ml;
        }

    }

    if(sec < 10){

        seconds.innerHTML = "0" + sec;

    }

    if(sec > 9){

        if (sec === 60) {

            min++;

            minute.innerHTML = "0" + min;

            sec = 0;

            seconds.innerHTML = "00";
            
        }

        else{
            
            seconds.innerHTML = sec;
        }
    }   


    if(min < 10){

        minute.innerHTML = "0" + min;

    }

    if (min > 9) {

        if (min === 60) {

            hr++;

            hour.innerHTML = "0" + hr;

            min = 0;

            minute.innerHTML = "00";

        }

        else{

            minute.innerHTML = min;
        }

    }
    
    if (hr < 10) {
        
        hour.innerHTML = "0" + hr;
    }

    if (hr > 9) {

        hour.innerHTML = hr;
        
    }

}

start_btn.addEventListener("click",()=>{

    clearInterval(interval);
    interval = setInterval(count,10);

    

});

reset_btn.addEventListener("click",()=>{

    clearInterval(interval);

    ml = 0;
    sec = 0;
    min = 0;
    hr = 0;

    hour.innerHTML = "00";
    minute.innerHTML = "00";
    seconds.innerHTML = "00";
    mili_seconds.innerHTML = "00";


});

stop_btn.addEventListener("click",()=>{

   clearInterval(interval);

  
});