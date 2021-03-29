let balloons = document.querySelectorAll('.balloon');
let setBoom = Math.floor((Math.random() * 25) + 1);
let popped = 0;
let timer = 11;
let startBtn = document.getElementById('startBtn')

startBtn.addEventListener('click', function(e){
  setBalloon();
  balloons[setBoom].classList.remove('set-balloon')
  balloons[setBoom].classList.add('boom')
  countDown();
})

document.addEventListener('click', function(e){
  if (e.target.className === 'set-balloon'){
    e.target.style.backgroundColor = '#ededed';
    popped++;
    checkAllPopped();
  } else if (e.target.className === 'boom') {
    result('#boom-found');
    timer = 0
  }
});

function setBalloon() {
  balloons.forEach(function(balloon) {
    balloon.classList.remove('balloon');
    balloon.classList.add('set-balloon');
  })
}

function checkAllPopped(){
  if (popped === 24){
    result('#boom-exploded');
  }
};

function countDown() {
  setInterval(function() {
    if (timer > 0) {
      timer-=1
      startBtn.innerHTML = `Remaining: ${timer} second(s)`;
      checkTimer();
    }
  }, 1000);
};

function checkTimer() {
  if (timer <= 0) {
    result('#boom-exploded');
    startBtn.innerHTML = 'Times up!'
  }
};

function result(outcome) {
  let gallery = document.querySelector('#gallery');
  let message = document.querySelector(outcome);
  gallery.innerHTML = '';
  message.style.display = 'block';
};