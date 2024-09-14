window.addEventListener('scroll', function() {
    var scrolledY = window.scrollY;
    var content_accueil = document.getElementById('content_accueil');
    var accueil_projets = document.getElementById('content_accueil');
    let coef=1.3

    let opacity = 1-(scrolledY/1000)
    accueil_projets.style.opacity = opacity
    if(scrolledY<=370){
        accueil_projets.style.transform = 'translateY(' + scrolledY*2  + 'px)';
    }

  });
