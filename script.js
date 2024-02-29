const  storeOpening = new Date('march 26, 2024 00:00:00');

setCountdown(storeOpening); //calls setCountdown only once

//call setCountdown every second:
setInterval(function() {
  setCountdown(storeOpening); 
},1000);



function setCountdown(countingdownTime) {

  let now = new Date();

  let timerRemaining =  countingdownTime - now;  
  
  console.log(timerRemaining); // time remaing for countdown that is left in milliseconds

  // now to convert this to time remaining in regular units
  
  //days
  let days = Math.floor(timerRemaining / (1000*60*60*24));

  //hours
  let hours = Math.floor(timerRemaining / (1000*60*60));

  //minutes
  let minutes = Math.floor(timerRemaining / (1000*60));

  // seconds
  let seconds = Math.floor(timerRemaining / 1000);
  
  console.log(days, hours, minutes, seconds); // absolute time left in each unit(like seconds,minutes etc.)

  //now for u to get the exact units of time, day, hour and seconds, you subract the bigger units from the smaller units

  let daystoDisplay = days;

  //subtract 24 hours for every day remaining from the hour count
  let hourstoDisplay =  hours - (days * 24);
  //sutract 60 minutes for every hour from the minute count
  let minutestoDisplay = minutes - (hours * 60);
  //subtract 60 seconds for every minute remaining from the seconds count
  let secondstoDisplay = seconds - (minutes * 60);

  console.log(daystoDisplay, hourstoDisplay, minutestoDisplay, secondstoDisplay);
  //countdown now in displayable format

  //print to DOM
  const daysEl = document.getElementById('days')
  const hoursEl = document.getElementById('hours');
  const minutesEL = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  daysEl.textContent = daystoDisplay;
  hoursEl.textContent = hourstoDisplay;
  minutesEL.textContent = minutestoDisplay;
  secondsEl.textContent = secondstoDisplay;
}
