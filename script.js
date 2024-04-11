document.querySelectorAll(".elem")
.forEach(function(elem){
  var rotate = 0;
  var diffrot = 0;
    
    
    elem.addEventListener("mouseleave", function(details){
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            ease: Power3,
            duration: 1,
         })
    })
    elem.addEventListener("mousemove", function(details){
        var diff = details.clientY - elem.getBoundingClientRect().top;
        diffrot = details.clientX - rotate;
        rotate = details.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power1,
            top: diff ,
            left: details.clientX ,
            rotate: gsap.utils.clamp(-20,20, diffrot * 0.8),
         })
    })
});



