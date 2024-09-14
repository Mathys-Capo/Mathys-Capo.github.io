const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;


let var_translateY=20;
let var_translateX=20;
let var_delay=50;
anime({
    targets: '#wave1',
    translateY: var_translateY,
    translateX: var_translateX,
    direction: 'alternate',
    loop: true,
    easing: 'linear'
  });
  anime({
    targets: '#wave2',
    translateY: var_translateY,
    translateX: var_translateX,
    direction: 'alternate',
    loop: true,
    easing: 'linear',
    delay: var_delay
  });
  anime({
    targets: '#wave3',
    translateY: var_translateY,
    translateX: var_translateX,
    direction: 'alternate',
    loop: true,
    easing: 'linear',
    delay: var_delay*2
  });
  anime({
    targets: '#wave4',
    translateY: var_translateY,
    translateX: var_translateX,
    direction: 'alternate',
    loop: true,
    easing: 'linear',
    delay: var_delay*3
  });



