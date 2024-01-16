
function updateTime() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourHand = document.getElementById('hours');
    const minuteHand = document.getElementById('minutes');
    const secondHand = document.getElementById('seconds');
    
    const minuteDeg = (minutes + seconds / 60) * 6;
    const hourDeg = (hours % 12 + minutes / 60) * 30;
    const secondDeg = seconds * 6;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
  }
  
  setInterval(updateTime, 1000);
  updateTime();
  