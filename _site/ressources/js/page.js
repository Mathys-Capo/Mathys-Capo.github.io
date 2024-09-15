window.addEventListener('scroll', function() {
    var scrolledY = window.scrollY;
    var scrollbar = document.getElementById('scrollbar');
    var accueil_projets = document.getElementById('content_accueil');
    let coef=1.3

    let opacity = 1-(scrolledY/1000)
    accueil_projets.style.opacity = opacity

    scrollbar.style.transform = 'translateY(' +  window.scrollY*0.8  + 'px)';
    if(scrolledY<=450){
        accueil_projets.style.transform = 'translateY(' + scrolledY*2.2  + 'px)';
        
    }

  });
