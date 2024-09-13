
    document.addEventListener("DOMContentLoaded", (event) => {
        var data={
            type: "carousel",
            perView: 5,
            autoplay: 500,
            animationDuration: 3000,
            animationTimingFunc: 'linear',
            focusAt: 'center'
        }

        new Glide('.glideTop',data).mount()
        new Glide('.glideBottom',data).mount()

      });
