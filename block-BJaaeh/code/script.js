{/* <h2 class="day">day</h2>
    <h3 class="month">month</h3>
    <h3 class="year">year</h3>
    <h3 class="time">time</h3>
    <h4 class="msec">msec</h4> */}
    
function currentTime(){
    const now = new Date();
    let hour = document.querySelector(".hour");
    let getHours = now.getHours();
    hour.textContent = updateTime(getHours);
    let min = document.querySelector(".min");
    let getMin = now.getMinutes();
    hour.textContent = updateTime(getHours);
    min.textContent =updateTime(getMin);
    let sec = document.querySelector(".sec");
    sec.textContent = now.getSeconds();
    setTimeout(function(){ currentTime() }, 1000); 
}
currentTime();
function updateTime(format) {
    if (format < 10) {
      return "0" + format;
    }
    else {
      return format;
    }
}
