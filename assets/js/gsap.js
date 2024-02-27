gsap.registerPlugin(ScrollTrigger);

let t1 = gsap.timeline({scale:2});
t1
.from('.banner-img-1',{
    y:1000,
    delay:3,
    duration:2,
})
.to('.banner-img-1',{
    scale:1,
    delay:.1,
    duration:.8,
},'b')
.from('.banner-img-2',{
    x:-100,
    opacity:0,
    duration:.7,
},'b')
.from('.banner-img-3',{
    x:100,
    opacity:0,
    duration:.7,
},'b')
.from('.banner-text',{
    opacity:0,
    y:50,
    duration:2,
},'a')
.from('nav',{
    opacity:0,
    y:50,
    duration:2,
},'a')
.from('.resume-btn',{
    opacity:0,
    y:50,
    duration:2,
},'a')
.from('.highlight',{
    opacity:0,
    y:50,
    duration:2,
},'a')
.from('.highlight-hr',{
    opacity:0,
    y:50,
    duration:2,
},'a')
.from('.video-container',{
    opacity:0,
    y:50,
    duration:2,
},'a')


gsap.from('.text-animation-section',{
    opacity:0,
    y:50,
    duration:.8,
    scrollTrigger:{
        trigger:'.section-2',
        start:"top 60%",
        end:"top center"
    } 
})
