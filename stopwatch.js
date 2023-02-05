
    var buttonStart=document.getElementById('start')
    var buttonStop=document.getElementById('stop')
    var buttonReset=document.getElementById('reset')
    var seconds=0;
    var interval;
    var hrs=document.getElementById('hr')
    var mins=document.getElementById('min')
    var secs=document.getElementById('sec')
    //var timeElements=document.querySelector('.div1,.timer1');
     //
     buttonStart.addEventListener('click',start)
     buttonStop.addEventListener('click',stop)
     buttonReset.addEventListener('click',reset)

     //
     function timer(){
        seconds++; 
         hrs=Math.floor(seconds/3600);
         mins=Math.floor((seconds-(hrs*3600))/60);
         secs=seconds%60;
      //  timeElements.innerText=`${hrs}:${mins}:${secs}`
    if(secs<10){secs='0'+secs};
    if(mins<10){mins='0'+mins};
    if(hrs<10){hrs='0'+hrs};
    
    }
    function start(){
        interval=setInterval(timer,1000);
        if(interval){
            return
        }
    }
    function stop(){
        clearInterval(interval)
    }
    function reset(){
        stop();
        seconds=0;
        

      //  timeElements.innerHTML='00:00:00';

    }
       
