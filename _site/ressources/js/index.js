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
  
  
  
window.addEventListener('scroll', function() {
    var scrolledY = window.scrollY;
    var content_accueil = document.getElementById('content_accueil');
    var accueil_projets = document.getElementById('content_accueil');
    let coef=1.2
    if(scrolledY<screenHeight*coef){
        accueil_projets.style.transform = 'translateY(' + scrolledY*2  + 'px)';
        accueil_projets.style.opacity = 1-(scrolledY/600)
        content_accueil.style.visibility = 'visible' 
    }
    else{
        content_accueil.style.visibility = 'hidden'
    }
 
    if (scrolledY > screenHeight*coef) {
        window.scrollTo(0, screenHeight*coef);
    }
  });