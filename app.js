document.addEventListener('DOMContentLoaded', () =>{
  const squares= document.querySelectorAll('.grid div');
  const scoreDisplay= document.querySelector('span');
  const startBtn = document.querySelector('.start');

  const width=10;
  let currentIndex = 0; //first div in our grid
  let appleIndex = 0; // first div in our grid
  let currentSnake = [2,1,0]; // 2 denotes HEAD of snake, 1 is the body part, and 0 is the TAIL

  let direction =1;
  let score =0;
  let speed = 0.9;
  let intervalTime = 0;
  let interval = 0;

  //Movement of snake on board using keycodes.

  function control(e){
    squares[currentIndex].classList.remove('snake'); // Removing snakes class from all the squares

    if(e.keyCode === 39){
      direction = 1;
    }else if(e.keycode === 38){
      direction = -width;
    }else if(e.keyCode === 37){
      direction = -1;
    }else if(e.keyCode === 40){
      direction = +width;
    }
  }
  document.addEventListener('keyup', control);

});
