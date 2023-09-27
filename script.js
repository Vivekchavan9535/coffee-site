

var tl =gsap.timeline();

tl.from(".navbar h1, .opt",{
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.5,
 
    
    
    
})

tl.from(".right img",{
    x:600,
    duration:1,
    opacity:0,
   
    
})

gsap.from(".left",{
    x:-800,
    delay:2,
    duration:1,
    opacity:0,
   
})

gsap.from(".left2, .right2",{
    opacity:0,
    scale:0,
    duration:1,
    scrollTrigger:{
        trigger:".left2, .right2",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 70%",
    
        scrub:3
    }
})

gsap.from(".left3, .right3",{
    opacity:0,
    scale:0,
    duration:1,
    scrollTrigger:{
        trigger:".left3, .right3",
        scroller:"body",
        scrub:true,
        // markers:true,
        start:"top 100%",
        end:"top 70%",
        scrub:3
    }
})
