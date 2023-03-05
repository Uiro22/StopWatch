const timeElement = document.getElementById('StopWatch');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let timerId;
let elapsedMs = 0;


function timeToString(millis){
  
      const ms = (millis % 1000) % 60; //経過ミリ秒
      const s = Math.floor(millis / 1000) % 60; //経過秒数
      const m =  Math.floor(millis / 1000 / 60) % 60;//経過分数
      const h = Math.floor(millis / 1000 / 60 / 60);
      
      const msStr = ms.toString().padStart(2, '0');
      const sStr = s.toString().padStart(2, '0');
      const mStr = m.toString().padStart(2, '0');
      const hStr = h.toString().padStart(2, '0');
      
      return `${hStr}:${mStr}:${sStr}:${msStr}`;
    }

start.addEventListener('click', () => {
   
    let startMs =Date.now();
    startMs -= elapsedMs;
    
    timerId = setInterval(() => {
      const nowMs = Date.now();
      elapsedMs = nowMs - startMs;
      
      timeElement.textContent = timeToString(elapsedMs);
      
      start.disabled = true;
      stop.disabled = false;
      reset.disabled = false;
    }, 10);
});


stop.addEventListener('click', function(e) {
    clearInterval(timerId);
    
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
});

reset.addEventListener('click', function(e) {
    clearInterval(timerId);
    elapsedMs = 0;
    StopWatch.textContent = '00:00:00:00';
    
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
});
