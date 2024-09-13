/*
var content_accueil = document.getElementById('content_accueil');
var content_accueil_parallaxInstance = new Parallax(content_accueil,{
    invertY: false,
    relativeInput:true,
    scalarY:100
});

var accueil_projets = document.getElementById('accueil_projets');
var accueil_projets_parallaxInstance = new Parallax(accueil_projets,{

});
*/
let var_translateY=35;
let var_delay=80;
anime({
    targets: '#wave1',
    translateY: var_translateY,
    direction: 'alternate',
    loop: true,
    easing: 'linear'
  });
  anime({
    targets: '#wave2',
    translateY: var_translateY,
    direction: 'alternate',
    loop: true,
    easing: 'linear',
    delay: var_delay
  });
  anime({
    targets: '#wave3',
    translateY: var_translateY,
    direction: 'alternate',
    loop: true,
    easing: 'linear',
    delay: var_delay*2
  });
  anime({
    targets: '#wave4',
    translateY: var_translateY,
    direction: 'alternate',
    loop: true,
    easing: 'linear',
    delay: var_delay*3
  });
  
  
  
  

window.addEventListener('scroll', function() {
    var scrolledY = window.scrollY;
    var content_accueil = document.getElementById('content_accueil');
    var accueil_projets = document.getElementById('content_accueil');
    console.log(scrolledY)

    if(scrolledY<1200){
        accueil_projets.style.transform = 'translateY(' + scrolledY*2  + 'px)';
        accueil_projets.style.opacity = 1-(scrolledY/600)
        content_accueil.style.visibility = 'visible' 
    }
    else{
        content_accueil.style.visibility = 'hidden'
    }

    if (scrolledY > 1200) {
        window.scrollTo(0, 1200);
    }
  });